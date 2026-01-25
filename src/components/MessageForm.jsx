// src/components/MessageForm.jsx
import React, { useState } from 'react';
import { filterProfanity } from '../services/firebase';

const MessageForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    to: '',
    message: '',
    from: ''
  });
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'messageInput') {
      setCharCount(value.length);
    }
    
    setFormData(prev => ({
      ...prev,
      [id === 'toInput' ? 'to' : 
       id === 'messageInput' ? 'message' : 
       'from']: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Apply profanity filter
    const filteredData = {
      to: filterProfanity(formData.to.trim()),
      from: filterProfanity(formData.from.trim()) || 'Si Misterius',
      text: filterProfanity(formData.message.trim())
    };

    if (!filteredData.to || !filteredData.text) return;
    
    onSubmit(filteredData);
    setFormData({ to: '', message: '', from: '' });
    setCharCount(0);
  };

  return (
    <div className="md:col-span-5 relative mb-4 md:mb-0 z-10">
      <div className="md:sticky md:top-28">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 relative overflow-hidden ring-1 ring-gray-100">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-soft-red-light rounded-full blur-2xl opacity-80 pointer-events-none"></div>

          <h2 className="text-2xl font-serif font-bold mb-2 text-charcoal">Bisikin dulu gak sih?</h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">
            Bisikin apa aja, gak akan ada yang tau kok. Aman banget.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* To */}
            <div className="group">
              <label htmlFor="toInput" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-soft-red-dark transition-colors">
                Untuk
              </label>
              <input
                type="text"
                id="toInput"
                value={formData.to}
                onChange={handleChange}
                placeholder="Seseorang"
                maxLength="30"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-base md:text-sm font-medium focus:outline-none focus:border-soft-red-dark focus:ring-2 focus:ring-soft-red-light focus:bg-white transition-all duration-300 placeholder-gray-400 text-charcoal"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label htmlFor="messageInput" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-soft-red-dark transition-colors">
                Pesan
              </label>
              <textarea
                id="messageInput"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Mau bisikin apa nih?"
                required
                maxLength="280"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-base md:text-sm font-medium focus:outline-none focus:border-soft-red-dark focus:ring-2 focus:ring-soft-red-light focus:bg-white transition-all duration-300 placeholder-gray-400 text-charcoal resize-none break-words"
              />
              <div className={`text-right text-[10px] mt-1 font-bold ${charCount >= 280 ? 'text-red-500' : 'text-gray-400'}`}>
                {charCount}/280
              </div>
            </div>

            {/* From */}
            <div className="group">
              <label htmlFor="fromInput" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-soft-red-dark transition-colors">
                Dari (Opsional)
              </label>
              <input
                type="text"
                id="fromInput"
                value={formData.from}
                onChange={handleChange}
                placeholder="Si Misterius"
                maxLength="30"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-base md:text-sm font-medium focus:outline-none focus:border-soft-red-dark focus:ring-2 focus:ring-soft-red-light focus:bg-white transition-all duration-300 placeholder-gray-400 text-charcoal"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-charcoal text-white font-bold py-4 rounded-xl hover:bg-black hover:shadow-lg hover:shadow-gray-200 active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-3 mt-4 group border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  <span>Kirim Bisikan</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;