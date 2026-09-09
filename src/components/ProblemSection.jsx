import React from 'react';
import { Smartphone, Megaphone, UserX, BookOpen, CreditCard, Scale } from 'lucide-react';

export default function ProblemSection() {
  const challenges = [
    {
      icon: Smartphone,
      title: 'Acesso limitado à tecnologia',
      description: 'Ferramentas digitais complexas e caras distanciam o pequeno empreendedor da automação e da modernização do negócio.',
      color: 'bg-blue-50 text-brand-blue border-blue-100',
    },
    {
      icon: Megaphone,
      title: 'Pouca divulgação',
      description: 'Dificuldade para alcançar novos clientes e promover produtos de maneira profissional, estruturada e recorrente.',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: UserX,
      title: 'Dificuldade para conquistar clientes',
      description: 'Mercado hipercompetitivo com foco em grandes marcas, dificultando a atração e fidelização do público local.',
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      icon: BookOpen,
      title: 'Falta de capacitação',
      description: 'Escassez de treinamentos práticos e acessíveis, adequados à rotina e aos desafios reais dos pequenos comerciantes.',
      color: 'bg-emerald-50 text-brand-green border-emerald-100',
    },
    {
      icon: CreditCard,
      title: 'Acesso limitado a crédito',
      description: 'Barreiras burocráticas e altas taxas que inviabilizam melhorias no estoque, estrutura e capital de giro.',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      icon: Scale,
      title: 'Concorrência desigual',
      description: 'Grande desvantagem competitiva em relação às grandes corporações, que possuem imenso poder de escala e marketing.',
      color: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <section id="problema" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Desafio Atual do Comércio
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Pequenos negócios não deveriam começar atrás.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            O comércio brasileiro apresenta uma desigualdade de oportunidades entre grandes empresas e pequenos negócios. Enquanto grandes comerciantes possuem maior acesso à tecnologia, marketing, crédito, fornecedores e consumidores, muitos pequenos empreendedores enfrentam dificuldades para divulgar seus produtos, conquistar clientes, aumentar suas vendas e manter a sustentabilidade financeira.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-brand-light border border-slate-200/80 hover:bg-white hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${challenge.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span>Desafio de inclusão</span>
                  <span className="ml-auto font-bold text-slate-300 group-hover:text-brand-blue">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
