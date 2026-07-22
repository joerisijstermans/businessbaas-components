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
          .pricing-inner{max-width:860px;margin:0 auto;text-align:center}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;justify-content:center}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          h2 em{font-style:normal;color:#E85D04}
          .pricing-sub{font-size:17px;color:#5A6780;max-width:500px;margin:0 auto 52px;line-height:1.65}

          .card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:24px;box-shadow:0 8px 40px rgba(13,34,64,.3),0 2px 8px rgba(13,34,64,.15);overflow:hidden}
          .card-top{background:#E85D04;padding:14px 32px;text-align:center}
          .card-top p{font-size:14px;font-weight:700;color:#fff;letter-spacing:.01em}
          .card-body{display:grid;grid-template-columns:1fr 1px 1fr;align-items:start;padding:40px 0}

          .price-col{padding:0 40px;text-align:center}
          .price-label{font-size:12px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .price-amount{font-size:64px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .price-period{font-size:17px;color:rgba(255,255,255,.45);font-weight:500}
          .price-day{font-size:14px;color:rgba(255,255,255,.4);margin-top:6px;margin-bottom:28px}
          .plan-cta{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#E85D04;color:#fff;font-size:16px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;white-space:nowrap}
          .plan-cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 12px 32px rgba(232,93,4,.4)}
          .plan-guarantee{font-size:12px;color:rgba(255,255,255,.35);margin-top:12px}

          .divider{width:1px;background:rgba(255,255,255,.1);align-self:stretch}

          .feats-col{padding:0 40px}
          .feats-col ul{list-style:none;display:flex;flex-direction:column;gap:13px;text-align:left}
          .feats-col li{display:flex;align-items:center;gap:10px;font-size:15px;color:rgba(255,255,255,.8)}
          .feats-col li::before{content:'✓';flex-shrink:0;width:20px;height:20px;border-radius:50%;background:rgba(232,93,4,.2);color:#E85D04;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center}
          .soon-badge{font-size:10px;font-weight:700;background:rgba(124,58,237,.2);color:#C4B5FD;padding:2px 7px;border-radius:50px;margin-left:6px;vertical-align:middle}

          @media(max-width:640px){
            .card-body{grid-template-columns:1fr;padding:32px 0}
            .divider{height:1px;width:auto;margin:0 32px}
            .price-col{padding:0 32px 32px}
            .feats-col{padding:32px 32px 0}
          }
        </style>
        <section class="pricing">
          <div class="pricing-inner">
            <div class="section-label ob">Transparante prijs</div>
            <h2 class="ob">Begin gratis.<br>Groei in <em>jouw tempo</em>.</h2>
            <p class="pricing-sub ob">Start met de gratis training en beslis daarna of Businessbaas bij jou past. Geen verplichtingen, geen verrassingen.</p>
            <div class="card ob">
              <div class="card-body">
                <div class="price-col">
                  <p class="price-label">Lidmaatschap</p>
                  <div><span class="price-amount">€69</span><span class="price-period">/mnd</span></div>
                  <p class="price-day">≈ €2,30 per dag</p>
                  <a href="https://www.businessbaas.com/gratis-training#volgende-stap" class="plan-cta" target="_top">
                    Start gratis
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </a>
                  <p class="plan-guarantee">Maandelijks opzegbaar</p>
                </div>
                <div class="divider"></div>
                <div class="feats-col">
                  <ul>
                    <li>20+ praktische trainingen</li>
                    <li>AI-coach Nova (24/7)</li>
                    <li>Slim Ondernemen met AI <span class="soon-badge">binnenkort</span></li>
                    <li>Digitale werkplek</li>
                    <li>Community &amp; marktplaats</li>
                    <li>Altijd opzegbaar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-pricing', BBLandingPricing);
})();
