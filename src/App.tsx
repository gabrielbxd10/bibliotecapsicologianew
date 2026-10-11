/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

// Data identical to original site
const modules = [
  ["Fundamentos, autores y corrientes de la Psicología", 28, "Origen, autores y principales corrientes de la Psicología."],
  ["Neuropsicología y bases biológicas de la conducta", 38, "Sistema nervioso, cerebro y bases biológicas de la conducta."],
  ["Cognición, memoria y aprendizaje", 38, "Atención, memoria, aprendizaje y toma de decisiones."],
  ["Psicología del desarrollo humano", 33, "Desarrollo psicológico desde la infancia hasta el envejecimiento."],
  ["Personalidad y diferencias individuales", 28, "Rasgos, temperamento y modelos de personalidad."],
  ["Emoción, motivación y regulación emocional", 33, "Emociones, motivación, estrés y afrontamiento."],
  ["Psicología social y relaciones humanas", 28, "Grupos, comunicación y relaciones humanas."],
  ["Psicopatología: Guía visual", 33, "Conceptos introductorios para comprender la salud mental."],
  ["Evaluación psicológica y Psicometría", 28, "Entrevistas, fiabilidad, validez y medición psicológica."],
  ["Recursos psicoeducativos y reflexión", 38, "Emociones, valores, hábitos y reflexión educativa."],
  ["Investigación, evidencia y metodología", 28, "Hipótesis, variables, estadística y pensamiento científico."]
];

const bonusValues = [12, 10, 9, 10, 9];

const bonuses = [
  ["Diccionario Esencial de Psicología", "Aclara términos y definiciones durante tus estudios."],
  ["15 Grandes Autores de la Psicología", "Descubre sus ideas y aportaciones principales."],
  ["Historia de la Psicología: Guía Rápida", "Conoce los momentos clave de la disciplina."],
  ["10 Experimentos que Marcaron la Psicología", "Revisa sus aportaciones, límites y cuestiones éticas."],
  ["Guía de Lecturas para Estudiantes de Psicología", "Encuentra lecturas para seguir profundizando."]
];

const pains = [
  ["Demasiados archivos, poca organización.", "Encuentra tus conceptos sin revisar decenas de documentos."],
  ["Explicaciones que siguen siendo confusas.", "Consulta los fundamentos con una estructura visual."],
  ["Horas reuniendo materiales.", "Dedica más tiempo a comprender y repasar."],
  ["Necesitas repasar con rapidez.", "Vuelve a consultar lo esencial antes de clase."]
];

const benefits = [
  ["Encuentra conceptos rápidamente.", "Consulta temas organizados en 11 módulos."],
  ["Conecta las distintas áreas.", "Relaciona cerebro, emociones, aprendizaje y conducta."],
  ["Ordena tus sesiones de estudio.", "Sigue una estructura temática clara."],
  ["Repasa cuando lo necesites.", "Revisa conceptos antes de clases y exámenes."],
  ["Lleva tu biblioteca contigo.", "Consulta las guías en dispositivos compatibles."]
];

const audience = [
  ["Estudiantes de Psicología", "Material visual para complementar tus estudios."],
  ["Quienes están comenzando", "Una introducción organizada a los fundamentos."],
  ["Quienes necesitan repasar", "Autores, teorías y conceptos a mano."],
  ["Personas interesadas en Psicología", "Explora la disciplina de forma accesible."],
  ["Quienes aprenden de forma visual", "Explicaciones estructuradas por temas."]
];

const faqs = [
  ["¿Qué incluye la biblioteca?", "Los 11 módulos, las 353 páginas y los 5 bonos digitales, por US$ 9,90."],
  ["¿Recibiré libros físicos?", "No. Todos los materiales son digitales."],
  ["¿Cómo recibo el material?", "Tras confirmar el pago, recibirás las instrucciones de acceso."],
  ["¿Puedo consultarlo desde mi celular?", "Sí, desde celulares, tablets y computadoras compatibles."],
  ["¿Necesito estudiar Psicología?", "No. También puedes usarlo para conocer los fundamentos."],
  ["¿Sustituye mis libros universitarios?", "No. Es material complementario, no reemplaza bibliografía especializada ni formación académica."],
  ["¿Sirve para diagnosticar personas?", "No. Su finalidad es educativa y no habilita para diagnosticar ni intervenir profesionalmente."],
  ["¿Hay mensualidades?", "No. Es un pago único."],
  ["¿Cómo funciona la garantía?", "Tienes 7 días, sujetos a las condiciones de reembolso del checkout."]
];

