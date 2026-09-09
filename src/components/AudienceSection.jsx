import React from 'react';
import { Store, Briefcase, Zap, MapPin, Heart, Building2, ArrowRight } from 'lucide-react';

export default function AudienceSection() {
  const audiences = [
    {
      title: 'Pequenos Comerciantes',
      description: 'Dono de mercearia, padaria, quitanda, bazar ou pequeno comércio de bairro que deseja se modernizar.',
      icon: Store,
      badge: 'Empreendedor',
      color: 'border-blue-200 bg-blue-50/50 hover:bg-white',
      iconColor: 'bg-brand-blue text-white',
    },
    {
      title: 'Microempreendedores (MEI)',
      description: 'Prestadores de serviços e autônomos que buscam organizar suas finanças e estruturar suas vendas.',
      icon: Briefcase,
      badge: 'MEI',
      color: 'border-emerald-200 bg-emerald-50/50 hover:bg-white',
      iconColor: 'bg-brand-green text-white',
    },
    {
      title: 'Empreendedores Iniciantes',
      description: 'Pessoas que estão tirando uma ideia do papel e precisam de orientação prática e suporte inicial.',
      icon: Zap,
      badge: 'Iniciante',
      color: 'border-amber-200 bg-amber-50/50 hover:bg-white',
      iconColor: 'bg-amber-500 text-white',
    },
    {
      title: 'Negócios Locais',
      description: 'Empreendimentos familiares comunitários que desejam ampliar sua clientela na própria região.',
      icon: MapPin,
      badge: 'Comunitário',
      color: 'border-purple-200 bg-purple-50/50 hover:bg-white',
      iconColor: 'bg-purple-600 text-white',
    },
    {
      title: 'Apoiadores Sociais',
      description: 'Consumidores e cidadãos interessados em comprar do pequeno e impulsionar o comércio local.',
      icon: Heart,
      badge: 'Comunidade',
      color: 'border-rose-200 bg-rose-50/50 hover:bg-white',
      iconColor: 'bg-rose-500 text-white',
    },
    {
      title: 'Instituições e Parceiros',
      description: 'Empresas, ONGs, mentorias e instituições que querem aportar recursos, tecnologia ou conhecimento.',
      icon: Building2,
      badge: 'Parceria',
      color: 'border-slate-300 bg-slate-100/50 hover:bg-white',
      iconColor: 'bg-brand-darkblue text-white',
    },
  ];

  const scrollToContact = (e, type) => {
    e.preventDefault();
    const elem = document.querySelector('#contato');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Pre-select form field if possible
      const selectElem = document.getElementById('participationType');
      if (selectElem) {
        if (type === 'Parceria') selectElem.value = 'Quero ser parceiro';
        else if (type === 'Comunidade') selectElem.value = 'Quero apoiar';
        else selectElem.value = 'Sou empreendedor';
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-darkblue bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            Público-Alvo & Ecossistema
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Quem pode participar?
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            O IMPACTA+ é um projeto aberto e integrador. Encontre o seu papel nessa rede de apoio ao comércio local.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 border ${item.color} shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconColor} shadow-md flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <a
                    href="#contato"
                    onClick={(e) => scrollToContact(e, item.badge)}
                    className="text-xs font-bold text-brand-blue hover:text-brand-darkblue flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Quero me conectar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
