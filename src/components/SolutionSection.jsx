import React from 'react';
import { GraduationCap, Smartphone, Share2, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Capacitação',
      subtitle: 'Conhecimento Prático & Direto',
      description: 'Treinamentos objetivos sobre gestão financeira, atendimento, precificação e estratégias de vendas adaptadas à rotina do microempreendedor.',
      badge: 'Pilar 01',
      bgGradient: 'from-blue-500/10 to-brand-blue/5',
      iconBg: 'bg-brand-blue text-white',
    },
    {
      icon: Smartphone,
      title: 'Tecnologia',
      subtitle: 'Ferramentas Acessíveis',
      description: 'Implementação de soluções digitais descomplicadas para catálogo online, gestão de estoque, pagamentos e comunicação com clientes.',
      badge: 'Pilar 02',
      bgGradient: 'from-emerald-500/10 to-brand-green/5',
      iconBg: 'bg-brand-green text-white',
    },
    {
      icon: Share2,
      title: 'Divulgação',
      subtitle: 'Visibilidade Local & Digital',
      description: 'Ações comunitárias, vitrines virtuais e suporte em marketing para que a comunidade descubra e apoie os negócios do seu bairro.',
      badge: 'Pilar 03',
      bgGradient: 'from-amber-500/10 to-brand-yellow/10',
      iconBg: 'bg-amber-500 text-white',
    },
    {
      icon: HeartHandshake,
      title: 'Oportunidades',
      subtitle: 'Rede de Conexão & Apoio',
      description: 'Pontes com instituições parceiras, investidores sociais, fornecedores e eventos de networking comercial.',
      badge: 'Pilar 04',
      bgGradient: 'from-purple-500/10 to-brand-darkblue/5',
      iconBg: 'bg-brand-darkblue text-white',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-light via-brand-softblue/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green bg-brand-softgreen px-4 py-1.5 rounded-full border border-emerald-200">
            Nossa Resposta Estratégica
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Transformando desigualdade em oportunidade.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            O <strong className="text-brand-darkblue font-semibold">IMPACTA+</strong> busca ampliar as oportunidades para pequenos comerciantes e empreendedores, oferecendo caminhos para inclusão, acesso, capacitação e visibilidade.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Subtle top decorative bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pilar.bgGradient}`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pilar.iconBg} shadow-md flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {pilar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-darkblue mb-1">
                    {pilar.title}
                  </h3>

                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">
                    {pilar.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pilar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-green">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Foco em inclusão e autonomia comercial</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
