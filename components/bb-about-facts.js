(function () {
  if (customElements.get('bb-about-facts')) return;
  class BBAboutFacts extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:72px 24px;background:#0D2240;font-family:'Inter',sans-serif}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
          h2{font-size:clamp(1.6rem,3.5vw,2.2rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:20px;line-height:1.25}
          h2 em{color:#E85D04;font-style:normal}
          p{font-size:.95rem;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:24px}
          .facts{display:grid;grid-template-columns:1fr 1fr;gap:20px}
          .fact{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:20px}
          .fact .v{font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:-.03em}
          .fact .v em{color:#E85D04;font-style:normal}
          .fact .l{font-size:.8rem;color:rgba(255,255,255,.5);margin-top:4px}
          .links{display:flex;gap:16px;flex-wrap:wrap}
          .link-btn{padding:12px 28px;border-radius:50px;font-size:.9rem;font-weight:700;text-decoration:none;transition:all .2s;display:inline-block}
          .link-btn.primary{background:#E85D04;color:#fff}
          .link-btn.primary:hover{background:#CC4D00}
          .link-btn.ghost{border:2px solid rgba(255,255,255,.3);color:#fff}
          .link-btn.ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}
          @media(max-width:768px){.inner{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div>
              <h2 class="ob">BusinessBaas <em>in cijfers</em></h2>
              <p class="ob">Van een idee in Echt, Limburg tot een erkend platform voor starters door heel Nederland, dit zijn de feiten.</p>
              <div class="links ob">
                <a class="link-btn primary" href="starters.html#pricing">Probeer gratis</a>
                <a class="link-btn ghost" href="succesverhalen.html">Lees succesverhalen</a>
              </div>
            </div>
            <div class="facts ob">
              <div class="fact"><div class="v"><em>2025</em></div><div class="l">Lancering</div></div>
              <div class="fact"><div class="v">25<em>+</em></div><div class="l">Actieve leden</div></div>
              <div class="fact"><div class="v">20<em>+</em></div><div class="l">Trainingen</div></div>
              <div class="fact"><div class="v">4.9<em>/5</em></div><div class="l">Gemiddelde beoordeling</div></div>
              <div class="fact" style="grid-column:1/-1"><div class="v">🏆 <em>Finalist</em></div><div class="l">Limburg Awards 2025</div></div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-about-facts', BBAboutFacts);
})();
