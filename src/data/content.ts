export interface ModuleItem {
  id: number;
  title: string;
  pages: number;
  description: string;
  topics: string[];
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  value: number;
  image: string;
}

export interface SampleItem {
  title: string;
  module: number;
  moduleName: string;
  page: number;
  src: string;
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CHECKOUT_URL = "https://pay.hotmart.com/Q107777532N?checkoutMode=10";
export const TICKET_PRICE = 9.90;
export const ORIGINAL_PRICE = 79.00;
export const BONUSES_TOTAL_VALUE = 50.00;

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 1,
    title: "Fundamentos, autores y corrientes de la Psicología",
    pages: 28,
    description: "Origen histórico de la disciplina, principales corrientes (Psicoanálisis, Conductismo, Humanismo, Cognitivismo) y autores esenciales.",
    topics: ["Estructuralismo y Funcionalismo", "Sigmund Freud y el Inconsciente", "Conductismo clásico y operante", "Tercera fuerza: Humanismo"]
  },
  {
    id: 2,
    title: "Neuropsicología y bases biológicas de la conducta",
    pages: 38,
    description: "Estructura del sistema nervioso, anatomía cerebral, neurotransmisores y bases fisiológicas de los procesos conductuales y cognitivos.",
    topics: ["Lóbulos y áreas funcionales", "Sinapsis y neurotransmisores", "Sistema límbico y amígdala", "Plasticidad neuronal"]
  },
  {
    id: 3,
    title: "Cognición, memoria y aprendizaje",
    pages: 38,
    description: "Mecanismos de atención, tipos de memoria (sensorial, corto plazo, largo plazo), modelos de procesamiento de la información y toma de decisiones.",
    topics: ["Modelos de atención sostenida y selectiva", "Memoria episódica y semántica", "Condicionamiento y aprendizaje vicario", "Heurísticos de decisión"]
  },
  {
    id: 4,
    title: "Psicología del desarrollo humano",
    pages: 33,
    description: "Evolución psicológica a lo largo de todo el ciclo vital: infancia, niñez, adolescencia, adultez temprana y senescencia.",
    topics: ["Etapas del desarrollo de Piaget", "Desarrollo psicosocial de Erikson", "Teoría del apego de Bowlby", "Cambios cognitivos en el envejecimiento"]
  },
  {
    id: 5,
    title: "Personalidad y diferencias individuales",
    pages: 28,
    description: "Estructura de la personalidad, temperamento versus carácter, modelos dimensionales contemporáneos (Big Five) y psicodinámicos.",
    topics: ["Modelo de los Cinco Grandes (OCEAN)", "Temperamento biológico vs. Carácter", "Teorías de rasgos de Allport y Cattell", "Diferencias individuales"]
  },
  {
    id: 6,
    title: "Emoción, motivación y regulación emocional",
    pages: 33,
    description: "Teorías de la emoción, funciones de las emociones básicas, modelos de motivación intrínseca/extrínseca y estrategias de afrontamiento del estrés.",
    topics: ["Teorías de James-Lange y Cannon-Bard", "Regulación emocional de Gross", "Motivación intrínseca vs. extrínseca", "Mecanismos de afrontamiento del estrés"]
  },
  {
    id: 7,
    title: "Psicología social y relaciones humanas",
    pages: 28,
    description: "Dinámicas grupales, cognición social, prejuicios, conformidad social, obediencia, roles, persuasión y comunicación interpersonal.",
    topics: ["Influencia y conformidad social (Asch)", "Obediencia a la autoridad (Milgram)", "Teoría de la atribución causal", "Disonancia cognitiva de Festinger"]
  },
  {
    id: 8,
    title: "Psicopatología: Guia visual",
    pages: 33,
    description: "Comprensión visual de los principales cuadros clínicos, criterios orientativos de salud mental y modelos biopsicosociales.",
    topics: ["Trastornos del estado de ánimo y ansiedad", "Modelo biopsicosocial de salud mental", "Psicosis y espectro esquizofrénico", "Patrones clínicos frecuentes"]
  },
  {
    id: 9,
    title: "Evaluación psicológica y Psicometría",
    pages: 28,
    description: "Principios de medición en psicología, fiabilidad, validez de constructo, tipificación, percentiles y técnicas de entrevista clínica.",
    topics: ["Validez de contenido y constructo", "Fiabilidad y consistencia interna", "Baremos, percentiles y puntuaciones Z", "Estructura de la entrevista diagnóstica"]
  },
  {
    id: 10,
    title: "Recursos psicoeducativos y reflexión",
    pages: 38,
    description: "Herramientas de psicoeducación, esquemas de pensamiento y conducta, valores, hábitos de estudio y reflexión pedagógica.",
    topics: ["Relación entre pensamiento, emoción y conducta", "Valores y congruencia psicológica", "Técnicas de psicoeducación aplicada", "Estrategias de estudio reflexivo"]
  },
  {
    id: 11,
    title: "Investigación, evidencia y metodología",
    pages: 28,
    description: "Planteamiento de hipótesis científicas, tipos de variables, diseños correlacionales y experimentales, y pensamiento crítico en ciencia.",
    topics: ["Formulación de hipótesis empíricas", "Variables independientes y dependientes", "Correlación vs. Causalidad", "Lectura crítica de papers científicos"]
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    title: "Diccionario Esencial de Psicología",
    description: "Aclara términos, conceptos técnicos y definiciones clave de manera rápida durante tus horas de estudio.",
    value: 12,
    image: "/assets/bonus-premium-1.png"
  },
  {
    id: 2,
    title: "15 Grandes Autores de la Psicología",
    description: "Descubre en síntesis las vidas, aportaciones fundamentales e ideas revolucionarias de los mayores referentes históricos.",
    value: 10,
    image: "/assets/bonus-premium-2.png"
  },
  {
    id: 3,
    title: "Historia de la Psicología: Guía Rápida",
    description: "Conoce los momentos clave, las revoluciones paradigmáticas y la cronología completa de la disciplina en minutos.",
    value: 9,
    image: "/assets/bonus-premium-3.png"
  },
  {
    id: 4,
    title: "10 Experimentos que Marcaron la Psicología",
    description: "Revisa sus metodologías, aportaciones revolucionarias, límites metodológicos y dilemas éticos que transformaron la ciencia.",
    value: 10,
    image: "/assets/bonus-premium-4.png"
  },
  {
    id: 5,
    title: "Guía de Lecturas para Estudiantes de Psicología",
    description: "La selección curada de libros y lecturas recomendadas para continuar profundizando con criterio profesional.",
    value: 9,
    image: "/assets/bonus-premium-5.png"
  }
];

