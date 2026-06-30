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
          .steps{padding:88px 24px;background:#0D2240}
          .steps-inner{max-width:960px;margin:0 auto}
          .steps-head{text-align:center;margin-bottom:56px}
          .steps-label{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;color:rgba(232,93,4,.8);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          h2{font-size:clamp(24px,3.5vw,40px);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.1}
          h2 em{font-style:normal;color:#E85D04}
          .steps-sub{font-size:16px;color:rgba(255,255,255,.5);margin-top:12px;line-height:1.6}
          .step-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative}
          .step-row::before{content:'';position:absolute;top:32px;left:calc(16.67% + 24px);right:calc(16.67% + 24px);height:2px;background:linear-gradient(90deg,rgba(232,93,4,.3),rgba(232,93,4,.15));pointer-events:none}
          .step{text-align:center;padding:0 16px;position:relative}
          .step-num{width:64px;height:64px;border-radius:50%;background:rgba(232,93,4,.15);border:2px solid rgba(232,93,4,.35);display:inline-flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#E85D04;margin:0 auto 20px;position:relative;z-index:1;transition:background .3s,border-color .3s}
          .step:hover .step-num{background:rgba(232,93,4,.25);border-color:rgba(232,93,4,.6)}
          .step-time{display:inline-block;font-size:11px;font-weight:700;color:#E85D04;background:rgba(232,93,4,.15);padding:3px 10px;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px}
          .step h3{font-size:17px;font-weight:800;color:#fff;margin-bottom:10px;line-height:1.2}
          .step p{font-size:13.5px;color:rgba(255,255,255,.5);line-height:1.65}
          .steps-result{text-align:center;margin-top:52px;padding:24px 32px;background:rgba(232,93,4,.1);border:1px solid rgba(232,93,4,.2);border-radius:20px}
          .steps-result p{font-size:16px;font-weight:700;color:rgba(255,255,255,.85);line-height:1.5}
          .steps-result strong{color:#E85D04}
          @media(max-width:640px){.step-row{grid-template-columns:1fr;gap:32px}.step-row::before{display:none}}
        </style>
        <section class="steps">
          <div class="steps-inner">
            <div class="steps-head ob">
              <div class="steps-label">De 3 stappen</div>
              <h2>Zo spreek je in 48 uur<br>je eerste <em>potentiële klant</em></h2>
              <p class="steps-sub">Concreet, direct toepasbaar — geen vage theorie. Dit zijn de drie stappen uit de gratis training.</p>
            </div>
            <div class="step-row">
              <div class="step ob">
                <div class="step-num">1</div>
                <span class="step-time">⏱ 10 minuten</span>
                <h3>Bepaal wie jouw ideale klant is</h3>
                <p>Niet iedereen is jouw klant. In tien minuten maak je scherp wie je écht moet benaderen — zodat elk bericht raak is.</p>
              </div>
              <div class="step ob" style="transition-delay:.12s">
                <div class="step-num">2</div>
                <span class="step-time">⏱ 15 minuten</span>
                <h3>Schrijf één krachtig bericht</h3>
                <p>Geen verkooppraatje, maar een eerlijk en direct bericht dat aansluit op hun echte behoefte. Je schrijft het nu — één keer.</p>
              </div>
              <div class="step ob" style="transition-delay:.24s">
                <div class="step-num">3</div>
                <span class="step-time">⏱ Vandaag nog</span>
                <h3>Stuur het naar 10 mensen</h3>
                <p>Meer hoef je niet te doen. Stuur het bericht naar tien mensen in jouw netwerk en plan je eerste gesprekken in.</p>
              </div>
            </div>
            <div class="steps-result ob">
              <p>Resultaat: binnen <strong>48 uur</strong> spreek je je eerste potentiële klant — ook als je nog geen netwerk of ervaring hebt.</p>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-steps', BBLandingSteps);
})();
