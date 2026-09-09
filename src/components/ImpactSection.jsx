import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Sparkles, MapPin, Info } from 'lucide-react';

export default function ImpactSection() {
  // Easily editable impact indicators list
  const impactMetrics = [
    {
      id: 'negocios',
      target: 100,
      prefix: '+',
      label: 'pequenos negócios apoiados',
      icon: Target,
      color: 'text-brand-blue',
      bgColor: 'bg-blue-50 border-blue-200',
    },
    {
      id: 'pessoas',
      target: 500,
      prefix: '+',
      label: 'pessoas impactadas',
      icon: Users,
      color: 'text-brand-green',
      bgColor: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: 'oportunidades',
      target: 1000,
      prefix: '+',
      formatThousands: true,
      label: 'oportunidades geradas',
      icon: Sparkles,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50 border-amber-200',
    },
    {
      id: 'comunidades',
      target: 20,
      prefix: '+',
      label: 'comunidades alcançadas',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
    },
  ];

  // Counter State
  const [counts, setCounts] = useState(impactMetrics.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAnimated) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.85) {
        setHasAnimated(true);
        animateCounters();
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately if already in viewport

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervalTime = duration / steps;

    let stepCount = 0;
    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;

      setCounts(
        impactMetrics.map((item) => {
          const current = Math.floor(item.target * Math.min(progress, 1));
          return current;
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);
  };

  const formatNumber = (num, formatThousands) => {
    if (formatThousands && num >= 1000) {
      return num.toLocaleString('pt-BR');
    }
    return num.toString();
  };

  return (
    <section id="impacto" ref={sectionRef} className="py-20 lg:py-28 bg-brand-darkblue text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-yellow bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            Metas & Projeção Social
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O Impacto Esperado
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Trabalhamos com metas claras para transformar realidades e construir um ecossistema comercial mais justo.
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impactMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-brand-blue transition-all duration-300 text-center flex flex-col items-center justify-between group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-yellow" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center">
                    <span className="text-brand-yellow">{item.prefix}</span>
                    <span>{formatNumber(counts[idx], item.formatThousands)}</span>
                  </div>
                  
                  <p className="text-sm font-semibold text-slate-300 capitalize">
                    {item.label}
                  </p>
                </div>

                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Observation note as strictly requested */}
        <div className="max-w-2xl mx-auto bg-slate-800/90 border border-slate-700 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-slate-300 text-xs sm:text-sm">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Observação transparente:</strong> Indicadores apresentados como metas iniciais do projeto.
          </p>
        </div>

      </div>
    </section>
  );
}