export const PAIN_POINTS = [
  {
    id: "01",
    title: "Demasiados archivos, poca organización",
    description: "PDFs sueltos, carpetas desordenadas y apuntes incompletos que te hacen perder horas buscando un solo concepto."
  },
  {
    id: "02",
    title: "Explicaciones que siguen siendo confusas",
    description: "Textos académicos excesivamente densos sin esquemas ni claridad visual que faciliten la asimilación real."
  },
  {
    id: "03",
    title: "Horas reuniendo materiales dispersos",
    description: "Saltar de web en web intentando armar un resumen coherente antes de poder sentarte a estudiar de verdad."
  },
  {
    id: "04",
    title: "Necesitas repasar con rapidez antes de clase",
    description: "Falta de una guía rápida y confiable que te permita refrescar las bases y autores clave en pocos minutos."
  }
];

export const BENEFITS_DATA = [
  {
    id: "01",
    title: "Encuentra conceptos rápidamente",
    description: "Consulta temas organizados en 11 módulos lógicos con índice directo y navegación intuitiva."
  },
  {
    id: "02",
    title: "Conecta las distintas áreas",
    description: "Comprende cómo se integran cerebro, emociones, procesos cognitivos y conducta humana."
  },
  {
    id: "03",
    title: "Ordena tus sesiones de estudio",
    description: "Sigue una estructura temática clara que optimiza tu retención y acelera tu aprendizaje."
  },
  {
    id: "04",
    title: "Repasa cuando lo necesites",
    description: "Revisa conceptos esenciales antes de exámenes, presentaciones o lecturas profundas."
  },
  {
    id: "05",
    title: "Lleva tu biblioteca contigo",
    description: "Material 100% digital, optimizado para leer cómodamente en móvil, tablet o computadora."
  }
];

