import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Page3Props {
  onNext: () => void;
}

export const Page3: React.FC<Page3Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          rotate: [-5, 5, -5]
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img 
          src="https://files.catbox.moe/8q544j.png" 
          alt="Cute Mail Envelope" 
          className="w-48 h-48 object-contain drop-shadow-lg"
        />
      </motion.div>

      <div className="space-y-2 text-center">
        <motion.h1 
          className="text-3xl font-bold text-[#7a4a2e]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          You've Got Mail!
        </motion.h1>
        <motion.h2 
          className="text-xl text-[#b08968]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A special message just for you
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
        Open It <ArrowRight size={20} />
      </motion.button>
    </div>
  );
};

