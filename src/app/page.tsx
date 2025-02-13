'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('light-mode')
    document.body.classList.toggle('dark-mode')
  }

  const projects = [
    {
      title: 'Zentry Gaming',
      description: 'Website',
      image: '/placeholder-project-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Layers',
      description: 'Website',
      image: '/placeholder-project-2.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind']
    },
    {
      title: 'AI Summarizer',
      description: 'Website',
      image: '/placeholder-project-3.jpg',
      tags: ['Python', 'TensorFlow', 'Flask']
    }
  ]

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '3', label: 'Years Experience' },
    { value: '15+', label: 'Technologies' },
    { value: '98%', label: 'Client Satisfaction' }
  ]

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Lead development of enterprise applications using React and Node.js'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      period: '2020 - 2022',
      description: 'Built scalable web applications and managed client relationships'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2019 - 2020',
      description: 'Developed and maintained company website and internal tools'
    }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 border-b border-blue-900/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            LS
          </h1>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <button onClick={toggleTheme} className="hover:text-blue-400 transition-colors">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Lungelo Sibisi
                </span>
              </h2>
              <h3 className="text-3xl text-gray-400 mb-6">
                Software Engineer & Web Developer
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Crafting digital experiences through clean code and creative solutions. 
                Specialized in full-stack development with a passion for emerging technologies.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <i className="fab fa-github"></i>
                  <span>Github</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <Image
                src="/api/placeholder/400/400"
                alt="Profile picture"
                width={400}
                height={400}
                className="relative rounded-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800 transition-colors">
                <div className="relative mb-4">
                  <Image
                    src="/api/placeholder/400/300"
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <i className="fas fa-external-link-alt"></i>
                      View Project
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-sm bg-gray-700/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-4">{exp.company} - {exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
