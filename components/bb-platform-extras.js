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
          section{padding:80px 24px;background:#F4F6FA;font-family:'Inter',sans-serif}
          .inner{max-width:1180px;margin:0 auto}
          .top{text-align:center;margin-bottom:48px}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px}
          h2{font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.15;margin-bottom:12px}
          .sub{font-size:1rem;color:#5A6780;line-height:1.65;max-width:480px;margin:0 auto}
          .row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
          .card{background:#fff;border-radius:20px;padding:36px 28px;border:1px solid rgba(13,34,64,.07);display:flex;flex-direction:column;gap:16px;transition:transform .25s ease,box-shadow .25s ease}
          .card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(13,34,64,.10)}
          .card-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0}
          .card-body{flex:1}
          .card-title{font-size:1.05rem;font-weight:800;color:#0D2240;margin-bottom:8px;line-height:1.25}
          .card-desc{font-size:.88rem;color:#5A6780;line-height:1.65}
          .card-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:50px;font-size:.72rem;font-weight:700;align-self:flex-start;margin-top:4px}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
          @media(max-width:768px){.row{grid-template-columns:1fr 1fr}}
          @media(max-width:520px){.row{grid-template-columns:1fr}section{padding:60px 20px}}
        </style>
        <section>
          <div class="inner">
            <div class="top ob">
              <div class="lbl">Ook inbegrepen</div>
              <h2>Meer dan trainingen en tools</h2>
              <p class="sub">Naast de trainingen, Nova en je digitale werkplek krijg je toegang tot community, marktplaats en live events.</p>
            </div>
            <div class="row">
              <div class="card ob" style="transition-delay:0ms">
                <div class="card-icon" style="background:rgba(245,158,11,.12)">🤝</div>
                <div class="card-body">
                  <div class="card-title">Community</div>
                  <p class="card-desc">Een actieve groep gelijkgestemde starters. Spar over uitdagingen, test ideeën en bouw aan je netwerk.</p>
                </div>
                <span class="card-tag" style="background:rgba(245,158,11,.12);color:#D97706">Altijd toegankelijk</span>
              </div>
              <div class="card ob" style="transition-delay:80ms">
                <div class="card-icon" style="background:rgba(16,185,129,.12)">🛒</div>
                <div class="card-body">
                  <div class="card-title">Marktplaats</div>
                  <p class="card-desc">Zet jezelf in de spotlights en vind klanten via de B2B-marktplaats voor BusinessBaas-leden.</p>
                </div>
                <span class="card-tag" style="background:rgba(16,185,129,.12);color:#059669">Klanten vinden</span>
              </div>
              <div class="card ob" style="transition-delay:160ms">
                <div class="card-icon" style="background:rgba(232,93,4,.12)">🎤</div>
                <div class="card-body">
                  <div class="card-title">LIVE Events</div>
                  <p class="card-desc">Exclusieve offline events, mini-talks en netwerkmomenten. Tickets beschikbaar als add-on voor leden.</p>
                </div>
                <span class="card-tag" style="background:rgba(232,93,4,.12);color:#E85D04">add-on</span>
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
