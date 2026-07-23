(function () {
  if (customElements.get('bb-about-partners')) return;
  class BBAboutPartners extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
          .label{display:inline-flex;align-items:center;gap:10px;font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          .label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px;flex-shrink:0}
          h2{font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:20px;line-height:1.2}
          p{font-size:.97rem;color:#5A6780;line-height:1.75;margin-bottom:20px}
          .partner-card{background:#0D2240;border-radius:20px;padding:32px;color:rgba(255,255,255,.85)}
          .partner-name{font-size:1.1rem;font-weight:800;color:#fff;margin-bottom:8px}
          .partner-quote{font-size:.9rem;line-height:1.65;font-style:italic;margin-bottom:16px}
          .partner-meta{font-size:.8rem;color:rgba(255,255,255,.45);border-top:1px solid rgba(255,255,255,.1);padding-top:14px}
          .cta-link{display:inline-flex;align-items:center;gap:8px;color:#E85D04;font-weight:700;text-decoration:none;font-size:.95rem;margin-top:24px;transition:gap .2s}
          .cta-link:hover{gap:14px}
          @media(max-width:768px){.inner{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div>
              <div class="label ob">Samenwerking</div>
              <h2 class="ob">Samen sterker voor starters</h2>
              <p class="ob">BusinessBaas werkt samen met organisaties die dagelijks in contact staan met startende ondernemers: gemeenten, hogescholen, starterscentra en begeleiders. Samen bereiken we meer starters en bieden we betere ondersteuning.</p>
              <p class="ob">Werkt jouw organisatie ook met starters? Neem dan een kijkje bij onze partnerpagina of neem contact met ons op.</p>
              <a class="cta-link ob" href="https://www.businessbaas.com/voor-partners">Bekijk partnermogelijkheden →</a>
            </div>
            <div class="partner-card ob" style="transition-delay:.1s">
              <div style="font-size:1.8rem;margin-bottom:16px">🤝</div>
              <div class="partner-name">Starterscentrum Limburg</div>
              <div class="partner-quote">"BusinessBaas vult onze begeleiding perfect aan. Onze deelnemers hebben nu 24/7 toegang tot praktische kennis en een AI-coach, dat maakt echt het verschil."</div>
              <div class="partner-meta">Officieel partner · Limburg-regio</div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-about-partners', BBAboutPartners);
})();
