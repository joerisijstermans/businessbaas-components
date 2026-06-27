(function () {
  if (customElements.get('bb-about-mission')) return;
  class BBAboutMission extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#F4F6FA;font-family:'Inter',sans-serif}
          .inner{max-width:1200px;margin:0 auto}
          .label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          h2{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:16px;text-align:center;line-height:1.2}
          .sub{font-size:1.05rem;color:#5A6780;max-width:560px;margin:0 auto 56px;text-align:center;line-height:1.7}
          .mission-box{background:#0D2240;border-radius:24px;padding:48px;text-align:center;margin-bottom:48px;position:relative;overflow:hidden}
          .mission-box::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(232,93,4,.15) 0%,transparent 60%)}
          .mission-label{font-size:.75rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px;position:relative}
          .mission-text{font-size:clamp(1.3rem,3vw,2rem);font-weight:800;color:#fff;line-height:1.4;max-width:680px;margin:0 auto;position:relative}
          .mission-text em{color:#E85D04;font-style:normal}
          .values{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
          .val{background:#fff;border-radius:18px;padding:28px 24px;text-align:center;box-shadow:0 2px 12px rgba(13,34,64,.06);transition:transform .25s}
          .val:hover{transform:translateY(-4px)}
          .val-icon{font-size:2rem;margin-bottom:14px;display:block}
          .val h3{font-size:1rem;font-weight:700;color:#0D2240;margin-bottom:10px}
          .val p{font-size:.85rem;color:#5A6780;line-height:1.6}
          @media(max-width:900px){.values{grid-template-columns:repeat(2,1fr)}}
          @media(max-width:500px){.values{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="label ob">Missie & Waarden</div>
            <h2 class="ob">Waarom BusinessBaas bestaat</h2>
            <p class="sub ob">Starters verdienen betere ondersteuning. Dat is de reden dat we elke dag bouwen aan dit platform.</p>
            <div class="mission-box ob">
              <div class="mission-label">Onze missie</div>
              <div class="mission-text">Elke ambitieuze starter in Nederland <em>de kennis, tools en begeleiding</em> geven die ze nodig hebben om succesvol te ondernemen, toegankelijk en betaalbaar.</div>
            </div>
            <div class="values">
              <div class="val ob">
                <span class="val-icon">💡</span>
                <h3>Praktisch boven theoretisch</h3>
                <p>Korte, heldere theorie die je direct omzet in actie. Je begrijpt waarom je iets doet, maar de nadruk ligt op doen.</p>
              </div>
              <div class="val ob" style="transition-delay:.07s">
                <span class="val-icon">🤝</span>
                <h3>Toegankelijk voor iedereen</h3>
                <p>Goed ondernemerschap mag geen zaak zijn van budget. BusinessBaas is ontworpen zodat elke starter mee kan doen.</p>
              </div>
              <div class="val ob" style="transition-delay:.14s">
                <span class="val-icon">🚀</span>
                <h3>Snelheid is kracht</h3>
                <p>Hoe sneller een starter zijn eerste klant haalt, hoe groter de kans op succes. Alles in BusinessBaas is gericht op die snelheid.</p>
              </div>
              <div class="val ob" style="transition-delay:.21s">
                <span class="val-icon">❤️</span>
                <h3>Echte betrokkenheid</h3>
                <p>Joeri is persoonlijk aanwezig in de community, de live events en de content. Dit is geen anoniem platform.</p>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-about-mission', BBAboutMission);
})();
