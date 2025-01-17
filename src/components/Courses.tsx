import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

const courses = [
  {
    title: "Advanced React Development",
    description: "Master advanced React concepts including hooks, patterns, and performance optimization techniques.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    duration: "8 weeks",
    students: 1240,
    rating: 4.9,
    price: "$99.99",
    topics: ["Custom Hooks", "Performance", "State Management", "Testing"],
    link: "https://courses.example.com"
  },
  {
    title: "Full Stack MERN Development",
    description: "Build production-ready applications using MongoDB, Express, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    duration: "12 weeks",
    students: 850,
    rating: 4.8,
    price: "$149.99",
    topics: ["API Development", "Authentication", "Database Design", "Deployment"],
    link: "https://courses.example.com"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Online Courses
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                  {course.price}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{course.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href={course.link}
                  className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Enroll Now</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}