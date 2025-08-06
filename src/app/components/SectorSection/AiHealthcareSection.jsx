'use client';

export default function AiHealthcareSection() {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat text-black px-4 py-20'
      id='ai-healthcare'
      style={{
        backgroundImage: "url('/healthcare-bg.png')",
      }}
    >
      <div className='max-w-5xl mx-auto space-y-6 bg-white/90 p-8 rounded-md shadow-md'>
        <h2 className='text-3xl font-bold text-blue-700 uppercase text-center'>
          AI in Healthcare:
        </h2>

        <p className='text-sm md:text-base leading-relaxed'>
          Artificial intelligence is transforming healthcare through multiple
          pathways. Advanced imaging algorithms can detect diseases like cancer
          at earlier stages than traditional methods, often identifying subtle
          patterns invisible to the human eye. AI-assisted surgical systems
          provide enhanced precision and visualization, potentially reducing
          complications and recovery times.
        </p>

        <p className='text-sm md:text-base leading-relaxed'>
          Diagnostic support tools analyze patient symptoms, medical history,
          lab results, and imaging to suggest possible conditions, though these
          systems currently augment rather than replace clinician judgment.
          Machine learning models analyzing population health data can identify
          individuals at elevated risk for conditions like diabetes or heart
          disease, enabling earlier interventions.
        </p>

        <p className='text-sm md:text-base leading-relaxed'>
          In Delta State’s rural areas, AI-enabled telemedicine platforms could
          bridge healthcare gaps by connecting patients with specialists
          remotely. Mobile diagnostic applications and decision-support tools
          could help community health workers deliver better care with limited
          resources.
        </p>
      </div>
    </section>
  );
}
