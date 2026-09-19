import React from 'react';
import SvgSprite from './components/SvgSprite';
import Header from './components/Header/Header';
import HeroSection from './components/sections/HeroSection';
import SbtSection from './components/sections/SbtSection';
import SeasonXSection from './components/sections/SeasonXSection';
import LogosSection from './components/sections/LogosSection';
import AgenticChatSection from './components/sections/AgenticChatSection';
import SellMoreInMorePlaces from './components/sections/SellMoreInMorePlaces';
import GrowAroundTheWorld from './components/sections/GrowAroundTheWorld';
import ForEveryoneSection from './components/sections/ForEveryoneSection';
import SidekickSection from './components/sections/SidekickSection';
import CustomizeAppsSection from './components/sections/CustomizeAppsSection';
import DeveloperSection from './components/sections/DeveloperSection';
import NoBetterPlaceSection from './components/sections/NoBetterPlaceSection';
import BestConvertingCheckoutSection from './components/sections/BestConvertingCheckoutSection';
import RockSteadySection from './components/sections/RockSteadySection';
import BuildFastSection from './components/sections/BuildFastSection';
import Footer from './components/Footer/Footer';
import ScrollVideoPopup from './components/common/ScrollVideoPopup';

export default function App() {
  return (
    <div className="overscroll-y-none bg-black text-white min-h-screen">
      {/* Official Shopify SVG Icon Symbols */}
      <SvgSprite />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Content Stream */}
      <main id="main">
        <HeroSection />
        <SbtSection />
        <SeasonXSection />
        <LogosSection />
        <AgenticChatSection />
        <SellMoreInMorePlaces />
        <GrowAroundTheWorld />
        <ForEveryoneSection />
        <SidekickSection />
        <CustomizeAppsSection />
        <DeveloperSection />
        <NoBetterPlaceSection />
        <BestConvertingCheckoutSection />
        <RockSteadySection />
        <BuildFastSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Hero Video Pop-Out Card (Pops out upon scrolling past Hero) */}
      <ScrollVideoPopup
        videoSrc="https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4"
        webmSrc="https://cdn.shopify.com/b/shopify-brochure2-assets/524da6f828b5a55d571fafa1607b907f.webm"
        poster="https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080&width=828"
        title="Shopify: Be the next"
      />
    </div>
  );
}
