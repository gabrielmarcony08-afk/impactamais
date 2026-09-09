import React from 'react';
import { ArrowRight, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export default function CTASection() {
  const scrollToContact = (e, participationType) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      const selectElem = document.getElementById('participationType');
      if (selectElem && participationType) {
        selectElem.value = participationType;
      }
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-brand-darkblue via-brand-blue to-emerald-700 text-white relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-green/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Faça Parte Desta Transformação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Seu pequeno negócio pode ir mais longe.
          </h2>

          <p className="text-lg sm:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed">
            Faça parte de uma rede que acredita que oportunidade também deve ser acessível.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contato"
              onClick={(e) => scrollToContact(e, 'Sou empreendedor')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-brand-darkblue bg-brand-yellow hover:bg-amber-400 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <HeartHandshake className="w-5 h-5 text-brand-darkblue" />
              <span>Quero participar</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contato"
              onClick={(e) => scrollToContact(e, 'Quero ser parceiro')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white rounded-2xl backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Building2 className="w-5 h-5" />
              <span>Quero ser parceiro</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
