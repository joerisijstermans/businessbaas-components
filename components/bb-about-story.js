(function () {
  if (customElements.get('bb-about-story')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBAboutStory extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:800px;margin:0 auto}
          .label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:40px;line-height:1.2}
          .timeline{display:flex;flex-direction:column;gap:0}
          .step{display:grid;grid-template-columns:80px 1fr;gap:24px;padding-bottom:48px;position:relative}
          .step:not(:last-child)::before{content:'';position:absolute;left:39px;top:48px;bottom:0;width:2px;background:linear-gradient(to bottom,#E85D04,rgba(232,93,4,.1))}
          .year-badge{display:flex;flex-direction:column;align-items:center;gap:6px}
          .year{font-size:.75rem;font-weight:700;color:#E85D04;letter-spacing:.06em}
          .dot{width:18px;height:18px;border-radius:50%;background:#E85D04;border:3px solid #fff;box-shadow:0 0 0 2px #E85D04;flex-shrink:0;margin-top:2px}
          .content h3{font-size:1.1rem;font-weight:700;color:#0D2240;margin-bottom:10px}
          .content p{font-size:.92rem;color:#5A6780;line-height:1.7}
          .highlight{background:#F4F6FA;border-left:3px solid #E85D04;padding:20px 24px;border-radius:0 14px 14px 0;margin-top:48px;display:flex;align-items:flex-start;gap:24px}
          .highlight img{width:72px;height:72px;border-radius:50%;object-fit:cover;flex-shrink:0;border:3px solid #E85D04}
          .highlight p{font-size:1rem;color:#3D4F6B;line-height:1.7;font-style:italic;margin-bottom:8px}
          .highlight .sig{font-size:.85rem;font-weight:700;color:#0D2240}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="label ob">Het verhaal</div>
            <h2 class="ob">Hoe BusinessBaas ontstond</h2>
            <div class="timeline">
              <div class="step ob">
                <div class="year-badge"><span class="year">2014</span><div class="dot"></div></div>
                <div class="content">
                  <h3>Docent én ondernemer tegelijk</h3>
                  <p>Joeri start zijn carrière als HBO-docent en begeleidt jaar na jaar studenten in hun ontwikkeling. Datzelfde jaar start hij ook zijn eerste eigen onderneming. Hij leert al snel: het belang van je netwerk aanspreken, niet alles alleen willen doen, hoofd- en bijzaken onderscheiden en scherp bepalen wie je klant is, en wie niet. Die combinatie van begeleider én ondernemer-in-de-praktijk bepaalt hoe hij naar starters kijkt.</p>
                </div>
              </div>
              <div class="step ob" style="transition-delay:.07s">
                <div class="year-badge"><span class="year">2023</span><div class="dot"></div></div>
                <div class="content">
                  <h3>Het gat in de markt</h3>
                  <p>Er bestaan cursussen, er zijn coaches, er zijn YouTube-video's, maar nergens is alles gecombineerd in één platform dat specifiek gebouwd is voor de Nederlandse starter. Joeri besluit dat hij het zelf gaat bouwen.</p>
                </div>
              </div>
              <div class="step ob" style="transition-delay:.14s">
                <div class="year-badge"><span class="year">2025</span><div class="dot"></div></div>
                <div class="content">
                  <h3>BusinessBaas gaat live</h3>
                  <p>Vanuit Echt, Limburg lanceert Joeri BusinessBaas. Het platform combineert stap-voor-stap trainingen, AI-coach Nova, een digitale werkplek en een community. Datzelfde jaar wordt BusinessBaas genomineerd als een van de meest veelbelovende startende ondernemingen van Limburg.</p>
                </div>
              </div>
              <div class="step ob" style="transition-delay:.21s">
                <div class="year-badge"><span class="year">2026</span><div class="dot"></div></div>
                <div class="content">
                  <h3>Lancering partnerplatform</h3>
                  <p>BusinessBaas opent zijn deuren voor organisaties die starters begeleiden: coaches, starterscentra en gemeenten. Via het partnerplatform kunnen zij BusinessBaas inzetten voor hun eigen doelgroep, op schaal.</p>
                </div>
              </div>
            </div>
            <div class="highlight ob">
              <img src="${CDN}/joeri-prof.jpg" alt="Joeri Sijstermans">
              <div>
                <p>"Ik heb jarenlang gezien hoe getalenteerde mensen vastliepen op de praktische kant van ondernemen. BusinessBaas is mijn antwoord op dat probleem. Niet meer hoeven rondzoeken, niet meer betalen voor losse adviezen, gewoon alles op één plek, voor een prijs die elke starter kan betalen."</p>
                <div class="sig">Joeri Sijstermans, Oprichter BusinessBaas</div>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-about-story', BBAboutStory);
})();
