'use client';

import Image from 'next/image';

export default function OufydSection() {
  return (
    <section className='text-white'>
      {/* === TOP SECTION === */}
      <div
        className='relative bg-cover bg-center bg-no-repeat px-4 py-24'
        style={{ backgroundImage: "url('/image_62.jpg')" }}
      >
        {/* Blurred Dark Overlay */}
        <div className='absolute inset-0 bg-black/70 backdrop-blur-sm z-0'></div>

        {/* Content */}
        <div className='relative z-10 max-w-5xl mx-auto text-center space-y-8'>
          {/* Heading */}
          <h1 className='text-4xl md:text-5xl font-extrabold text-blue-600 uppercase leading-tight'>
            Oke Umunagho <br />
            Foundation <br />
            For Youths <br />
            Development
          </h1>

          {/* Description */}
          <p className='text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-white'>
            The OKE UMUNAGHO FOUNDATION FOR YOUTH DEVELOPMENT is committed to
            empowering young people through skills acquisition, education, and
            technology-driven initiatives. We believe in equipping youths with
            practical skills in arts, fashion, and technology to enhance their
            economic independence and prepare them for the future workforce. Our
            programs are designed to nurture creativity, provide mentorship, and
            create opportunities for sustainable livelihoods.
          </p>
        </div>
      </div>

      {/* === INITIATIVE SECTION === */}
     
    </section>
  );
}
