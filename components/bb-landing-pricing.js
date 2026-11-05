(function () {
  if (customElements.get('bb-landing-pricing')) return;
  class BBLandingPricing extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });

      const STRIPE_MAAND    = 'https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202';
      const STRIPE_JAAR     = 'https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200';
      const STRIPE_COACHING = 'https://buy.stripe.com/7sY7sMf3s5gm4kQ7LOeZ203';
      const UTM = '?utm_source=website&utm_medium=gratis-training&utm_campaign=pricing';

      s.innerHTML = `
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .ob{transform:translateY(22px);transition:transform .6s ease}
          .ob.show{transform:none}
          .pricing{padding:96px 24px;background:#F4F6FA}
          .pricing-inner{max-width:960px;margin:0 auto;text-align:center}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;justify-content:center}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          h2 em{font-style:normal;color:#E85D04}
          .pricing-sub{font-size:clamp(15px,2.2vw,17px);color:#5A6780;max-width:520px;margin:0 auto 52px;line-height:1.65}

          .card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:24px;box-shadow:0 8px 40px rgba(13,34,64,.3),0 2px 8px rgba(13,34,64,.15);overflow:hidden}
          .card-top{background:#E85D04;padding:11px 32px;text-align:center}
          .card-top p{font-size:13.5px;font-weight:700;color:#fff;letter-spacing:.01em}

          .card-body{display:grid;grid-template-columns:1fr 1px 1fr 1px 1fr;align-items:start;padding:40px 0}
          .divider{background:rgba(255,255,255,.1);align-self:stretch}

          .price-col{padding:0 32px;text-align:center;position:relative}
          .plan-badge{display:inline-block;font-size:10px;font-weight:800;background:#E85D04;color:#fff;padding:3px 10px;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px}
          .plan-badge.invis{visibility:hidden}
          .price-label{font-size:11.5px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
          .price-amount{font-size:56px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .price-sup{font-size:22px;font-weight:700;vertical-align:super;line-height:1}
          .price-period{font-size:16px;color:rgba(255,255,255,.45);font-weight:500}
          .price-day{font-size:13px;color:rgba(255,255,255,.35);margin-top:5px;margin-bottom:8px}
          .price-note{font-size:12px;color:rgba(255,255,255,.35);margin-bottom:24px;min-height:18px}
          .plan-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 24px;background:#E85D04;color:#fff;font-size:14.5px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s;white-space:nowrap;width:100%}
          .plan-cta:hover{background:#CC4D00;transform:translateY(-2px)}
          .plan-cta-out{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 24px;background:transparent;color:#fff;font-size:14.5px;font-weight:700;border-radius:50px;border:2px solid rgba(255,255,255,.25);transition:border-color .22s,transform .22s;white-space:nowrap;width:100%}
          .plan-cta-out:hover{border-color:rgba(255,255,255,.55);transform:translateY(-2px)}
          .plan-guarantee{font-size:11.5px;color:rgba(255,255,255,.3);margin-top:10px}

          .feats-row{border-top:1px solid rgba(255,255,255,.08);margin:0 0;padding:28px 40px 36px}
          .feats-row ul{list-style:none;display:flex;flex-wrap:wrap;gap:10px 32px;justify-content:center}
          .feats-row li{display:flex;align-items:center;gap:8px;font-size:14px;color:rgba(255,255,255,.65)}
          .feats-row li::before{content:'✓';flex-shrink:0;width:18px;height:18px;border-radius:50%;background:rgba(232,93,4,.2);color:#E85D04;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center}
          .feat-note{font-size:11px;color:rgba(255,255,255,.35);margin-left:4px}

          @media(max-width:720px){
            .card-body{grid-template-columns:1fr;padding:0}
            .divider{height:1px;width:auto;margin:0 32px;align-self:auto}
            .price-col{padding:32px 32px 28px}
            .feats-row{padding:24px 28px 32px}
            .feats-row ul{flex-direction:column;gap:10px;align-items:flex-start}
          }
        </style>
        <section class="pricing">
          <div class="pricing-inner">
            <div class="section-label ob">Transparante prijs</div>
            <h2 class="ob">Alles wat je nodig hebt.<br>In <em>één lidmaatschap</em>.</h2>
            <p class="pricing-sub ob">Kies het pakket dat bij jou past. Alle prijzen zijn inclusief btw. Geen verborgen kosten.</p>
            <div class="card ob">
              <div class="card-top"><p>✓ 10 dagen niet-goed-geld-terug garantie &nbsp;·&nbsp; ✓ Achteraf betalen via Klarna beschikbaar</p></div>
              <div class="card-body">

                <!-- MAANDELIJKS -->
                <div class="price-col">
                  <div class="plan-badge invis">-</div>
                  <p class="price-label">Online Maandelijks</p>
                  <div><span class="price-sup">€</span><span class="price-amount">69</span><span class="price-period">/mnd</span></div>
                  <p class="price-day">≈ €2,30 per dag</p>
                  <p class="price-note">Geen jaarcontract</p>
                  <a href="${STRIPE_MAAND}${UTM}&utm_content=online-maand" target="_top" class="plan-cta-out">Maandelijks starten</a>
                  <p class="plan-guarantee">Maandelijks opzegbaar</p>
                </div>

                <div class="divider"></div>

                <!-- JAARLIJKS -->
                <div class="price-col">
                  <div class="plan-badge">Meest gekozen</div>
                  <p class="price-label">Online Jaarlijks</p>
                  <div><span class="price-sup">€</span><span class="price-amount">690</span><span class="price-period">/jaar</span></div>
                  <p class="price-day">≈ €1,90 per dag</p>
                  <p class="price-note">2 maanden gratis t.o.v. maandelijks</p>
                  <a href="${STRIPE_JAAR}${UTM}&utm_content=online-jaar" target="_top" class="plan-cta">Jaarlijks starten →</a>
                  <p class="plan-guarantee">Jaarcontract · daarna maandelijks opzegbaar</p>
                </div>

                <div class="divider"></div>

                <!-- COACHING -->
                <div class="price-col">
                  <div class="plan-badge invis">-</div>
                  <p class="price-label">Coaching</p>
                  <div><span class="price-sup">€</span><span class="price-amount">990</span><span class="price-period">/jaar</span></div>
                  <p class="price-day">≈ €2,71 per dag</p>
                  <p class="price-note">Incl. 3 persoonlijke coachingssessies</p>
                  <a href="${STRIPE_COACHING}${UTM}&utm_content=coaching" target="_top" class="plan-cta-out">Coaching starten</a>
                  <p class="plan-guarantee">Jaarcontract · daarna maandelijks opzegbaar</p>
                </div>

              </div>
              <div class="feats-row">
                <ul>
                  <li>20+ praktische trainingen</li>
                  <li>Digitale werkplek</li>
                  <li>AI-coach Nova (24/7)</li>
                  <li>LIVE events <span class="feat-note">add-on</span></li>
                  <li>3 coachingssessies <span class="feat-note">coaching pakket</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>`;

      const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
      }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-pricing', BBLandingPricing);
})();
