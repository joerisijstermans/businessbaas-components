(function () {
  if (customElements.get('bb-home-nav')) return;
  class BBHomeNav extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); this._open = false; }
    connectedCallback() {
      this.render();
      this._bind();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          :host { display: block; position: fixed; top: 0; left: 0; right: 0; z-index: 9999; --orange: #E85D04; --navy: #0D2240; --font: 'Inter', -apple-system, sans-serif; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          nav { display: flex; align-items: center; justify-content: space-between; padding: 0 48px; height: 72px; background: rgba(255,255,255,0.97); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid rgba(0,0,0,0.07); font-family: var(--font); transition: box-shadow 0.3s ease; }
          nav.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
          .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
          .logo-text { font-size: 18.5px; font-weight: 800; color: var(--navy); letter-spacing: -0.4px; }
          .logo-text em { font-style: normal; color: var(--orange); }
          .links { display: flex; align-items: center; list-style: none; gap: 2px; }
          .links a { display: block; padding: 8px 13px; font-size: 13.5px; font-weight: 500; color: #4B5563; text-decoration: none; border-radius: 8px; transition: color 0.18s, background 0.18s; white-space: nowrap; }
          .links a:hover { color: var(--navy); background: rgba(13,34,64,0.06); }
          .links a.active { color: var(--orange); font-weight: 600; }
          .cta { display: flex; align-items: center; gap: 7px; padding: 10px 22px; background: var(--orange); color: #fff; font-size: 13.5px; font-weight: 700; border: none; border-radius: 50px; cursor: pointer; text-decoration: none; white-space: nowrap; transition: background 0.22s, transform 0.22s, box-shadow 0.22s; font-family: var(--font); flex-shrink: 0; }
          .cta:hover { background: #CC4D00; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(232,93,4,0.32); }
          .burger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 8px; background: none; border: none; flex-shrink: 0; }
          .burger span { display: block; width: 22px; height: 2px; background: var(--navy); border-radius: 2px; transition: all 0.3s ease; }
          .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          .burger.open span:nth-child(2) { opacity: 0; }
          .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
          .mobile { display: none; flex-direction: column; background: #fff; border-top: 1px solid rgba(0,0,0,0.06); padding: 12px 20px 24px; gap: 4px; }
          .mobile.open { display: flex; }
          .mobile a { padding: 12px 14px; font-size: 15px; font-weight: 500; color: #374151; text-decoration: none; border-radius: 10px; transition: background 0.18s; }
          .mobile a:hover { background: rgba(13,34,64,0.05); }
          .mob-cta { margin-top: 10px; padding: 14px 20px; background: var(--orange); color: #fff; font-size: 15px; font-weight: 700; border-radius: 12px; text-align: center; text-decoration: none; display: block; transition: background 0.2s; }
          .mob-cta:hover { background: #CC4D00; }
          @media (max-width: 960px) { nav { padding: 0 20px; height: 64px; } .links, .cta { display: none; } .burger { display: flex; } }
        </style>
        <nav id="nav">
          <a class="logo" href="https://www.businessbaas.com">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#0D2240"/><rect x="6" y="19" width="9" height="9" rx="2" fill="#E85D04"/><rect x="19" y="10" width="9" height="18" rx="2" fill="#E85D04" opacity="0.62"/></svg>
            <span class="logo-text">Business<em>Baas</em></span>
          </a>
          <ul class="links">
            <li><a href="https://www.businessbaas.com" class="active">Home</a></li>
            <li><a href="https://www.businessbaas.com/voor-starters">Voor Starters</a></li>
            <li><a href="https://www.businessbaas.com/voor-partners">Voor Partners</a></li>
            <li><a href="https://www.businessbaas.com/het-platform">Het Platform</a></li>
            <li><a href="https://www.businessbaas.com/over-ons">Over Ons</a></li>
            <li><a href="https://www.businessbaas.com/contact">Contact</a></li>
          </ul>
          <a href="https://www.businessbaas.com/gratis-training-aanvragen" class="cta" target="_top" data-lightbox>Gratis training <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <button class="burger" id="burger" aria-label="Menu openen"><span></span><span></span><span></span></button>
        </nav>
        <div class="mobile" id="mobile">
          <a href="https://www.businessbaas.com">Home</a>
          <a href="https://www.businessbaas.com/voor-starters">Voor Starters</a>
          <a href="https://www.businessbaas.com/voor-partners">Voor Partners</a>
          <a href="https://www.businessbaas.com/het-platform">Het Platform</a>
          <a href="https://www.businessbaas.com/over-ons">Over Ons</a>
          <a href="https://www.businessbaas.com/contact">Contact</a>
          <a href="https://www.businessbaas.com/gratis-training-aanvragen" class="mob-cta" target="_top" data-lightbox>Gratis training starten →</a>
        </div>`;
    }
    _bind() {
      const nav = this.shadowRoot.getElementById('nav');
      const burger = this.shadowRoot.getElementById('burger');
      const mobile = this.shadowRoot.getElementById('mobile');
      burger.addEventListener('click', () => {
        this._open = !this._open;
        burger.classList.toggle('open', this._open);
        mobile.classList.toggle('open', this._open);
        burger.setAttribute('aria-label', this._open ? 'Menu sluiten' : 'Menu openen');
      });
      window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });
    }
  }
  customElements.define('bb-home-nav', BBHomeNav);
})();
