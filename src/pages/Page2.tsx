import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Page2Props {
  onNext: () => void;
}

export const Page2: React.FC<Page2Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative">
        <motion.img 
          src="https://files.catbox.moe/1rxm8l.png" 
          alt="Bunny with Heart" 
          className="w-48 h-48 object-contain drop-shadow-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="space-y-2 text-center">
        <motion.h1 
          className="text-3xl font-bold text-[#7a4a2e]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sending You Love
        </motion.h1>
        <motion.h2 
          className="text-xl text-[#b08968]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From the bottom of my heart
        </motion.h2>
      </div>

      <motion.button
        onClick={onNext}
        className="
          px-6 py-3
          bg-[#c2a77d]
          text-white
          rounded-full
          font-semibold
          shadow-lg
          hover:bg-[#a68b63]
          transition-colors
          flex items-center gap-2
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next <ArrowRight size={20} />
      </motion.button>
    </div>
  );
};


