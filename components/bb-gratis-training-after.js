(function () {
  if (customElements.get('bb-gratis-training-after')) return;
  class BBGratisTrainingAfter extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:#0D2240;padding:48px 24px 64px}
          .inner{max-width:520px;margin:0 auto}
          .label{font-size:11px;font-weight:700;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.12em;text-align:center;margin-bottom:32px}
          .steps{display:flex;flex-direction:column;gap:0}
          .step{display:flex;align-items:flex-start;gap:20px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.06)}
          .step:last-child{border-bottom:none}
          .num{width:36px;height:36px;border-radius:10px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.28);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#E85D04;flex-shrink:0;margin-top:2px}
          .body strong{display:block;font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;line-height:1.3}
          .body span{font-size:13px;color:rgba(255,255,255,.45);line-height:1.55}
          .proof{margin-top:36px;padding:20px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;text-align:center}
          .proof-text{font-size:14px;color:rgba(255,255,255,.45);line-height:1.6}
          .proof-text strong{color:rgba(255,255,255,.75);font-weight:700}
        </style>
        <div class="wrap">
          <div class="inner">
            <p class="label">Wat je krijgt na aanmelding</p>
            <div class="steps">
              <div class="step">
                <div class="num">1</div>
                <div class="body">
                  <strong>Drie stappen naar je eerste klant</strong>
                  <span>Geen vage theorie — concrete acties die je direct kunt uitvoeren om klanten te vinden.</span>
                </div>
              </div>
              <div class="step">
                <div class="num">2</div>
                <div class="body">
                  <strong>In de actiestand, resultaat binnen 48 uur</strong>
                  <span>De training is kort, gericht en afgestemd op snelle resultaten. Je wacht niet, je doet.</span>
                </div>
              </div>
              <div class="step">
                <div class="num">3</div>
                <div class="body">
                  <strong>Geen fake webinar, maar een echte on-demand training</strong>
                  <span>Geen inlogmoment, geen 'live' opname. Jij kijkt wanneer het jou uitkomt.</span>
                </div>
              </div>
            </div>
            <div class="proof">
              <p class="proof-text">Sluit je aan bij <strong>tientallen starters</strong> die al begonnen zijn.<br>Geen verplichting — je kunt altijd stoppen.</p>
            </div>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-gratis-training-after', BBGratisTrainingAfter);
})();
