(function () {
  if (customElements.get('bb-funnel-offer')) return;
  class BBFunnelOffer extends HTMLElement {
    connectedCallback() {
      if (!this.id) this.id = 'volgende-stap';
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}

          /* OFFER CARD */
          .offer{padding:80px 24px;background:#F4F6FA}
          .offer-inner{max-width:680px;margin:0 auto}
          .offer-card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:28px;padding:52px 48px;position:relative;overflow:hidden;text-align:center}
          .offer-card::before{content:'';position:absolute;top:-80px;right:-80px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,.14),transparent 70%);pointer-events:none}
          .offer-tag{display:inline-block;background:rgba(232,93,4,.2);color:#E85D04;font-size:11.5px;font-weight:700;padding:5px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:24px}
          .offer-card h2{font-size:clamp(24px,3.5vw,36px);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.15;margin-bottom:12px}
          .offer-card h2 em{font-style:normal;color:#E85D04}
          .plans{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:28px 0 32px}
          .plan{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 16px;position:relative}
          .plan.best{border-color:#E85D04;background:rgba(232,93,4,.08)}
          .plan-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:#E85D04;color:#fff;font-size:10px;font-weight:800;padding:3px 12px;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap}
          .plan-label{font-size:10px;font-weight:700;color:rgba(255,255,255,.38);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
          .plan-price{font-size:30px;font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:2px}
          .plan-price span{font-size:13px;color:rgba(255,255,255,.45);font-weight:500}
          .plan-day{font-size:11.5px;color:rgba(255,255,255,.4);margin-bottom:14px;line-height:1.4}
          .plan-save{font-size:11px;font-weight:700;color:#4ADE80;margin-top:10px}
          .plan-btn{display:block;padding:11px 12px;background:#E85D04;color:#fff;font-size:13px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s;font-family:'Inter',sans-serif}
          .plan-btn:hover{background:#CC4D00}
          .plan-btn.sec{background:rgba(255,255,255,.1);color:rgba(255,255,255,.65)}
          .plan-btn.sec:hover{background:rgba(255,255,255,.16)}
          .feats{list-style:none;margin-bottom:36px;display:flex;flex-direction:column;gap:10px;text-align:left}
          .feats li{display:flex;align-items:flex-start;gap:12px}
          .feats li::before{content:'✓';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.18);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
          .feats li span{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}
          .soon{font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle;margin-left:6px}
          .feats li.addon{color:rgba(255,255,255,.45)}
          .feats li.addon::before{content:'↗';background:transparent;color:rgba(232,93,4,.5)}
          .addon-pill{font-size:10px;font-weight:700;background:rgba(232,93,4,.18);color:rgba(232,93,4,.8);padding:2px 7px;border-radius:50px;vertical-align:middle;margin-left:5px}
          .cta-sub{font-size:13px;color:rgba(255,255,255,.3)}
          @media(max-width:480px){.plans{grid-template-columns:1fr}}
          @media(max-width:580px){.offer-card{padding:36px 24px}}
        </style>

        <!-- OFFER CARD -->
        <div class="offer">
          <div class="offer-inner">
            <div class="offer-card ob">
              <span class="offer-tag">Word nu lid</span>
              <h2>Zet de volgende stap.<br><em>Begin vandaag.</em></h2>
              <div class="plans">
                <div class="plan">
                  <p class="plan-label">Maandelijks</p>
                  <p class="plan-price">€69<span>/maand</span></p>
                  <p class="plan-day">€2,30 per dag<br>Maandelijks opzegbaar</p>
                  <a href="https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202" class="plan-btn sec">Start maandelijks</a>
                </div>
                <div class="plan best">
                  <div class="plan-badge">Meest gekozen</div>
                  <p class="plan-label">Jaarlijks</p>
                  <p class="plan-price">€690<span>/jaar</span></p>
                  <p class="plan-day">€1,90 per dag<br>Na 1 jaar maandelijks opzegbaar</p>
                  <a href="https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200" class="plan-btn">Start jaarlijks</a>
                  <p class="plan-save">✓ 2 maanden gratis t.o.v. maandelijks</p>
                </div>
              </div>
              <ul class="feats">
                <li><span>20+ praktische trainingen</span></li>
                <li><span>Digitale werkplek</span></li>
                <li><span>AI-coach Nova (24/7)</span></li>
                <li><span>Slim Ondernemen met AI <span class="soon">binnenkort</span></span></li>
                <li><span>Community &amp; marktplaats</span></li>
                <li class="addon"><span>LIVE events<span class="addon-pill">add-on</span></span></li>
                <li class="addon"><span>1 op 1 coaching<span class="addon-pill">add-on</span></span></li>
              </ul>
              <p class="cta-sub">Direct toegang · Geen verborgen kosten · Maandelijks opzegbaar</p>
            </div>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-offer', BBFunnelOffer);
})();
