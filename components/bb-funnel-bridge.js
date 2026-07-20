(function () {
  if (customElements.get('bb-funnel-bridge')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBFunnelBridge extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          img{display:block;max-width:100%}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          mark.hl{background:transparent;color:inherit;border-radius:3px;padding:1px 3px;transition:background .8s ease}
          .p-card.ob.show mark.hl{background:rgba(232,93,4,.22);transition-delay:.5s}

          /* REFRAME */
          .reframe{background:#111;padding:72px 24px;text-align:center}
          .reframe-inner{max-width:860px;margin:0 auto}
          .reframe-q{font-size:clamp(18px,3vw,28px);font-weight:900;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.04em;line-height:1.3;margin-bottom:12px}
          .reframe-a{font-size:clamp(22px,4vw,42px);font-weight:900;color:#E85D04;text-transform:uppercase;letter-spacing:.03em;line-height:1.2}

          /* BRIDGE TEXT */
          .bridge{padding:80px 24px;background:#F4F6FA}
          .bridge-inner{max-width:720px;margin:0 auto;text-align:center}
          .bridge h2{font-size:clamp(24px,3.5vw,38px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.15;margin-bottom:20px}
          .bridge h2 em{font-style:normal;color:#E85D04}
          .bridge p{font-size:17px;color:#5A6780;line-height:1.72;margin-bottom:16px}
          .bridge p:last-child{margin-bottom:0}
          .bridge strong{color:#0D2240;font-weight:700}
          .divider{display:flex;align-items:center;gap:20px;margin:40px 0}
          .divider-line{flex:1;height:1px;background:rgba(13,34,64,.12)}
          .divider-text{font-size:13px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;white-space:nowrap}

          /* FEATURES */
          .features{padding:0 24px 80px;background:#F4F6FA}
          .features-inner{max-width:980px;margin:0 auto}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
          .feat-card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:20px;padding:32px 28px;transition:transform .25s,box-shadow .25s}
          .feat-card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(13,34,64,.25)}
          .feat-icon{font-size:32px;margin-bottom:14px}
          .feat-card h3{font-size:18px;font-weight:800;color:#fff;margin-bottom:8px}
          .feat-card p{font-size:14px;color:rgba(255,255,255,.6);line-height:1.68}

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

          @media(max-width:640px){.reframe{padding:48px 20px}.bridge{padding:56px 20px}.feat-grid{grid-template-columns:1fr}}
          @media(max-width:760px){.proof-grid{grid-template-columns:1fr 1fr}}
          @media(max-width:480px){.proof-grid{grid-template-columns:1fr}}
        </style>

        <!-- REFRAME -->
        <div class="reframe">
          <div class="reframe-inner">
            <p class="reframe-q ob">De vraag is niet: "Kan ik €69 per maand missen?"</p>
            <p class="reframe-a ob">De vraag is: "Kan ik nóg 6 maanden zonder klanten?"</p>
          </div>
        </div>

        <!-- BRIDGE TEXT -->
        <div class="bridge">
          <div class="bridge-inner">
            <h2 class="ob">Je hebt de eerste stap gezet.<br>Nu is het tijd voor <em>de rest</em>.</h2>
            <p class="ob">De 3 stappen uit de training werken. Maar om van een eerste klant naar een <strong>stabiel inkomen</strong> te groeien, heb je meer nodig: een scherpe doelgroep, een overtuigende pitch, een salesproces dat werkt, en iemand die je daarin begeleidt.</p>
            <p class="ob">Dat is precies wat BusinessBaas biedt. Geen vage theorie, maar een concreet systeem dat starters gebruikt hebben om hun bedrijf van de grond te krijgen, met AI-coach Nova als je persoonlijke sparringpartner, 24/7.</p>
            <div class="divider ob">
              <div class="divider-line"></div>
              <span class="divider-text">Wat krijg je als lid?</span>
              <div class="divider-line"></div>
            </div>
          </div>
        </div>

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
        </div>`;

      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-bridge', BBFunnelBridge);
})();
