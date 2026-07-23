(function () {
  if (customElements.get('bb-bedankt-partner')) return;
  class BBBedanktPartner extends HTMLElement {
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
          .inner{max-width:620px;text-align:center;position:relative;z-index:2}
          .check{width:80px;height:80px;border-radius:50%;background:rgba(232,93,4,.15);border:2px solid rgba(232,93,4,.35);display:flex;align-items:center;justify-content:center;margin:0 auto 32px;animation:pop .5s cubic-bezier(0.34,1.56,0.64,1) both}
          @keyframes pop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
          .check svg{width:36px;height:36px}
          .label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:rgba(232,93,4,.8);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .label::before{content:'';display:block;width:26px;height:2px;background:rgba(232,93,4,.8);border-radius:2px;flex-shrink:0}
          h1{font-size:clamp(28px,5vw,50px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.035em;margin-bottom:20px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:17px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:40px}
          .sub strong{color:rgba(255,255,255,.85);font-weight:600}
          .cards{display:flex;flex-direction:column;gap:12px;margin-bottom:40px;text-align:left}
          .card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;display:flex;align-items:flex-start;gap:16px}
          .cicon{width:44px;height:44px;border-radius:12px;background:rgba(232,93,4,.18);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;margin-top:2px}
          .cinfo h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:4px}
          .cinfo p{font-size:13.5px;color:rgba(255,255,255,.5);line-height:1.55}
          .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;background:#E85D04;color:#fff;font-size:16px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:12px}
          .btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .note{font-size:13px;color:rgba(255,255,255,.3)}
          @media(max-width:480px){.page{padding:60px 20px}}
        </style>
        <section class="page">
          <div class="inner">
            <div class="check">
              <svg viewBox="0 0 36 36" fill="none">
                <path d="M8 18L15 25L28 11" stroke="#E85D04" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="label">Demo aangevraagd</div>
            <h1>Bedankt! We nemen<br>snel <em>contact</em> op.</h1>
            <p class="sub">Je aanvraag is in goede orde ontvangen. We nemen <strong>binnen 2 werkdagen</strong> contact met je op om een demo in te plannen.</p>
            <div class="cards">
              <div class="card">
                <div class="cicon">📞</div>
                <div class="cinfo">
                  <h3>Persoonlijk contact</h3>
                  <p>Een van ons team neemt contact op via het e-mailadres of telefoonnummer dat je hebt achtergelaten.</p>
                </div>
              </div>
              <div class="card">
                <div class="cicon">🎯</div>
                <div class="cinfo">
                  <h3>Demo op maat</h3>
                  <p>We bereiden een demo voor die aansluit op jouw organisatie en de starters die je begeleidt.</p>
                </div>
              </div>
              <div class="card">
                <div class="cicon">🚀</div>
                <div class="cinfo">
                  <h3>Snel van start</h3>
                  <p>Na de demo kun je direct als partner aan de slag. Uitnodigen, monitoren en begeleiden vanuit één dashboard.</p>
                </div>
              </div>
            </div>
            <a href="https://www.businessbaas.com" class="btn" target="_top">
              Terug naar de website
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="note">Vragen? Mail ons op info@businessbaas.com</p>
          </div>
        </section>`;
    }
  }
  customElements.define('bb-bedankt-partner', BBBedanktPartner);
})();
