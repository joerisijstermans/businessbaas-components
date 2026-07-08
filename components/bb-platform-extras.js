(function () {
  if (customElements.get('bb-platform-extras')) return;
  class BBPlatformExtras extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:none}
          section{padding:80px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:72px;align-items:center}
          .left .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          .left h2{font-size:clamp(1.6rem,3.2vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.15;margin-bottom:16px}
          .left p{font-size:1rem;color:#5A6780;line-height:1.7}
          .right{display:flex;flex-direction:column}
          .row{display:flex;align-items:flex-start;gap:20px;padding:28px 0;border-bottom:1px solid rgba(13,34,64,.07)}
          .row:first-child{padding-top:0}
          .row:last-child{border-bottom:none;padding-bottom:0}
          .ico{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;margin-top:2px}
          .body{flex:1}
          .rtitle{display:flex;align-items:center;gap:8px;margin-bottom:6px}
          .rtitle h3{font-size:1rem;font-weight:800;color:#0D2240;line-height:1.2}
          .pill-addon{padding:2px 8px;background:rgba(232,93,4,.12);color:#E85D04;font-size:.65rem;font-weight:700;border-radius:50px;white-space:nowrap;flex-shrink:0}
          .rdesc{font-size:.875rem;color:#5A6780;line-height:1.65}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
          @media(max-width:860px){.inner{grid-template-columns:1fr;gap:40px}}
          @media(max-width:520px){section{padding:60px 20px}}
        </style>
        <section>
          <div class="inner">
            <div class="left ob">
              <div class="lbl">Ook inbegrepen</div>
              <h2>Meer dan trainingen en tools</h2>
              <p>Naast de trainingen, Nova en je digitale werkplek krijg je direct toegang tot community, marktplaats en live events.</p>
            </div>
            <div class="right">
              <div class="row ob" style="transition-delay:60ms">
                <div class="ico" style="background:rgba(245,158,11,.12)">🤝</div>
                <div class="body">
                  <div class="rtitle"><h3>Community & Marktplaats</h3></div>
                  <p class="rdesc">Een actieve WhatsApp-community van gelijkgestemde starters, met een geïntegreerde marktplaats om je aanbod zichtbaar te maken en eerste klanten te vinden.</p>
                </div>
              </div>
              <div class="row ob" style="transition-delay:140ms">
                <div class="ico" style="background:rgba(16,185,129,.12)">🛒</div>
                <div class="body">
                  <div class="rtitle"><h3>B2B Marktplaats</h3></div>
                  <p class="rdesc">Zet jezelf in de spotlights en vind opdrachten via onze leden-marktplaats. Members helpen members — ook als je nog maar net gestart bent.</p>
                </div>
              </div>
              <div class="row ob" style="transition-delay:220ms">
                <div class="ico" style="background:rgba(232,93,4,.12)">🎤</div>
                <div class="body">
                  <div class="rtitle"><h3>LIVE Events</h3><span class="pill-addon">add-on</span></div>
                  <p class="rdesc">Exclusieve offline events: netwerken, workshops en ideeën uitwisselen met echte ondernemers. Tickets beschikbaar als add-on, met pre-sale toegang voor leden.</p>
                </div>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-extras', BBPlatformExtras);
})();
