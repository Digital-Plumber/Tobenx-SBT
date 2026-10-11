import React from 'react';
import { CheckCircle2, LockKeyhole, MapPin, ShieldCheck } from 'lucide-react';

const STATS = [
  { value: '500+', label: 'Businesses powered' },
  { value: '10,000+', label: 'Learners trained' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Support, always on' },
];

const BADGES = [
  { label: 'Google Verified Business', icon: CheckCircle2 },
  { label: 'SSL Secured', icon: LockKeyhole },
  { label: 'Data Protection Compliant', icon: ShieldCheck },
  { label: 'Made in Africa NG', icon: MapPin },
];

export default function TrustStatsBar() {
  return (
    <section
      style={{
        backgroundColor: '#030712',
        padding: '72px 24px 34px',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div
          style={{
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid rgba(21,112,118,0.44)',
            background:
              'radial-gradient(circle at 18% 0%, rgba(54,244,164,0.18), transparent 32%), linear-gradient(290.7deg, #061A1C 58.79%, #0D3A2D 100%)',
            boxShadow: '0 24px 58px rgba(0,0,0,0.42)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '30px 22px',
                  textAlign: 'center',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(2.1rem, 4vw, 3.5rem)',
                    lineHeight: 1,
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    marginTop: '10px',
                    color: '#B8C5C9',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              padding: '22px',
              backgroundColor: 'rgba(3,7,18,0.3)',
            }}
          >
            {BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  minHeight: '42px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: 'rgba(255,255,255,0.055)',
                  color: '#EAF7F2',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                }}
              >
                <Icon size={16} strokeWidth={2.4} color="#36F4A4" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
