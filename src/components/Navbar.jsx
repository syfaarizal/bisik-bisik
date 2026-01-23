// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <img 
            className="w-[200px] object-contain" 
            src="/logo-bisik-bisik.png" 
            alt="logo bisik-bisik" 
          />
        </h1>
        <div className="hidden md:block text-xs font-bold tracking-widest text-gray-500 uppercase">
          Suarakan Tanpa Nama
        </div>
      </div>
    </nav>
  );
};

export default Navbar;