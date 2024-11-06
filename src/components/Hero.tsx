import React from 'react';
import { Scissors, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div id="accueil" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <div className="flex justify-center mb-6">
            <Scissors className="h-16 w-16 text-amber-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            L'Art de la Coiffure Masculine
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Expertise barbier, coupes tendances et soins pour hommes
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8 text-amber-500">
            <Clock className="h-6 w-6" />
            <span className="text-lg font-semibold">Sans rendez-vous - Service rapide</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
            >
              Nos services
            </a>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-8 py-3 rounded-md">
              <span className="text-white font-semibold">Ouvert aujourd'hui jusqu'à 19h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}