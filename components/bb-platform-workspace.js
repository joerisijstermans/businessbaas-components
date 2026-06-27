(function () {
  if (customElements.get('bb-platform-workspace')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBPlatformWorkspace extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:20px;line-height:1.2}
          p{font-size:1rem;color:#5A6780;line-height:1.7;margin-bottom:20px}
          .features{display:flex;flex-direction:column;gap:16px}
          .feat{display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-radius:14px;background:#F4F6FA;transition:background .2s}
          .feat:hover{background:#EAF0FF}
          .feat-icon{width:40px;height:40px;border-radius:10px;background:#0D2240;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
          .feat-info h4{font-size:.95rem;font-weight:700;color:#0D2240;margin-bottom:4px}
          .feat-info p{font-size:.85rem;color:#5A6780;margin:0;line-height:1.5}
          .img-wrap img{width:100%;border-radius:20px;box-shadow:0 20px 56px rgba(13,34,64,0.18);display:block}
          @media(max-width:900px){.inner{grid-template-columns:1fr;gap:48px}.img-wrap{order:-1}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="img-wrap ob">
              <img src="${CDN}/werkplek-afbeelding.png" alt="Digitale Werkplek">
            </div>
            <div>
              <div class="lbl ob">Digitale Werkplek</div>
              <h2 class="ob">De plek waar jouw onderneming vorm krijgt</h2>
              <p class="ob">Vroeger was een ondernemersplan een dik, lastig PDF-document. In de digitale werkplek gaat dat anders. Alles wat je leert in de trainingen werk je hier direct uit. De exacte opdrachten per training vind je terug in jouw eigen omgeving. Jouw onderneming, opgebouwd vanuit de trainingen. Alles op één plek.</p>
              <div class="features ob" style="transition-delay:.1s">
                <div class="feat">
                  <div class="feat-icon">📋</div>
                  <div class="feat-info">
                    <h4>Jouw digitale ondernemersplan</h4>
                    <p>Geen dikke PDF meer. Je plan groeit mee terwijl jij groeit als ondernemer, interactief en overzichtelijk.</p>
                  </div>
                </div>
                <div class="feat">
                  <div class="feat-icon">✍️</div>
                  <div class="feat-info">
                    <h4>Opdrachten uit de trainingen</h4>
                    <p>Elke training heeft bijbehorende opdrachten die je direct uitwerkt in jouw werkplek. Zo bouw jij jouw bedrijf stap voor stap op.</p>
                  </div>
                </div>
                <div class="feat">
                  <div class="feat-icon">📊</div>
                  <div class="feat-info">
                    <h4>Alles op één plek</h4>
                    <p>Jouw informatie, voortgang en uitwerkingen altijd bij de hand. Overzichtelijk, georganiseerd en overal bereikbaar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-workspace', BBPlatformWorkspace);
})();
