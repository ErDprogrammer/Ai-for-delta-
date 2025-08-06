'use client';

import Image from 'next/image';
import OurInitiativeSection from './OufydLanding/OurInitiativeSection';
import GallerySectionOne from './OufydLanding/GallerySectionOne';
import GallerySectionTwo from './OufydLanding/GallerySectionTwo';
import DeltaMissionSection from './OufydLanding/DeltaMissionSection';
import FinalGallerySection from './OufydLanding/FinalGallerySection';
import JoinMovementSection from './OufydLanding/JoinMovementSection';
import OufydFooter from './OufydLanding/OufydFooter';

export default function OufydLanding() {
  return (
    <section className='bg-white text-black '>
      <div className='max-w-full mx-auto space-y-16'>
        {/* Hero Section */}
        <OurInitiativeSection />
        <GallerySectionOne />
        <FinalGallerySection />
        <DeltaMissionSection />
        <JoinMovementSection />
        <OufydFooter />
      </div>
    </section>
  );
}