const sampleGroups = [
  [
    { src: "/assets/sample-m02-p16.jpeg", alt: "Muestra 1 de la biblioteca" },
    { src: "/assets/sample-m02-p11.jpeg", alt: "Muestra 2 de la biblioteca" },
    { src: "/assets/sample-m02-p19.jpeg", alt: "Muestra 3 de la biblioteca" },
    { src: "/assets/sample-m03-p06.jpeg", alt: "Muestra 4 de la biblioteca" },
    { src: "/assets/sample-m03-p24.jpeg", alt: "Muestra 5 de la biblioteca" }
  ],
  [
    { src: "/assets/sample-m06-p14.jpeg", alt: "Muestra 6 de la biblioteca" },
    { src: "/assets/sample-m06-p16.jpeg", alt: "Muestra 7 de la biblioteca" },
    { src: "/assets/sample-m06-p06.jpeg", alt: "Muestra 8 de la biblioteca" },
    { src: "/assets/sample-m10-p06.jpeg", alt: "Muestra 9 de la biblioteca" },
    { src: "/assets/sample-m10-p16.jpeg", alt: "Muestra 10 de la biblioteca" }
  ],
  [
    { src: "/assets/sample-m01-p06.jpeg", alt: "Muestra 11 de la biblioteca" },
    { src: "/assets/sample-m01-p16.jpeg", alt: "Muestra 12 de la biblioteca" },
    { src: "/assets/sample-m01-p19.jpeg", alt: "Muestra 13 de la biblioteca" },
    { src: "/assets/sample-m03-p16.jpeg", alt: "Muestra 14 de la biblioteca" },
    { src: "/assets/sample-m03-p11.jpeg", alt: "Muestra 15 de la biblioteca" }
  ],
  [
    { src: "/assets/sample-m04-p11.jpeg", alt: "Muestra 16 de la biblioteca" },
    { src: "/assets/sample-m04-p21.jpeg", alt: "Muestra 17 de la biblioteca" },
    { src: "/assets/sample-m05-p21.jpeg", alt: "Muestra 18 de la biblioteca" },
    { src: "/assets/sample-m05-p06.jpeg", alt: "Muestra 19 de la biblioteca" },
    { src: "/assets/sample-m05-p08.jpeg", alt: "Muestra 20 de la biblioteca" }
  ],
  [
    { src: "/assets/sample-m07-p21.jpeg", alt: "Muestra 21 de la biblioteca" },
    { src: "/assets/sample-m07-p19.jpeg", alt: "Muestra 22 de la biblioteca" },
    { src: "/assets/sample-m08-p08.jpeg", alt: "Muestra 23 de la biblioteca" },
    { src: "/assets/sample-m09-p11.jpeg", alt: "Muestra 24 de la biblioteca" },
    { src: "/assets/sample-m11-p14.jpeg", alt: "Muestra 25 de la biblioteca" }
  ]
];

const allSamples = sampleGroups.flat();

const infoData: Record<string, [string, string]> = {
  privacy: [
    'Política de Privacidad',
    'Utilizamos Meta Pixel y UTMify para medir visitas, interacciones y atribución de campañas mediante identificadores y cookies. Los parámetros de campaña se transmiten al checkout de Hotmart para atribuir compras. El pago se realiza en Hotmart y se aplica su política de privacidad. No solicitamos datos de pago en esta página.'
  ],
  terms: [
    'Términos de Uso',
    'Oferta de materiales digitales para estudio y consulta educativa. El precio final, la moneda de cobro, las condiciones de acceso y de reembolso deben confirmarse en la página de pago antes de comprar. El material no habilita para diagnóstico ni intervención profesional.'
  ],
  contact: [
    'Contacto',
    'Los datos de contacto del vendedor y el soporte de compra se indican en la página de pago de Hotmart y en la confirmación de tu pedido.'
  ]
};

const CHECKOUT_LINK = "https://pay.hotmart.com/Q107777532N?checkoutMode=10";

