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
        </style>
        <div class="wrap">
          <div class="inner">
            <div class="badge"><span class="dot"></span>Gratis training</div>
            <h1>Jouw eerste<br><em>betalende klanten</em></h1>
            <p class="tagline">De drie stappen die het verschil maken.</p>
            <div class="checks">
              <span class="check">Direct toegang</span>
              <span class="check">Geen creditcard</span>
              <span class="check">Altijd beschikbaar</span>
            </div>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-gratis-training', BBGratisTraining);
})();
