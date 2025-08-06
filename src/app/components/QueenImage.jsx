'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/queen2.jpg',
  '/queen3.jpg',
  '/queen4.jpg',
  '/queen5.jpg',
  '/queen6.jpg',
  '/image_150.jpg',
  '/image_152.jpg',
  '/queen1.jpg',
];

export default function QueenImage() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative bg-black py-16 px-4'>
      {/* Optional background texture */}
      <Image
        src='/queen1.jpg'
        alt='Background'
        fill
        className='object-cover opacity-10 blur-sm pointer-events-none z-0'
      />

      {/* Grid of images */}
      <div className='relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto'>
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative aspect-[3/4] w-full rounded overflow-hidden transition-opacity duration-1000 ${
              i === visibleIndex ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <Image
              src={src}
              alt={`Queen ${i + 1}`}
              fill
              className='object-cover rounded'
            />
          </div>
        ))}
      </div>

      {/* Optional soft glow overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_80%)] z-20 pointer-events-none' />
    </section>
  );
}
