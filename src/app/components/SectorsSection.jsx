'use client';

import Image from 'next/image';
import AiHealthcareSection from './SectorSection/AiHealthcareSection';
import AiBusinessSection from './SectorSection/AiBusinessSection';
import AiSecuritySection from './SectorSection/AiSecuritySection';
import AiInnovationSection from './SectorSection/AiInnovationSection';

export default function SectorsSection() {
  return (
    <section className='bg-white text-black px-4 py-20' id='ai-agriculture'>
      <div className='max-w-5xl mx-auto text-center space-y-12'>
        {/* Section Heading */}
        <section
          className='bg-cover bg-center bg-no-repeat text-black px-4 py-20'
          style={{
            backgroundImage: "url('/soil.png')",
          }}
        >
          <div className='max-w-5xl mx-auto text-center space-y-6 bg-white/90 p-8 rounded-md shadow-md'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold uppercase text-gray-900'>
                AI IN DIFFERENT
              </h2>
              <h1 className='text-4xl md:text-5xl font-extrabold uppercase text-black'>
                SECT<span className='inline-block text-black'>O</span>
                <span className='inline-block text-black'>R</span>S
              </h1>
            </div>

            <h3 className='text-xl md:text-2xl font-bold text-green-700 uppercase'>
              AI in Agriculture:
            </h3>

            <p className='text-sm md:text-base leading-relaxed max-w-2xl mx-auto'>
              AI is revolutionizing agriculture by increasing productivity,
              reducing waste, and improving food security. Technologies such as
              smart irrigation systems, AI-powered pest detection, and drone
              monitoring allow farmers to maximize yields with minimal
              resources. AI-driven predictive analytics help in climate
              forecasting and soil health monitoring, enabling farmers to make
              data-driven decisions that boost agricultural output in Delta
              State.
            </p>
          </div>
        </section>

        <AiHealthcareSection />
        {/* AI in Business */}

        <AiBusinessSection />

        {/* AI in Security */}
        <AiSecuritySection />

        {/* AI in Innovation */}
        <AiInnovationSection />
      </div>
    </section>
  );
}
