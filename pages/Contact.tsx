
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import SchedulingTool from '../components/SchedulingTool';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-6">Agendar Sessão</h1>
          <p className="text-xl text-sand/70 font-light max-w-2xl mx-auto">
            Escolha a modalidade que melhor atende suas necessidades e inicie seu processo de cuidado e autoconhecimento.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {/* Interactive Tool */}
            <SchedulingTool />

            {/* Info and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-12 border-t border-gray-100">
              <div>
                <h2 className="text-3xl serif text-navy mb-8">Informações de Atendimento</h2>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center text-gold shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Localização</h4>
                      <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center text-gold shrink-0">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Horários</h4>
                      <p className="text-gray-600">Segunda a Sexta: 08:00 – 20:00<br/>Atendimentos com hora marcada.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center text-gold shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">E-mail Direto</h4>
                      <p className="text-gray-600 break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 flex gap-4">
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl border border-gold/20 text-navy font-bold hover:bg-gold hover:text-white transition-all">
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                  <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl border border-gold/20 text-navy font-bold hover:bg-gold hover:text-white transition-all">
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] overflow-hidden shadow-2xl h-[450px] bg-gray-200 border border-gold/10 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.73484218698!2d-48.6369062!3d-26.9911463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b671a5a892b9%3A0xc3f8e5b4c4897f7!2sR.%201021%2C%20254%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-675!5e0!3m2!1spt-BR!2sbr!4v1715783456789!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
