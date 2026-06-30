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
          .offer-price-row{display:flex;align-items:baseline;justify-content:center;gap:6px;margin:28px 0 8px}
          .price-from{font-size:15px;color:rgba(255,255,255,.4);font-weight:500}
          .price{font-size:68px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .price-sub{font-size:17px;color:rgba(255,255,255,.45);font-weight:500}
          .price-free{font-size:14px;color:rgba(255,255,255,.45);margin-bottom:32px}
          .price-free strong{color:rgba(232,93,4,.9);font-weight:700}
          .feats{list-style:none;margin-bottom:36px;display:flex;flex-direction:column;gap:10px;text-align:left}
          .feats li{display:flex;align-items:flex-start;gap:12px}
          .feats li::before{content:'✓';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.18);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
          .feats li span{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}
          .soon{font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle;margin-left:6px}
          .cta-btn{display:inline-flex;align-items:center;gap:10px;padding:18px 44px;background:#E85D04;color:#fff;font-size:18px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:14px}
          .cta-btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 16px 40px rgba(232,93,4,.45)}
          .cta-sub{font-size:13px;color:rgba(255,255,255,.3)}
          @media(max-width:580px){.offer-card{padding:36px 24px}.price{font-size:52px}}
        </style>

        <!-- FEATURES GRID -->
        <div class="features">
          <div class="features-inner">
            <div class="feat-grid">
              <div class="feat-card ob"><div class="feat-icon">🎓</div><h3>20+ Praktische trainingen</h3><p>Van doelgroepbepaling tot salesgesprek. Modulair opgebouwd zodat jij in jouw tempo werkt — maar je werkt wél.</p></div>
              <div class="feat-card ob" style="transition-delay:.08s"><div class="feat-icon">🤖</div><h3>Nova, jouw AI-coach</h3><p>Altijd beschikbaar, nooit oordelend. Stuur haar je tekst, je idee, je twijfel — en krijg concrete feedback terug.</p></div>
              <div class="feat-card ob" style="transition-delay:.16s"><div class="feat-icon">🗂️</div><h3>Digitale werkplek</h3><p>Je businessplan, doelgroep, pitch en voortgang op één plek. Geen losse notities meer, alles in één overzicht.</p></div>
              <div class="feat-card ob" style="transition-delay:.24s"><div class="feat-icon">🤝</div><h3>Community &amp; marktplaats</h3><p>Starters die exact begrijpen wat jij doormaakt. Spar, wissel kennis uit en vind je eerste opdrachten intern.</p></div>
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
                <p class="p-quote">"Echt een stevige basis om mee te starten. Je staat er niet alleen voor."</p>
                <div class="p-person"><img src="${CDN}/stan-prof.jpg" alt="Stan Vreuls"><div><div class="p-name">Stan Vreuls</div><div class="p-role">21x</div></div></div>
              </div>
              <div class="p-card ob" style="transition-delay:.08s">
                <div class="p-stars">★★★★★</div>
                <p class="p-quote">"Nova voelt als een écht persoon om mee te sparren. Prijs-kwaliteitverhouding is top."</p>
                <div class="p-person"><img src="${CDN}/jorn-prof.jpg" alt="Jorn Gijzen"><div><div class="p-name">Jorn Gijzen</div><div class="p-role">Talent Rocketeers</div></div></div>
              </div>
              <div class="p-card ob" style="transition-delay:.16s">
                <div class="p-stars">★★★★★</div>
                <p class="p-quote">"Meer zelfvertrouwen en zekerheid. Stapsgewijs werken geeft het gevoel dat je bedrijf tot leven komt."</p>
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
              <div class="offer-price-row"><span class="price-from">Lidmaatschap vanaf</span><span class="price">€69</span><span class="price-sub">/maand</span></div>
              <p class="price-free">🎓 <strong>Begin gratis</strong> — geen creditcard, geen verplichtingen</p>
              <ul class="feats">
                <li><span>20+ praktische trainingen (inclusief verdieping op de 3 stappen)</span></li>
                <li><span>AI-coach Nova — persoonlijk advies, 24/7</span></li>
                <li><span>Slim Ondernemen met AI <span class="soon">binnenkort</span></span></li>
                <li><span>Digitale werkplek voor jouw businessplan</span></li>
                <li><span>Community &amp; marktplaats</span></li>
                <li><span>Maandelijks opzegbaar</span></li>
              </ul>
              <a href="https://www.businessbaas.com/voor-starters" class="cta-btn">
                Ja, ik wil volledige toegang
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <p class="cta-sub">Maandelijks opzegbaar · Geen verborgen kosten · Direct toegang</p>
            </div>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-offer', BBFunnelOffer);
})();
