'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

export default function OufydFooter() {
  const [showButton, setShowButton] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative bg-black text-white text-center px-4 py-20 overflow-hidden min-h-screen flex items-center justify-center'>
      {/* Background image */}
      <Image
        src='/image_49.jpg'
        alt='Footer Background'
        fill
        className='absolute inset-0 object-cover z-0'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70 backdrop-blur-md z-0'></div>

      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center justify-center space-y-6 max-w-5xl px-4'>
        <Image
          src='/image_50.jpg'
          alt='OUFYD Logo'
          width={100}
          height={100}
          className='mb-2'
        />

        <h2 className='uppercase font-extrabold tracking-tight text-white leading-[1.1]'>
          <span className='block text-[36px] md:text-[64px] font-black tracking-tighter'>
            Oke Umunagho
          </span>
          <span className='block text-[36px] md:text-[64px] font-black tracking-tighter'>
            Foundation
          </span>
          <span className='block text-[36px] md:text-[64px] font-black tracking-tighter'>
            For Youths
          </span>
          <span className='block text-[36px] md:text-[64px] font-black tracking-tighter'>
            Development
          </span>
        </h2>

        <p className='text-sm md:text-base text-gray-300 font-light'>
          Empowering Youths, Transforming Futures.
        </p>

        <div className='font-semibold text-white uppercase tracking-wider text-sm md:text-base'>
          AI for Delta&apos;s Future
          <div className='text-xs md:text-sm font-light tracking-normal mt-1 text-gray-300'>
            Innovate. Transform. Lead.
          </div>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-50 bg-white text-black hover:bg-gray-200 transition-all shadow-lg rounded-full p-3'
          aria-label='Back to Top'
        >
          <ChevronUp className='w-5 h-5' />
        </button>
      )}
    </footer>
  );
}
