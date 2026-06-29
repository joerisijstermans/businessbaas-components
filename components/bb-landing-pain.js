(function () {
  if (customElements.get('bb-landing-pain')) return;
  class BBLandingPain extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .pain{padding:96px 24px;background:#F4F6FA}
          .pain-inner{max-width:1000px;margin:0 auto}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:52px}
          h2 em{font-style:normal;color:#E85D04}
          .pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
          .pain-card{background:#fff;border-radius:18px;padding:28px 24px;border:1px solid rgba(13,34,64,.07);transition:box-shadow .22s,transform .22s}
          .pain-card:hover{box-shadow:0 8px 28px rgba(13,34,64,.1);transform:translateY(-3px)}
          .pain-icon{font-size:32px;margin-bottom:16px}
          .pain-card h3{font-size:17px;font-weight:800;color:#0D2240;margin-bottom:10px}
          .pain-card p{font-size:14px;color:#5A6780;line-height:1.7}
          @media(max-width:760px){.pain-grid{grid-template-columns:1fr 1fr}}
          @media(max-width:480px){.pain-grid{grid-template-columns:1fr}}
        </style>
        <section class="pain">
          <div class="pain-inner">
            <div class="section-label ob">Herken jij dit?</div>
            <h2 class="ob">Starten is spannend.<br>Maar <em>doorstarten</em> is het échte werk.</h2>
            <div class="pain-grid">
              <div class="pain-card ob"><div class="pain-icon">🗺️</div><h3>Je weet niet waar je moet beginnen</h3><p>Een idee heb je, maar een plan? Dat is een ander verhaal. Zonder structuur loop je in cirkels en verlies je kostbare tijd.</p></div>
              <div class="pain-card ob" style="transition-delay:.08s"><div class="pain-icon">🧍</div><h3>Je staat er alleen voor</h3><p>Familie en vrienden begrijpen het niet echt. En een dure coach of boekhouder past niet in je budget als starter.</p></div>
              <div class="pain-card ob" style="transition-delay:.16s"><div class="pain-icon">🎯</div><h3>Je weet niet hoe je klanten vindt</h3><p>Je hebt een goed product of dienst, maar hoe vertel je het de juiste mensen? En hoe zorg je dat ze ook echt klant worden?</p></div>
              <div class="pain-card ob" style="transition-delay:.08s"><div class="pain-icon">🧠</div><h3>Twijfel en uitstelgedrag</h3><p>"Is mijn idee goed genoeg?" — Een vraag die je s'avonds wakker houdt. Ondernemen is net zoveel mindset als techniek.</p></div>
              <div class="pain-card ob" style="transition-delay:.16s"><div class="pain-icon">💸</div><h3>Te dure cursussen en coaches</h3><p>Duizenden euro's neertellen voor een cursus die je dan toch niet afmaakt, terwijl je nog nul inkomen hebt. Dat kan anders.</p></div>
              <div class="pain-card ob" style="transition-delay:.24s"><div class="pain-icon">📋</div><h3>Theorie zonder praktijk</h3><p>Je hebt al van alles gelezen en bekeken, maar je komt niet tot uitvoering. Je hebt iemand nodig die je aan het werk zet.</p></div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-pain', BBLandingPain);
})();
