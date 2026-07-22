(function () {
  if (customElements.get('bb-landing-form-intro')) return;
  class BBLandingFormIntro extends HTMLElement {
    connectedCallback() {
      if (!this.id) this.id = 'volgende-stap';
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .intro{background:#0D2240;padding:80px 24px 56px;text-align:center}
          .intro-inner{max-width:640px;margin:0 auto}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:rgba(232,93,4,.8);text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px;justify-content:center}
          .section-label::before,.section-label::after{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(26px,4vw,44px);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          h2 em{font-style:normal;color:#E85D04}
          p{font-size:clamp(15px,2vw,17px);color:rgba(255,255,255,.55);line-height:1.65}
          p strong{color:rgba(255,255,255,.8);font-weight:600}
        </style>
        <div class="intro">
          <div class="intro-inner">
            <div class="section-label ob">Gratis starten</div>
            <h2 class="ob">Klaar voor je <em>eerste stap</em>?</h2>
            <p class="ob">Vul je naam en e-mailadres in en ontvang direct toegang tot de gratis training. <strong>100% gratis — geen creditcard nodig.</strong></p>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-form-intro', BBLandingFormIntro);
})();
