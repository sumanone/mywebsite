import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Rocket, Target, Heart } from 'lucide-react';

export default function About() {
  const missions = [
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Aspiring to launch a revolutionary space tech company that will make space exploration more accessible and sustainable."
    },
    {
      icon: Code,
      title: "AI Innovation",
      description: "Developing cutting-edge AI solutions, including a BERT + GPT-based AI interviewer with behavioral analysis capabilities."
    },
    {
      icon: Heart,
      title: "Environmental Impact",
      description: "Leading Life for Earth to create lasting environmental change through tree planting and animal welfare initiatives."
    }
  ];

  const achievements = [
    "Founded Life for Earth, planting 3,500+ trees",
    "Developed Track Life and Taskflow-Connector",
    "Working on AI-powered interviewer system",
    "Active participant in science fairs and school politics"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
          About Me
        </h2>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <mission.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
              <p className="text-gray-300">{mission.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>
          
          <div className="space-y-12">
            {/* Education */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="md:text-right">
                <GraduationCap className="inline-block w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-gray-300">Falakata High School (PCM, 2022–2024)</p>
                <p className="text-gray-300">Bangiya Sangeet Parishad (2017–2022)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
                <p className="text-gray-300">
                  Pursuing PCM with a focus on JEE preparation. Active participant in art and science fairs.
                  Completed diploma in fine arts, specializing in painting.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center animate-fade-in-delay-1">
              <div className="md:text-right order-1 md:order-2">
                <Briefcase className="inline-block w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-gray-300">Founder at Track Life & Taskflow Connector</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl order-2 md:order-1">
                <p className="text-gray-300">
                  Built and launched two web applications focused on task management and productivity.
                  Gained valuable experience in full-stack development and entrepreneurship.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center animate-fade-in-delay-2">
              <div className="md:text-right">
                <Award className="inline-block w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-2xl font-bold mb-2">Achievements</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300">{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-4 gap-8 animate-fade-in-delay-3">
          <div className="col-span-full">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
          </div>
          {[
            "BERT", "GPT", "Computer Vision", "Node.js",
            "React.js", "MongoDB", "Python", "OpenCV",
            "Space Technology", "Environmental Conservation",
            "Project Management", "Leadership"
          ].map((skill, index) => (
            <div
              key={skill}
              className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-center transform hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}