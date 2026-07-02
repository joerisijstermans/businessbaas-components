(function () {
  if (customElements.get('bb-coming-soon')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBComingSoon extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .page{min-height:100vh;background:linear-gradient(150deg,#0D2240 0%,#142c54 60%,#0f2845 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 24px;position:relative;overflow:hidden}
          .page::before{content:'';position:absolute;top:-20%;right:-10%;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,.12) 0%,transparent 65%);pointer-events:none}
          .page::after{content:'';position:absolute;bottom:-15%;left:-5%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,.07) 0%,transparent 65%);pointer-events:none}
          .inner{max-width:680px;text-align:center;position:relative;z-index:2}

          .logo{display:flex;align-items:center;justify-content:center;margin-bottom:56px}
          .logo img{height:40px;width:auto}

          .badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:12px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:28px}
          .badge-dot{width:6px;height:6px;border-radius:50%;background:#E85D04;animation:pulse 1.8s ease-in-out infinite}
          @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}

          h1{font-size:clamp(32px,5.5vw,62px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.035em;margin-bottom:24px}
          h1 em{font-style:normal;color:#E85D04}

          .sub{font-size:clamp(16px,2vw,19px);color:rgba(255,255,255,.55);line-height:1.7;max-width:520px;margin:0 auto 52px}
          .sub strong{color:rgba(255,255,255,.8);font-weight:600}

          .features{display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin-bottom:56px}
          .feat{display:flex;flex-direction:column;align-items:center;gap:8px}
          .feat-icon{width:48px;height:48px;border-radius:14px;background:rgba(232,93,4,.15);border:1px solid rgba(232,93,4,.2);display:flex;align-items:center;justify-content:center;font-size:22px}
          .feat-label{font-size:12px;font-weight:600;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.06em}

          .divider{width:1px;height:48px;background:rgba(255,255,255,.08);display:none}

          .cta-wrap{display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:64px}
          .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;background:#E85D04;color:#fff;font-size:16px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s}
          .btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .btn-note{font-size:13px;color:rgba(255,255,255,.3)}

          .socials{display:flex;align-items:center;justify-content:center;gap:10px}
          .soc{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.45);transition:background .2s,color .2s,transform .2s}
          .soc:hover{background:rgba(255,255,255,.12);color:#fff;transform:translateY(-2px)}
          .soc svg{width:15px;height:15px}

          .copy{margin-top:48px;font-size:12px;color:rgba(255,255,255,.18)}

          @media(max-width:480px){.features{gap:20px}.feat-label{font-size:11px}}
        </style>
        <section class="page">
          <div class="inner">
            <div class="logo">
              <img src="${CDN}/beeldmerk-tot.png" alt="BusinessBaas">
            </div>

            <div class="badge">
              <span class="badge-dot"></span>
              We zijn live aan het bouwen
            </div>

            <h1>Iets groots<br>is onderweg<em>.</em></h1>

            <p class="sub">Het nieuwe BusinessBaas platform — met <strong>trainingen, AI-coach Nova en een community</strong> — landt binnenkort. We geven het de laatste puntjes op de i.</p>

            <div class="features">
              <div class="feat">
                <div class="feat-icon">🎓</div>
                <span class="feat-label">Trainingen</span>
              </div>
              <div class="feat">
                <div class="feat-icon">🤖</div>
                <span class="feat-label">AI-coach Nova</span>
              </div>
              <div class="feat">
                <div class="feat-icon">🤝</div>
                <span class="feat-label">Community</span>
              </div>
              <div class="feat">
                <div class="feat-icon">🗂️</div>
                <span class="feat-label">Werkplek</span>
              </div>
            </div>

            <div class="cta-wrap">
              <a href="mailto:info@businessbaas.com" class="btn">
                Stuur ons een bericht
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <span class="btn-note">Of volg ons voor updates</span>
            </div>

            <div class="socials">
              <a class="soc" href="https://www.linkedin.com/company/businessbaas" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a class="soc" href="https://www.instagram.com/businessbaas" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a class="soc" href="https://www.facebook.com/profile.php?id=61574114697865" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a class="soc" href="https://www.youtube.com/@businessbaas" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a class="soc" href="https://www.tiktok.com/@businessbaas" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.45a8.16 8.16 0 004.77 1.52V7.52a4.85 4.85 0 01-1-.83z"/></svg>
              </a>
            </div>

            <p class="copy">© 2026 BusinessBaas · Alle rechten voorbehouden · KVK 90226801</p>
          </div>
        </section>`;
    }
  }
  customElements.define('bb-coming-soon', BBComingSoon);
})();
