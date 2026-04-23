/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { VantaBackground } from './components/VantaBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { resumeData } from './data/resume';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative isolate min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
        <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <VantaBackground />
          
          {/* Navigation / Header */}
          <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="font-bold text-xl tracking-tighter">FK</div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#education" className="hover:text-white transition-colors">Education</a>
              </nav>
              <div className="flex items-center gap-4">
                <a href={`mailto:${resumeData.basics.email}`} className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a href={`https://linkedin.com/${resumeData.basics.links[0]}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </header>

          <main className="relative z-20">
            <Hero />
            <Achievements />
            <Experience />
            <Projects />
            <Skills />
            <Education />
          </main>

          <footer className="border-t border-white/10 py-12 text-center relative z-20 backdrop-blur-md">
            <div className="flex justify-center gap-6 mb-6">
              <a href={`mailto:${resumeData.basics.email}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={18} /> Email
              </a>
              <a href={`tel:${resumeData.basics.phone}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Phone size={18} /> Phone
              </a>
              <a href={`https://linkedin.com/${resumeData.basics.links[0]}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
