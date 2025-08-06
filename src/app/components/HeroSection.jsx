'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative bg-white py-16 px-4'>
      {/* Background blur */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero_Photo.png'
          alt='Background classroom'
          layout='fill'
          objectFit='cover'
          className='opacity-30 blur-sm'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        {/* Logo */}
        <div className='flex justify-end mb-4'>
          <Image src='/ouf.png' alt='OUF Logo' width={90} height={60} />
        </div>

        {/* Heading */}
        <h1 className='text-6xl font-extrabold tracking-tight text-blue-900 uppercase leading-tight'>
          AI For <br className='md:hidden' />
          Delta’s Future
        </h1>

        <p className='mt-2 text-sm tracking-wider text-gray-700 uppercase'>
          OKE UMUNAGHO FOUNDATION FOR YOUTH MANAGEMENT
        </p>

        {/* Queen Image */}
        <div className='relative w-[300px] h-[400px] mx-auto mt-8'>
          <Image
            src='/hero_Photo.png'
            alt='Queen Success Umunagho'
            layout='fill'
            objectFit='cover'
            className='rounded-xl shadow-lg'
          />
        </div>

        {/* Name and Title */}
        <h2 className='mt-6 text-2xl font-bold text-blue-900 uppercase tracking-wide'>
          Queen Success Umunagho
        </h2>
        <p className='text-sm text-gray-600 uppercase tracking-wider'>
          Queen of Delta @33
        </p>
      </div>
    </section>
  );
}
