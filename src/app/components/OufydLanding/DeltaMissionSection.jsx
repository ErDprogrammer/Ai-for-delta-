'use client';

export default function DeltaMissionSection() {
  return (
    <section className='relative px-4 py-16 bg-black/70 text-white overflow-hidden w-full'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/image_59.jpg' // 🔁 Replace with your actual image path
          alt='Mission Background'
          className='w-full h-full object-cover'
        />
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>

      {/* Foreground Content */}
      <div className='relative z-10 max-w-full mx-auto px-6 py-10 text-center bg-black/50 backdrop-blur-md rounded-lg shadow-md text-white space-y-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-blue-800 uppercase'>
          Our Mission with AI for Delta’s Future
        </h2>

        <p className='text-left text-sm md:text-base max-w-3xl mx-auto leading-relaxed'>
          <strong>The AI for Delta’s Future Project Aims To:</strong>
        </p>

        <ul className='list-disc text-left pl-6 max-w-3xl mx-auto space-y-2 text-sm md:text-base'>
          <li>
            Train 50 youths per local government area in Delta State on AI
            applications.
          </li>
          <li>Equip students and professionals with practical AI skills.</li>
          <li>
            Promote AI-driven solutions in agriculture, education, healthcare,
            business, security, and innovation.
          </li>
          <li>Foster digital inclusion and economic empowerment through AI.</li>
          <li>
            Provide skill-based training in arts, fashion, and digital
            technology to support youth entrepreneurship.
          </li>
          <li>
            Shape a tech-driven future for Delta State, where AI becomes a tool
            for progress, inclusivity, and sustainable development.
          </li>
        </ul>
      </div>
    </section>
  );
}
