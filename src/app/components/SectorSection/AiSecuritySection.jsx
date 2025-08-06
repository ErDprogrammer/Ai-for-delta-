'use client';

import Image from 'next/image';

export default function AiSecuritySection() {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat text-black px-4 py-20'
      id='ai-security'
      style={{
        backgroundImage: "url('/security-bg.png')",
      }}
    >
      <div className='max-w-5xl mx-auto space-y-6 bg-white/90 p-8 rounded-md shadow-md'>
        <h2 className='text-3xl font-bold text-orange-600 uppercase text-center'>
          AI in Security:
        </h2>

        <p className='text-sm md:text-base leading-relaxed'>
          AI is transforming security systems by enhancing surveillance
          capabilities, improving data analysis for law enforcement, and
          optimizing emergency response operations. Modern AI-powered security
          solutions include intelligent video analytics that can detect unusual
          behaviors, advanced biometric identification systems, and predictive
          analytics tools that help identify potential security risks based on
          historical patterns. These technologies enable security personnel to
          monitor larger areas more effectively, respond to incidents faster,
          and make more informed decisions.
        </p>

        <p className='text-sm md:text-base leading-relaxed'>
          In Delta State, AI security applications could potentially:
        </p>

        <ol className='list-decimal text-left pl-6 text-sm md:text-base'>
          <li>
            Enhance surveillance capabilities across urban centers and critical
            infrastructure
          </li>
          <li>
            Support data-informed policing strategies through pattern
            recognition
          </li>
          <li>
            Improve emergency response coordination and resource allocation
          </li>
          <li>Strengthen border and waterway monitoring systems</li>
          <li>Create more efficient security communication networks</li>
        </ol>

        <p className='text-sm md:text-base leading-relaxed'>
          Implementing these technologies requires careful planning, appropriate
          infrastructure, personnel training, and ethical governance frameworks
          to ensure effectiveness while protecting civil liberties.
        </p>
      </div>
    </section>
  );
}
