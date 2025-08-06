import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import QueenImage from './components/QueenImage';
import SectorsSection from './components/SectorsSection';
import OufydSection from './components/OufydSection';
import OufydLanding from './components/OufydLanding';
import AiDeltaNavbar from './components/AiDeltaNavbar';

export default function Home() {
  return (
    <>
      <AiDeltaNavbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <QueenImage />
        <SectorsSection />
        <OufydSection />
        <OufydLanding />
      </main>
    </>
  );
}
