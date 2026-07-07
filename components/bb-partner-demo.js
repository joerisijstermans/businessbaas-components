(function () {
  if (customElements.get('bb-partner-demo')) return;
  class BBPartnerDemo extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:linear-gradient(145deg,#0D2240 0%,#142c54 60%,#0D2240 100%);padding:56px 24px 44px;text-align:center;position:relative;overflow:hidden}
          .wrap::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(232,93,4,.14) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:580px;margin:0 auto;position:relative;z-index:2}
          .badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:11px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px}
          .dot{width:5px;height:5px;border-radius:50%;background:#E85D04;display:inline-block;animation:pulse 1.8s ease-in-out infinite;flex-shrink:0}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
          h1{font-size:clamp(24px,4.5vw,40px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:12px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:16px;color:rgba(255,255,255,.6);margin-bottom:24px;font-weight:500;line-height:1.6}
          .checks{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 20px;margin-bottom:24px}
          .check{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:rgba(255,255,255,.6)}
          .check::before{content:'✓';color:#E85D04;font-weight:900}
          .arrow{margin-top:4px}
          .arrow svg{animation:bounce 1.6s ease-in-out infinite}
          @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
          .form-hint{margin-top:12px;font-size:13px;font-weight:600;color:rgba(255,255,255,.4)}
          @media(max-width:480px){.wrap{padding:44px 20px 36px}h1{font-size:clamp(22px,8vw,32px)}}
        </style>
        <div class="wrap">
          <div class="inner">
            <div class="badge"><span class="dot"></span>Partner demo</div>
            <h1>Ontdek wat BusinessBaas<br>voor jouw <em>organisatie</em> kan doen</h1>
            <p class="sub">Plan een demo en zie hoe je starters begeleidt op schaal — zonder extra capaciteit van jouw team.</p>
            <div class="checks">
              <span class="check">Gratis en vrijblijvend</span>
              <span class="check">Persoonlijk gesprek</span>
              <span class="check">Binnen 2 werkdagen reactie</span>
            </div>
            <div class="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M14 22l-6-6M14 22l6-6" stroke="rgba(255,255,255,.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p class="form-hint">Vul je gegevens in en we nemen contact met je op</p>
            </div>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-partner-demo', BBPartnerDemo);
})();
