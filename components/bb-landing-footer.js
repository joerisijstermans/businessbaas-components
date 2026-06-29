(function () {
  if (customElements.get('bb-landing-footer')) return;
  class BBLandingFooter extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .foot{padding:28px 32px;background:#0a1c38;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
          .logo-text{font-size:16px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:-.3px}
          .logo-text em{font-style:normal;color:rgba(232,93,4,.6)}
          .foot-links{display:flex;gap:20px;flex-wrap:wrap}
          .foot-links a{font-size:13px;color:rgba(255,255,255,.35);transition:color .2s}
          .foot-links a:hover{color:rgba(255,255,255,.7)}
        </style>
        <footer class="foot">
          <span class="logo-text">Business<em>Baas</em></span>
          <div class="foot-links">
            <a href="https://www.businessbaas.com/privacybeleid">Privacybeleid</a>
            <a href="https://www.businessbaas.com/algemene-voorwaarden">Algemene Voorwaarden</a>
            <a href="https://www.businessbaas.com/contact">Contact</a>
            <a href="https://www.businessbaas.com/">Terug naar website</a>
          </div>
        </footer>`;
    }
  }
  customElements.define('bb-landing-footer', BBLandingFooter);
})();
