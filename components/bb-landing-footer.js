(function () {
  if (customElements.get('bb-landing-footer')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingFooter extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .foot{padding:24px 32px;background:#0a1c38;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
          .logo img{height:28px;width:auto;opacity:.65}
          .foot-right{display:flex;flex-direction:column;align-items:flex-end;gap:8px}
          .foot-links{display:flex;gap:20px;flex-wrap:wrap;justify-content:flex-end}
          .foot-links a{font-size:13px;color:rgba(255,255,255,.35);transition:color .2s}
          .foot-links a:hover{color:rgba(255,255,255,.7)}
          .foot-copy{font-size:11.5px;color:rgba(255,255,255,.2)}
          .socials{display:flex;gap:8px}
          .soc{width:30px;height:30px;border-radius:7px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.4);transition:background .2s,color .2s}
          .soc:hover{background:rgba(255,255,255,.12);color:#fff}
          .soc svg{width:13px;height:13px}
          @media(max-width:560px){.foot{flex-direction:column;align-items:flex-start}.foot-right{align-items:flex-start}}
        </style>
        <footer class="foot">
          <a href="https://www.businessbaas.com" class="logo">
            <img src="${CDN}/beeldmerk-tot.png" alt="BusinessBaas">
          </a>
          <div class="foot-right">
            <div class="foot-links">
              <a href="https://www.businessbaas.com/privacybeleid">Privacybeleid</a>
              <a href="https://www.businessbaas.com/algemenevoorwaarden-b2c">Algemene Voorwaarden</a>
              <a href="https://www.businessbaas.com/algemenevoorwaarden-b2b">B2B Voorwaarden</a>
              <a href="https://www.businessbaas.com/contact">Contact</a>
            </div>
            <div style="display:flex;align-items:center;gap:16px;justify-content:flex-end">
              <div class="socials">
                <a class="soc" href="https://www.linkedin.com/company/businessbaas" target="_blank" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a class="soc" href="https://www.instagram.com/businessbaas" target="_blank" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a class="soc" href="https://www.youtube.com/@businessbaas" target="_blank" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
              </div>
              <span class="foot-copy">© 2026 BusinessBaas · Alle rechten voorbehouden</span>
            </div>
          </div>
        </footer>`;
    }
  }
  customElements.define('bb-landing-footer', BBLandingFooter);
})();
