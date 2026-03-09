import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-gradient-to-br from-[#050505] to-[#111827]" />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-[#030303] overflow-hidden">
      {/* Ambient glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-emerald-900/20 blur-[120px]"
      />
      
      {/* Subtle Noise Texture Overlay for a premium matte finish */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
