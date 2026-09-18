import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrollVideoPopup
 * ────────────────
 * Floating PIP video that pops in at the bottom-right as soon as
 * the user scrolls past 80 px (i.e. leaves the hero section).
 * 
 * Uses 100% inline styles so NO Tailwind class is needed for the
 * critical show/hide logic – making it impossible for a missing
 * CSS class to silently hide the component.
 */
export default function ScrollVideoPopup({
  videoSrc = 'https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4',
  webmSrc  = 'https://cdn.shopify.com/b/shopify-brochure2-assets/524da6f828b5a55d571fafa1607b907f.webm',
  poster   = 'https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080&width=828',
  title    = 'Shopify: Be the next',
}) {
  const videoRef     = useRef(null);
  const [visible, setVisible]   = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [muted, setMuted]       = useState(true);
  const [playing, setPlaying]   = useState(false);
  const [expanded, setExpanded] = useState(false);

  // ── Scroll listener: show after 80 px ─────────────────────────
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Auto-play when popup becomes visible ──────────────────────
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (visible && !dismissed) {
      vid.muted = true;
      setMuted(true);
      vid.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Second attempt with muted guaranteed
          vid.muted = true;
          vid.play().then(() => setPlaying(true)).catch(() => {});
        });
    } else {
      vid.pause();
      setPlaying(false);
    }
  }, [visible, dismissed]);

  function togglePlay() {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  }

  const show = visible && !dismissed;

  // ── Inline style objects ───────────────────────────────────────
  const wrapStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '320px',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#061A1C',
    border: '2px solid #36F4A4',
    boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
    zIndex: 999999,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
    pointerEvents: show ? 'auto' : 'none',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 14px',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
  };

  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#36F4A4',
    fontSize: '12px',
    fontWeight: 600,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#36F4A4',
    flexShrink: 0,
    animation: 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
  };

  const btnGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
  };

  const iconBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#aaa',
    cursor: 'pointer',
    fontSize: '12px',
    padding: '4px 6px',
    borderRadius: '4px',
    transition: 'color 0.2s',
  };

  const videoWrapStyle = {
    position: 'relative',
    aspectRatio: '16/9',
    background: '#000',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    opacity: 0,
    transition: 'opacity 0.2s',
  };

  // ── Fullscreen modal ───────────────────────────────────────────
  const modalBgStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.92)',
    backdropFilter: 'blur(16px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    zIndex: 1000000,
  };

  const modalBoxStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#061A1C',
    border: '2px solid #36F4A4',
    boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
  };

  return (
    <>
      {/* Inject ping keyframe animation */}
      <style>{`
        @keyframes svp-ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .svp-dot { animation: svp-ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }
        .svp-ctrl:hover { color: #36F4A4 !important; }
        .svp-close:hover { color: #f87171 !important; }
        .svp-overlay-group:hover .svp-overlay { opacity: 1 !important; }
      `}</style>

      {/* ── Floating PIP Card ───────────────────────────────────── */}
      <div style={wrapStyle} role="dialog" aria-label="Floating video player">

        {/* Header */}
        <div style={headerStyle}>
          <div style={titleStyle}>
            <span className="svp-dot" style={dotStyle} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
          </div>

          <div style={btnGroupStyle}>
            <button
              type="button"
              className="svp-ctrl"
              style={iconBtnStyle}
              title="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑ Top
            </button>
            <button
              type="button"
              className="svp-ctrl"
              style={iconBtnStyle}
              title="Expand"
              onClick={() => setExpanded(true)}
            >
              ⛶
            </button>
            <button
              type="button"
              className="svp-close"
              style={{ ...iconBtnStyle, fontWeight: 'bold' }}
              title="Close"
              onClick={() => setDismissed(true)}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video area */}
        <div className="svp-overlay-group" style={videoWrapStyle}>
          <video
            ref={videoRef}
            style={videoStyle}
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            onClick={togglePlay}
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>

          {/* Hover controls */}
          <div className="svp-overlay" style={overlayStyle}>
            <button
              type="button"
              onClick={togglePlay}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#fff', color: '#000', border: 'none',
                cursor: 'pointer', fontSize: '14px', fontWeight: 'bold',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s',
              }}
            >
              {playing ? '❚❚' : '▶'}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#fff', color: '#000', border: 'none',
                cursor: 'pointer', fontSize: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s',
              }}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Fullscreen Modal ─────────────────────────────────────── */}
      {expanded && (
        <div style={modalBgStyle} onClick={() => setExpanded(false)}>
          <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ ...headerStyle, padding: '14px 20px' }}>
              <h3 style={{ ...titleStyle, fontSize: '16px' }}>{title}</h3>
              <button
                type="button"
                className="svp-close"
                style={{ ...iconBtnStyle, fontSize: '20px' }}
                onClick={() => setExpanded(false)}
              >
                ✕
              </button>
            </div>
            <div style={{ aspectRatio: '16/9', background: '#000' }}>
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                poster={poster}
              >
                {webmSrc && <source src={webmSrc} type="video/webm" />}
                {videoSrc && <source src={videoSrc} type="video/mp4" />}
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
