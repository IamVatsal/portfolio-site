"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FieldNotes from './components/FieldNotes';
import Philosophy from './components/Philosophy';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import NoteModal from './components/NoteModal';
import { Project, FieldNote } from './Utils/types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedNote, setSelectedNote] = useState<FieldNote | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check saved theme or match system
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0b1a2d] text-[#F9F7F7]' : 'bg-[#F9F7F7] text-[#112D4E]'} transition-colors duration-300 font-sans`}>
      {/* Top Navigation */}
      <Navbar 
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        scrolled={scrolled}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <MarqueeBanner />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Skills />
        <FieldNotes onSelectNote={(note) => setSelectedNote(note)} />
        <Philosophy />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <NoteModal 
        note={selectedNote} 
        onClose={() => setSelectedNote(null)} 
      />

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-grid-pattern opacity-60" />
    </div>
  );
};

export default App;
