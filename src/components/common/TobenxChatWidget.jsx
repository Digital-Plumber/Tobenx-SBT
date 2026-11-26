import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Bot, Send, X } from 'lucide-react';
import { TOBENX_CHAT_EVENT } from '../../utils/chatEvents';
import './TobenxChatWidget.css';

function getHumanContactUrl(history = []) {
  const conversation = history
    .slice(-8)
    .map((message) => `${message.from === 'user' ? 'Customer' : 'Assistant'}: ${message.text.slice(0, 180)}`)
    .join('\n');
  const recentConversation = conversation.length > 1200
    ? `…\n${conversation.slice(-1200)}`
    : conversation;
  const text = recentConversation
    ? `Hi Tobenx, please help me with this conversation:\n${recentConversation}`
    : 'Hi Tobenx, I would like to speak with someone';
  return `https://wa.me/2348000000000?text=${encodeURIComponent(text)}`;
}

const QUICK_QUESTIONS = ['Websites', 'AI automation', 'Marketing', 'Training', 'Jobs & hiring', 'Pricing'];

function getReply(message) {
  const text = message.toLowerCase();
  const handoff = (reply) => ({ text: reply, handoff: true });

  if (/\b(hello|hi|hey|good morning|good afternoon)\b/.test(text)) {
    return { text: 'Hi. What would you like help with: a website, automation, marketing, training, hiring, or pricing?' };
  }
  if (/\b(price|pricing|cost|quote|budget|how much)\b/.test(text)) {
    return handoff('I don’t have confirmed pricing. Send your project details to our team on WhatsApp for a quote.');
  }
  if (/\b(cloud|hosting|infrastructure|backup|ssl)\b/.test(text)) {
    return { text: 'Cloud and infrastructure services include hosting, automated backups, SSL, and infrastructure management. What are you currently hosting or planning to launch?' };
  }
  if (/\b(website|web site|web design|ecommerce|e-commerce|online store)\b/.test(text)) {
    return { text: 'Tobenx builds fast, mobile-friendly websites and online stores. The site lists Webflow, WordPress, React, and Next.js among the supported technologies. What kind of site do you need?' };
  }
  if (/\b(ai|automation|chatbot|artificial intelligence|workflow)\b/.test(text)) {
    return { text: 'AI automation can cover bookings, customer replies, sales workflows, content generation, and support. Which task would you like to automate?' };
  }
  if (/\b(ads|advertising|marketing|social media|campaign|seo)\b/.test(text)) {
    return { text: 'Digital marketing services listed here include SEO, ad campaign management, and social growth across Instagram, TikTok, Google Ads, Meta, and LinkedIn. Which channel or goal are you focused on?' };
  }
  if (/\b(academy|training|course|learn|class|certificate|skill)\b/.test(text)) {
    return { text: 'Tobenx Academy offers on-demand, self-paced courses in code, AI, design, and marketing, with career support through JobIn. Which skill are you interested in?' };
  }
  if (/\b(job|career|vacancy|hiring|hire|freelancer|cv|resume)\b/.test(text)) {
    return { text: 'JobIn includes SoftHire for hiring developers, iWork for freelancer matching, job listings, and a CV builder. Are you looking to hire, find freelance work, or apply for a job?' };
  }
  if (/\b(human|person|someone|agent|representative|whatsapp|reach out|talk to|speak with|contact)\b/.test(text)) {
    return handoff('You can continue with a Tobenx team member on WhatsApp.');
  }

  return handoff('I don’t have verified information to answer that. Continue on WhatsApp and our team can help with your question.');
}

export default function TobenxChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'assistant',
      text: 'Hi, I’m the Tobenx assistant. I can answer questions about services shown on this site or connect you with the team.',
    },
  ]);
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(TOBENX_CHAT_EVENT, handleOpen);
    return () => window.removeEventListener(TOBENX_CHAT_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open]);

  function sendMessage(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const userMessage = { id: Date.now(), from: 'user', text };
    const conversation = [...messages, userMessage];
    const reply = { id: Date.now() + 1, from: 'assistant', ...getReply(text), handoffHistory: conversation };
    setMessages([...conversation, reply]);
    setDraft('');
  }

  return (
    <>
      {open && (
        <section className="tobenx-chat" role="dialog" aria-modal="false" aria-labelledby="tobenx-chat-title">
          <header className="tobenx-chat__header">
            <div className="tobenx-chat__identity">
              <span className="tobenx-chat__avatar"><Bot size={20} aria-hidden="true" /></span>
              <span>
                <strong id="tobenx-chat-title">Tobenx assistant</strong>
                <span className="tobenx-chat__status">Here to help</span>
              </span>
            </div>
            <button className="tobenx-chat__close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="tobenx-chat__messages" aria-live="polite" aria-relevant="additions text">
            <p className="tobenx-chat__welcome">Ask a question or tell us what you need.</p>
            {messages.map((message) => (
              <div className={`tobenx-chat__message tobenx-chat__message--${message.from}`} key={message.id}>
                <p>{message.text}</p>
                {message.from === 'assistant' && message.handoff && (
                  <a className="tobenx-chat__human-link" href={getHumanContactUrl(message.handoffHistory)} target="_blank" rel="noopener noreferrer">
                    Send chat history on WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="tobenx-chat__quick-questions" aria-label="Suggested questions">
                {QUICK_QUESTIONS.map((question) => (
                  <button key={question} type="button" onClick={() => {
                    const reply = getReply(question);
                    const userMessage = { id: Date.now(), from: 'user', text: question };
                    const conversation = [...messages, userMessage];
                    setMessages([
                      ...conversation,
                      { id: Date.now() + 1, from: 'assistant', ...reply, handoffHistory: conversation },
                    ]);
                  }}>
                    {question}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="tobenx-chat__composer" onSubmit={sendMessage}>
            <label className="tobenx-chat__sr-only" htmlFor="tobenx-chat-input">Write your message</label>
            <input
              id="tobenx-chat-input"
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question..."
              autoComplete="off"
              maxLength={500}
            />
            <button type="submit" aria-label="Send message" disabled={!draft.trim()}>
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
          <p className="tobenx-chat__disclaimer">Recent chat history is prefilled in WhatsApp. Review it before sending.</p>
        </section>
      )}
      <span className="tobenx-chat__announcement" aria-live="polite">
        {open ? 'Chat opened' : ''}
      </span>
    </>
  );
}
