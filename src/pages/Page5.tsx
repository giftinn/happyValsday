import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Page5: React.FC = () => {
  const fullText =
    "Sebenernya aku bikin ini nggak pakai banyak mikir kata-kata yang ribet. Cuma pengen ngucapin aja karena hari ini momen yang lumayan spesial.

Makasih ya selama ini udah mau ngobrol sama aku. Dari hal-hal random, bahas topik nggak jelas, sampai cerita soal keseharian. Walaupun cuma lewat chat, tapi aku ngerasa ngobrol sama kamu selalu enak dan nggak bikin capek. 
  
Kamu tipe orang yang santai, nggak drama, dan nggak bikin suasana jadi ribet. Kalau lagi ngobrol sama kamu, rasanya ngalir aja, nggak perlu mikir harus ngomong apa. Itu jarang sih, jujur.

Kadang aku juga ngerasa terbantu sama cara kamu dengerin, nanggepin, atau sekadar hadir buat ngobrol. Hal-hal kecil kayak gitu kelihatannya biasa, tapi sebenernya berarti.

Semoga hari ini kamu lagi dalam kondisi yang baik. Nggak lagi banyak pikiran, nggak terlalu capek sama aktivitas kamu, dan tetap bisa nikmatin hari kamu. Semoga juga semua rencana kamu, target kamu, sama hal-hal yang lagi kamu kejar bisa jalan pelan-pelan.

Aku harap kamu selalu jaga kesehatan, jangan terlalu maksa diri, dan tetap jadi diri kamu sendiri. Karena versi kamu yang sekarang aja udah oke.

Intinya, makasih ya udah jadi orang yang bikin komunikasi ini tetap seru dan nyaman. Semoga ke depannya kita masih bisa sering ngobrol, tukar cerita, dan saling support, walaupun cuma lewat layar.
";

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
        className="w-1 bg-[#FB9B8F] rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold text-[#F57799] mb-6 font-serif">
          Happy Valentine, te'amour♡
        </h1>

        {/* Letter */}
        <div
          className="
            text-[17px]
            text-[#FB9B8F]
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


