import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Page1Props {
  onNext: () => void;
}

export const Page1: React.FC<Page1Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <motion.div 
        className="relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* 🐰 Bunny animation (faster & smoother) */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 1.5, -1.5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://files.catbox.moe/6e4n95.png" 
            alt="Bunny with Cake" 
            className="w-48 h-48 object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      <div className="space-y-2 text-center">
        <motion.h1 
          className="text-4xl font-bold text-[#F57799]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Happy Valentine, i have a little surprise for you!
        </motion.h1>
        <motion.h2 
          className="text-xl text-[#FB9B8F]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          A special surprise awaits...
        </motion.h2>
      </div>

      <motion.button
        onClick={onNext}
        className="
          px-6 py-3
          bg-[#FB9B8F]
          text-white
          rounded-full
          font-semibold
          shadow-lg
          hover:bg-[#FDC3A1]
          transition-colors
          flex items-center gap-2
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Continue <ArrowRight size={20} />
      </motion.button>
    </div>
  );
};





