(function () {
  if (customElements.get('bb-funnel-offer')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBFunnelOffer extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          img{display:block;max-width:100%}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          mark.hl{background:transparent;color:inherit;border-radius:3px;padding:1px 3px;transition:background .8s ease}
          .p-card.ob.show mark.hl{background:rgba(232,93,4,.22);transition-delay:.5s}

          /* FEATURES */
          .features{padding:0 24px 80px;background:#F4F6FA}
          .features-inner{max-width:980px;margin:0 auto}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
          .feat-card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:20px;padding:32px 28px;transition:transform .25s,box-shadow .25s}
          .feat-card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(13,34,64,.25)}
          .feat-icon{font-size:32px;margin-bottom:14px}
          .feat-card h3{font-size:18px;font-weight:800;color:#fff;margin-bottom:8px}
          .feat-card p{font-size:14px;color:rgba(255,255,255,.6);line-height:1.68}
          @media(max-width:640px){.feat-grid{grid-template-columns:1fr}}

          /* PROOF */
          .proof{padding:72px 24px;background:#0D2240}
          .proof-inner{max-width:900px;margin:0 auto}
          .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
          .p-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 20px}
          .p-stars{color:#FBBC04;font-size:14px;margin-bottom:10px}
          .p-quote{font-size:14px;font-style:italic;color:rgba(255,255,255,.75);line-height:1.68;margin-bottom:16px}
          .p-person{display:flex;align-items:center;gap:10px}
          .p-person img{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid rgba(232,93,4,.4)}
          .p-name{font-size:13px;font-weight:700;color:#fff}
          .p-role{font-size:11px;color:rgba(255,255,255,.4);margin-top:1px}
          .proof h2{font-size:clamp(24px,3.5vw,38px);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.1;text-align:center}
          .proof h2 em{font-style:normal;color:#E85D04}
          @media(max-width:760px){.proof-grid{grid-template-columns:1fr 1fr}}
          @media(max-width:480px){.proof-grid{grid-template-columns:1fr}}

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
          @media(max-width:480px){.plans{grid-template-columns:1fr}}
          .feats{list-style:none;margin-bottom:36px;display:flex;flex-direction:column;gap:10px;text-align:left}
          .feats li{display:flex;align-items:flex-start;gap:12px}
          .feats li::before{content:'✓';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.18);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
          .feats li span{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}
          .soon{font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle;margin-left:6px}
          .feats li.addon{color:rgba(255,255,255,.45)}
          .feats li.addon::before{content:'↗';background:transparent;color:rgba(232,93,4,.5)}
          .cta-btn{display:inline-flex;align-items:center;gap:10px;padding:18px 44px;background:#E85D04;color:#fff;font-size:18px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:14px}
          .cta-btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 16px 40px rgba(232,93,4,.45)}
          .cta-sub{font-size:13px;color:rgba(255,255,255,.3)}
          @media(max-width:580px){.offer-card{padding:36px 24px}.price{font-size:52px}}
        </style>

        <!-- FEATURES GRID -->
        <div class="features">
          <div class="features-inner">
            <div class="feat-grid">
              <div class="feat-card ob"><div class="feat-icon">📚</div><h3>20+ Praktische trainingen</h3><p>Stap voor stap van idee naar eerste klant. Elke training eindigt met een concrete opdracht die je direct uitvoert.</p></div>
              <div class="feat-card ob" style="transition-delay:.08s"><div class="feat-icon">🤖</div><h3>Nova, jouw AI-coach</h3><p>Jouw 24/7 sparringspartner. Nova kent het volledige programma, stelt de juiste vragen en helpt je verder als je vastzit.</p></div>
              <div class="feat-card ob" style="transition-delay:.16s"><div class="feat-icon">💻</div><h3>Digitale werkplek</h3><p>Werk elke opdracht direct uit op het platform. Geen losse Word-documenten meer, alles op één overzichtelijke plek.</p></div>
              <div class="feat-card ob" style="transition-delay:.24s"><div class="feat-icon">🤝</div><h3>Community &amp; marktplaats</h3><p>Ondernemers die precies begrijpen wat jij doormaakt. Stel vragen, wissel kennis uit en vind je eerste klanten intern.</p></div>
            </div>
          </div>
        </div>

        <!-- SOCIAL PROOF -->
        <div class="proof">
          <div class="proof-inner">
            <h2 class="ob">Starters die je al voorgingen<br>zeggen het <em>zelf</em></h2>
            <div class="proof-grid">
              <div class="p-card ob">
                <div class="p-stars">★★★★★</div>
                <p class="p-quote">"Echt een stevige basis om mee te starten. <mark class="hl">je staat er niet alleen voor</mark>."</p>
                <div class="p-person"><img src="${CDN}/stan-prof.jpg" alt="Stan Vreuls"><div><div class="p-name">Stan Vreuls</div><div class="p-role">21x</div></div></div>
              </div>
              <div class="p-card ob" style="transition-delay:.08s">
                <div class="p-stars">★★★★★</div>
                <p class="p-quote">"Nova voelt als een écht persoon om mee te sparren. <mark class="hl">prijs-kwaliteitverhouding is top</mark>."</p>
                <div class="p-person"><img src="${CDN}/jorn-prof.jpg" alt="Jorn Gijzen"><div><div class="p-name">Jorn Gijzen</div><div class="p-role">Talent Rocketeers</div></div></div>
              </div>
              <div class="p-card ob" style="transition-delay:.16s">
                <div class="p-stars">★★★★★</div>
                <p class="p-quote">"<mark class="hl">meer zelfvertrouwen en zekerheid</mark>. Stapsgewijs werken geeft het gevoel dat je bedrijf tot leven komt."</p>
                <div class="p-person"><img src="${CDN}/joyce-prof.jpg" alt="Joyce Bekkers"><div><div class="p-name">Joyce Bekkers</div><div class="p-role">Kindercoach The Joy</div></div></div>
              </div>
            </div>
          </div>
        </div>

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
                <li class="addon"><span>LIVE events</span></li>
                <li class="addon"><span>1 op 1 coaching</span></li>
              </ul>
              <p class="cta-sub">Geen verborgen kosten · Direct toegang</p>
            </div>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-offer', BBFunnelOffer);
})();
