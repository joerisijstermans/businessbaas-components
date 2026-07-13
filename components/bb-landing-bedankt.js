(function () {
  if (customElements.get('bb-landing-bedankt')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingBedankt extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          .page{min-height:100vh;background:linear-gradient(150deg,#0D2240 0%,#142c54 55%,#0f2845 100%);display:flex;align-items:center;justify-content:center;padding:80px 24px;position:relative;overflow:hidden}
          .page::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 30%,rgba(232,93,4,.12) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:640px;text-align:center;position:relative;z-index:2}
          .check{width:80px;height:80px;border-radius:50%;background:rgba(232,93,4,.15);border:2px solid rgba(232,93,4,.35);display:flex;align-items:center;justify-content:center;margin:0 auto 32px;animation:pop .5s cubic-bezier(0.34,1.56,0.64,1) both}
          @keyframes pop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
          .check svg{width:36px;height:36px}
          .label{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;color:rgba(232,93,4,.8);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          h1{font-size:clamp(28px,5vw,52px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.035em;margin-bottom:20px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:17px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:44px}
          .sub strong{color:rgba(255,255,255,.85);font-weight:600}
          .mail-cards{display:flex;flex-direction:column;gap:12px;margin-bottom:44px;text-align:left}
          .mail-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;display:flex;align-items:flex-start;gap:16px}
          .mail-icon{width:44px;height:44px;border-radius:12px;background:rgba(232,93,4,.18);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;margin-top:2px}
          .mail-info h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:4px}
          .mail-info p{font-size:13.5px;color:rgba(255,255,255,.5);line-height:1.55}
          .spam-note{background:rgba(251,188,4,.08);border:1px solid rgba(251,188,4,.2);border-radius:12px;padding:14px 18px;font-size:13px;color:rgba(251,188,4,.85);display:flex;align-items:center;gap:10px;margin-bottom:40px;text-align:left}
          .next-btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;background:#E85D04;color:#fff;font-size:16px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:12px}
          .next-btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .next-note{font-size:13px;color:rgba(255,255,255,.3)}
        </style>
        <section class="page">
          <div class="inner">
            <div class="check">
              <svg viewBox="0 0 36 36" fill="none">
                <path d="M8 18L15 25L28 11" stroke="#E85D04" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="label">Welkom bij BusinessBaas</div>
            <h1>Bedankt voor<br>je aanmelding<em>!</em></h1>
            <p class="sub">Je bent nu lid van BusinessBaas. Over enkele momenten ontvang je <strong>twee e-mails</strong> van ons:</p>
            <div class="mail-cards">
              <div class="mail-card">
                <div class="mail-icon">👋</div>
                <div class="mail-info">
                  <h3>Welkomstmail met je eerste stap</h3>
                  <p>Hierin vind je alles om direct te beginnen, inclusief een link naar je eerste module.</p>
                </div>
              </div>
              <div class="mail-card">
                <div class="mail-icon">🔑</div>
                <div class="mail-info">
                  <h3>Wachtwoord aanmaken</h3>
                  <p>Via deze mail stel je jouw wachtwoord in voor het platform. Zo krijg je direct toegang tot alle trainingen.</p>
                </div>
              </div>
            </div>
            <div class="spam-note">
              <span>⚠️</span>
              <span><strong>Check ook je spamfolder</strong>, soms belanden e-mails van nieuwe afzenders daar automatisch.</span>
            </div>
            <a href="https://www.businessbaas.com" class="next-btn">
              Ga naar de website
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="next-note">Vragen? Mail ons op info@businessbaas.com</p>
          </div>
        </section>`;
    }
  }
  customElements.define('bb-landing-bedankt', BBLandingBedankt);
})();
