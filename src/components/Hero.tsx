import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // In a real app, this would link to a PDF
    alert('Resume download initiated.');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300"
        >
          {resumeData.basics.location} • {resumeData.basics.email}
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
          {resumeData.basics.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
          {resumeData.basics.title}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          {resumeData.basics.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToExperience}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            View Experience
            <ArrowDown size={18} />
          </button>
          <button
            onClick={handleDownload}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            Download Resume
            <Download size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
