import React from 'react';

export const Bunny = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22c-4 0-7-3-7-7V9c0-3 2-5 2-5s1-2 3-2 3 2 3 2 2 2 2 5v6c0 4-3 7-7 7z" />
    <path d="M9 4C9 4 8 2 9 1c1 1 2 3 2 3" />
    <path d="M15 4c0 0 1-2 0-3-1 1-2 3-2 3" />
    <path d="M9 16a3 3 0 0 0 6 0" />
    <path d="M10 12h.01" />
    <path d="M14 12h.01" />
  </svg>
);
