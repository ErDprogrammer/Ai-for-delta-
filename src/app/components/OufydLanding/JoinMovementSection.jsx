'use client';

import Image from 'next/image';

export default function JoinMovementSection() {
  return (
    <section
      className='text-center bg-white py-12 px-6 rounded shadow space-y-6'
      id='contact'
    >
      <h2 className='text-5xl md:text-6xl font-extrabold text-blue-900 uppercase tracking-tight'>
        JOIN
      </h2>
      <h3 className='text-xl md:text-2xl font-semibold'>THE MOVEMENT!</h3>
      <p className='text-sm md:text-base max-w-xl mx-auto leading-relaxed'>
        Be part of the AI FOR DELTA'S FUTURE movement by participating in our
        training programs, sponsoring AI initiatives, or collaborating with us
        to advance technology in Delta State.
      </p>
      <p className='text-sm md:text-base max-w-xl mx-auto leading-relaxed'>
        For more information, partnerships, or support, contact: <br />
        📧 Email:{' '}
        <a
          href='mailto:info@okeumunaghofoundation.org'
          className='text-blue-700 font-semibold'
        >
          info@okeumunaghofoundation.org
        </a>
        , <br />
        📞 Phone:{' '}
        <a href='tel:+2348061323701' className='text-blue-700 font-semibold'>
          +2348061323701
        </a>{' '}
        <br />
        📍 Location: Delta State, Nigeria
      </p>
      <p className='font-semibold'>
        Let’s create a smarter, AI-powered Delta State together!
      </p>
    </section>
  );
}
