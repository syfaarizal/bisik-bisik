// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-auto bg-white/60 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">
          &copy; 2026 Bisik-bisik <span className="mx-2">•</span> 
          Dibuat dengan <span className="text-soft-red-dark animate-pulse">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;