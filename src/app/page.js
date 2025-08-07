import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import QueenImage from './components/QueenImage';
import SectorsSection from './components/SectorsSection';
import OufydSection from './components/OufydSection';
import OufydLanding from './components/OufydLanding';
import AiDeltaNavbar from './components/AiDeltaNavbar';
import OurInitiativeSection from './components/OufydLanding/OurInitiativeSection';

export default function Home() {
  return (
    <>
      <AiDeltaNavbar />
      <main>
        <HeroSection />
        <OufydSection />
        <OurInitiativeSection />
        <WelcomeSection />
        <QueenImage />
        <SectorsSection />
        <OufydLanding />
      </main>
    </>
  );
}
