import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Política de Privacidad',
      body: (
        <>
          <p className="mb-3">
            En <strong>Biblioteca de Psicología</strong> valoramos y respetamos tu privacidad. Esta política describe cómo se gestiona la información relacionada con tu visita a este sitio web.
          </p>
          <p className="mb-3">
            <strong>Procesamiento de pagos:</strong> Las transacciones se realizan íntegramente a través de la infraestructura segura de Hotmart. No recopilamos, almacenamos ni procesamos información financiera sensible (como números de tarjetas de crédito o credenciales bancarias) en nuestros servidores.
          </p>
          <p className="mb-3">
            <strong>Analítica y Cookies:</strong> Empleamos cookies técnicas y herramientas de medición con el fin exclusivo de optimizar la navegación, rendimiento y atribución publicitaria.
          </p>
          <p>
            Al utilizar este sitio web, aceptas el tratamiento de la información técnica indispensable para prestar el servicio educativo ofrecido.
          </p>
        </>
      )
    },
    terms: {
      title: 'Términos de Uso',
      body: (
        <>
          <p className="mb-3">
            Bienvenido a la <strong>Biblioteca de Psicología Completa</strong>. Al acceder o adquirir este producto digital, aceptas los siguientes términos:
          </p>
          <p className="mb-3">
            <strong>Naturaleza del producto:</strong> Se trata de material didáctico 100% digital compuesto por 11 guías temáticas (353 páginas) y 5 libros de bono en formato PDF. No se envían libros en formato físico impreso.
          </p>
          <p className="mb-3">
            <strong>Exención de responsabilidad profesional:</strong> Este material tiene un propósito estrictamente educativo y de apoyo al estudio. No sustituye la titulación universitaria oficial, programas reglados de grado o posgrado, bibliografía académica de referencia, supervisión clínica ni diagnóstico/tratamiento de salud mental.
          </p>
          <p>
            <strong>Garantía:</strong> Tienes derecho a solicitar el reembolso del 100% dentro de los primeros 7 días naturales siguientes a tu compra a través de la plataforma de pago.
          </p>
        </>
      )
    },
    contact: {
      title: 'Contacto y Soporte',
      body: (
        <>
          <p className="mb-3">
            ¿Tienes alguna consulta sobre la biblioteca, tu acceso o la descarga de los materiales?
          </p>
          <p className="mb-3">
            <strong>Atención al cliente:</strong> Puedes comunicarte con el equipo de soporte a través del correo de confirmación de tu pedido enviado por Hotmart tras realizar el pago.
          </p>
          <p className="mb-3">
            <strong>Tiempo de respuesta:</strong> Nuestro equipo responde a las consultas habituales en un plazo promedio de 24 a 48 horas laborables.
          </p>
          <p>
            También puedes gestionar tu acceso o solicitar asistencia técnica directamente desde el panel de comprador de la plataforma Hotmart.
          </p>
        </>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0E1E24]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-[#DCD6C9] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7E8F94] hover:text-[#183640] rounded-xl hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-editorial text-2xl font-bold text-[#183640] mb-4">
          {current.title}
        </h3>

        <div className="text-xs sm:text-sm text-[#4E6269] leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          {current.body}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#183640] hover:bg-[#204552] rounded-xl transition-all cursor-pointer"
        >
          Entendido y cerrar
        </button>
      </div>
    </div>
  );
};
