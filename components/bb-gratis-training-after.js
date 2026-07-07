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
          .wrap{background:#0D2240;padding:40px 24px 56px;text-align:center}
          .inner{max-width:520px;margin:0 auto}
          .label{font-size:11px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.12em;margin-bottom:20px}
          .items{display:flex;flex-direction:column;gap:14px;margin-bottom:36px;text-align:left}
          .item{display:flex;align-items:flex-start;gap:14px}
          .icon{width:36px;height:36px;border-radius:10px;background:rgba(232,93,4,.15);border:1px solid rgba(232,93,4,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px}
          .text strong{display:block;font-size:15px;font-weight:700;color:#fff;margin-bottom:2px}
          .text span{font-size:13px;color:rgba(255,255,255,.45);line-height:1.5}
          .divider{width:40px;height:2px;background:rgba(255,255,255,.08);border-radius:2px;margin:0 auto 28px}
          .proof{font-size:14px;color:rgba(255,255,255,.4);line-height:1.6}
          .proof strong{color:rgba(255,255,255,.75);font-weight:700}
        </style>
        <div class="wrap">
          <div class="inner">
            <p class="label">Wat je krijgt na aanmelding</p>
            <div class="items">
              <div class="item">
                <div class="icon">🎯</div>
                <div class="text">
                  <strong>De 3 stappen naar je eerste klant</strong>
                  <span>Concreet, direct toepasbaar — geen theorie maar actie.</span>
                </div>
              </div>
              <div class="item">
                <div class="icon">📋</div>
                <div class="text">
                  <strong>Templates & oefeningen</strong>
                  <span>Download en gebruik direct. Geen blanco pagina meer.</span>
                </div>
              </div>
              <div class="item">
                <div class="icon">🤝</div>
                <div class="text">
                  <strong>Toegang tot de BusinessBaas community</strong>
                  <span>Stel vragen, deel voortgang en leer van andere starters.</span>
                </div>
              </div>
            </div>
            <div class="divider"></div>
            <p class="proof">Sluit je aan bij <strong>tientallen starters</strong> die al begonnen zijn.<br>Geen verplichting — je kunt altijd stoppen.</p>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-gratis-training-after', BBGratisTrainingAfter);
})();
