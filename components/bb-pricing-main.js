(function () {
  if (customElements.get('bb-pricing-main')) return;
  class BBPricingMain extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:linear-gradient(160deg,#EFF2FA 0%,#F7F9FF 50%,#FFFAF8 100%);padding:96px 24px 88px;position:relative;overflow:hidden}
          .blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none}
          .blob-o{width:500px;height:500px;background:rgba(232,93,4,.07);top:-150px;right:-100px}
          .blob-n{width:400px;height:400px;background:rgba(13,34,64,.05);bottom:-100px;left:-100px}
          .top{max-width:900px;margin:0 auto 56px;text-align:center;position:relative;z-index:2}
          .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(232,93,4,.10);border:1px solid rgba(232,93,4,.22);border-radius:50px;font-size:11.5px;font-weight:700;color:#B84800;text-transform:uppercase;letter-spacing:.07em;margin-bottom:24px}
          .badge-dot{width:6px;height:6px;background:#E85D04;border-radius:50%;animation:pulse 2s infinite}
          @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}
          h1{font-size:clamp(32px,5vw,56px);font-weight:900;color:#0D2240;letter-spacing:-.035em;line-height:1.08;margin-bottom:16px}
          .sub{font-size:17px;color:#5A6780;line-height:1.7;max-width:560px;margin:0 auto}
          .card-wrap{max-width:900px;margin:0 auto;position:relative;z-index:2}
          .card{background:#fff;border-radius:24px;box-shadow:0 20px 72px rgba(13,34,64,.13);overflow:hidden;display:grid;grid-template-columns:360px 1fr}
          .left{background:#0D2240;padding:48px 40px;position:relative;overflow:hidden}
          .left::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 110% 0%,rgba(232,93,4,.22) 0%,transparent 60%);pointer-events:none}
          .left-inner{position:relative;z-index:1}
          .plan{font-size:11px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.12em;margin-bottom:32px}
          .price-row{display:flex;align-items:flex-end;gap:4px;line-height:1;margin-bottom:8px}
          .eur{font-size:26px;font-weight:800;color:rgba(255,255,255,.7);margin-bottom:10px}
          .amt{font-size:72px;font-weight:900;color:#fff;letter-spacing:-.04em}
          .per{font-size:13px;color:rgba(255,255,255,.45);margin-bottom:5px}
          .alt{font-size:13px;color:rgba(255,255,255,.3);margin-bottom:36px}
          .btn-p{display:block;text-align:center;padding:15px 28px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;margin-bottom:10px;transition:background .2s,transform .2s;font-family:'Inter',sans-serif}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px)}
          .btn-s{display:block;text-align:center;padding:13px 28px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.65);font-size:14px;font-weight:600;border-radius:50px;text-decoration:none;border:1px solid rgba(255,255,255,.13);transition:background .2s,color .2s;margin-bottom:32px;font-family:'Inter',sans-serif}
          .btn-s:hover{background:rgba(255,255,255,.13);color:#fff}
          .fn{font-size:11.5px;color:rgba(255,255,255,.28);line-height:1.8}
          .right{padding:48px 40px}
          .fl{font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:.1em;margin-bottom:24px}
          .feats{list-style:none;display:flex;flex-direction:column}
          .feat{display:flex;align-items:flex-start;gap:14px;padding:15px 0;border-bottom:1px solid #F3F4F6}
          .feat:last-child{border-bottom:none}
          .chk{width:24px;height:24px;border-radius:7px;background:rgba(232,93,4,.10);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
          .fb strong{display:block;font-size:14px;font-weight:700;color:#0D2240;margin-bottom:2px}
          .fb span{font-size:12.5px;color:#9CA3AF;line-height:1.5}
          @media(max-width:760px){
            .card{grid-template-columns:1fr}
            .left,.right{padding:36px 28px}
            .amt{font-size:56px}
          }
          @media(max-width:480px){
            .wrap{padding:72px 20px 64px}
            h1{font-size:clamp(28px,9vw,40px)}
          }
        </style>
        <section class="wrap">
          <div class="blob blob-o"></div>
          <div class="blob blob-n"></div>
          <div class="top">
            <div class="badge"><span class="badge-dot"></span>Transparante prijzen</div>
            <h1>Eén abonnement.<br>Alles erin.</h1>
            <p class="sub">Geen tierstructuur, geen verborgen add-ons. Alles wat je nodig hebt om als starter vooruit te komen zit in één eerlijk abonnement.</p>
          </div>
          <div class="card-wrap">
            <div class="card">
              <div class="left">
                <div class="left-inner">
                  <p class="plan">BusinessBaas Lidmaatschap</p>
                  <div class="price-row">
                    <span class="eur">€</span>
                    <span class="amt">1,90</span>
                  </div>
                  <p class="per">per dag, bij jaarlijkse betaling</p>
                  <p class="alt">of €69 per maand</p>
                  <a class="btn-p" href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top">Start gratis training</a>
                  <a class="btn-s" href="https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202" target="_top">Direct lid worden →</a>
                  <p class="fn">✓ Geen verborgen kosten<br>✓ Direct toegang na betaling<br>✓ Altijd opzegbaar</p>
                </div>
              </div>
              <div class="right">
                <p class="fl">Alles wat je krijgt</p>
                <ul class="feats">
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>Alle trainingen</strong><span>Praktische videolessen die je in je eigen tempo volgt</span></div>
                  </li>
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>Nova AI-assistent</strong><span>Jouw persoonlijke AI-coach voor vragen, feedback en ideeën, 24/7</span></div>
                  </li>
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>Digitale werkplek</strong><span>Jouw persoonlijke dashboard om je business te plannen en bij te houden</span></div>
                  </li>
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>Community</strong><span>Stel vragen, deel je voortgang en leer van andere starters</span></div>
                  </li>
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>LIVE events</strong><span>Maandelijkse online sessies met Joeri en gastexperts</span></div>
                  </li>
                  <li class="feat">
                    <div class="chk"><svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#E85D04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="fb"><strong>Marktplaats</strong><span>Vind klanten of samenwerkingspartners binnen het platform</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>`;
    }
  }
  customElements.define('bb-pricing-main', BBPricingMain);
})();
