import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <FolderGit2 className="text-purple-400" size={40} />
          Projects
        </h2>
        <div className="h-1 w-24 bg-purple-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group relative rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs font-mono bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <ul className="space-y-3">
              {project.bullets.map((bullet, i) => {
                const [label, ...rest] = bullet.split(':');
                return (
                  <li key={i} className="text-gray-300 text-sm leading-relaxed">
                    {rest.length > 0 ? (
                      <>
                        <strong className="text-gray-100">{label}:</strong> {rest.join(':')}
                      </>
                    ) : (
                      bullet
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
