import React from 'react';
import { Scissors, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Place+de+la+Beauté+1,+1070+Anderlecht', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold">Coiffure La Classe</span>
            </div>
            <p className="text-gray-400">
              Votre salon de coiffure professionnel à Anderlecht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p className="cursor-pointer hover:text-amber-500" onClick={handleAddressClick}>
                Place de la Beauté 1, 1070 Anderlecht
              </p>
              <p>Tél: 02 123 45 67</p>
              <p>Email: contact@coiffurelaclasse.be</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires d'Ouverture</h3>
            <div className="space-y-2 text-gray-400">
              <p>Mardi - Dimanche: 10h - 20h</p>
              <p>Lundi: Fermé</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Coiffure La Classe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}