'use client';

export default function AiInnovationSection() {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat text-black px-4 py-20'
      id='ai-innovation'
      style={{
        backgroundImage: "url('/innovation-bg.png')",
      }}
    >
      <div className='max-w-5xl mx-auto space-y-6 bg-white/90 p-8 rounded-md shadow-md'>
        <h2 className='text-3xl font-bold text-sky-700 uppercase text-center'>
          AI in Innovation:
        </h2>

        <p className='text-sm md:text-base leading-relaxed'>
          Artificial intelligence drives innovation across multiple sectors—from
          smart cities to financial systems and healthcare diagnostics. AI
          technologies accelerate research, automate processes, and enhance
          human creativity by analyzing vast datasets, identifying complex
          patterns, and enabling rapid prototyping of solutions.
        </p>

        <h4 className='text-base font-semibold mt-4'>
          HOW AI CAN AID INNOVATION IN DELTA STATE
        </h4>
        <p className='text-sm md:text-base leading-relaxed'>
          In Delta State, AI presents specific opportunities for:
        </p>

        <ul className='list-disc text-left pl-6 text-sm md:text-base'>
          <li>
            Agricultural optimization through climate and soil data analysis
          </li>
          <li>Oil and gas efficiency through predictive maintenance</li>
          <li>Healthcare access expansion via AI-powered diagnostics</li>
          <li>Educational improvement through learning analytics</li>
        </ul>

        <h4 className='text-base font-semibold mt-4'>
          Realizing these benefits requires strategic investments in:
        </h4>

        <ul className='list-disc text-left pl-6 text-sm md:text-base'>
          <li>Digital infrastructure development</li>
          <li>Workforce training and AI literacy</li>
          <li>Public-private partnerships</li>
          <li>Appropriate regulatory frameworks</li>
        </ul>

        <p className='text-sm md:text-base leading-relaxed'>
          A realistic implementation involves short-term infrastructure building
          (1–3 years), medium-term sectoral adoption (3–5 years), and long-term
          sustainability planning.
        </p>
      </div>
    </section>
  );
}