export default function App() {
  // Modal states
  const [infoModal, setInfoModal] = useState<{ title: string; copy: string } | null>(null);
  const [sampleIndex, setSampleIndex] = useState<number | null>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Performance: Lazy load heavy offscreen sections to eliminate initial 20MB payload
  const [samplesLoaded, setSamplesLoaded] = useState(false);
  const [bonusesLoaded, setBonusesLoaded] = useState(false);
  const muestrasRef = useRef<HTMLElement | null>(null);
  const bonosRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setSamplesLoaded(true);
      setBonusesLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === muestrasRef.current) {
              setSamplesLoaded(true);
            }
            if (entry.target === bonosRef.current) {
              setBonusesLoaded(true);
            }
          }
        });
      },
      { rootMargin: '350px 0px' }
    );

    if (muestrasRef.current) observer.observe(muestrasRef.current);
    if (bonosRef.current) observer.observe(bonosRef.current);

    return () => observer.disconnect();
  }, []);

  // Scroll function for gallery tracks
  const scrollTrack = (groupIndex: number, direction: number) => {
    const track = trackRefs.current[groupIndex];
    if (track) {
      track.scrollBy({ left: direction * 315, behavior: 'smooth' });
    }
  };

  // Mouse dragging support on gallery tracks
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    trackRefs.current.forEach((track) => {
      if (!track) return;
      let startX = 0;
      let startScroll = 0;
      let active = false;

      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        active = true;
        startX = e.clientX;
        startScroll = track.scrollLeft;
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!active) return;
        const distance = e.clientX - startX;
        if (Math.abs(distance) > 8 && !track.classList.contains('dragging')) {
          try {
            track.setPointerCapture(e.pointerId);
          } catch {}
          track.classList.add('dragging');
        }
        if (track.classList.contains('dragging')) {
          track.scrollLeft = startScroll - distance;
        }
      };

      const onPointerUp = () => {
        active = false;
        track.classList.remove('dragging');
      };

      track.addEventListener('pointerdown', onPointerDown);
      track.addEventListener('pointermove', onPointerMove);
      track.addEventListener('pointerup', onPointerUp);
      track.addEventListener('pointercancel', onPointerUp);
      track.addEventListener('lostpointercapture', onPointerUp);

      cleanups.push(() => {
        track.removeEventListener('pointerdown', onPointerDown);
        track.removeEventListener('pointermove', onPointerMove);
        track.removeEventListener('pointerup', onPointerUp);
        track.removeEventListener('pointercancel', onPointerUp);
        track.removeEventListener('lostpointercapture', onPointerUp);
      });
    });

    return () => {
      cleanups.forEach((c) => c());
    };
  }, []);

  // Keyboard navigation for samples
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sampleIndex !== null) {
        if (e.key === 'ArrowRight') {
          setSampleIndex((prev) => (prev !== null ? (prev + 1) % allSamples.length : null));
        } else if (e.key === 'ArrowLeft') {
          setSampleIndex((prev) => (prev !== null ? (prev - 1 + allSamples.length) % allSamples.length : null));
        } else if (e.key === 'Escape') {
          setSampleIndex(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sampleIndex]);

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout', {
          content_name: 'Biblioteca de Psicología Completa',
          value: 9.90,
          currency: 'USD'
        });
      }
    } catch (err) {
      console.warn('Tracking error:', err);
    }
    setTimeout(() => {
      window.location.href = CHECKOUT_LINK;
    }, 250);
  };

  return (
    <>
      {/* Promo banner */}
      <div className="promo">
        <span>DESCUENTOS SOLO HOY</span>
      </div>

      {/* Header */}
      <header>
        <a className="brand" href="#inicio">
          <span className="psi">Ψ</span> BIBLIOTECA DE PSICOLOGÍA
        </a>
        <nav>
          <a href="#contenido">Contenido</a>
          <a href="#bonos">Bonos</a>
          <a href="#planes">Planes</a>
        </nav>
      </header>

      {/* Main Container */}
      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="eyebrow">BIBLIOTECA DIGITAL · 11 MÓDULOS · 353 PÁGINAS</div>
          <h1>
            <span className="hero-title">Biblioteca de Psicología Completa:</span>{' '}
            <span className="hero-promise">
              organiza tus estudios y <em>comprende lo esencial con más claridad.</em>
            </span>
          </h1>
          <img
            className="mockup"
            src="/assets/mockup-biblioteca-premium.png"
            width={1254}
            height={1254}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            alt="Biblioteca de Psicología Completa con 11 guías digitales, representadas como libros premium en una biblioteca"
          />
          <p className="lead">11 módulos visuales para estudiar, comprender y repasar en un solo lugar.</p>
          <a className="button" href="#planes">
            QUIERO ORGANIZAR MIS ESTUDIOS
          </a>
          <p className="small">Biblioteca completa por US$ 9,90 · Pago único</p>
          <div className="badges">
            <span>✓ Acceso inmediato</span>
            <span>✓ 100 % digital</span>
            <span>✓ Pago único</span>
            <span>✓ Garantía de 7 días*</span>
          </div>
          <p>
            <strong>Menos búsquedas. Más claridad.</strong>
          </p>
        </section>

        {/* Samples Section (Mira por dentro) */}
        <section id="muestras" className="wrap" ref={muestrasRef}>
          <div className="eyebrow">MIRA POR DENTRO</div>
          <h2>Mira el material antes de comprar.</h2>
          <p className="lead">25 muestras reales. Desliza y toca para ampliar.</p>

          <div id="galleries">
            {sampleGroups.map((group, groupIdx) => (
              <div className="gallery" id={`sample-group-${groupIdx + 1}`} key={groupIdx}>
                <div className="gallery-heading">
                  <span className="small">Muestras · 5 imágenes</span>
                  <div className="controls">
                    <button
                      onClick={() => scrollTrack(groupIdx, -1)}
                      aria-label={`Muestras anteriores del carrusel ${groupIdx + 1}`}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => scrollTrack(groupIdx, 1)}
                      aria-label={`Más muestras del carrusel ${groupIdx + 1}`}
                    >
                      ›
                    </button>
                  </div>
                </div>
                <div
                  className="track"
                  tabIndex={0}
                  ref={(el) => {
                    trackRefs.current[groupIdx] = el;
                  }}
                  aria-label={`Carrusel de muestras ${groupIdx + 1}`}
                >
                  {group.map((item, itemIdx) => {
                    const globalIdx = groupIdx * 5 + itemIdx;
                    return (
                      <button
                        key={item.src}
                        className="sample-card"
                        data-sample={globalIdx}
                        aria-label={`Ampliar muestra ${globalIdx + 1}`}
                        onClick={() => setSampleIndex(globalIdx)}
                      >
                        {samplesLoaded ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                            width={1086}
                            height={1448}
                            draggable={false}
                          />
                        ) : (
                          <div
                            style={{
                              width: '100%',
                              aspectRatio: '3/4',
                              background: '#f2eee6',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="small">25 de las 353 páginas. Guías 100 % digitales.</p>
          <a className="button" href="#planes">
            QUIERO ACCEDER A LA BIBLIOTECA
          </a>
        </section>

        {/* Pains Section */}
        <section className="tinted">
          <div className="wrap">
            <div className="eyebrow">¿TE RESULTA FAMILIAR?</div>
            <h2>Estudiar Psicología ya tiene suficientes desafíos.</h2>
            <p className="lead">Deja de perder tiempo entre apuntes y explicaciones dispersas.</p>
            <div id="pains" className="grid two">
              {pains.map(([title, desc], i) => (
                <article className="card" key={i}>
                  <span className="number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <div className="callout">
              <h3>La solución no es acumular más archivos.</h3>
              <p>Encuentra y repasa lo esencial en una biblioteca organizada.</p>
            </div>
          </div>
        </section>

        {/* Content Section (11 modules) */}
        <section id="contenido" className="tinted">
          <div className="wrap">
            <div className="eyebrow">UNA BIBLIOTECA. ONCE GRANDES ÁREAS.</div>
            <h2>11 áreas para una base más clara.</h2>
            <p className="lead">Estudia por temas o consulta un concepto.</p>
            <div className="stats">
              <div>
                <b>11</b>
                <span>módulos temáticos</span>
              </div>
              <div>
                <b>353</b>
                <span>páginas organizadas</span>
              </div>
              <div>
                <b>GUÍA</b>
                <span>formato digital</span>
              </div>
            </div>

            <div id="modules" className="modules">
              {modules.map(([title, pages, desc], i) => (
                <details key={i}>
                  <summary>
                    <span className="module-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="module-title">{title}</span>
                    <span className="pages">{pages} páginas</span>
                  </summary>
                  <p>{desc}</p>
                </details>
              ))}
            </div>

            <a className="button" href="#planes">
              QUIERO MI BIBLIOTECA DE PSICOLOGÍA
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="wrap">
          <div className="eyebrow">HECHA PARA FACILITAR TU APRENDIZAJE</div>
          <h2>
            Encuentra lo que necesitas.
            <br />
            <em>Estudia con más claridad.</em>
          </h2>
          <div id="benefits" className="grid">
            {benefits.map(([title, desc], i) => (
              <article className="card" key={i}>
                <span className="number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Audience Section */}
        <section className="tinted">
          <div className="wrap">
            <div className="eyebrow">¿ESTA BIBLIOTECA ES PARA TI?</div>
            <h2>Para estudiantes y personas interesadas en Psicología.</h2>
            <div id="audience" className="grid">
              {audience.map(([title, desc], i) => (
                <article className="card" key={i}>
                  <span className="number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <p className="small">
              Material educativo complementario. No sustituye bibliografía académica, estudios universitarios, formación profesional ni supervisión clínica.
            </p>
          </div>
        </section>

        {/* Bonuses Section */}
        <section id="bonos" className="wrap" ref={bonosRef}>
          <div className="eyebrow">SOLO EN EL PAQUETE COMPLETO</div>
          <h2>
            Tu biblioteca puede ir más allá.
            <br />
            <em>5 libros digitales adicionales.</em>
          </h2>
          <p className="lead">Amplía tu colección con cinco guías complementarias.</p>

          <div id="bonus-list" className="bonus-list">
            {bonuses.map(([title, desc], i) => (
              <article className="bonus-row" key={i}>
                {bonusesLoaded ? (
                  <img
                    src={`/assets/bonus-premium-${i + 1}.png`}
                    width={1254}
                    height={1254}
                    loading="lazy"
                    decoding="async"
                    alt={`Portada digital: ${title}`}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      background: '#f2eee6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  />
                )}
                <div>
                  <span className="number">BONO {String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="bonus-value">
                    <span>Valor de referencia estimado</span>
                    <s>US$ {bonusValues[i]}</s>
                    <strong>INCLUIDO</strong>
                  </div>
                  <p className="currency-note">
                    Conversión automática a tu moneda local, según disponibilidad en el checkout.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="bonus-value-total">
            <span>Valor de referencia estimado de los 5 bonos</span>
            <s>US$ 50</s>
            <strong>INCLUIDOS EN EL PAQUETE COMPLETO</strong>
          </div>
          <p>
            <strong>Todo en una sola compra, sin mensualidades.</strong>
          </p>
          <p className="small">Los cinco bonos están incluidos. No se envían libros físicos.</p>
        </section>

        {/* Pricing Plan Section */}
        <section id="planes" className="tinted">
          <div className="wrap">
            <div className="eyebrow">TU BIBLIOTECA COMPLETA</div>
            <h2>Invierte en una forma más organizada de estudiar Psicología.</h2>
            <p className="lead">11 módulos y 5 bonos incluidos.</p>

            <div className="pricing">
              <article className="plan featured" id="completo">
                <div className="recommended">★ OPCIÓN DESTACADA · BIBLIOTECA + 5 BONOS</div>
                <div className="eyebrow">PAQUETE COMPLETO</div>
                <h3>Amplía tu colección de estudio</h3>
                <div className="anchor-price">
                  <span>Biblioteca + bonos · Valor de referencia estimado</span>
                  <s>US$ 79</s>
                </div>
                <div className="price">
                  <span>US$</span> 9,90
                </div>
                <p className="small">Pago único · Acceso digital inmediato</p>
                <ul>
                  <li>Los 11 módulos completos</li>
                  <li>Las 353 páginas de Psicología</li>
                  <li>Contenido visual organizado por temas</li>
                  <li>Acceso desde dispositivos compatibles</li>
                  <li>Los 5 bonos digitales adicionales</li>
                </ul>
                <div className="bonus-included">
                  <strong>ADEMÁS, RECIBES:</strong>
                  <ul id="plan-bonuses">
                    {bonuses.map(([title], i) => (
                      <li key={i}>{title}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="button buy checkout-exit"
                  data-plan="Completo"
                  data-price="9.90"
                  data-checkout={CHECKOUT_LINK}
                  href={CHECKOUT_LINK}
                  onClick={handleCheckoutClick}
                >
                  SÍ, QUIERO EL PAQUETE COMPLETO — US$ 9,90
                </a>
                <p className="small">Pago único · Acceso inmediato · Sin mensualidades</p>
                <p className="currency-note">
                  Conversión a tu moneda local según disponibilidad. Confirma el importe en el checkout.
                </p>
              </article>
            </div>

            <p className="small">
              Valores de referencia estimados, no precios anteriores. Acceso, importe y moneda final según el checkout.
            </p>

            <div className="guarantee">
              <img
                className="guarantee-seal"
                src="/assets/garantia.webp"
                width={447}
                height={447}
                alt="Sello de garantía de 7 días"
              />
              <div>
                <div className="eyebrow">COMPRA CON TRANQUILIDAD</div>
                <h3>Garantía de 7 días.</h3>
                <p>Solicita un reembolso en 7 días, según las condiciones del checkout.</p>
                <p className="small">Sin mensualidades. Sin libros físicos. Acceso digital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="wrap faq">
          <div className="eyebrow">PREGUNTAS FRECUENTES</div>
          <h2>Resuelve tus dudas.</h2>
          <div id="faqs">
            {faqs.map(([q, a], i) => (
              <details key={i}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final">
          <div className="wrap">
            <div className="eyebrow">EMPIEZA A ESTUDIAR CON MÁS CLARIDAD</div>
            <h2>
              Menos apuntes dispersos.
              <br />
              Más claridad para estudiar Psicología.
            </h2>
            <p>
              <strong>11 módulos · 353 páginas · Acceso digital</strong>
            </p>
            <a className="button" href="#completo">
              QUIERO MI BIBLIOTECA COMPLETA — US$ 9,90
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <a className="brand" href="#inicio">
          <span className="psi">Ψ</span> BIBLIOTECA DE PSICOLOGÍA
        </a>
        <p>© 2026 Biblioteca de Psicología. Todos los derechos reservados.</p>
        <div className="footer-links">
          <button onClick={() => setInfoModal({ title: infoData.privacy[0], copy: infoData.privacy[1] })}>
            Política de Privacidad
          </button>
          <button onClick={() => setInfoModal({ title: infoData.terms[0], copy: infoData.terms[1] })}>
            Términos de Uso
          </button>
          <button onClick={() => setInfoModal({ title: infoData.contact[0], copy: infoData.contact[1] })}>
            Contacto
          </button>
        </div>
        <p className="small">
          Este producto tiene fines exclusivamente educativos. No sustituye formación universitaria, bibliografía académica, evaluación psicológica, diagnóstico, tratamiento ni supervisión profesional.
        </p>
      </footer>

      {/* Policy Modal Dialog */}
      {infoModal && (
        <dialog id="modal" open style={{ display: 'block' }}>
          <button className="close" aria-label="Cerrar" onClick={() => setInfoModal(null)}>
            ×
          </button>
          <h3 id="modal-title">{infoModal.title}</h3>
          <p id="modal-copy">{infoModal.copy}</p>
          <button className="button close-bottom" onClick={() => setInfoModal(null)}>
            ENTENDIDO
          </button>
        </dialog>
      )}

      {/* Sample Modal Lightbox Dialog */}
      {sampleIndex !== null && (
        <dialog id="sample-modal" className="sample-modal" open style={{ display: 'block' }}>
          <div className="lightbox-top">
            <p id="sample-caption">{`Muestra ${sampleIndex + 1} de ${allSamples.length}`}</p>
            <button className="lightbox-close" aria-label="Cerrar muestra" onClick={() => setSampleIndex(null)}>
              ×
            </button>
          </div>
          <div className="lightbox-body">
            <button
              id="sample-prev"
              aria-label="Muestra anterior"
              onClick={() => setSampleIndex((sampleIndex - 1 + allSamples.length) % allSamples.length)}
            >
              ‹
            </button>
            <img
              id="sample-full"
              src={allSamples[sampleIndex].src}
              alt={`Muestra ${sampleIndex + 1} de la biblioteca`}
            />
            <button
              id="sample-next"
              aria-label="Muestra siguiente"
              onClick={() => setSampleIndex((sampleIndex + 1) % allSamples.length)}
            >
              ›
            </button>
          </div>
          <p className="small lightbox-hint">Desplázate para leer la página · Usa las flechas para cambiar de muestra</p>
        </dialog>
      )}
    </>
  );
}
