import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Page5: React.FC = () => {
  const fullText =
    "it’s your day! wish u all the best sayang. happy b’day to uuu, selamat bertumbuh jauh lebih baik sayangku cintaaku, panjang umur, a wish for u on ur birthday, whatever u ask may u receive, whatever u seek may u find, whatever u wish may it be fulfilled on ur birthday and together, i hope u will walk on this journey, knowing that u belong babe, i hope even if things sometime don’t go ur way u will stop trying, u will not give up on urself and ur thoughest days, i hope u will reminding ur self of this word “u deserve better, kamu layak dicintai dan dirayakan dalam hal apapun” and may God grant u what ur heart truly desire, may God make everything u want good for u, so that may accept all ur prayers and wishes. thank u for accepting me. sometimes, yang bisa diandelin hanya diri kamu sendiri, tapi jangan pernah kamu ngerasa sendiri, if u need someone to talk, im here, and always here. semoga hal baik selalu mengelilingi kamu, semoga semesta selalu berpihak sama kamu, semoga jalanmu selalu dipermudah. aku akan selalu bangga atas setiap proses yang udah kamu lalui anak hebat anak kuat anak gantengg, i will always support u <33.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const speed = 28;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="
      flex
      items-stretch
      justify-center
      gap-8
      w-full
      max-w-2xl
      p-8
      bg-white
      rounded-xl
      shadow-lg
      border
      border-[#e6d9c8]
    ">
      
      {/* ✅ Vertical Line AUTO height */}
      <motion.div
        className="w-1 bg-[#c2a77d] rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold text-[#7a4a2e] mb-6 font-serif">
          happy birthday bebee ♡
        </h1>

        {/* Letter */}
        <div
          className="
            text-[17px]
            text-[#5b3a29]
            leading-[1.55]
            whitespace-pre-line
            font-serif
            tracking-wide
            max-w-[95%]
          "
        >
          {typedText}
          <span className="ml-0.5 animate-pulse opacity-50">|</span>
        </div>
      </div>
    </div>
  );
};

