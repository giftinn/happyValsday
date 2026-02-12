import React from 'react';
import { Confetti } from './Confetti';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-[#4A90E2] flex flex-col items-center justify-center p-4 font-sans overflow-hidden relative">
      <Confetti />
      <div className="w-full max-w-md mx-auto text-center relative z-10">
        {children}
      </div>
    </div>
  );
};
