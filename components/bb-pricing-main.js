(function () {
  if (customElements.get('bb-pricing-main')) return;
  class BBPricingMain extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const STRIPE_MAAND = 'https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202';
      const STRIPE_JAAR  = 'https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200';
      const featHtml = `
        <li class="feat">
          <div class="chk"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="#E85D04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><strong>20+ praktische trainingen</strong><span>Videolessen die je in je eigen tempo volgt</span></div>
        </li>
        <li class="feat">
          <div class="chk"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="#E85D04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><strong>Digitale werkplek</strong><span>Jouw digitale werkplek waarin je je businessplan vorm geeft</span></div>
        </li>
        <li class="feat">
          <div class="chk"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="#E85D04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><strong>AI-coach Nova (24/7)</strong><span>Jouw persoonlijke AI-coach voor vragen en feedback</span></div>
        </li>
        <li class="feat feat-soon">
          <div class="chk chk-soon"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><strong>Slim Ondernemen met AI <span class="soon-pill">binnenkort</span></strong><span>AI-module voor slimmere beslissingen en snellere groei</span></div>
        </li>
        <li class="feat">
          <div class="chk"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="#E85D04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><strong>Community &amp; marktplaats</strong><span>Stel vragen, deel voortgang en vind samenwerkingspartners</span></div>
        </li>
        <li class="feat feat-addon">
          <div class="chk chk-addon">↗</div>
          <div><strong>LIVE events</strong><span>Live events waar leden elkaar ontmoeten — met inspirerende mini-talks, opdrachten en ruimte om te netwerken</span></div>
        </li>
        <li class="feat feat-addon">
          <div class="chk chk-addon">↗</div>
          <div><strong>1 op 1 coaching</strong><span>Persoonlijke begeleiding op maat</span></div>
        </li>`;
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:linear-gradient(160deg,#EFF2FA 0%,#F7F9FF 50%,#FFFAF8 100%);padding:80px 24px 88px;position:relative;overflow:hidden}
          .blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none}
          .blob-o{width:500px;height:500px;background:rgba(232,93,4,.07);top:-150px;right:-100px}
          .blob-n{width:400px;height:400px;background:rgba(13,34,64,.05);bottom:-100px;left:-100px}
          .inner{max-width:860px;margin:0 auto;position:relative;z-index:2}
          .cards{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px}
          .card{background:#fff;border-radius:22px;padding:36px 32px;border:2px solid #E8EDF5;box-shadow:0 4px 24px rgba(13,34,64,.07);position:relative;display:flex;flex-direction:column}
          .card.best{border-color:#E85D04;box-shadow:0 8px 48px rgba(232,93,4,.16)}
          .badge-best{position:absolute;top:-14px;left:50%;transform:translateX(-50%);padding:5px 18px;background:#E85D04;color:#fff;font-size:11px;font-weight:800;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap}
          .plan{font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px}
          .price-row{display:flex;align-items:flex-end;gap:3px;line-height:1;margin-bottom:4px}
          .eur{font-size:22px;font-weight:800;color:#0D2240;margin-bottom:8px}
          .amt{font-size:58px;font-weight:900;color:#0D2240;letter-spacing:-.04em}
          .period{font-size:14px;font-weight:500;color:#9CA3AF;margin-bottom:4px;align-self:flex-end;padding-bottom:10px}
          .per-day{font-size:13px;color:#9CA3AF;margin-bottom:6px}
          .save{display:inline-block;background:#DCFCE7;border:1px solid #BBF7D0;color:#16A34A;font-size:11.5px;font-weight:700;border-radius:50px;padding:3px 11px;margin-bottom:24px}
          .no-save{margin-bottom:38px}
          .btn{display:block;text-align:center;padding:15px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s;margin-bottom:10px;font-family:'Inter',sans-serif}
          .btn:hover{background:#CC4D00;transform:translateY(-2px)}
          .btn-outline{display:block;text-align:center;padding:14px;background:transparent;color:#0D2240;font-size:15px;font-weight:600;border:2px solid #E8EDF5;border-radius:50px;text-decoration:none;transition:border-color .2s,background .2s;margin-bottom:24px;font-family:'Inter',sans-serif}
          .btn-outline:hover{border-color:#CBD5E1;background:#F8FAFF}
          .divider{height:1px;background:#F3F4F6;margin-bottom:20px}
          .feats{list-style:none;display:flex;flex-direction:column;gap:0;flex:1}
          .feat{display:flex;align-items:flex-start;gap:12px;padding:11px 0;border-bottom:1px solid #F9FAFB}
          .feat:last-child{border-bottom:none}
          .chk{width:22px;height:22px;border-radius:6px;background:rgba(232,93,4,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
          .feat strong{display:block;font-size:13.5px;font-weight:700;color:#0D2240;margin-bottom:1px}
          .feat span{font-size:12px;color:#9CA3AF;line-height:1.45}
          .feat-soon strong{color:#6D28D9}
          .chk-soon{background:rgba(124,58,237,.1)}
          .soon-pill{font-size:10px;font-weight:700;background:rgba(124,58,237,.15);color:#7C3AED;padding:2px 7px;border-radius:50px;vertical-align:middle;margin-left:4px}
          .feat-addon strong{color:#6B7280}
          .feat-addon span{color:#B0B8C8}
          .chk-addon{background:#F3F4F6;color:#9CA3AF;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:6px;flex-shrink:0;margin-top:2px}
          .fn{font-size:12px;color:#9CA3AF;text-align:center;line-height:1.7}
          .bottom-note{text-align:center;font-size:13.5px;color:#6B7280;line-height:1.6}
          .bottom-note strong{color:#0D2240}
          @media(max-width:680px){
            .cards{grid-template-columns:1fr}
            .card{padding:32px 24px}
            .amt{font-size:48px}
          }
          @media(max-width:420px){.wrap{padding:60px 16px 72px}}
        </style>
        <section class="wrap">
          <div class="blob blob-o"></div>
          <div class="blob blob-n"></div>
          <div class="inner">
            <div class="cards">

              <!-- MAANDELIJKS -->
              <div class="card">
                <p class="plan">Maandelijks</p>
                <div class="price-row">
                  <span class="eur">€</span>
                  <span class="amt">69</span>
                  <span class="period">/maand</span>
                </div>
                <p class="per-day">= €2,30 per dag</p>
                <div class="no-save"></div>
                <a class="btn-outline" href="${STRIPE_MAAND}" target="_top">Maandelijks starten</a>
                <div class="divider"></div>
                <ul class="feats">${featHtml}</ul>
                <div class="divider" style="margin-top:20px"></div>
                <p class="fn">✓ Geen jaarcontract &nbsp;·&nbsp; ✓ Maandelijks opzegbaar</p>
              </div>

              <!-- JAARLIJKS -->
              <div class="card best">
                <div class="badge-best">Meest gekozen</div>
                <p class="plan">Jaarlijks</p>
                <div class="price-row">
                  <span class="eur">€</span>
                  <span class="amt">690</span>
                  <span class="period">/jaar</span>
                </div>
                <p class="per-day">= €1,90 per dag</p>
                <span class="save">2 maanden gratis t.o.v. maandelijks</span>
                <a class="btn" href="${STRIPE_JAAR}" target="_top">Jaarlijks starten</a>
                <div class="divider"></div>
                <ul class="feats">${featHtml}</ul>
                <div class="divider" style="margin-top:20px"></div>
                <p class="fn">✓ Jaarcontract &nbsp;·&nbsp; ✓ Daarna maandelijks opzegbaar</p>
              </div>

            </div>
            <p class="bottom-note"><strong>Gratis starten?</strong> Volg eerst onze gratis training en ontdek hoe BusinessBaas werkt. <a href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top" style="color:#E85D04;font-weight:700;text-decoration:none">Vraag hem aan →</a></p>
          </div>
        </section>`;
    }
  }
  customElements.define('bb-pricing-main', BBPricingMain);
})();
