import { useEffect, useRef } from 'react';
import type { VantaEffect } from 'vanta/dist/vanta.net.min';
import NET from 'vanta/dist/vanta.net.min';
// @ts-ignore
import * as THREE from 'three';

export const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaRef.current || effectRef.current) {
      return;
    }

    effectRef.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: false,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x24398c,
      backgroundColor: 0x030315,
      points: 6,
      maxDistance: 15,
      spacing: 15,
      showDots: false,
    });

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
        style={{ backgroundColor: '#030315' }}
      />
      <div className="backdrop pointer-events-none fixed inset-0 z-10" />
    </>
  );
};
