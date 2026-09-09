import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Store, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-softblue/40 via-white to-brand-light">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-softblue border border-brand-blue/20 text-brand-blue font-semibold text-xs sm:text-sm shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span className="uppercase tracking-wider font-bold">ODS 10 — Redução das Desigualdades</span>
              <Sparkles className="w-4 h-4 text-brand-yellow" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-darkblue tracking-tight leading-[1.15]">
              Mais oportunidades.{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-green to-emerald-600 bg-clip-text text-transparent">
                Menos desigualdade.
              </span>
            </h1>

            {/* Main Body Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O <strong className="text-brand-darkblue font-semibold">IMPACTA+</strong> fortalece pequenos comerciantes e empreendedores, ampliando seu acesso a oportunidades, tecnologia, divulgação e conhecimento para que possam competir, crescer e gerar renda.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#sobre"
                onClick={(e) => scrollToSection(e, '#sobre')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-brand-darkblue hover:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <span>Conheça o projeto</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contato"
                onClick={(e) => scrollToSection(e, '#contato')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-brand-darkblue bg-white hover:bg-brand-softblue border-2 border-brand-blue/30 hover:border-brand-blue rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <HeartHandshake className="w-5 h-5 text-brand-green" />
                <span>Quero fazer parte</span>
              </a>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-softblue flex items-center justify-center text-brand-blue shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Comércio Local</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-softgreen flex items-center justify-center text-brand-green shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Crescimento Sustentável</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Inclusão Digital</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Illustration Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/images/hero_entrepreneurs.jpg"
                  alt="Ilustração de pequenos empreendedores locais conectados à tecnologia"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Glassmorphism Badge 1 - Top Left */}
                <div className="absolute top-4 left-4 glass-effect px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3 animate-float">
                  <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-darkblue leading-tight">+1.000 Oportunidades</p>
                    <p className="text-[10px] text-slate-500 font-medium">Capacitação & Vendas</p>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute bottom-4 right-4 glass-effect px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-darkblue leading-tight">Fortalecimento Local</p>
                    <p className="text-[10px] font-semibold text-brand-green">ODS 10 Em Ação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
