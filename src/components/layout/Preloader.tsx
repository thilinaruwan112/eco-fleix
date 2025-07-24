'use client';

import { useState, useEffect } from 'react';
import { Recycle } from 'lucide-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <Recycle className="h-16 w-16 text-primary animate-spin" />
      </div>
    </div>
  );
};

export default Preloader;