export const AUDIENCE_DATA = [
  {
    title: "Estudiantes de Psicología",
    description: "Material visual complementario de alto valor para apoyar cada semestre universitario."
  },
  {
    title: "Quienes están comenzando",
    description: "Una introducción clara, estructurada y sin rodeos a los fundamentos de la mente humana."
  },
  {
    title: "Quienes necesitan repasar",
    description: "Autores, escuelas, teorías y conceptos clave siempre a mano para consulta inmediata."
  },
  {
    title: "Personas apasionadas por la Psicología",
    description: "Explora la disciplina con rigor y lenguaje claro sin necesidad de conocimientos previos."
  },
  {
    title: "Quienes aprenden de forma visual",
    description: "Esquemas, mapas conceptuales y diagramas estructurados para facilitar la memoria visual."
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "¿Qué incluye la biblioteca completa?",
    answer: "Incluye los 11 módulos temáticos completos con 353 páginas ilustradas en formato digital, más los 5 libros complementarios de bonificación (Diccionario, Autores, Historia, Experimentos y Guía de Lecturas), todo por solo US$ 9,90 en pago único."
  },
  {
    question: "¿Recibiré libros físicos en mi casa?",
    answer: "No. Todos los materiales son 100% digitales en formato PDF de alta resolución, diseñados para leerse cómodamente en celular, tablet, iPad, e-reader o computadora."
  },
  {
    question: "¿Cómo y cuándo recibo el acceso?",
    answer: "Inmediatamente después de confirmar tu pago en la plataforma segura de Hotmart, recibirás un correo electrónico automático con tu enlace de acceso y descarga para disfrutar de la biblioteca de por vida."
  },
  {
    question: "¿Puedo consultarlo sin conexión a internet?",
    answer: "Sí. Una vez que descargas los archivos en tu dispositivo, puedes leerlos y consultarlos en cualquier momento sin necesidad de conexión a internet."
  },
  {
    question: "¿Necesito estar matriculado en la carrera de Psicología?",
    answer: "No. Aunque es ideal para universitarios, está redactado con un enfoque didáctico y visual apto tanto para principiantes como para autodidactas y profesionales de áreas afines."
  },
  {
    question: "¿Sustituye mis libros y textos universitarios?",
    answer: "No. Esta biblioteca es un recurso educativo de síntesis y apoyo conceptual. No reemplaza los tratados académicos especializados, las clases universitarias ni la supervisión clínica."
  },
  {
    question: "¿Sirve para diagnosticar o tratar a personas?",
    answer: "No. Su finalidad es estrictamente educativa e informativa. No habilita para diagnosticar, evaluar clínicamente ni realizar psicoterapia."
  },
  {
    question: "¿Hay mensualidades o cargos ocultos?",
    answer: "Ninguno. El pago de US$ 9,90 es único y definitivo. Tienes acceso permanente y de por vida a todo el material sin suscripciones ni cuotas recurrentes."
  },
  {
    question: "¿Cómo funciona la garantía de satisfacción?",
    answer: "Cuentas con 7 días de garantía total. Si por cualquier motivo sientes que la biblioteca no cumplió con tus expectativas, puedes solicitar el reembolso íntegro del 100% de tu dinero directamente en la plataforma."
  }
];

