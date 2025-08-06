'use client';

import Image from 'next/image';

export default function AiBusinessSection() {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat text-black px-4 py-20'
      id='ai-business'
      style={{
        backgroundImage: "url('/business-bg.png')",
      }}
    >
      <div className='max-w-5xl mx-auto space-y-6 bg-white/90 p-8 rounded-md shadow-md'>
        <h2 className='text-3xl font-bold text-sky-700 uppercase text-center'>
          AI in Business:
        </h2>

        <p className='text-sm md:text-base leading-relaxed'>
          AI-powered analytics transform raw business data into actionable
          insights that drive strategic growth and operational efficiency.
          Machine learning algorithms can identify patterns in customer
          behavior, market trends, and internal processes that human analysis
          might miss. For example, predictive analytics can forecast sales
          fluctuations with up to 85% accuracy, allowing businesses to optimize
          inventory and staffing accordingly.
        </p>

        <p className='text-sm md:text-base leading-relaxed'>
          Conversational AI solutions like chatbots and virtual assistants
          provide 24/7 customer service, handling up to 80% of routine inquiries
          without human intervention. These systems can reduce response times
          from hours to seconds while maintaining consistent service quality,
          freeing human staff to address complex issues requiring emotional
          intelligence and creative problem-solving.
        </p>

        <p className='text-sm md:text-base leading-relaxed'>
          For entrepreneurs in Delta State, AI technologies offer opportunities
          to overcome traditional barriers to market entry and scale.
          Cloud-based AI solutions with subscription pricing models make
          powerful tools accessible without massive capital investment. Local
          businesses can leverage AI to:
        </p>

        <ul className='list-disc text-left pl-6 text-sm md:text-base'>
          <li>
            Analyze regional market conditions specific to Delta State and
            surrounding areas.
          </li>
          <li>
            Develop products and services tailored to local consumer
            preferences.
          </li>
          <li>
            Optimize operations to account for local infrastructure and supply
            chain challenges.
          </li>
          <li>
            Build competitive advantages through improved efficiency and
            customer experience.
          </li>
        </ul>
      </div>
    </section>
  );
}
