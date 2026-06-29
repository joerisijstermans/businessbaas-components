(function () {
  if (customElements.get('bb-landing-steps')) return;
  class BBLandingSteps extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .steps{padding:80px 24px;background:#0D2240}
          .steps-inner{max-width:980px;margin:0 auto}
          h2{font-size:clamp(26px,3.5vw,40px);font-weight:900;color:#fff;letter-spacing:-.03em;text-align:center;margin-bottom:56px}
          h2 em{font-style:normal;color:#E85D04}
          .step-row{display:flex;gap:0}
          .step{flex:1;text-align:center;position:relative;padding:0 16px}
          .step:not(:last-child)::after{content:'→';position:absolute;right:-12px;top:22px;font-size:20px;color:rgba(255,255,255,.25);font-weight:700}
          .step-num{width:48px;height:48px;border-radius:50%;background:rgba(232,93,4,.18);border:2px solid rgba(232,93,4,.4);display:inline-flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#E85D04;margin-bottom:16px}
          .step h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:8px}
          .step p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6}
          @media(max-width:640px){.step-row{flex-direction:column;gap:36px}.step:not(:last-child)::after{content:'↓';right:auto;left:50%;top:auto;bottom:-24px;transform:translateX(-50%)}}
        </style>
        <section class="steps">
          <div class="steps-inner">
            <h2 class="ob">Van dag 1 naar <em>eerste klant</em> — stap voor stap</h2>
            <div class="step-row">
              <div class="step ob"><div class="step-num">1</div><h3>Start gratis</h3><p>Begin direct met de gratis training. Geen creditcard, geen verplichting.</p></div>
              <div class="step ob" style="transition-delay:.1s"><div class="step-num">2</div><h3>Bouw je fundament</h3><p>Definieer je doelgroep, pitch en brandstory via de stap-voor-stap modules.</p></div>
              <div class="step ob" style="transition-delay:.2s"><div class="step-num">3</div><h3>Sparren met Nova</h3><p>AI-coach Nova geeft je persoonlijk advies, 24/7 beschikbaar als je vastloopt.</p></div>
              <div class="step ob" style="transition-delay:.3s"><div class="step-num">4</div><h3>Eerste klant</h3><p>Met je salesaanpak en netwerk ga je actief op zoek — en landt je eerste ja.</p></div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-steps', BBLandingSteps);
})();
