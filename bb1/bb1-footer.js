(function () {
  if (customElements.get('bb1-footer')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BB1Footer extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          footer{background:#060F1E;color:rgba(255,255,255,0.55);padding:64px 24px 28px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:52px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,0.07);}
          .logo{display:flex;align-items:center;margin-bottom:16px;text-decoration:none;}
          .logo img{height:36px;width:auto;}
          .bd{font-size:14px;line-height:1.7;color:rgba(255,255,255,0.42);max-width:260px;margin-bottom:22px;}
          .bc{display:inline-flex;align-items:center;gap:7px;padding:10px 20px;background:var(--orange);color:#fff;font-size:13.5px;font-weight:700;border-radius:50px;text-decoration:none;transition:background 0.22s,transform 0.22s;font-family:var(--font);cursor:pointer;}
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
          .soc{width:36px;height:36px;border-radius:9px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);display:flex;align-items:center;justify-content:center;text-decoration:none;color:rgba(255,255,255,0.55);transition:background 0.2s,transform 0.2s,color 0.2s;}
          .soc:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px);color:#fff;}
          .soc svg{width:15px;height:15px;flex-shrink:0;}
          @media(max-width:900px){.top{grid-template-columns:1fr 1fr;gap:36px;}.brand{grid-column:1/-1;}}
          @media(max-width:560px){footer{padding:48px 20px 24px;}.top{grid-template-columns:1fr;}.bottom{flex-direction:column;align-items:flex-start;}}
        </style>
        <footer>
          <div class="inner">
            <div class="top">
              <div class="brand">
                <a class="logo" href="https://www.businessbaas.com">
                  <img src="${CDN}/beeldmerk-tot.png" alt="BusinessBaas">
                </a>
                <p class="bd">Van idee naar eerste betalende klanten. Het compleet ondernemersplatform voor startende ondernemers.</p>
                <a href="https://www.businessbaas.com/gratis-training-aanvragen" class="bc" target="_top" data-lightbox>Gratis training starten →</a>
              </div>
              <div class="col"><h4>Voor Starters</h4><ul>
                <li><a href="https://www.businessbaas.com/voor-starters">Voor starters</a></li>
                <li><a href="https://www.businessbaas.com/het-platform">Het platform</a></li>
                <li><a href="https://www.businessbaas.com/prijzen">Prijzen</a></li>
              </ul></div>
              <div class="col"><h4>Voor Partners</h4><ul>
                <li><a href="https://www.businessbaas.com/voor-partners">Voor partners</a></li>
                <li><a href="https://www.businessbaas.com/het-platform">Het platform</a></li>
                <li><a href="https://www.businessbaas.com/partner-demo">Demo aanvragen</a></li>
              </ul></div>
              <div class="col"><h4>Informatie</h4><ul>
                <li><a href="https://www.businessbaas.com" style="color:rgba(255,255,255,.75);font-weight:700;">BusinessBaas</a></li>
                <li><a href="mailto:info@businessbaas.com">info@businessbaas.com</a></li>
                <li><span style="font-size:12.5px;color:rgba(255,255,255,.3);">KVK: 90226801</span></li>
              </ul></div>
            </div>
            <div class="bottom">
              <div>
                <div class="legal">© 2026 BusinessBaas · Alle rechten voorbehouden &nbsp;·&nbsp;<a href="https://www.businessbaas.com/privacybeleid">Privacybeleid</a><a href="https://www.businessbaas.com/algemenevoorwaarden-b2c">Algemene Voorwaarden</a><a href="https://www.businessbaas.com/algemenevoorwaarden-b2b">B2B Voorwaarden</a></div>
                <div class="kvk">KVK: 90226801</div>
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
            </div>
          </div>
        </footer>`;
    }
  }
  customElements.define('bb1-footer', BB1Footer);
})();
