// src/components/MessageCard.jsx
import React from 'react';
import { timeAgo } from '../services/firebase';

const MessageCard = ({ message, index }) => {
  const date = message.createdAt ? new Date(message.createdAt.seconds * 1000) : new Date();
  const timeString = timeAgo(date);

  return (
    <div 
      className={`glass-card border border-gray-200 rounded-3xl p-6 fade-in hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-soft-red-light to-transparent rounded-bl-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-white text-xs font-serif font-bold italic shadow-md">
              To
            </div>
            <span className="font-bold text-lg text-charcoal tracking-tight">{message.to}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-md">
            {timeString}
          </span>
        </div>
        
        <div className="py-2 pl-1 border-l-[3px] border-soft-red-light ml-3">
          <p className="text-gray-800 text-sm whitespace-pre-wrap leading-relaxed pl-4 font-medium break-words">
            "{message.text}"
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="h-px bg-gray-200 flex-grow mr-4"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5 font-bold">Dari</span>
            <span className="text-xs font-bold text-soft-red-dark font-serif italic">{message.from}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;