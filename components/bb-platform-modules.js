(function () {
  if (customElements.get('bb-platform-modules')) return;
  class BBPlatformModules extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#F4F6FA;font-family:'Inter',sans-serif}
          .inner{max-width:1200px;margin:0 auto}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:16px;line-height:1.15;text-align:center}
          .sub{font-size:1.05rem;color:#5A6780;max-width:580px;line-height:1.7;margin:0 auto 56px;text-align:center}
          .grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
          .mod{border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(13,34,64,.08)}
          .mod-head{padding:28px 32px;color:#fff}
          .mod-head.navy{background:#0D2240}
          .mod-head.orange{background:#E85D04}
          .mod-num{font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.7;margin-bottom:8px}
          .mod-title{font-size:1.3rem;font-weight:800;line-height:1.2}
          .mod-desc{font-size:.88rem;opacity:.8;margin-top:8px;line-height:1.5}
          .mod-body{background:#fff;padding:24px 32px}
          .topic{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #F0F2F7}
          .topic:last-child{border-bottom:none}
          .check{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;font-size:.75rem}
          .check.navy{background:rgba(13,34,64,.1);color:#0D2240}
          .check.orange{background:rgba(232,93,4,.12);color:#E85D04}
          .topic-text{font-size:.9rem;color:#3D4F6B;line-height:1.4;font-weight:500}
          .mod-summary{font-size:.82rem;font-style:italic;color:#5A6780;padding-top:12px;border-top:1px solid #F0F2F7;margin-top:4px;line-height:1.55}
          .challenge{margin-top:28px;background:linear-gradient(135deg,#E85D04,#CC4D00);border-radius:20px;overflow:hidden}
          .ch-body{padding:28px 32px;color:#fff}
          .ch-eyebrow{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.75;margin-bottom:10px}
          .ch-title{font-size:1.3rem;font-weight:800;line-height:1.2;margin-bottom:8px}
          .ch-desc{font-size:.9rem;opacity:.88;line-height:1.6}
          .ch-pills{background:rgba(0,0,0,.15);padding:16px 32px;display:flex;flex-wrap:wrap;gap:10px}
          .pill{background:rgba(255,255,255,.15);border-radius:50px;padding:5px 14px;font-size:.78rem;color:#fff;font-weight:600}
          @media(max-width:768px){.grid{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="lbl ob">Trainingen</div>
            <h2 class="ob">Twee modules + Kickstart Challenge</h2>
            <p class="sub ob">20+ praktische trainingen verdeeld over twee modules, plus een Kickstart Challenge om direct in actie te komen. Alles in jouw eigen tempo.</p>
            <div class="grid">
              <div class="mod ob">
                <div class="mod-head navy">
                  <div class="mod-num">Module 1 · 8 trainingen</div>
                  <div class="mod-title">Strategie</div>
                  <div class="mod-desc">Van idee naar een scherpe strategie en onderscheidend aanbod.</div>
                </div>
                <div class="mod-body">
                  ${['Het belang van de juiste strategie','Mindset en ondernemerschap','Wie ben jij als ondernemer?','Van idee naar concept','Doelgroep en positionering','Concurrentieanalyse','Brandstory en klantbeleving','Roadmap en implementatie'].map(t => `<div class="topic"><span class="check navy">✓</span><span class="topic-text">${t}</span></div>`).join('')}
                  <div class="mod-summary">Na Module 1 weet je wie je klant is, wat je aanbiedt en hoe je je onderscheidt.</div>
                </div>
              </div>
              <div class="mod ob" style="transition-delay:.1s">
                <div class="mod-head orange">
                  <div class="mod-num">Module 2 · 9 trainingen</div>
                  <div class="mod-title">Scoor je eerste klanten</div>
                  <div class="mod-desc">Van pitch tot deal: jouw eerste klant als ondernemer.</div>
                </div>
                <div class="mod-body">
                  ${['Sales vs. marketing: verschil én samenwerking','Warme en koude acquisitie','De eerste verkoop: van pitch tot deal','Zichtbaarheid en lef tonen','De klantreis begrijpen','Jouw aanbod aanscherpen','Veelgemaakte misverstanden bij sales','Waarom het misgaat bij starters','Herschrijf jouw nieuwe overtuigingen'].map(t => `<div class="topic"><span class="check orange">✓</span><span class="topic-text">${t}</span></div>`).join('')}
                  <div class="mod-summary">Na Module 2 heb je het eerste klantgesprek gevoerd, en ben je klaar voor je eerste deal.</div>
                </div>
              </div>
            </div>
            <div class="challenge ob">
              <div class="ch-body">
                <div class="ch-eyebrow">⚡ Inbegrepen bij lidmaatschap</div>
                <div class="ch-title">Kickstart Challenge</div>
                <div class="ch-desc">Een challenge om direct in actie te komen. Concrete opdrachten, community support en een vliegende start als ondernemer.</div>
              </div>
              <div class="ch-pills">
                ${['Direct starten','Concrete opdrachten','Community support','Vliegende start'].map(t => `<span class="pill">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-modules', BBPlatformModules);
})();
