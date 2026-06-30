(function () {
  if (customElements.get('bb-funnel-bridge')) return;
  class BBFunnelBridge extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}

          /* reframe block */
          .reframe{background:#111;padding:72px 24px;text-align:center}
          .reframe-inner{max-width:860px;margin:0 auto}
          .reframe-q{font-size:clamp(18px,3vw,28px);font-weight:900;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.04em;line-height:1.3;margin-bottom:12px}
          .reframe-a{font-size:clamp(22px,4vw,42px);font-weight:900;color:#E85D04;text-transform:uppercase;letter-spacing:.03em;line-height:1.2}

          /* bridge text */
          .bridge{padding:80px 24px;background:#F4F6FA}
          .bridge-inner{max-width:720px;margin:0 auto;text-align:center}
          .bridge h2{font-size:clamp(24px,3.5vw,38px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.15;margin-bottom:20px}
          .bridge h2 em{font-style:normal;color:#E85D04}
          .bridge p{font-size:17px;color:#5A6780;line-height:1.72;margin-bottom:16px}
          .bridge p:last-child{margin-bottom:0}
          .bridge strong{color:#0D2240;font-weight:700}

          /* divider */
          .divider{display:flex;align-items:center;gap:20px;margin:40px 0}
          .divider-line{flex:1;height:1px;background:rgba(13,34,64,.12)}
          .divider-text{font-size:13px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;white-space:nowrap}
        </style>

        <!-- REFRAME from video end slide -->
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
            <p class="ob">De 3 stappen uit de training werken. Maar om van een eerste klant naar een <strong>stabiel inkomen</strong> te groeien, heb je meer nodig: een scherpe doelgroep, een overtuigende pitch, een salesproces dat werkt — en iemand die je daarin begeleidt.</p>
            <p class="ob">Dat is precies wat BusinessBaas biedt. Geen vage theorie, maar een concreet systeem dat starters gebruikt hebben om hun bedrijf van de grond te krijgen — met AI-coach Nova als je persoonlijke sparringpartner, 24/7.</p>
            <div class="divider ob">
              <div class="divider-line"></div>
              <span class="divider-text">Wat krijg je als lid?</span>
              <div class="divider-line"></div>
            </div>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-bridge', BBFunnelBridge);
})();
