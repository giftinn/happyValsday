import React, { useRef, useState } from 'react';
import { Layout } from './components/Layout';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState(1);

  // 🔊 AUDIO REF
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const nextPage = () => {
    // ▶️ play music ONLY first time (Page1)
    if (!hasPlayed && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setHasPlayed(true);
    }

    setPage(p => Math.min(p + 1, 5));
  };

  return (
    <Layout>
      {/* 🎵 BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src="https://files.catbox.moe/teoxn2.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {page === 1 && <Page1 onNext={nextPage} />}
          {page === 2 && <Page2 onNext={nextPage} />}
          {page === 3 && <Page3 onNext={nextPage} />}
          {page === 4 && <Page4 onNext={nextPage} />}
          {page === 5 && <Page5 />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;


