import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <GraduationCap className="text-orange-400" size={36} />
            Education
          </h2>
          <div className="h-1 w-24 bg-orange-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-orange-500/30 pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-gray-400 mt-1">{edu.institution}</p>
              <div className="flex items-center gap-4 mt-2 text-sm font-mono text-orange-300">
                <span>{edu.year}</span>
                <span>•</span>
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <Award className="text-yellow-400" size={36} />
            Certifications
          </h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
            >
              <Award className="text-yellow-400 shrink-0 mt-1" size={20} />
              <p className="text-gray-300 leading-relaxed">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
