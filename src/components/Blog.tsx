import React, { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Building an AI Interviewer with BERT and GPT",
    excerpt: "Exploring the development of an advanced AI interviewer system that combines BERT's language understanding with GPT's response generation, enhanced with computer vision for behavioral analysis.",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
    tags: ["AI", "BERT", "GPT", "Computer Vision"]
  },
  {
    id: 2,
    title: "The Journey of Track Life: Lessons Learned",
    excerpt: "Reflecting on the development and closure of Track Life, a calendar-based task management application, and the valuable insights gained from this entrepreneurial experience.",
    date: "2024-01-20",
    readTime: "6 min read",
    category: "Entrepreneurship",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    tags: ["Startup", "Web Development", "Product Management"]
  },
  {
    id: 3,
    title: "Life for Earth: Making a Difference",
    excerpt: "How we planted 3,500+ trees and created animal shelters through our nonprofit organization, and our ongoing mission to protect the environment.",
    date: "2023-12-10",
    readTime: "5 min read",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    tags: ["Environment", "Nonprofit", "Conservation"]
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'AI & Technology', 'Entrepreneurship', 'Environmental'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Blog & Articles
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`#blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}