(function () {
  if (customElements.get('bb-home-footer')) return;
  class BBHomeFooter extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          footer{background:#060F1E;color:rgba(255,255,255,0.55);padding:64px 24px 28px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:52px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,0.07);}
          .logo{display:flex;align-items:center;gap:10px;margin-bottom:16px;text-decoration:none;}
          .lt{font-size:18px;font-weight:800;color:#fff;letter-spacing:-0.3px;}
          .lt em{font-style:normal;color:var(--orange);}
          .bd{font-size:14px;line-height:1.7;color:rgba(255,255,255,0.42);max-width:260px;margin-bottom:22px;}
          .bc{display:inline-flex;align-items:center;gap:7px;padding:10px 20px;background:var(--orange);color:#fff;font-size:13.5px;font-weight:700;border-radius:50px;text-decoration:none;transition:background 0.22s,transform 0.22s;font-family:var(--font);}
          .bc:hover{background:#CC4D00;transform:translateY(-1px);}
          .col h4{font-size:11px;font-weight:700;color:rgba(255,255,255,0.32);text-transform:uppercase;letter-spacing:0.10em;margin-bottom:18px;}
          .col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
          .col a{font-size:13.5px;color:rgba(255,255,255,0.52);text-decoration:none;transition:color 0.18s;}
          .col a:hover{color:rgba(255,255,255,0.88);}
          .bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;padding-top:28px;}
          .legal{font-size:12.5px;color:rgba(255,255,255,0.28);}
          .legal a{color:rgba(255,255,255,0.38);text-decoration:none;margin:0 6px;transition:color 0.18s;}
          .legal a:hover{color:rgba(255,255,255,0.65);}
          .kvk{font-size:11.5px;color:rgba(255,255,255,0.20);margin-top:3px;}
          .socials{display:flex;gap:8px;}
          .soc{width:36px;height:36px;border-radius:9px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:15px;transition:background 0.2s,transform 0.2s;}
          .soc:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px);}
          @media(max-width:900px){.top{grid-template-columns:1fr 1fr;gap:36px;}.brand{grid-column:1/-1;}}
          @media(max-width:560px){footer{padding:48px 20px 24px;}.top{grid-template-columns:1fr;}.bottom{flex-direction:column;align-items:flex-start;}}
        </style>
        <footer>
          <div class="inner">
            <div class="top">
              <div class="brand">
                <a class="logo" href="/">
                  <svg width="32" height="32" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#0D2240"/><rect x="6" y="19" width="9" height="9" rx="2" fill="#E85D04"/><rect x="19" y="10" width="9" height="18" rx="2" fill="#E85D04" opacity="0.62"/></svg>
                  <span class="lt">Business<em>Baas</em></span>
                </a>
                <p class="bd">Van idee naar eerste betalende klanten. Het compleet ondernemersplatform voor startende ondernemers.</p>
                <a href="/voor-starters" class="bc">Gratis training starten →</a>
              </div>
              <div class="col"><h4>Platform</h4><ul><li><a href="/het-platform">Het Platform</a></li><li><a href="/het-platform">Trainingen</a></li><li><a href="/het-platform">Digitale Werkplek</a></li><li><a href="/het-platform">AI-Coach Nova</a></li><li><a href="/het-platform">Marktplaats</a></li><li><a href="/het-platform">Community</a></li></ul></div>
              <div class="col"><h4>Voor Starters</h4><ul><li><a href="/voor-starters">Voor Starters</a></li><li><a href="/voor-starters">Gratis Training</a></li><li></li><li><a href="/over-ons">Over Ons</a></li><li><a href="/contact">Contact</a></li></ul></div>
              <div class="col"><h4>Voor Partners</h4><ul><li><a href="/voor-partners">Partnerplatform</a></li><li><a href="/voor-partners">Gratis Demo</a></li><li><a href="/voor-partners">Partner worden</a></li><li><a href="mailto:info@businessbaas.com">info@businessbaas.com</a></li><li><a href="tel:+31635318649">+31 (0)6 353 18649</a></li></ul></div>
            </div>
            <div class="bottom">
              <div>
                <div class="legal">© 2025 BusinessBaas &nbsp;·&nbsp;<a href="#">Privacybeleid</a><a href="#">Algemene Voorwaarden</a><a href="#">B2B Voorwaarden</a></div>
                <div class="kvk">KVK: 90226801 · Joeri Sijstermans</div>
              </div>
              <div class="socials">
                <a class="soc" href="#" aria-label="LinkedIn">💼</a>
                <a class="soc" href="#" aria-label="Instagram">📸</a>
                <a class="soc" href="#" aria-label="Facebook">👥</a>
                <a class="soc" href="#" aria-label="YouTube">▶️</a>
                <a class="soc" href="#" aria-label="TikTok">🎵</a>
              </div>
            </div>
          </div>
        </footer>`;
    }
  }
  customElements.define('bb-home-footer', BBHomeFooter);
})();
