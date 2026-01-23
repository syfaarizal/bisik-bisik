// src/components/MessageFeed.jsx
import React from 'react';
import MessageCard from './MessageCard';

const MessageFeed = ({ messages, loading, configError }) => {
  if (configError) {
    return (
      <div className="text-center py-10 bg-red-50 rounded-3xl border border-red-200 mx-2 p-6 shadow-sm">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">⚠️</div>
        <h3 className="text-red-900 font-bold mb-2">Konfigurasi Firebase Hilang</h3>
        <p className="text-sm text-red-700 mb-4 font-medium">
          Harap isi variabel lingkungan (.env) dengan konfigurasi Firebase Anda.
        </p>
        <div className="text-xs text-left bg-white p-3 rounded border border-red-200 overflow-x-auto text-gray-600">
          <code>REACT_APP_FIREBASE_API_KEY=your_api_key_here</code>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 bg-soft-red-dark rounded-full animate-bounce"></div>
          <div className="w-2.5 h-2.5 bg-soft-red-dark rounded-full animate-bounce delay-100"></div>
          <div className="w-2.5 h-2.5 bg-soft-red-dark rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-24 bg-white/60 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300 mx-2">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">🤫</div>
        <p className="text-gray-900 font-bold text-lg mb-1">Masih sunyi di sini.</p>
        <p className="text-sm text-gray-500 font-medium">Mulailah berbisik sekarang.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <MessageCard key={message.id} message={message} index={index} />
      ))}
    </div>
  );
};

export default MessageFeed;