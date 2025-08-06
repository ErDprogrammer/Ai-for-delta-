'use client';

export default function OurInitiativeSection() {
  return (
    <section className='text-black px-4 py-12'>
      <div
        className='relative bg-cover bg-center bg-no-repeat px-4 py-24'
        style={{ backgroundImage: "url('/image_55.jpg')" }}
      >
        {/* Black overlay with blur */}
        <div className='absolute inset-0 bg-black/80 backdrop-blur-sm z-0'></div>

        <div className='relative z-10 max-w-5xl mx-auto space-y-10'>
          {/* Section Title */}
          <h2 className='text-2xl md:text-3xl font-bold text-center uppercase text-white'>
            Our Initiative
          </h2>

          {/* Bullet List */}
          <ul className='list-disc text-left pl-6 space-y-3 text-sm md:text-base max-w-3xl mx-auto text-white'>
            <li>
              AI training workshops for young entrepreneurs, students, and
              professionals.
            </li>
            <li>
              Skills acquisition programs in fashion, arts, and digital
              technology.
            </li>
            <li>
              Partnerships with industry leaders to provide hands-on AI
              experience.
            </li>
            <li>
              Advocacy for AI integration in government and private sectors.
            </li>
            <li>
              Outreach programs to ensure that AI knowledge reaches the
              grassroots level.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
