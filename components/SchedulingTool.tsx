
import React, { useState } from 'react';
import { Check, Clock, ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare, Calendar, Send } from 'lucide-react';
import { SCHEDULING_SERVICES, CONTACT_INFO } from '../constants';

type Step = 'service' | 'professional' | 'date' | 'info' | 'confirm';

const SchedulingTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    observation: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const steps: Step[] = ['service', 'professional', 'date', 'info', 'confirm'];
  const stepLabels = {
    service: 'Selecione o serviço',
    professional: 'Profissional',
    date: 'Data',
    info: 'Seus dados',
    confirm: 'Confirmação'
  };

  const getStepIndex = () => steps.indexOf(currentStep);

  const goToNext = () => {
    const idx = getStepIndex();
    if (idx < steps.length - 1) {
      setCurrentStep(steps[idx + 1]);
    }
  };

  const goBack = () => {
    const idx = getStepIndex();
    if (idx > 0) {
      setCurrentStep(steps[idx - 1]);
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days: (number | null)[] = [];
    
    for (let i = 0; i < (startingDay === 0 ? 6 : startingDay - 1); i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const selectDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date >= today) {
      setSelectedDate(date);
    }
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const getSelectedService = () => {
    return SCHEDULING_SERVICES.find(s => s.id === selectedService);
  };

  const calculateTotal = () => {
    const service = getSelectedService();
    return service ? service.price : 'R$ 0,00';
  };

  const handleFinalizar = () => {
    const service = getSelectedService();
    if (!service || !selectedDate) return;

    const dateStr = selectedDate.toLocaleDateString('pt-BR');
    
    let message = `Olá! Gostaria de agendar uma sessão.\n\n`;
    message += `*Serviço:* ${service.title}\n`;
    message += `*Data desejada:* ${dateStr}\n`;
    message += `*Valor:* ${service.price}\n`;
    message += `*Duração:* ${service.duration}\n\n`;
    message += `*Dados do paciente:*\n`;
    message += `Nome: ${formData.name}\n`;
    message += `E-mail: ${formData.email}\n`;
    message += `WhatsApp: ${formData.whatsapp}\n`;
    if (formData.observation) {
      message += `\n*Observação:* ${formData.observation}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodedMessage}`, '_blank');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'service':
        return selectedService !== null;
      case 'professional':
        return true;
      case 'date':
        return selectedDate !== null;
      case 'info':
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      default:
        return true;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-navy p-6 md:p-8 text-white">
        <h3 className="text-2xl md:text-3xl serif mb-2 text-gold">Agendar Sessão</h3>
        <p className="text-sand/70 text-sm">Complete as etapas abaixo para agendar sua consulta.</p>
        
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <div className={`flex items-center gap-2 shrink-0 ${getStepIndex() >= idx ? 'text-gold' : 'text-white/30'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  getStepIndex() > idx ? 'bg-gold text-navy' : 
                  getStepIndex() === idx ? 'border-2 border-gold text-gold' : 
                  'border border-white/30 text-white/30'
                }`}>
                  {getStepIndex() > idx ? <Check size={16} /> : idx + 1}
                </div>
                <span className="text-xs hidden md:block">{stepLabels[step]}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`w-8 h-0.5 shrink-0 ${getStepIndex() > idx ? 'bg-gold' : 'bg-white/20'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 min-h-[400px]">
        {currentStep === 'service' && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-navy mb-4">Selecione o que você deseja agendar: *</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SCHEDULING_SERVICES.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`group relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id 
                    ? 'border-navy bg-navy/5 shadow-lg' 
                    : 'border-gray-200 hover:border-navy/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-navy text-lg">{service.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{service.description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      selectedService === service.id ? 'bg-navy border-navy text-white' : 'border-gray-300'
                    }`}>
                      {selectedService === service.id && <Check size={14} strokeWidth={3} />}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="font-bold text-navy">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'professional' && (
          <div className="space-y-6">
            <p className="text-sm font-bold text-navy mb-4">Com quem? *</p>
            <div 
              className="flex items-center gap-4 p-6 rounded-xl border-2 border-navy bg-navy/5 cursor-pointer"
            >
              <img 
                src="/images/logo-beatriz.jpeg" 
                alt="Beatriz Fauth"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h4 className="font-bold text-navy text-xl">Beatriz Fauth</h4>
                <p className="text-gray-500 text-sm">Psicóloga e Psicanalista</p>
                <p className="text-gray-400 text-xs mt-1">{CONTACT_INFO.crp}</p>
              </div>
              <div className="ml-auto w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                <Check size={14} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </div>
        )}

        {currentStep === 'date' && (
          <div className="space-y-6">
            <p className="text-sm font-bold text-navy mb-4">Escolha a data desejada: *</p>
            
            <div className="bg-sand rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} className="text-navy" />
                </button>
                <h4 className="text-lg font-bold text-navy capitalize">{formatMonth(currentMonth)}</h4>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <ChevronRight size={20} className="text-navy" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(day => (
                  <div key={day} className="text-center text-xs font-bold text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((day, idx) => (
                  <div key={idx} className="aspect-square">
                    {day && (
                      <button
                        onClick={() => selectDate(day)}
                        disabled={isPastDate(day)}
                        className={`w-full h-full rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                          isDateSelected(day)
                            ? 'bg-navy text-white'
                            : isPastDate(day)
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'hover:bg-navy/10 text-navy'
                        }`}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {selectedDate && (
                <div className="mt-6 p-4 bg-white rounded-lg border border-navy/10">
                  <div className="flex items-center gap-3 text-navy">
                    <Calendar size={18} className="text-gold" />
                    <span className="font-bold">
                      Data selecionada: {selectedDate.toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {currentStep === 'info' && (
          <div className="space-y-6">
            <p className="text-sm font-bold text-navy mb-4">Preencha seus dados:</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-navy mb-2 block uppercase">Nome completo *</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome completo"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-navy outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy mb-2 block uppercase">E-mail *</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-navy outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy mb-2 block uppercase">WhatsApp (com DDD)</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    placeholder="(47) 99999-9999"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-navy outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy mb-2 block uppercase">Observação</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400" />
                  <textarea 
                    value={formData.observation}
                    onChange={(e) => setFormData({...formData, observation: e.target.value})}
                    placeholder="Alguma observação ou informação adicional..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-navy outline-none transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'confirm' && (
          <div className="space-y-6">
            <p className="text-sm font-bold text-navy mb-4">Confirme os dados do agendamento:</p>
            
            <div className="bg-sand rounded-xl p-6 space-y-4">
              {getSelectedService() && (
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <img 
                      src={getSelectedService()!.image} 
                      alt={getSelectedService()!.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-bold text-navy">{getSelectedService()!.title}</p>
                      <p className="text-xs text-gray-500">Duração: {getSelectedService()!.duration}</p>
                    </div>
                  </div>
                  <span className="font-bold text-navy">{getSelectedService()!.price}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <Calendar size={18} className="text-gold" />
                <span className="text-navy">
                  {selectedDate?.toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Nome:</span> <span className="text-navy font-medium">{formData.name}</span></p>
                <p><span className="text-gray-500">E-mail:</span> <span className="text-navy font-medium">{formData.email}</span></p>
                {formData.whatsapp && <p><span className="text-gray-500">WhatsApp:</span> <span className="text-navy font-medium">{formData.whatsapp}</span></p>}
                {formData.observation && <p><span className="text-gray-500">Observação:</span> <span className="text-navy font-medium">{formData.observation}</span></p>}
              </div>
            </div>

            <div className="bg-navy/5 rounded-xl p-6 flex items-center justify-between">
              <span className="text-lg font-bold text-navy">Total:</span>
              <span className="text-2xl font-bold text-navy">{calculateTotal()}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        {currentStep !== 'service' ? (
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors"
          >
            <ChevronLeft size={18} />
            Voltar
          </button>
        ) : (
          <div />
        )}

        {currentStep !== 'confirm' ? (
          <button 
            onClick={goToNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
              canProceed()
                ? 'bg-navy text-white hover:bg-teal-900 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === 'info' ? 'Último passo' : currentStep === 'date' ? 'Último passo' : 'Próximo'}
            <ChevronRight size={18} />
          </button>
        ) : (
          <button 
            onClick={handleFinalizar}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            <Send size={18} />
            Finalizar agendamento
          </button>
        )}
      </div>
    </div>
  );
};

export default SchedulingTool;
