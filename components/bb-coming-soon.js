(function () {
  if (customElements.get('bb-coming-soon')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBComingSoon extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .wrap{background:#0D2240;padding:120px 24px;text-align:center}
          .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:12px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:28px}
          .dot{width:6px;height:6px;border-radius:50%;background:#E85D04;display:inline-block;animation:pulse 1.8s ease-in-out infinite;flex-shrink:0}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
          h1{font-size:clamp(30px,5vw,58px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.03em;margin-bottom:20px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:17px;color:rgba(255,255,255,.55);line-height:1.7;max-width:520px;margin:0 auto 48px}
          .sub strong{color:rgba(255,255,255,.8);font-weight:600}
          .member-note{font-size:14px;color:rgba(255,255,255,.35);margin-top:-32px;margin-bottom:48px}
          .member-note a{color:rgba(232,93,4,.8);text-decoration:underline;text-underline-offset:3px}
          .feats{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin-bottom:48px}
          .feat{display:flex;flex-direction:column;align-items:center;gap:8px}
          .fi{width:48px;height:48px;border-radius:12px;background:rgba(232,93,4,.15);border:1px solid rgba(232,93,4,.2);display:flex;align-items:center;justify-content:center;font-size:20px}
          .fl{font-size:11px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.06em}
          .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 34px;background:#E85D04;color:#fff;font-size:16px;font-weight:700;border-radius:50px;margin-bottom:10px;transition:background .2s,transform .2s}
          .btn:hover{background:#CC4D00;transform:translateY(-2px)}
          .note{display:block;font-size:13px;color:rgba(255,255,255,.3);margin-bottom:40px}
          .socials{display:flex;justify-content:center;gap:10px;margin-bottom:40px}
          .soc{width:36px;height:36px;border-radius:9px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.45);transition:background .2s,color .2s}
          .soc:hover{background:rgba(255,255,255,.14);color:#fff}
          .soc svg{width:14px;height:14px;display:block}
          .copy{font-size:12px;color:rgba(255,255,255,.18)}
        </style>
        <div class="wrap">
          <div class="badge">
            <span class="dot"></span>
            BusinessBaas 2.0 in ontwikkeling
          </div>
          <h1>We bouwen aan<br>versie <em>2.0</em><em>.</em></h1>
          <p class="sub">BusinessBaas wordt groter, slimmer en beter — met <strong>verbeterde trainingen, AI-coach Nova en een volledig nieuwe community</strong>. We zijn er bijna.</p>
          <p class="member-note">Al lid? <a href="https://www.businessbaas.com" target="_blank">Je kunt gewoon blijven inloggen en alles gebruiken →</a></p>
          <div class="feats">
            <div class="feat"><div class="fi">🎓</div><span class="fl">Trainingen</span></div>
            <div class="feat"><div class="fi">🤖</div><span class="fl">AI-coach Nova</span></div>
            <div class="feat"><div class="fi">🤝</div><span class="fl">Community</span></div>
            <div class="feat"><div class="fi">🗂️</div><span class="fl">Werkplek</span></div>
          </div>
          <a href="mailto:info@businessbaas.com" class="btn">
            Stuur ons een bericht
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <span class="note">Of volg ons voor updates</span>
          <div class="socials">
            <a class="soc" href="https://www.linkedin.com/company/businessbaas" target="_blank" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a class="soc" href="https://www.instagram.com/businessbaas" target="_blank" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a class="soc" href="https://www.facebook.com/profile.php?id=61574114697865" target="_blank" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a class="soc" href="https://www.youtube.com/@businessbaas" target="_blank" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a class="soc" href="https://www.tiktok.com/@businessbaas" target="_blank" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.45a8.16 8.16 0 004.77 1.52V7.52a4.85 4.85 0 01-1-.83z"/></svg>
            </a>
          </div>
          <p class="copy">© 2026 BusinessBaas · Alle rechten voorbehouden · KVK 90226801</p>
        </div>`;
    }
  }
  customElements.define('bb-coming-soon', BBComingSoon);
})();
