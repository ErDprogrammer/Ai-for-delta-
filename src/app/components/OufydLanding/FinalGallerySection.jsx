'use client';

import Image from 'next/image';

export default function FinalGallerySection() {
  return (
    <section className='px-4 py-6'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {[11, 12, 13, 14, 15, 16].map((n) => (
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
