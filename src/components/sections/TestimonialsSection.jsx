import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Tobenx built our site and automated our bookings in one month. We doubled our leads.',
    name: 'Client Name',
    role: 'Business',
  },
  {
    quote: 'I took two Academy courses and got hired through JobIn the same month.',
    name: 'Learner Name',
    role: 'Product Designer',
  },
  {
    quote: 'Season X had exactly what our customers wanted for the holiday rush.',
    name: 'Buyer Name',
    role: 'Retailer',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#030712',
        color: '#FFFFFF',
        padding: '34px 24px 92px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '42px' }}>
          <p
            style={{
              margin: '0 0 12px',
              color: '#36F4A4',
              fontSize: '0.78rem',
              fontWeight: 900,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Proof from the ecosystem
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
            }}
          >
            Real businesses. Real growth.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.quote}
              style={{
                position: 'relative',
                minHeight: '260px',
                padding: '28px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                background:
                  'linear-gradient(180deg, rgba(6,26,28,0.96), rgba(7,21,23,0.98))',
                boxShadow: '0 18px 42px rgba(0,0,0,0.32)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              <Quote
                size={78}
                strokeWidth={1.2}
                color="rgba(54,244,164,0.11)"
                style={{ position: 'absolute', right: '18px', top: '16px' }}
                aria-hidden="true"
              />

              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '24px' }}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="#36F4A4" color="#36F4A4" aria-hidden="true" />
                  ))}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: '#F4FBF8',
                    fontSize: '1.08rem',
                    lineHeight: 1.7,
                    fontWeight: 650,
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              <div
                style={{
                  position: 'relative',
                  marginTop: '30px',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ fontWeight: 900, color: '#FFFFFF' }}>{testimonial.name}</div>
                <div style={{ marginTop: '4px', color: '#9CA3AF', fontSize: '0.92rem', fontWeight: 700 }}>
                  {testimonial.role}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            margin: '28px auto 0',
            maxWidth: '620px',
            textAlign: 'center',
            color: '#9CA3AF',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}
        >
          Live Google reviews can be connected here when the verified business profile is ready.
        </div>
      </div>
    </section>
  );
}
