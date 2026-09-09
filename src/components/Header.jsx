import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, HeartHandshake } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Problema', href: '#problema' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'ODS 10', href: '#ods10' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-md py-3 border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-darkblue via-brand-blue to-brand-green flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-xl tracking-tight">I+</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-brand-darkblue leading-none">
              IMPACTA<span className="text-brand-yellow font-black">+</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              ODS 10 • Inclusão Local
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-blue hover:bg-brand-softblue/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-blue-700 hover:to-emerald-700 rounded-xl shadow-glow-blue hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
          >
            <span>Quero fazer parte</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menu de navegação"
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-darkblue" /> : <Menu className="w-6 h-6 text-brand-darkblue" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-b border-slate-200/80 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-brand-softblue rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200/60">
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="flex items-center justify-center gap-2 w-full py-3 px-5 text-center font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green rounded-xl shadow-md"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Quero fazer parte</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
