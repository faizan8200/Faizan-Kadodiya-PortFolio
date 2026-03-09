import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <Code2 className="text-emerald-400" size={40} />
          Skills
        </h2>
        <div className="h-1 w-24 bg-emerald-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wider text-sm">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="bg-white/10 text-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