export const SAMPLE_PAGES: SampleItem[] = [
  { title: "Neuropsicología", module: 2, moduleName: "Neuropsicología y bases biológicas", page: 16, src: "/assets/sample-m02-p16.jpeg", width: 1086, height: 1448 },
  { title: "Neuropsicología", module: 2, moduleName: "Neuropsicología y bases biológicas", page: 11, src: "/assets/sample-m02-p11.jpeg", width: 1086, height: 1448 },
  { title: "Neuropsicología", module: 2, moduleName: "Neuropsicología y bases biológicas", page: 19, src: "/assets/sample-m02-p19.jpeg", width: 1086, height: 1448 },
  { title: "Cognición", module: 3, moduleName: "Cognición, memoria y aprendizaje", page: 6, src: "/assets/sample-m03-p06.jpeg", width: 1086, height: 1448 },
  { title: "Cognición", module: 3, moduleName: "Cognición, memoria y aprendizaje", page: 24, src: "/assets/sample-m03-p24.jpeg", width: 1086, height: 1448 },
  { title: "Emoción", module: 6, moduleName: "Emoción y motivación", page: 14, src: "/assets/sample-m06-p14.jpeg", width: 1086, height: 1448 },
  { title: "Emoción", module: 6, moduleName: "Emoción y motivación", page: 16, src: "/assets/sample-m06-p16.jpeg", width: 1086, height: 1448 },
  { title: "Emoción", module: 6, moduleName: "Emoción y motivación", page: 6, src: "/assets/sample-m06-p06.jpeg", width: 1086, height: 1448 },
  { title: "Psicoeducación", module: 10, moduleName: "Recursos psicoeducativos", page: 6, src: "/assets/sample-m10-p06.jpeg", width: 1086, height: 1448 },
  { title: "Psicoeducación", module: 10, moduleName: "Recursos psicoeducativos", page: 16, src: "/assets/sample-m10-p16.jpeg", width: 1086, height: 1448 },
  { title: "Fundamentos", module: 1, moduleName: "Fundamentos y corrientes", page: 6, src: "/assets/sample-m01-p06.jpeg", width: 1086, height: 1448 },
  { title: "Fundamentos", module: 1, moduleName: "Fundamentos y corrientes", page: 16, src: "/assets/sample-m01-p16.jpeg", width: 1086, height: 1448 },
  { title: "Fundamentos", module: 1, moduleName: "Fundamentos y corrientes", page: 19, src: "/assets/sample-m01-p19.jpeg", width: 1086, height: 1448 },
  { title: "Memoria", module: 3, moduleName: "Cognición y memoria", page: 16, src: "/assets/sample-m03-p16.jpeg", width: 1086, height: 1448 },
  { title: "Memoria", module: 3, moduleName: "Cognición y memoria", page: 11, src: "/assets/sample-m03-p11.jpeg", width: 1086, height: 1448 },
  { title: "Desarrollo", module: 4, moduleName: "Psicología del desarrollo", page: 11, src: "/assets/sample-m04-p11.jpeg", width: 1086, height: 1448 },
  { title: "Desarrollo", module: 4, moduleName: "Psicología del desarrollo", page: 21, src: "/assets/sample-m04-p21.jpeg", width: 1086, height: 1448 },
  { title: "Personalidad", module: 5, moduleName: "Personalidad y diferencias", page: 21, src: "/assets/sample-m05-p21.jpeg", width: 1086, height: 1448 },
  { title: "Personalidad", module: 5, moduleName: "Personalidad y diferencias", page: 6, src: "/assets/sample-m05-p06.jpeg", width: 1086, height: 1448 },
  { title: "Personalidad", module: 5, moduleName: "Personalidad y diferencias", page: 8, src: "/assets/sample-m05-p08.jpeg", width: 1086, height: 1448 },
  { title: "Social", module: 7, moduleName: "Psicología social", page: 21, src: "/assets/sample-m07-p21.jpeg", width: 1086, height: 1448 },
  { title: "Social", module: 7, moduleName: "Psicología social", page: 19, src: "/assets/sample-m07-p19.jpeg", width: 1086, height: 1448 },
  { title: "Psicopatología", module: 8, moduleName: "Psicopatología visual", page: 8, src: "/assets/sample-m08-p08.jpeg", width: 1086, height: 1448 },
  { title: "Psicometría", module: 9, moduleName: "Evaluación y psicometría", page: 11, src: "/assets/sample-m09-p11.jpeg", width: 1086, height: 1448 },
  { title: "Metodología", module: 11, moduleName: "Investigación y metodología", page: 14, src: "/assets/sample-m11-p14.jpeg", width: 1086, height: 1448 }
];
