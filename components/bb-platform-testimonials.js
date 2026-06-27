(function () {
  if (customElements.get('bb-platform-testimonials')) return;
  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';
  class BBPlatformTestimonials extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const reviews = [
        { quote: 'Nova voelt als een écht persoon om mee te sparren: ze helpt mijn plannen te structureren en geeft precies de juiste inspiratie wanneer ik vastloop. Bovendien is de prijs-kwaliteitverhouding top: professionele tools, coaching én een actieve community.', name: 'Jorn Gijzen', role: 'Talent Rocketeers', av: `${CDN}/jorn-prof.jpg` },
        { quote: 'Die training heeft echt het verschil gemaakt voor mijn bedrijf! Dankzij de praktische en heldere aanpak heb ik mijn niche scherp voor ogen én weet ik hoe ik ze gericht kan aanspreken. Absoluut een aanrader!', name: 'Loes Kluter', role: 'Kluter Vastgoedpresentatie', av: `${CDN}/loes-prof.png` },
        { quote: 'Het baken bij het starten van een bedrijf! Een duidelijke weg, stap voor stap, en helder advies als het even niet zo gaat als je graag zou willen.', name: 'Inge Höper', role: 'Kommeshier', av: `${CDN}/inge-prof.png` },
      ];
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#F4F6FA;font-family:'Inter',sans-serif}
          .inner{max-width:1200px;margin:0 auto}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          h2{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:48px;text-align:center;line-height:1.2}
          .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
          .card{background:#fff;border-radius:20px;padding:32px;box-shadow:0 4px 20px rgba(13,34,64,.06);display:flex;flex-direction:column;gap:20px;transition:transform .25s,box-shadow .25s}
          .card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(13,34,64,.1)}
          .quote{font-size:.95rem;color:#3D4F6B;line-height:1.7;flex:1;font-style:italic}
          .author{display:flex;align-items:center;gap:14px}
          .avatar{width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid rgba(13,34,64,.1)}
          .author-name{font-size:.9rem;font-weight:700;color:#0D2240}
          .author-role{font-size:.8rem;color:#5A6780}
          @media(max-width:768px){.grid{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div class="lbl ob">Wat leden zeggen</div>
            <h2 class="ob">Ze gingen je voor</h2>
            <div class="grid">
              ${reviews.map((r, i) => `
                <div class="card ob" style="transition-delay:${i * .08}s">
                  <p class="quote">"${r.quote}"</p>
                  <div class="author">
                    <img class="avatar" src="${r.av}" alt="${r.name}">
                    <div>
                      <div class="author-name">${r.name}</div>
                      <div class="author-role">${r.role}</div>
                    </div>
                  </div>
                </div>`).join('')}
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .12 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-testimonials', BBPlatformTestimonials);
})();
