'use client';

import Image from 'next/image';
import './WelcomeSection.css'; // ⬅️ We'll create this CSS file for radial gradient

export default function WelcomeSection() {
  return (
    <section className='relative bg-white text-center px-4 py-20' id='about'>
      <div className='max-w-3xl mx-auto'>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-extrabold text-purple-800 uppercase leading-tight'>
          Welcome Message From <br />
          Queen of Delta
        </h2>

        {/* Paragraphs */}
        <div className='mt-6 text-gray-800 text-base md:text-lg leading-relaxed font-medium'>
          <p>
            As the Queen of Delta, I am honored to spearhead the{' '}
            <strong>AI FOR DELTA’S FUTURE</strong> initiative under the
            <strong> OKE UMUNAGHO FOUNDATION FOR YOUTH DEVELOPMENT</strong>. Our
            goal is to bridge the gap between technology and economic
            empowerment by equipping Delta youths with practical knowledge of
            Artificial Intelligence (AI).
          </p>
          <p className='mt-4'>
            AI is the future, and Delta State must not be left behind. This
            initiative will create opportunities, drive innovation, and foster
            sustainable development across various sectors.
          </p>
        </div>

        {/* Quotation mark */}
        <div className='text-purple-800 text-5xl mt-4 font-extrabold tracking-wider'>
          &rdquo;
        </div>

        {/* Full Body Queen Image with All-Sides Fade */}
        <div className='relative w-full max-w-sm mx-auto mt-8 rounded-md overflow-hidden'>
          <Image
            src='/statue.jpg'
            alt='Queen of Delta Full Body'
            width={500}
            height={700}
            className='mx-auto object-contain relative z-10'
          />
          <div className='absolute inset-0 z-20 pointer-events-none white-radial-fade' />
        </div>
      </div>
    </section>
  );
}
