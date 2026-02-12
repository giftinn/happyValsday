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
          border-[#e6d5c3]
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://files.catbox.moe/oefqu5.jpg" 
          alt="Birthday Candles" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="space-y-4 text-center">
        <p className="
          text-xl
          text-[#7a4a2e]
          leading-relaxed
          font-medium
          font-serif
        ">
          i will never stop loving u, i will always love u, if you need me, when the world is not on your side, when your days are not going well, i will always be here, i will never leave you, even if i have to fight many things. 
          i will always be your side.
        </p>
      </div>

      <motion.button
        onClick={onNext}
        className="
          p-4
          bg-[#c2a77d]
          text-white
          rounded-full
          shadow-lg
          hover:bg-[#a68b63]
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



