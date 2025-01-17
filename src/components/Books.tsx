import React from 'react';
import { BookOpen, DollarSign, Star } from 'lucide-react';

const books = [
  {
    title: "Modern Web Development",
    description: "A comprehensive guide to building scalable web applications using modern technologies and best practices.",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=1000",
    price: "$29.99",
    rating: 4.8,
    reviews: 128,
    link: "https://amazon.com"
  },
  {
    title: "React Design Patterns",
    description: "Learn advanced React patterns and techniques to build maintainable and efficient applications.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000",
    price: "$34.99",
    rating: 4.9,
    reviews: 95,
    link: "https://amazon.com"
  }
];

export default function Books() {
  return (
    <section id="books" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Published Books
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {books.map((book, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-full md:w-1/3 aspect-[3/4]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{book.description}</p>
                
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{book.rating}</span>
                  <span className="text-gray-500">({book.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-xl font-bold text-green-600">{book.price}</span>
                  </div>
                  
                  <a
                    href={book.link}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}