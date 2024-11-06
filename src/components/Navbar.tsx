import React from 'react';
import { Scissors, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-serif font-bold">Coiffure La Classe</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-amber-600 transition">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition">Services</a>
            <a href="#galerie" className="text-gray-700 hover:text-amber-600 transition">Galerie</a>
            <a href="#avis" className="text-gray-700 hover:text-amber-600 transition">Avis</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">01 23 45 67 89</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}