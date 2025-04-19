"use client"

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SignatureAnimation = () => {
  const controls = useAnimation();
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      // Get the path length for the animation
      const pathLength = pathRef.current.getTotalLength();
      
      // Setup initial state - hidden
      controls.set({ 
        pathLength: 0,
        opacity: 1
      });
      
      // Animate drawing the signature
      controls.start({
        pathLength: 1,
        transition: { 
          duration: 2.5, 
          ease: "easeInOut",
        }
      });
    }
  }, [controls]);

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="signature-animation"
    >
      <motion.path
        ref={pathRef}
        d="M20,40 C30,10 40,30 50,40 C60,50 70,20 80,30 C90,40 100,10 110,40 M130,20 C130,30 130,40 130,50 M125,35 C135,35 145,35 155,35"
        fill="transparent"
        strokeWidth={2}
        stroke="currentColor"
        animate={controls}
        style={{ pathLength: 0 }}
      />
    </motion.svg>
  );
};

export default SignatureAnimation;