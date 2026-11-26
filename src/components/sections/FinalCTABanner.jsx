import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { openTobenxChat } from '../../utils/chatEvents';
import './FinalCTABanner.css';

export default function FinalCTABanner() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__panel">
        <div className="final-cta__content">
          <p className="final-cta__eyebrow">Let’s build smarter</p>
          <h2 id="final-cta-title">Ready to power your business?</h2>
          <p className="final-cta__description">
            Join hundreds of African businesses already building smarter with Tobenx.
          </p>
          <div className="final-cta__actions">
            <button className="final-cta__button final-cta__button--primary" type="button" onClick={openTobenxChat}>
              <MessageCircle size={18} aria-hidden="true" />
              Chat with our team
            </button>
            <a className="final-cta__button final-cta__button--secondary" href="tel:+2348000000000">
              <Phone size={17} aria-hidden="true" />
              Call our team
            </a>
          </div>
          <p className="final-cta__note">A focused conversation about your goals. No pressure.</p>
        </div>
        <div className="final-cta__accent" aria-hidden="true" />
      </div>
    </section>
  );
}
