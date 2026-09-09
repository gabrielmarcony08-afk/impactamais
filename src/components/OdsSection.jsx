import React, { useState } from 'react';
import { Globe, ArrowUpRight, Check, X, ShieldAlert, Sparkles, Target } from 'lucide-react';

export default function OdsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="ods10" className="py-20 lg:py-28 bg-gradient-to-b from-white via-ods-lightpink/40 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-darkblue via-slate-900 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Magenta Gradient Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ods-magenta/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* SDG 10 Highlight Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ods-magenta text-white font-bold text-xs sm:text-sm shadow-md">
                <Globe className="w-4 h-4 animate-spin-slow" />
                <span className="tracking-wide">ODS 10 — Redução das Desigualdades</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Um projeto conectado à ODS 10.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                O <strong className="text-white font-semibold">IMPACTA+</strong> contribui para a redução das desigualdades ao ampliar o acesso de pequenos empreendedores a oportunidades, conhecimento, tecnologia e visibilidade, fortalecendo sua participação no mercado e contribuindo para a geração de renda.
              </p>

              {/* Key Alignment Bullets */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-ods-magenta/30 text-ods-magenta flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong>Inclusão econômica:</strong> Capacitação prática de micro e pequenos comerciantes em vulnerabilidade.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-ods-magenta/30 text-ods-magenta flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong>Igualdade de oportunidades:</strong> Democratização de ferramentas digitais e redes comerciais.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-ods-magenta/30 text-ods-magenta flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong>Fortalecimento local:</strong> Estímulo à economia comunitária e sustentabilidade financeira.</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-white bg-ods-magenta hover:bg-rose-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ods-magenta"
                >
                  <span>Saiba mais sobre a ODS 10</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative group">
                <img
                  src="/images/ods10_illustration.jpg"
                  alt="Ilustração do Objetivo de Desenvolvimento Sustentável 10 — Redução das Desigualdades"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-300">Agenda 2030 da ONU</span>
                    <p className="text-sm font-semibold">Empoderando pequenos negócios comunitários</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal - Saiba mais sobre a ODS 10 */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ods-magenta text-white flex items-center justify-center font-bold">
                  10
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-darkblue">ODS 10 — Redução das Desigualdades</h3>
                  <p className="text-xs text-slate-500">Objetivo de Desenvolvimento Sustentável da ONU</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-slate-600">
              <p>
                O <strong>Objetivo de Desenvolvimento Sustentável 10 (ODS 10)</strong> busca reduzir a desigualdade dentro dos países e entre eles. No Brasil, essa desigualdade se manifesta intensamente no ambiente de negócios, onde pequenos comerciantes competem com grandes redes em condições totalmente desiguais.
              </p>

              <div className="bg-ods-lightpink p-4 rounded-2xl border border-ods-magenta/20 space-y-2">
                <div className="flex items-center gap-2 font-bold text-ods-magenta">
                  <Target className="w-5 h-5" />
                  <span>Como o IMPACTA+ atua nas metas globais:</span>
                </div>
                <ul className="space-y-2 pl-4 list-disc text-slate-700 text-xs sm:text-sm">
                  <li>
                    <strong>Meta 10.2:</strong> Empoderar e promover a inclusão social, econômica e política de todos, independentemente da renda ou condição social.
                  </li>
                  <li>
                    <strong>Meta 10.3:</strong> Garantir a igualdade de oportunidades e reduzir as desvantagens no acesso a recursos e tecnologias.
                  </li>
                </ul>
              </div>

              <p>
                Através da capacitação técnica gratuita, inclusão digital simples e visibilidade comercial, o IMPACTA+ transforma os pequenos empreendedores em agentes de desenvolvimento econômico local sustentável.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-brand-darkblue text-white font-bold text-sm rounded-xl hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
