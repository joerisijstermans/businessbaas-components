(function () {
  if (customElements.get('bb-landing-pricing')) return;
  class BBLandingPricing extends HTMLElement {
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
          .pricing{padding:96px 24px;background:#F4F6FA}
          .pricing-inner{max-width:900px;margin:0 auto;text-align:center}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;justify-content:center}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          h2 em{font-style:normal;color:#E85D04}
          .pricing-sub{font-size:17px;color:#5A6780;max-width:500px;margin:0 auto 52px;line-height:1.65}
          .plan-card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:28px;padding:52px 48px;position:relative;overflow:hidden}
          .plan-card::before{content:'';position:absolute;top:-80px;right:-80px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,.12),transparent 70%);pointer-events:none}
          .plan-price-row{display:flex;align-items:baseline;justify-content:center;gap:6px;margin-bottom:8px}
          .plan-from{font-size:16px;color:rgba(255,255,255,.45);font-weight:500}
          .plan-price{font-size:72px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .plan-price-sub{font-size:18px;color:rgba(255,255,255,.5);font-weight:500}
          .plan-free-note{font-size:15px;color:rgba(255,255,255,.5);margin-bottom:36px}
          .plan-free-note strong{color:rgba(232,93,4,.9);font-weight:700}
          .plan-feats{list-style:none;margin-bottom:40px;display:flex;flex-direction:column;gap:12px}
          .plan-feats li{display:flex;align-items:flex-start;gap:12px;text-align:left}
          .plan-feats li::before{content:'✓';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.18);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
          .plan-feats li span{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}
          .soon-badge{font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle;margin-left:6px}
          .plan-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:#E85D04;color:#fff;font-size:17px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:14px}
          .plan-cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .plan-guarantee{font-size:13px;color:rgba(255,255,255,.35)}
          @media(max-width:600px){.plan-card{padding:36px 24px}.plan-price{font-size:56px}}
        </style>
        <section class="pricing">
          <div class="pricing-inner">
            <div class="section-label ob">Transparante prijs</div>
            <h2 class="ob">Begin gratis.<br>Groei in <em>jouw tempo</em>.</h2>
            <p class="pricing-sub ob">Start met de gratis training en beslis daarna of BusinessBaas bij jou past. Geen verplichtingen, geen verrassingen.</p>
            <div class="plan-card ob">
              <div class="plan-price-row"><span class="plan-from">Lidmaatschap vanaf</span><span class="plan-price">€69</span><span class="plan-price-sub">/maand</span></div>
              <p class="plan-free-note">🎓 <strong>Begin gratis</strong> met de BusinessBaas training — geen creditcard nodig</p>
              <ul class="plan-feats">
                <li><span>20+ praktische trainingen</span></li>
                <li><span>AI-coach Nova (24/7)</span></li>
                <li><span>Slim Ondernemen met AI <span class="soon-badge">binnenkort</span></span></li>
                <li><span>Digitale werkplek</span></li>
                <li><span>Community &amp; marktplaats</span></li>
                <li><span>Altijd opzegbaar</span></li>
              </ul>
              <a href="https://www.businessbaas.com/gratis-training#aanmelden" class="plan-cta" target="_top">
                Start gratis training
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <p class="plan-guarantee">Maandelijks opzegbaar · Geen verborgen kosten</p>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-pricing', BBLandingPricing);
})();
