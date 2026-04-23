import React from 'react';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
          <Trophy className="text-yellow-400" size={40} />
          Impact & Achievements
        </h2>
        <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card relative overflow-hidden rounded-2xl p-8 text-center group"
          >
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-white mb-3">{achievement.item}</h3>
            <p className="text-yellow-200/80">{achievement.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
