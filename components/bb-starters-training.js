(function () {
  if (customElements.get('bb-starters-training')) return;
  class BBStartersTraining extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this.shadowRoot.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          window.parent.postMessage({ action: 'openLightbox', lightbox: 'Gratis training' }, '*');
        });
      });
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap" rel="stylesheet">
        <style>
          :host { display: block; --orange: #E85D04; --navy: #0D2240; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          .strip { background: var(--navy); padding: 28px 24px; font-family: 'Inter', sans-serif; }
          .inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
          .left { display: flex; align-items: center; gap: 16px; }
          .icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(232,93,4,0.18); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
          .txt h3 { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 3px; }
          .txt p { font-size: 13.5px; color: rgba(255,255,255,0.55); }
          .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 26px; background: var(--orange); color: #fff; font-size: 14px; font-weight: 700; border-radius: 50px; text-decoration: none; transition: background 0.22s, transform 0.22s; white-space: nowrap; flex-shrink: 0; }
          .btn:hover { background: #CC4D00; transform: translateY(-1px); }
          @media (max-width: 600px) { .inner { flex-direction: column; align-items: flex-start; } }
        </style>
        <div class="strip" id="gratis-training">
          <div class="inner">
            <div class="left">
              <div class="icon">🎓</div>
              <div class="txt">
                <h3>Gratis training: Jouw eerste betalende klant</h3>
                <p>Ontdek de drie stappen die het verschil maken, geen creditcard nodig</p>
              </div>
            </div>
            <a href="https://www.businessbaas.com/voor-starters" class="btn" data-lightbox>Start gratis <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-starters-training', BBStartersTraining);
})();
