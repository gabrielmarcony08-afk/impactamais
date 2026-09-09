import React from 'react';
import { Globe, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre o Projeto', href: '#sobre' },
    { name: 'O Problema', href: '#problema' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Impacto Almejado', href: '#impacto' },
    { name: 'Alinhamento ODS 10', href: '#ods10' },
    { name: 'Fale Conosco', href: '#contato' },
  ];

  return (
    <footer className="bg-brand-darkblue text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info - Col 5 */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center text-white font-extrabold text-lg">
                I+
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                IMPACTA<span className="text-brand-yellow">+</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Uma iniciativa alinhada à <strong>ODS 10 — Redução das Desigualdades</strong> com o objetivo de fortalecer pequenos comerciantes e microempreendedores através de inclusão, tecnologia e capacitação.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ods-magenta/20 border border-ods-magenta/40 text-rose-300 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-ods-magenta" />
              <span>Conectado aos Objetivos de Desenvolvimento Sustentável da ONU</span>
            </div>
          </div>

          {/* Quick Links - Col 3 */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Navegação Rápida</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-yellow transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials - Col 4 */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Rede IMPACTA+</p>
            <p className="text-xs text-slate-400">
              Fortalecendo o comércio local brasileiro de ponta a ponta.
            </p>
            
            <div className="text-xs space-y-1">
              <p>E-mail: <a href="mailto:contato@impactaplus.org" className="text-brand-yellow hover:underline">contato@impactaplus.org</a></p>
              <p>Contato: (11) 99999-9999</p>
              <p>Localização: São Paulo - SP, Brasil</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} IMPACTA+. Todos os direitos reservados. Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> para empreendedores brasileiros.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
