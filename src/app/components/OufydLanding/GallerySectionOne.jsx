'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function GallerySectionOne() {
  const [previewImage, setPreviewImage] = useState(null);
  const scrollerRef = useRef(null);

  // Generate unique shuffled numbers from 1 to 150
  const generateUniqueRandomImages = (max) => {
    const numbers = Array.from({ length: max }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  };

  const images = generateUniqueRandomImages(139);

  // Lock background scroll and pause animation when modal is open
  useEffect(() => {
    if (previewImage) {
      document.body.style.overflow = 'hidden';
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'paused';
      }
    } else {
      document.body.style.overflow = '';
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'running';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [previewImage]);

  return (
    <section
      className='relative px-4 py-10 bg-white overflow-hidden'
      id='gallery'
    >
      {/* Instruction Header */}
      <h2 className='text-center text-xl md:text-2xl font-semibold text-gray-700 mb-6'>
        Click on any image to view in full screen
      </h2>

      {/* Scrolling Image Row */}
      <div className='w-full overflow-hidden'>
        <div ref={scrollerRef} className='flex gap-4 w-max animate-scroll-x'>
          {[...images, ...images].map((n, i) => (
            <div
              key={i}
              className='shrink-0 w-[300px] h-[200px] relative group cursor-pointer'
              onClick={() => {
                const path = `/image_${n}.jpg`;
                setPreviewImage(path);
              }}
            >
              <Image
                src={`/image_${n}.jpg`}
                alt={`Gallery ${n}`}
                fill
                className='object-cover rounded shadow-md'
              />
              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-black/40 rounded opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
                <span className='text-white text-sm md:text-base font-semibold tracking-wide'>
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {previewImage && (
        <div
          className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center'
          onClick={() => setPreviewImage(null)} // Click anywhere closes modal
        >
          <div
            className='relative max-w-4xl w-full px-4'
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          >
            <button
              onClick={() => setPreviewImage(null)}
              className='absolute top-4 right-4 text-white text-3xl font-bold'
            >
              &times;
            </button>
            <Image
              src={previewImage}
              alt='Preview'
              width={1000}
              height={600}
              className='w-full max-h-[80vh] object-contain rounded-lg shadow-lg'
            />
          </div>
        </div>
      )}
    </section>
  );
}
