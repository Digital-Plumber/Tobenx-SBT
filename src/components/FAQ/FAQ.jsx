import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
import { faqData } from '../../data/faqData';
import './FAQ.css';

/**
 * FAQ Accordion Component
 */
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag faq-tag">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">Common questions & answers</h2>
          <p className="section-subtitle">
            Everything you need to know about getting started, scaling, and selling with Shopify.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item glass-card ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
