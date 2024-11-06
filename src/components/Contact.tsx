import React from 'react';
import { MapPin, Phone, Clock, Mail, Scissors, Users } from 'lucide-react';

export default function Contact() {
  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Place+de+la+Beauté+1,+1070+Anderlecht', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Passez Nous Voir
          </h2>
          <p className="text-lg text-gray-600">
            Sans rendez-vous, service rapide et professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div 
              className="flex items-start space-x-4 cursor-pointer hover:text-amber-600 transition"
              onClick={handleAddressClick}
            >
              <MapPin className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Notre Adresse</h3>
                <p className="text-gray-600">Place de la Beauté 1<br />1070 Anderlecht</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                <p className="text-gray-600">02 123 45 67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Mardi - Dimanche: 10h - 20h</p>
                  <p>Lundi: Fermé</p>
                  <p className="font-semibold text-amber-600 mt-2">
                    Sans rendez-vous - Temps d'attente moyen: 15-20 min
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-2 rounded-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sans Rendez-vous</h4>
                  <p className="text-gray-400">Passez quand vous voulez, nous nous occupons de vous</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-2 rounded-md">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Service Rapide</h4>
                  <p className="text-gray-400">Coiffeurs expérimentés pour un service efficace</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-2 rounded-md">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Équipe Professionnelle</h4>
                  <p className="text-gray-400">Des experts de la coiffure pour toute la famille</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}