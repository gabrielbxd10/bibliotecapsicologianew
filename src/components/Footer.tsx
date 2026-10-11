import React from 'react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-[#183640] text-[#D1DFE4] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#234A57]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand Link */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-white font-serif text-xl font-bold tracking-tight hover:text-[#E8DCC0] transition-colors"
        >
          <span className="text-[#C6A15B] text-2xl font-serif">Ψ</span>
          <span>BIBLIOTECA DE PSICOLOGÍA</span>
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#AFC3C9]">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Política de Privacidad
          </button>
          <span className="text-[#365A66]" aria-hidden="true">·</span>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Términos de Uso
          </button>
          <span className="text-[#365A66]" aria-hidden="true">·</span>
          <button
            onClick={() => onOpenPolicy('contact')}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Contacto & Soporte
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#8EA6AF] max-w-3xl leading-relaxed">
          Este producto tiene fines exclusivamente educativos e informativos. No sustituye la formación universitaria reglada, la bibliografía académica especializada, el diagnóstico clínico, la evaluación psicológica, el tratamiento ni la supervisión profesional. Los resultados de aprendizaje pueden variar según la dedicación del estudiante.
        </p>

        {/* Copyright */}
        <p className="text-xs text-[#6F8A94]">
          © {new Date().getFullYear()} Biblioteca de Psicología. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
