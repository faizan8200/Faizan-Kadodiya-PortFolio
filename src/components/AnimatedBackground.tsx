import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min'; // Import the Net effect

export const AnimatedBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null); // Ref for the background div
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    let vantaEffect: any = null;

    if (!isReducedMotion && vantaRef.current) {
      // Initialize the Net effect
      vantaEffect = NET({
        el: vantaRef.current, // Attach to the div
        mouseControls: true,    // Allow mouse interaction
        touchControls: true,    // Allow touch interaction
        gyroControls: false,    // Disable gyroscope (not needed for desktop)
        minHeight: 200.00,      // Minimum height for scaling
        minWidth: 200.00,       // Minimum width for scaling
        scale: 1.00,            // Scale factor
        scaleMobile: 1.00,      // Scale on mobile
        color: 0x3f51b5,        // Line color (blue, matches your theme)
        backgroundColor: 0x000000, // Black background
        points: 10.00,          // Number of connection points
        maxDistance: 20.00,     // Max distance for connections
        spacing: 15.00,         // Spacing between points
      });
    }

    // Cleanup on unmount or when effect changes
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [isReducedMotion]); // Re-run if reduced motion changes

  // Fallback for reduced motion or if Vanta fails
  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-gradient-to-br from-[#050505] to-[#111827]" />
    );
  }

  // Main background div for Vanta
  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};
