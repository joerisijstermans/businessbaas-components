(function () {
  if (customElements.get('bb-landing-solution')) return;
  class BBLandingSolution extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .solution{padding:96px 24px;background:#fff}
          .solution-inner{max-width:1100px;margin:0 auto;text-align:center}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;justify-content:center}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          h2 em{font-style:normal;color:#E85D04}
          .solution-sub{font-size:18px;color:#5A6780;line-height:1.65;max-width:560px;margin:0 auto 64px}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;text-align:left}
          .feat-card{border-radius:22px;padding:36px 32px;background:linear-gradient(145deg,#0D2240,#162f55);transition:box-shadow .25s,transform .25s}
          .feat-card:hover{transform:translateY(-5px);box-shadow:0 24px 52px rgba(13,34,64,.25)}
          .feat-icon{width:52px;height:52px;border-radius:14px;background:rgba(232,93,4,.18);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px}
          .feat-card h3{font-size:20px;font-weight:800;color:#fff;margin-bottom:10px}
          .feat-card p{font-size:14.5px;color:rgba(255,255,255,.6);line-height:1.7}
          @media(max-width:680px){.feat-grid{grid-template-columns:1fr}}
        </style>
        <section class="solution">
          <div class="solution-inner">
            <div class="section-label ob">Het platform</div>
            <h2 class="ob">Alles wat je nodig hebt<br><em>op één plek</em></h2>
            <p class="solution-sub ob">Geen losse tools, geen dure coaches. BusinessBaas bundelt trainingen, AI-begeleiding, een werkplek en een community in één betaalbaar platform.</p>
            <div class="feat-grid">
              <div class="feat-card ob"><div class="feat-icon">🎓</div><h3>20+ Praktische trainingen</h3><p>Van doelgroepbepaling tot salesgesprek. De modules zijn kort, concreet en direct toepasbaar. Jij werkt in jouw tempo, maar je werkt wél.</p></div>
              <div class="feat-card ob" style="transition-delay:.1s"><div class="feat-icon">🤖</div><h3>Nova, jouw AI-coach</h3><p>Altijd beschikbaar, nooit oordelend. Nova helpt je vastgelopen plannen vlottrekken, feedback geven op je teksten en antwoorden geven op de vragen die je googelt maar niet durft te stellen.</p></div>
              <div class="feat-card ob" style="transition-delay:.2s"><div class="feat-icon">🗂️</div><h3>Digitale werkplek</h3><p>Jouw ondernemersplan, je doelgroep, je pitches en je voortgang, allemaal op één overzichtelijke plek. Geen losse notitieblokken meer.</p></div>
              <div class="feat-card ob" style="transition-delay:.3s"><div class="feat-icon">🤝</div><h3>Community &amp; marktplaats</h3><p>Ondernemers die precies begrijpen wat jij doormaakt. Spar over klanten, wissel kennis uit en vind je eerste opdrachten via de interne marktplaats.</p></div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-solution', BBLandingSolution);
})();
