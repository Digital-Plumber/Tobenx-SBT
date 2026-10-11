import React from 'react';
import SbtSection from './SbtSection';

const academyLogos = [
  { name: 'Code', icon: <span style={{ color: '#061A1C', fontWeight: 900, fontSize: '0.78rem' }}>Code</span> },
  { name: 'AI', icon: <span style={{ color: '#061A1C', fontWeight: 900, fontSize: '0.8rem' }}>AI</span> },
  { name: 'Design', icon: <span style={{ color: '#061A1C', fontWeight: 900, fontSize: '0.68rem' }}>UX</span> },
  { name: 'Marketing', icon: <span style={{ color: '#061A1C', fontWeight: 900, fontSize: '0.62rem' }}>MKT</span> },
  { name: 'JobIn', icon: <span style={{ color: '#061A1C', fontWeight: 900, fontSize: '0.64rem' }}>Job</span> },
];

const academyFeatures = [
  {
    id: 'on-demand-courses',
    title: 'On-Demand Courses',
    desc: 'Start anytime, finish on your schedule.',
    ctaText: 'Browse Courses \u2192',
    ctaLink: '#academy',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png',
    partnerLogos: academyLogos,
  },
  {
    id: 'soa-aligned-skills',
    title: 'SoA-Aligned Skills',
    desc: 'Learn what employers actually want.',
    ctaText: 'Start Learning Free \u2192',
    ctaLink: '#contact',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/66fdd68b91e6376507fbea99e7fc153f.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/59ee2f1c4ee7318b33100d4bf6685cca.png',
    partnerLogos: academyLogos,
  },
  {
    id: 'career-support',
    title: 'Career Support',
    desc: 'Straight path into JobIn opportunities.',
    ctaText: 'Browse Courses \u2192',
    ctaLink: '#academy',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/43fcd120ac3678f9c736c5e136f19456.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/59ee2f1c4ee7318b33100d4bf6685cca.png',
    partnerLogos: academyLogos,
  },
];

export default function AcademySection() {
  return (
    <SbtSection
      sectionId="academy"
      eyebrow="TOBENX ACADEMY - Skills That Keep You Ahead"
      heading="Learn today. Earn tomorrow."
      subtitle="On-demand tech courses built for real jobs - code, AI, design, marketing. Learn at your pace, get certified, get hired."
      services={academyFeatures}
      bottomTitle="TOBENX ACADEMY - Skills That Keep You Ahead"
      bottomText="On-demand courses, SoA-aligned skills, and career support with a straight path into JobIn opportunities."
      primaryCta={{ label: 'Browse Courses', href: '#academy' }}
      secondaryCta={{ label: 'Start Learning Free \u2192', href: '#contact' }}
    />
  );
}
