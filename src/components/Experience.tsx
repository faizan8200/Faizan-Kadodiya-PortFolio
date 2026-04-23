import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <Briefcase className="text-blue-400" size={40} />
          Experience
        </h2>
        <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-8 py-6 flex flex-col md:flex-row md:items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-400">
                <span className="text-sm font-mono bg-black/30 px-3 py-1 rounded-full">
                  {exp.dates} | {exp.location}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 pt-2">
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
