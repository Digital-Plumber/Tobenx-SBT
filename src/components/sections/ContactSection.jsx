import React from 'react';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { openTobenxChat } from '../../utils/chatEvents';

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#030712',
        color: '#FFFFFF',
        padding: '88px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(21,112,118,0.42)',
              background:
                'radial-gradient(circle at 18% 0%, rgba(54,244,164,0.18), transparent 34%), linear-gradient(150deg,#0D3A2D 0%,#061A1C 58%,#030712 100%)',
              padding: '34px',
              boxShadow: '0 24px 58px rgba(0,0,0,0.42)',
            }}
          >
            <p
              style={{
                margin: '0 0 14px',
                color: '#36F4A4',
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.6rem)',
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: '-0.045em',
              }}
            >
              Let's talk.
            </h2>
            <p style={{ margin: '20px 0 0', maxWidth: '460px', color: '#B8C5C9', fontSize: '1rem', lineHeight: 1.7 }}>
              Tell us what you need. We will recommend the smartest next step.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '34px' }}>
              <a
                href="tel:+2348000000000"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  minHeight: '46px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  backgroundColor: '#36F4A4',
                  color: '#03110d',
                  textDecoration: 'none',
                  fontWeight: 900,
                }}
              >
                <Phone size={16} />
                Call Now
              </a>
              <button
                type="button"
                onClick={openTobenxChat}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  minHeight: '46px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>
              <a
                href="mailto:hello@tobenx.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  minHeight: '46px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                }}
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </div>

          <form
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: '#071517',
              padding: '28px',
              boxShadow: '0 18px 42px rgba(0,0,0,0.32)',
            }}
          >
            {[
              { label: 'Name', type: 'text', placeholder: 'Your name' },
              { label: 'Email/Phone', type: 'text', placeholder: 'Email or phone number' },
              { label: 'Service Interested In', type: 'text', placeholder: 'Website, AI, Academy, JobIn...' },
            ].map((field) => (
              <label key={field.label} style={{ display: 'block', marginBottom: '16px' }}>
                <span style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '0.9rem', fontWeight: 800 }}>
                  {field.label}
                </span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    minHeight: '48px',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.055)',
                    color: '#FFFFFF',
                    padding: '0 14px',
                    outline: 'none',
                  }}
                />
              </label>
            ))}

            <label style={{ display: 'block', marginBottom: '20px' }}>
              <span style={{ display: 'block', marginBottom: '8px', color: '#D1D5DB', fontSize: '0.9rem', fontWeight: 800 }}>
                Message
              </span>
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: 'rgba(255,255,255,0.055)',
                  color: '#FFFFFF',
                  padding: '14px',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                minHeight: '52px',
                padding: '0 20px',
                border: 0,
                borderRadius: '14px',
                backgroundColor: '#36F4A4',
                color: '#03110d',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
