import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Instagram, Linkedin, Facebook, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participationType: 'Sou empreendedor',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor, informe seu nome completo.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'O telefone é obrigatório.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Informe um telefone com DDD válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, escreva uma mensagem breve.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          participationType: 'Sou empreendedor',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue bg-brand-softblue px-4 py-1.5 rounded-full border border-blue-200">
            Fale Conosco
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Vamos conversar e transformar juntos.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Ficou com alguma dúvida ou quer fazer parte dessa iniciativa? Envie uma mensagem!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 bg-brand-darkblue text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Canais diretos</h3>
              <p className="text-sm text-slate-300">
                Estamos prontos para atender pequenos empreendedores, parceiros e apoiadores.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-yellow flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">E-mail Oficial</p>
                  <a href="mailto:contato@impactaplus.org" className="text-base font-semibold text-white hover:text-brand-yellow transition-colors">
                    contato@impactaplus.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-green flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Telefone / WhatsApp</p>
                  <a href="tel:+5511999999999" className="text-base font-semibold text-white hover:text-brand-green transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Atuação</p>
                  <p className="text-base font-semibold text-white">
                    São Paulo, SP — Brasil (Alcance Nacional)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-slate-700/80 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Siga o IMPACTA+</p>
              <div className="flex items-center gap-3">
                <a href="#social" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#social" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#social" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#social" aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-green flex items-center justify-center text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7 bg-brand-light rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative">
            
            {submitSuccess && (
              <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-4 animate-in fade-in duration-300">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Mensagem enviada com sucesso!</h4>
                  <p className="text-sm mt-1 text-emerald-700">
                    Obrigado pelo seu contato. Nossa equipe retornará seu e-mail o mais breve possível.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-white text-slate-900 focus:outline-none transition-colors ${
                    errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-brand-blue'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-white text-slate-900 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-brand-blue'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-white text-slate-900 focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-brand-blue'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Tipo de Participação */}
              <div>
                <label htmlFor="participationType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Tipo de Participação *
                </label>
                <select
                  id="participationType"
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-brand-blue"
                >
                  <option value="Sou empreendedor">Sou empreendedor</option>
                  <option value="Quero apoiar">Quero apoiar</option>
                  <option value="Quero ser parceiro">Quero ser parceiro</option>
                  <option value="Quero saber mais">Quero saber mais</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos brevemente sobre você ou seu comércio..."
                  className={`w-full px-4 py-3.5 rounded-xl border bg-white text-slate-900 focus:outline-none transition-colors ${
                    errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 focus:border-brand-blue'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-blue-700 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando mensagem...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensagem</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
