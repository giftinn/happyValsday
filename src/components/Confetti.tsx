import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const colors = ['#F57799', '#FB9B8F', '#FDC3A1', '#FB9B8F', '#FDC3A1'];

interface ConfettiPieceProps {
  delay: number;
  x: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ delay, x }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div
      className="absolute top-[-20px]"
      style={{ 
        left: `${x}%`,
        color: color 
      }}
      initial={{ y: -20, rotate: 0, opacity: 1 }}
      animate={{ 
        y: '110vh', 
        rotate: 360,
        opacity: [1, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 2 + 3, 
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
};

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<number[]>([]);

  useEffect(() => {
    // Generate fixed number of pieces
    setPieces(Array.from({ length: 30 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((i) => (
        <ConfettiPiece key={i} delay={Math.random() * 5} x={Math.random() * 100} />
      ))}
    </div>
  );
};


