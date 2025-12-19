
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Consulta inicial',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá Dra. Beatriz! Gostaria de agendar uma consulta.
    
*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Assunto:* ${formData.assunto}
*Mensagem:* ${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-navy mb-2 text-left">Nome Completo</label>
          <input
            required
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block text-sm font-semibold text-navy mb-2 text-left">WhatsApp</label>
          <input
            required
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            placeholder="(47) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2 text-left">E-mail</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="assunto" className="block text-sm font-semibold text-navy mb-2 text-left">Serviço de Interesse</label>
        <select
          name="assunto"
          id="assunto"
          value={formData.assunto}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
        >
          <option value="Psicanálise Individual">Psicanálise Individual</option>
          <option value="Terapia Familiar">Terapia Familiar</option>
          <option value="Terapia de Casal">Terapia de Casal</option>
          <option value="Atendimento a Jovens">Atendimento a Jovens</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold text-navy mb-2 text-left">Como posso ajudar?</label>
        <textarea
          required
          id="mensagem"
          name="mensagem"
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
          placeholder="Conte-me um pouco sobre sua busca..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-navy hover:bg-teal-900 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-navy/20"
      >
        Enviar para WhatsApp
        <Send size={20} />
      </button>
      <p className="text-xs text-center text-gray-500 italic mt-4">
        Ao clicar em enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
      </p>
    </form>
  );
};

export default ContactForm;
