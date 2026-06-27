(function () {
  if (customElements.get('bb-platform-extras')) return;
  class BBPlatformExtras extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:72px 24px;background:#0D2240;font-family:'Inter',sans-serif;position:relative;overflow:hidden}
          section::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 50%,rgba(232,93,4,0.08) 0%,transparent 55%);pointer-events:none}
          .inner{max-width:1180px;margin:0 auto;position:relative;z-index:1}
          .top{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:48px;flex-wrap:wrap}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px}
          h2{font-size:clamp(1.5rem,3vw,2.2rem);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.15}
          .sub{font-size:.92rem;color:rgba(255,255,255,.5);line-height:1.65;max-width:340px}
          .row{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.08);border-radius:20px;overflow:hidden}
          .item{background:#0D2240;padding:32px 28px;display:flex;flex-direction:column;gap:14px;transition:background .2s}
          .item:hover{background:#142c54}
          .item-head{display:flex;align-items:center;gap:14px}
          .item-icon{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
          .item-title{font-size:1rem;font-weight:800;color:#fff;line-height:1.2}
          .item-desc{font-size:.875rem;color:rgba(255,255,255,.6);line-height:1.65}
          .item-tag{display:inline-flex;align-items:center;padding:4px 12px;border-radius:50px;font-size:.72rem;font-weight:700;align-self:flex-start}
          @media(max-width:768px){.row{grid-template-columns:1fr}.top{flex-direction:column;align-items:flex-start}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="top ob">
              <div>
                <div class="lbl">Ook inbegrepen</div>
                <h2>Meer dan trainingen en tools</h2>
              </div>
              <p class="sub">Naast de trainingen, Nova en de digitale werkplek krijg je ook toegang tot community, marktplaats en live events.</p>
            </div>
            <div class="row ob">
              <div class="item">
                <div class="item-head">
                  <div class="item-icon" style="background:rgba(124,58,237,.2)">👥</div>
                  <div class="item-title">Community & Coaching</div>
                </div>
                <p class="item-desc">Je staat er niet alleen voor. Stel vragen aan medestarters, deel ervaringen en neem deel aan live groepscoaching met Joeri en gastexperts.</p>
                <span class="item-tag" style="background:rgba(124,58,237,.2);color:#A78BFA">Live & online</span>
              </div>
              <div class="item">
                <div class="item-head">
                  <div class="item-icon" style="background:rgba(22,163,74,.2)">🛒</div>
                  <div class="item-title">Marktplaats</div>
                </div>
                <p class="item-desc">Zet jezelf in de spotlights op onze B2B-marktplaats. Vind klanten en samenwerkingen, nog voordat je officieel van start gaat.</p>
                <span class="item-tag" style="background:rgba(22,163,74,.2);color:#4ADE80">Klanten vinden</span>
              </div>
              <div class="item">
                <div class="item-head">
                  <div class="item-icon" style="background:rgba(37,99,235,.2)">📅</div>
                  <div class="item-title">LIVE Events & Webinars</div>
                </div>
                <p class="item-desc">Exclusieve online en offline events voor leden: expert-sessies, netwerkmomenten en BusinessBaas Masterclasses met Joeri en gastsprekers.</p>
                <span class="item-tag" style="background:rgba(37,99,235,.2);color:#93C5FD">Maandelijks</span>
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
