(function () {
  if (customElements.get('bb-landing-cta')) return;
  class BBLandingCta extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .final{padding:96px 24px;background:#0D2240;text-align:center;position:relative;overflow:hidden}
          .final::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(232,93,4,.15) 0%,transparent 65%);pointer-events:none}
          .final-inner{max-width:680px;margin:0 auto;position:relative;z-index:2}
          h2{font-size:clamp(30px,5vw,56px);font-weight:900;color:#fff;letter-spacing:-.035em;line-height:1.08;margin-bottom:20px}
          h2 em{font-style:normal;color:#E85D04}
          p{font-size:clamp(16px,2.5vw,18px);color:rgba(255,255,255,.6);line-height:1.65;margin-bottom:44px}
          .final-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 42px;background:#E85D04;color:#fff;font-size:18px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:16px}
          .final-cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 16px 40px rgba(232,93,4,.45)}
          .final-note{font-size:13px;color:rgba(255,255,255,.35)}
        </style>
        <section class="final">
          <div class="final-inner">
            <h2 class="ob">Klaar om te beginnen?<br><em>Start vandaag gratis.</em></h2>
            <p class="ob">Tientallen starters gingen je voor. De volgende stap is simpel: klik op de knop en begin direct met de gratis training. Geen excuses meer. De tijd is nu.</p>
            <a href="https://www.businessbaas.com/gratis-training#volgende-stap" class="final-cta ob">
              Bekijk de gratis training
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="final-note ob">✓ Direct toegang &nbsp;·&nbsp; ✓ Geen creditcard nodig</p>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-cta', BBLandingCta);
})();
