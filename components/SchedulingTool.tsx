
import React, { useState } from 'react';
import { Check, Clock, User, Phone, Send, Info } from 'lucide-react';
import { SCHEDULING_SERVICES, CONTACT_INFO } from '../constants';

const SchedulingTool: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleAgendar = () => {
    if (selectedServices.length === 0) {
      alert("Por favor, selecione ao menos uma modalidade de atendimento.");
      return;
    }

    const servicesText = SCHEDULING_SERVICES
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(", ");

    const intro = userName ? `Olá, meu nome é ${userName}. ` : "Olá, ";
    const message = `${intro}Gostaria de agendar uma sessão com a Dra. Beatriz Fauth.\n\nTenho interesse nas seguintes modalidades: ${servicesText}.\n\nPor favor, me informe sobre a disponibilidade.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gold/10">
      <div className="bg-navy p-8 md:p-12 text-white">
        <h3 className="text-3xl md:text-4xl serif mb-4 text-gold">Agende sua Sessão</h3>
        <p className="text-sand/70 font-light">Selecione as modalidades de seu interesse para iniciar o agendamento via WhatsApp.</p>
      </div>

      <div className="p-6 md:p-10 space-y-8">
        {/* Services List */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">1. Escolha as modalidades</p>
          {SCHEDULING_SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedServices.includes(service.id) 
                ? 'border-gold bg-gold/5 shadow-md' 
                : 'border-gray-100 hover:border-gold/30 hover:bg-sand'
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedServices.includes(service.id) ? 'bg-gold border-gold text-white' : 'border-gray-200'
                }`}>
                  {selectedServices.includes(service.id) && <Check size={14} strokeWidth={4} />}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg group-hover:text-gold transition-colors">{service.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 max-w-md">{service.description}</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </div>
                <div className="font-bold text-navy whitespace-nowrap">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Info Form */}
        <div className="pt-8 border-t border-gray-100 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">2. Seus dados básicos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="text-xs font-bold text-navy mb-2 block uppercase">Seu Nome</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-gold outline-none transition-all"
                />
              </div>
            </div>
            <div className="relative">
              <label className="text-xs font-bold text-navy mb-2 block uppercase">WhatsApp</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                <input 
                  type="tel" 
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="(47) 99999-9999"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-gold outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button 
            onClick={handleAgendar}
            className="w-full bg-navy hover:bg-teal-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-navy/20 uppercase tracking-widest text-sm"
          >
            Continuar para Agendamento
            <Send size={18} />
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs text-center">
            <Info size={14} />
            <p>Os valores finais serão confirmados na entrevista inicial.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingTool;
