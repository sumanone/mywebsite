import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, ArrowDown, Rocket, Brain, Heart } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-network-connection-loop-animation-97.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-400 animate-slide-up">Hello, I'm</h2>
            <h1 className="text-6xl md:text-7xl font-bold animate-slide-up" style={{ animationDelay: '200ms' }}>
              Suman Mandal
            </h1>
            <div className="flex items-center space-x-4 text-xl text-blue-300 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Rocket className="w-6 h-6" />
              <span>Space Tech Enthusiast</span>
            </div>
            <div className="flex items-center space-x-4 text-xl text-green-300 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <Brain className="w-6 h-6" />
              <span>AI Developer</span>
            </div>
            <div className="flex items-center space-x-4 text-xl text-red-300 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <Heart className="w-6 h-6" />
              <span>Environmental Advocate</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-delay-1">
            A JEE aspirant with a passion for space technology and artificial intelligence. 
            Building the future through code and innovation.
          </p>

          <div className="flex space-x-6 animate-fade-in-delay-2">
            <a href="https://github.com" className="hero-social-link">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hero-social-link">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="hero-social-link">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <div className="flex space-x-4 animate-fade-in-delay-3">
            <a href="#about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all transform hover:scale-105">
              About Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full transition-all transform hover:scale-105">
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-delay-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://your-photo-url.jpg" // Replace with your actual photo URL
              alt="Suman Mandal"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </a>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}