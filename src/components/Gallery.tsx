import React from 'react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1622285886624-5a6767c26fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Coupe Moderne"
  },
  {
    url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Dégradé"
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Barbe"
  },
  {
    url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Style Classique"
  },
  {
    url: "https://images.unsplash.com/photo-1593702295094-ac9a661c3d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: "Coupe Tendance"
  },
  {
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80",
    title: "Notre Salon"
  }
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Notre Galerie
          </h2>
          <p className="text-lg text-gray-400">
            L'excellence de la coiffure masculine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}