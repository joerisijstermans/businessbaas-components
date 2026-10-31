(function () {
  if (customElements.get('bb-pricing-main')) return;
  class BBPricingMain extends HTMLElement {
    connectedCallback() {
      const sr = this.attachShadow({ mode: 'open' });

      const COMPLEET_LIVE          = false;
      const SHOW_VOORDEEL          = true;
      const SHOW_KLARNA            = true;
      const SHOW_LOSSE_SESSIE_PRIJS = true;

      const STRIPE_MAAND = 'https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202';
      const STRIPE_JAAR  = 'https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200';
      const UTM_JAAR   = '?utm_source=website&utm_medium=prijzen&utm_campaign=pricing&utm_content=online-jaar';
      const UTM_MAAND  = '?utm_source=website&utm_medium=prijzen&utm_campaign=pricing&utm_content=online-maand';

      const chk = (c = '#E85D04') => `<svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L3.8 7.5L10 1" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      const klarna = `<div class="klarna"><span class="kk">K</span><span>Achteraf betalen via <strong>Klarna</strong> beschikbaar</span></div>`;

      const onlineFeats = `
        <li class="feat"><div class="chk">${chk()}</div><div><strong>20+ praktische trainingen</strong><span>Videolessen die je in je eigen tempo volgt</span></div></li>
        <li class="feat"><div class="chk">${chk()}</div><div><strong>Digitale werkplek</strong><span>Geef je businessplan stap voor stap vorm</span></div></li>
        <li class="feat"><div class="chk">${chk()}</div><div><strong>AI-coach Nova (24/7)</strong><span>Jouw persoonlijke AI-coach voor vragen en feedback</span></div></li>
        <li class="feat fa"><div class="chk ca">↗</div><div><strong>LIVE events <span class="ap">add-on</span></strong><span>Inspirerende events voor leden · voorrang in de pre-sale</span></div></li>
        <li class="feat fa"><div class="chk ca">↗</div><div><strong>1 op 1 coaching <span class="ap">add-on</span></strong><span>Persoonlijke sessies via het platform${SHOW_LOSSE_SESSIE_PRIJS ? ' · €125 (1u) / €175 (1,5u)' : ''}</span></div></li>`;

      const coachingFeats = `
        <li class="feat fc fh"><div class="chk cc">${chk('#FFD4A0')}</div><div><strong>3 coachingssessies inbegrepen</strong><span>1 uur of 1,5 uur per sessie, in te plannen via het platform</span></div></li>
        <li class="feat fc"><div class="chk cc">${chk('#fff')}</div><div><strong>20+ praktische trainingen</strong><span>Videolessen die je in je eigen tempo volgt</span></div></li>
        <li class="feat fc"><div class="chk cc">${chk('#fff')}</div><div><strong>Digitale werkplek</strong><span>Geef je businessplan stap voor stap vorm</span></div></li>
        <li class="feat fc"><div class="chk cc">${chk('#fff')}</div><div><strong>AI-coach Nova (24/7)</strong><span>Jouw persoonlijke AI-coach voor vragen en feedback</span></div></li>
        <li class="feat fca"><div class="chk cca">↗</div><div><strong>LIVE events <span class="apc">add-on</span></strong><span>Inspirerende events voor leden · voorrang in de pre-sale</span></div></li>
        <li class="feat fca"><div class="chk cca">↗</div><div><strong>Extra coachingssessies <span class="apc">add-on</span></strong><span>Extra sessies boeken via het platform${SHOW_LOSSE_SESSIE_PRIJS ? ' · €125 (1u) / €175 (1,5u)' : ''}</span></div></li>`;

      sr.innerHTML = `<style>
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :host{display:block;font-family:'Inter',-apple-system,sans-serif}
        .wrap{background:linear-gradient(160deg,#EFF2FA 0%,#F7F9FF 50%,#FFFAF8 100%);padding:80px 24px 88px;position:relative;overflow:hidden}
        .blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none}
        .blob-o{width:500px;height:500px;background:rgba(232,93,4,.07);top:-150px;right:-100px}
        .blob-n{width:400px;height:400px;background:rgba(13,34,64,.05);bottom:-100px;left:-100px}
        .inner{max-width:900px;margin:0 auto;position:relative;z-index:2}
        .cards{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start;margin-bottom:28px}
        .card{background:#fff;border-radius:22px;padding:36px 32px 28px;border:2px solid #E8EDF5;box-shadow:0 4px 24px rgba(13,34,64,.07);position:relative;display:flex;flex-direction:column;transition:border-color .3s,box-shadow .3s}
        .card.best{border-color:#E85D04;box-shadow:0 8px 48px rgba(232,93,4,.16)}
        .card-c{background:#0D2240;border:2px solid #0D2240;border-radius:22px;padding:36px 32px 28px;box-shadow:0 8px 48px rgba(13,34,64,.22);position:relative;display:flex;flex-direction:column}
        .bb{position:absolute;top:-14px;left:50%;transform:translateX(-50%);padding:5px 18px;background:#E85D04;color:#fff;font-size:11px;font-weight:800;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;transition:opacity .3s ease}
        .bb.hidden{opacity:0;pointer-events:none}
        .plan{font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
        .plan-c{font-size:11px;font-weight:700;color:rgba(232,93,4,.85);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
        .toggle{display:flex;background:#F3F4F6;border-radius:50px;padding:3px;gap:2px;margin-bottom:22px}
        .tab{flex:1;padding:8px 0;font-size:13px;font-weight:600;color:#6B7280;background:transparent;border:none;border-radius:50px;cursor:pointer;transition:background .22s,color .22s,box-shadow .22s;font-family:'Inter',sans-serif}
        .tab.active{background:#fff;color:#0D2240;box-shadow:0 2px 8px rgba(13,34,64,.1);font-weight:700}
        .clp{overflow:hidden;transition:max-height .45s cubic-bezier(.25,.46,.45,.94),opacity .35s ease;opacity:1}
        .clp.shut{max-height:0!important;opacity:0;pointer-events:none}
        @media(prefers-reduced-motion:reduce){.clp{transition:none}}
        .pr{display:flex;align-items:flex-end;gap:3px;line-height:1;margin-bottom:4px}
        .eu{font-size:22px;font-weight:800;color:#0D2240;margin-bottom:8px}
        .eu-w{font-size:22px;font-weight:800;color:#fff;margin-bottom:8px}
        .am{font-size:58px;font-weight:900;color:#0D2240;letter-spacing:-.04em}
        .am-w{font-size:58px;font-weight:900;color:#fff;letter-spacing:-.04em}
        .pe{font-size:14px;font-weight:500;color:#9CA3AF;align-self:flex-end;padding-bottom:10px}
        .pe-w{font-size:14px;font-weight:500;color:rgba(255,255,255,.45);align-self:flex-end;padding-bottom:10px}
        .pd{font-size:13px;color:#9CA3AF;margin-bottom:6px}
        .pd-w{font-size:13px;color:rgba(255,255,255,.4);margin-bottom:6px}
        .save{display:inline-block;background:#DCFCE7;border:1px solid #BBF7D0;color:#16A34A;font-size:11.5px;font-weight:700;border-radius:50px;padding:3px 11px;margin-bottom:18px}
        .sess{display:inline-flex;align-items:center;gap:6px;background:rgba(232,93,4,.15);border:1px solid rgba(232,93,4,.25);border-radius:50px;padding:5px 12px;font-size:12px;font-weight:700;color:#E85D04;margin-bottom:18px}
        .btn{display:block;text-align:center;padding:15px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s;margin-bottom:10px;font-family:'Inter',sans-serif}
        .btn:hover{background:#CC4D00;transform:translateY(-2px)}
        .btn-out{display:block;text-align:center;padding:14px;background:transparent;color:#0D2240;font-size:15px;font-weight:600;border:2px solid #E8EDF5;border-radius:50px;text-decoration:none;transition:border-color .2s,background .2s;margin-bottom:10px;font-family:'Inter',sans-serif}
        .btn-out:hover{border-color:#CBD5E1;background:#F8FAFF}
        .btn-dis{display:block;text-align:center;padding:15px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.35);font-size:15px;font-weight:700;border-radius:50px;border:1.5px solid rgba(255,255,255,.12);cursor:not-allowed;margin-bottom:10px;font-family:'Inter',sans-serif}
        .gu{display:flex;align-items:flex-start;gap:10px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:12px 14px;margin-bottom:10px}
        .gu-ic{font-size:18px;flex-shrink:0;line-height:1.4}
        .gu-t{font-size:12.5px;font-weight:700;color:#15803D;margin-bottom:2px}
        .gu-s{font-size:11.5px;color:#16A34A;line-height:1.45}
        .klarna{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#FFF9F5;border:1px solid rgba(232,93,4,.15);border-radius:10px;margin-bottom:10px}
        .kk{font-size:12px;font-weight:900;color:#fff;background:#17120E;border-radius:4px;padding:1px 5px;flex-shrink:0;letter-spacing:.02em}
        .klarna span{font-size:12px;color:#6B7280;line-height:1.3}
        .dv{height:1px;background:#F3F4F6;margin-bottom:20px;margin-top:20px}
        .dv-c{height:1px;background:rgba(255,255,255,.08);margin-bottom:20px;margin-top:16px}
        .feats{list-style:none;display:flex;flex-direction:column;flex:1}
        .feat{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #F9FAFB}
        .feat:last-child{border-bottom:none}
        .fc,.fh,.fca{border-bottom-color:rgba(255,255,255,.06)}
        .chk{width:22px;height:22px;border-radius:6px;background:rgba(232,93,4,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        .cc{background:rgba(255,255,255,.12)}
        .ca{background:#F3F4F6;color:#9CA3AF;font-size:11px;font-weight:700}
        .cca{background:rgba(255,255,255,.06);color:rgba(255,255,255,.25);font-size:11px;font-weight:700}
        .feat strong{display:block;font-size:13.5px;font-weight:700;color:#0D2240;margin-bottom:1px}
        .fc strong,.fh strong{color:#fff}
        .fh strong{color:#FFD4A0}
        .fa strong{color:#6B7280}
        .fca strong{color:rgba(255,255,255,.35)}
        .feat span{font-size:12px;color:#9CA3AF;line-height:1.45}
        .fc span,.fh span{color:rgba(255,255,255,.4)}
        .fa span{color:#B0B8C8}
        .fca span{color:rgba(255,255,255,.2)}
        .ap{font-size:10px;font-weight:700;background:rgba(232,93,4,.12);color:#B84800;padding:2px 7px;border-radius:50px;vertical-align:middle;margin-left:4px}
        .apc{font-size:10px;font-weight:700;background:rgba(255,255,255,.08);color:rgba(255,255,255,.25);padding:2px 7px;border-radius:50px;vertical-align:middle;margin-left:4px}
        .fn{font-size:12px;color:#9CA3AF;text-align:center;line-height:1.7;margin-top:16px;overflow:hidden}
        .fn-c{font-size:12px;color:rgba(255,255,255,.3);text-align:center;line-height:1.7;margin-top:16px}
        .bn{text-align:center;font-size:13.5px;color:#6B7280;line-height:1.6;margin-bottom:32px}
        .bn strong{color:#0D2240}
        .pb{background:#0D2240;border-radius:20px;padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:36px;flex-wrap:wrap}
        .pb-lbl{font-size:11px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
        .pb h3{font-size:20px;font-weight:800;color:#fff;margin-bottom:8px;line-height:1.2}
        .pb p{font-size:14px;color:rgba(255,255,255,.6);line-height:1.55;max-width:440px}
        .pb-btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;background:#E85D04;color:#fff;font-size:14px;font-weight:700;border-radius:50px;text-decoration:none;white-space:nowrap;transition:background .2s,transform .2s;font-family:'Inter',sans-serif;flex-shrink:0}
        .pb-btn:hover{background:#CC4D00;transform:translateY(-2px)}
        @media(max-width:680px){
          .cards{grid-template-columns:1fr}
          .card,.card-c{padding:32px 24px 24px}
          .am,.am-w{font-size:48px}
          .pb{flex-direction:column;align-items:flex-start;padding:24px}
          .pb-btn{width:100%;justify-content:center}
        }
        @media(max-width:420px){.wrap{padding:60px 16px 72px}}
      </style>
      <section class="wrap">
        <div class="blob blob-o"></div>
        <div class="blob blob-n"></div>
        <div class="inner">
          <div class="cards">

            <!-- ONLINE CARD -->
            <div class="card best" id="oc">
              <div class="bb" id="br">Meest gekozen</div>
              <p class="plan">Online</p>
              <div class="toggle" role="radiogroup" aria-label="Betaalperiode">
                <button class="tab active" id="tj" role="radio" aria-checked="true">Jaarlijks</button>
                <button class="tab" id="tm" role="radio" aria-checked="false">Maandelijks</button>
              </div>

              <!-- JAARLIJKS -->
              <div id="pj" class="clp" style="max-height:460px">
                <div class="pr"><span class="eu">€</span><span class="am">690</span><span class="pe">/jaar</span></div>
                <p class="pd">= €1,90 per dag</p>
                ${SHOW_VOORDEEL ? '<span class="save">2 maanden gratis t.o.v. maandelijks</span>' : '<div style="height:8px"></div>'}
                <a class="btn" href="${STRIPE_JAAR}${UTM_JAAR}" target="_top" id="btn-jaar">Jaarlijks starten →</a>
                <div class="gu">
                  <span class="gu-ic">🛡</span>
                  <div><p class="gu-t">10 dagen niet-goed-geld-terug</p><p class="gu-s">Max. 2 trainingen gevolgd &amp; max. 10 Nova-berichten? Dan krijg je je geld terug.</p></div>
                </div>
                ${SHOW_KLARNA ? klarna : ''}
              </div>

              <!-- MAANDELIJKS -->
              <div id="pm" class="clp shut" style="max-height:280px">
                <div class="pr"><span class="eu">€</span><span class="am">69</span><span class="pe">/maand</span></div>
                <p class="pd">= €2,30 per dag</p>
                <div style="height:20px"></div>
                <a class="btn-out" href="${STRIPE_MAAND}${UTM_MAAND}" target="_top">Maandelijks starten</a>
                ${SHOW_KLARNA ? klarna : ''}
              </div>

              <div class="dv"></div>
              <ul class="feats">${onlineFeats}</ul>
              <div class="dv" style="margin-bottom:0"></div>
              <p class="fn clp" id="fnj" style="max-height:60px">✓ Jaarcontract &nbsp;·&nbsp; ✓ Daarna maandelijks opzegbaar</p>
              <p class="fn clp shut" id="fnm" style="max-height:60px">✓ Geen jaarcontract &nbsp;·&nbsp; ✓ Maandelijks opzegbaar</p>
            </div>

            <!-- COACHING CARD -->
            <div class="card-c">
              <p class="plan-c">Coaching</p>
              <div class="pr"><span class="eu-w">€</span><span class="am-w">990</span><span class="pe-w">/jaar</span></div>
              <p class="pd-w">= €2,71 per dag</p>
              <div class="sess">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="#E85D04" stroke-width="1.4"/><path d="M6.5 3.5V6.5L8.5 8.5" stroke="#E85D04" stroke-width="1.4" stroke-linecap="round"/></svg>
                3 coachingssessies inbegrepen
              </div>
              ${COMPLEET_LIVE
                ? `<a class="btn" href="${STRIPE_JAAR}?utm_source=website&utm_medium=prijzen&utm_campaign=pricing&utm_content=coaching" target="_top">Coaching starten →</a>`
                : `<div class="btn-dis" role="button" aria-disabled="true">Binnenkort beschikbaar</div>`}
              <div class="dv-c"></div>
              <ul class="feats">${coachingFeats}</ul>
              <p class="fn-c">✓ Jaarcontract &nbsp;·&nbsp; ✓ Daarna Online Maand (€69/m)</p>
            </div>

          </div>
          <p class="bn"><strong>Gratis starten?</strong> Volg eerst onze gratis training en ontdek hoe BusinessBaas werkt. <a href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top" style="color:#E85D04;font-weight:700;text-decoration:none">Vraag hem aan →</a></p>
          <div class="pb">
            <div>
              <div class="pb-lbl">Voor organisaties &amp; coaches</div>
              <h3>BusinessBaas voor partners</h3>
              <p>Wil je BusinessBaas inzetten voor jouw starters, studenten of klanten? Tarieven zijn op maat en het gesprek begint met een gratis demo.</p>
            </div>
            <a href="https://www.businessbaas.com/partner-demo" class="pb-btn" target="_top">Demo aanvragen →</a>
          </div>
        </div>
      </section>`;

      const oc  = sr.getElementById('oc');
      const br  = sr.getElementById('br');
      const tj  = sr.getElementById('tj');
      const tm  = sr.getElementById('tm');
      const pj  = sr.getElementById('pj');
      const pm  = sr.getElementById('pm');
      const fnj = sr.getElementById('fnj');
      const fnm = sr.getElementById('fnm');

      function setMode(m) {
        const j = m === 'jaar';
        tj.classList.toggle('active',  j); tj.setAttribute('aria-checked', String(j));
        tm.classList.toggle('active', !j); tm.setAttribute('aria-checked', String(!j));
        pj.classList.toggle('shut', !j);
        pm.classList.toggle('shut',  j);
        fnj.classList.toggle('shut', !j);
        fnm.classList.toggle('shut',  j);
        oc.classList.toggle('best',  j);
        br.classList.toggle('hidden', !j);
      }

      tj.addEventListener('click', () => setMode('jaar'));
      tm.addEventListener('click', () => setMode('maand'));

      [tj, tm].forEach((btn, i) => {
        btn.addEventListener('keydown', e => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); const n = [tj,tm][(i+1)%2]; n.focus(); n.click(); }
          if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); const p = [tj,tm][(i+1)%2]; p.focus(); p.click(); }
        });
      });

      const bj = sr.getElementById('btn-jaar');
      if (bj) bj.addEventListener('click', () => { if (window.fbq) window.fbq('track', 'InitiateCheckout', { value: 690, currency: 'EUR', content_name: 'online-jaar' }); });
    }
  }
  customElements.define('bb-pricing-main', BBPricingMain);
})();
