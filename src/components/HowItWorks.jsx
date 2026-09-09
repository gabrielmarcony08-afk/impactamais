import React from 'react';
import { UserPlus, Search, Cpu, Rocket, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Cadastro',
      description: 'Conhecemos o empreendedor e seu negócio.',
      detail: 'Mapeamento inicial da atividade comercial, história e localização do estabelecimento.',
      icon: UserPlus,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      number: '02',
      title: 'Diagnóstico',
      description: 'Identificamos suas principais necessidades e oportunidades.',
      detail: 'Análise de gargalos em divulgação, presença digital, vendas e organização financeira.',
      icon: Search,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description: 'Oferecemos ferramentas, conhecimento e visibilidade.',
      detail: 'Trilhas de aprendizado dinâmicas, inserção em vitrines e capacitação prática.',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      number: '04',
      title: 'Crescimento',
      description: 'O empreendedor ganha melhores condições para competir, vender e gerar renda.',
      detail: 'Acompanhamento de resultados, expansão de clientes e autonomia no mercado.',
      icon: Rocket,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue bg-brand-softblue px-4 py-1.5 rounded-full border border-blue-200">
            Jornada do Empreendedor
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Como funciona o IMPACTA+
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Um fluxo simples, humano e estruturado para impulsionar negócios locais passo a passo.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col h-full group">
                
                {/* Step Card */}
                <div className="bg-brand-light rounded-3xl p-8 border border-slate-200/80 shadow-sm group-hover:shadow-card-hover group-hover:bg-white transition-all duration-300 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-2xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-brand-darkblue mb-2">
                      {step.title}
                    </h3>

                    {/* Step Quote */}
                    <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">
                      "{step.description}"
                    </p>

                    {/* Step Detail */}
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Step Footer Link */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-brand-blue">
                    <span>Etapa {idx + 1} de 4</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
