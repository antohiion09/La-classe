import React from 'react';
import { Scissors, Clock } from 'lucide-react';

const services = [
  {
    title: "Coupe Cheveux + Barbe",
    price: "25€",
    description: "Coupe complète avec taille de barbe",
    duration: "45 min"
  },
  {
    title: "Coupe Dégradé",
    price: "15€",
    description: "Dégradé tendance et précis",
    duration: "30 min"
  },
  {
    title: "Coupe Enfants",
    price: "10€",
    description: "Coupe adaptée pour les enfants",
    duration: "20 min"
  },
  {
    title: "Barbe",
    price: "10€",
    description: "Taille et soin de la barbe",
    duration: "20 min"
  },
  {
    title: "Shampoing + Brushing",
    price: "5€",
    description: "Lavage et mise en forme",
    duration: "15 min"
  },
  {
    title: "Mèches",
    price: "à partir de 20€",
    description: "Mèches personnalisées",
    duration: "1h+"
  },
  {
    title: "Coloration",
    price: "à partir de 15€",
    description: "Coloration professionnelle",
    duration: "45 min+"
  },
  {
    title: "Lissage",
    price: "à partir de 35€",
    description: "Lissage durable",
    duration: "1h30+"
  },
  {
    title: "Épilation à la Cire",
    price: "5€",
    description: "Épilation visage",
    duration: "15 min"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            Des prestations sur mesure pour tous les styles
          </p>
          <div className="inline-block bg-amber-600/10 text-amber-500 px-4 py-2 rounded-full">
            Sans rendez-vous - Service rapide et professionnel
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="text-xl font-bold text-amber-500">{service.price}</span>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-2" />
                <span>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}