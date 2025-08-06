'use client';

import Image from 'next/image';

export default function GallerySectionTwo() {
  return (
    <section className='px-4 py-6'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {[5, 6, 7, 8, 9, 10].map((n) => (
          <Image
            key={n}
            src={`/image_${n}.jpg`}
            width={400}
            height={400}
            alt={`Gallery ${n}`}
            className='rounded'
          />
        ))}
      </div>
    </section>
  );
}
