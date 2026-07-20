(function () {
  if (customElements.get('bb-gratis-training')) return;
  class BBGratisTraining extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:#0D2240;padding:48px 24px 36px;text-align:center;position:relative;overflow:hidden}
          .wrap::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(232,93,4,.12) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:560px;margin:0 auto;position:relative;z-index:2}
          .badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:11px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .dot{width:5px;height:5px;border-radius:50%;background:#E85D04;display:inline-block;animation:pulse 1.8s ease-in-out infinite;flex-shrink:0}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
          h1{font-size:clamp(26px,5vw,44px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:8px}
          h1 em{font-style:normal;color:#E85D04}
          .tagline{font-size:16px;color:rgba(255,255,255,.55);margin-bottom:20px;font-weight:500}
          .checks{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 20px}
          .check{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:rgba(255,255,255,.6)}
          .check::before{content:'✓';color:#E85D04;font-weight:900}
          .arrow{margin-top:24px}
          .arrow svg{animation:bounce 1.6s ease-in-out infinite}
          @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
          .form-hint{margin-top:14px;font-size:13.5px;font-weight:600;color:rgba(255,255,255,.45)}
          .social-proof{margin-top:20px;font-size:13px;color:rgba(255,255,255,.35);font-weight:600}
          .social-proof strong{color:rgba(255,255,255,.55)}
          .byline{margin-top:10px;font-size:12px;color:rgba(255,255,255,.28);letter-spacing:.02em}
        </style>
        <div class="wrap">
          <div class="inner">
            <div class="badge"><span class="dot"></span>Gratis training</div>
            <h1>Jouw eerste<br><em>betalende klanten</em></h1>
            <p class="tagline">De drie stappen die het verschil maken — in 48 uur.</p>
            <div class="checks">
              <span class="check">Direct toegang</span>
              <span class="check">Geen creditcard</span>
              <span class="check">Altijd beschikbaar</span>
            </div>
            <p class="social-proof">Sluit je aan bij <strong>100+ startende ondernemers</strong> die al begonnen zijn.</p>
            <div class="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M14 22l-6-6M14 22l6-6" stroke="rgba(255,255,255,.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p class="form-hint">Vul hieronder je gegevens in en start direct</p>
            </div>
            <p class="byline">Joeri Sijstermans · oprichter BusinessBaas</p>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-gratis-training', BBGratisTraining);
})();
