import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Page4Props {
  onNext: () => void;
}

export const Page4: React.FC<Page4Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-lg">
      <motion.div 
        className="
          w-full
          aspect-[4/3]
          rounded-2xl
          overflow-hidden
          shadow-xl
          border-4
          border-[#FB9B8F]
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://files.catbox.moe/2rj21p.jpg" 
          alt="Birthday Candles" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="space-y-4 text-center">
        <p className="
          text-xl
          text-[#F57799]
          leading-relaxed
          font-medium
          font-serif
        ">
          Happy Valentine Reverie, I love You
        </p>
      </div>

      <motion.button
        onClick={onNext}
        className="
          p-4
          bg-[#FB9B8F]
          text-white
          rounded-full
          shadow-lg
          hover:bg-[#FDC3A1]
          transition-colors
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next"
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.button>
    </div>
  );
};






