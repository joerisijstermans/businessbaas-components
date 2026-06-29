(function () {
  if (customElements.get('bb-landing-nav')) return;
  class BBLandingNav extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;height:68px;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .topbar{position:fixed;top:0;left:0;right:0;width:100%;z-index:999;background:rgba(255,255,255,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,.07);padding:0 32px;height:68px;display:flex;align-items:center;justify-content:space-between}
          .logo{display:flex;align-items:center;gap:10px}
          .logo-text{font-size:18px;font-weight:800;color:#0D2240;letter-spacing:-.4px}
          .logo-text em{font-style:normal;color:#E85D04}
          .topbar-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 22px;background:#E85D04;color:#fff;font-size:14px;font-weight:700;border-radius:50px;transition:background .2s,transform .2s,box-shadow .2s}
          .topbar-cta:hover{background:#CC4D00;transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,93,4,.35)}
          @media(max-width:480px){.topbar{padding:0 20px}.topbar-cta{font-size:13px;padding:9px 16px}}
        </style>
        <header class="topbar">
          <div class="logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="8" fill="#0D2240"/>
              <rect x="6" y="19" width="9" height="9" rx="2" fill="#E85D04"/>
              <rect x="19" y="10" width="9" height="18" rx="2" fill="#E85D04" opacity="0.62"/>
            </svg>
            <span class="logo-text">Business<em>Baas</em></span>
          </div>
          <a href="https://www.businessbaas.com/voor-starters" class="topbar-cta">
            Start gratis training
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </header>`;
    }
  }
  customElements.define('bb-landing-nav', BBLandingNav);
})();
