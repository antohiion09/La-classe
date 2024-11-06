import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

const existingReviews = [
  {
    name: "Sophie Martin",
    rating: 5,
    comment: "Un service exceptionnel ! Je suis ravie de ma nouvelle coupe.",
    date: "2024-02-15"
  },
  {
    name: "Pierre Dubois",
    rating: 5,
    comment: "Équipe professionnelle et accueillante. Je recommande vivement !",
    date: "2024-02-10"
  },
  {
    name: "Marie Lambert",
    rating: 4.5,
    comment: "Très satisfaite du résultat. L'ambiance est agréable.",
    date: "2024-02-05"
  }
];

export default function Reviews() {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique pour envoyer l'avis à votre backend
    alert('Merci pour votre avis !');
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <section id="avis" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">
          Avis Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {existingReviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                {review.rating % 1 !== 0 && (
                  <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />
                )}
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.name}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Partagez votre expérience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre nom
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note
              </label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="5">5 étoiles</option>
                <option value="4">4 étoiles</option>
                <option value="3">3 étoiles</option>
                <option value="2">2 étoiles</option>
                <option value="1">1 étoile</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre commentaire
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition"
            >
              Envoyer mon avis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}