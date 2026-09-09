import React from 'react';
import { Compass, Eye, ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue bg-brand-softblue px-4 py-1.5 rounded-full border border-blue-200">
              Sobre o IMPACTA+
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight leading-tight">
              Acreditamos no poder transformador do pequeno comércio.
            </h2>

            {/* User base text included strictly */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-blue font-medium text-slate-700">
                "O IMPACTA+ nasceu da percepção de que pequenos comerciantes e empreendedores enfrentam obstáculos que dificultam sua competição em um mercado cada vez mais digital e competitivo."
              </p>
              <p>
                O projeto busca promover inclusão, acesso e oportunidades, fortalecendo pequenos negócios e contribuindo para um comércio mais equilibrado e menos desigual.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Visual Box grid of Propósito, Visão e Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Propósito */}
              <div className="bg-brand-softblue/60 p-6 rounded-3xl border border-brand-blue/20 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkblue">Propósito</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reduzir desigualdades comerciais oferecendo conhecimento, ferramentas e visibilidade aos microempreendedores.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-brand-softgreen/60 p-6 rounded-3xl border border-brand-green/20 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-green text-white flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkblue">Visão</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ser uma referência nacional em iniciativas sociais de impacto direto na sustentabilidade dos negócios locais.
                </p>
              </div>

              {/* Valores - Spans 2 cols on desktop */}
              <div className="sm:col-span-2 bg-amber-50/70 p-6 rounded-3xl border border-amber-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-brand-darkblue flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-darkblue">Nossos Valores Fundamentais</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-2">
                  <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                    <p className="text-xs font-bold text-brand-darkblue">Inclusão Real</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                    <p className="text-xs font-bold text-brand-darkblue">Confiança</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                    <p className="text-xs font-bold text-brand-darkblue">Inovação Simples</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                    <p className="text-xs font-bold text-brand-darkblue">Impacto Social</p>
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
