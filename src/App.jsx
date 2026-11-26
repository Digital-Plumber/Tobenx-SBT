import React from 'react';
import SvgSprite from './components/SvgSprite';
import Header from './components/Header/Header';
import HeroSection from './components/sections/HeroSection';
import SbtSection from './components/sections/SbtSection';
import SeasonXSection from './components/sections/SeasonXSection';
import AcademySection from './components/sections/AcademySection';
import JobInSection from './components/sections/JobInSection';
import TrustStatsBar from './components/sections/TrustStatsBar';
import TestimonialsSection from './components/sections/TestimonialsSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import RunAdsSection from './components/sections/RunAdsSection';
import FinalCTABanner from './components/sections/FinalCTABanner';
import Footer from './components/Footer/Footer';
import ScrollVideoPopup from './components/common/ScrollVideoPopup';
import TobenxChatWidget from './components/common/TobenxChatWidget';

export default function App() {
  return (
    <div className="overscroll-y-none bg-black text-white min-h-screen">
      {/* Official Tobenx SBT SVG Icon Symbols */}
      <SvgSprite />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Content Stream */}
      <main id="main">
        <HeroSection />
        <SbtSection />
        <SeasonXSection />
        <AcademySection />
        <JobInSection />
        <TrustStatsBar />
        <TestimonialsSection />
        <HowItWorksSection />
        <RunAdsSection />
        <FinalCTABanner />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Hero Video Pop-Out Card (Pops out upon scrolling past Hero) */}
      <ScrollVideoPopup
        videoSrc="https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4"
        webmSrc="https://cdn.shopify.com/b/shopify-brochure2-assets/524da6f828b5a55d571fafa1607b907f.webm"
        poster="https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080&width=828"
        title="Tobenx SBT: Be the next"
      />
      <TobenxChatWidget />
    </div>
  );
}
