(function () {
  if (customElements.get('bb-platform-header')) return;
  class BBPlatformHeader extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;}
          *{box-sizing:border-box;margin:0;padding:0;}
          .ph{background:linear-gradient(145deg,#0D2240 0%,#142c54 60%,#0D2240 100%);padding:80px 24px 72px;text-align:center;font-family:'Inter',sans-serif;position:relative;overflow:hidden;}
          .ph::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(232,93,4,0.12) 0%,transparent 65%);pointer-events:none;}
          .lbl{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(232,93,4,0.2);border:1px solid rgba(232,93,4,0.3);border-radius:50px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:.09em;margin-bottom:22px;}
          h1{font-size:clamp(30px,4.5vw,52px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.03em;margin-bottom:14px;}
          .sub{font-size:17px;color:rgba(255,255,255,0.6);line-height:1.65;max-width:580px;margin:0 auto 28px;}
          .for-who{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:32px;}
          .fw-item{font-size:13px;color:rgba(255,255,255,.5);font-weight:500;}
          .fw-dot{color:rgba(255,255,255,.2);margin:0 4px;}
          .btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
          .btn-p{padding:14px 32px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .2s;font-family:'Inter',sans-serif;}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,.4);}
          .btn-g{padding:14px 32px;border:2px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);font-size:15px;font-weight:600;border-radius:50px;text-decoration:none;transition:all .2s;font-family:'Inter',sans-serif;}
          .btn-g:hover{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.07);}
          @media(max-width:600px){.ph{padding:56px 20px 52px;}.btn-p,.btn-g{padding:13px 24px;font-size:14px;}.for-who{flex-direction:column;gap:6px;}}
        </style>
        <div class="ph">
          <div class="lbl">Compleet ondernemersplatform</div>
          <h1>Het Platform</h1>
          <p class="sub">Alles wat je nodig hebt om van idee naar eerste betalende klant te groeien — trainingen, AI-coach Nova, een digitale werkplek en een actieve community, op één plek.</p>
          <div class="for-who">
            <span class="fw-item">✓ Startende ondernemers</span>
            <span class="fw-dot">·</span>
            <span class="fw-item">✓ Zzp'ers in de beginfase</span>
            <span class="fw-dot">·</span>
            <span class="fw-item">✓ Van idee naar eerste klant</span>
          </div>
          <div class="btns">
            <a class="btn-p" href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top">Start gratis →</a>
            <a class="btn-g" href="https://www.businessbaas.com/prijzen" target="_top">Bekijk prijzen</a>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-platform-header', BBPlatformHeader);
})();
