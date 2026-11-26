import React from 'react';

export default function RunAdsSection() {
  return (
    <section
      id="run-ads"
      style={{
        backgroundColor: '#030712',
        padding: '56px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <img
          src="../../../asset/images/ads/tobenx_ads_diagram.png"
          alt="Tobenx Ads connected to Google Ads, Facebook, Instagram, TikTok, and YouTube"
          loading="lazy"
          decoding="async"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '640px',
            height: 'auto',
            borderRadius: '18px',
          }}
        />
      </div>
    </section>
  );
}
