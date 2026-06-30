(function () {
  if (customElements.get('bb-landing-reviews')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingReviews extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          img{display:block;max-width:100%}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .hl{background:transparent;color:inherit;border-radius:3px;padding:1px 3px;transition:background .8s ease}
          .r-card.ob.show .hl{background:rgba(232,93,4,.3);transition-delay:.5s}
          .reviews{padding:96px 24px;background:#F4F6FA}
          .reviews-inner{max-width:1100px;margin:0 auto}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          .reviews-head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:48px}
          h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1}
          h2 em{font-style:normal;color:#E85D04}
          .g-badge{display:inline-flex;align-items:center;gap:12px;padding:10px 18px;background:#fff;border:1px solid #E0E0E0;border-radius:12px;font-size:14px;font-weight:600;color:#202124;white-space:nowrap}
          .g-logo{width:26px;height:26px;border-radius:50%;background:#fff;border:1.5px solid #E0E0E0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#4285F4}
          .g-stars{color:#FBBC04;font-size:13px}
          .review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
          .r-card{background:linear-gradient(155deg,#0D2240,#1a3860);border-radius:20px;padding:26px 24px;display:flex;flex-direction:column;gap:14px;transition:transform .25s,box-shadow .25s}
          .r-card:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(13,34,64,.22)}
          .r-tag{display:inline-block;align-self:flex-start;font-size:11px;font-weight:700;color:#FFA366;background:rgba(232,93,4,.18);padding:4px 12px;border-radius:50px;text-transform:uppercase;letter-spacing:.06em}
          .r-quote{font-size:14px;font-style:italic;color:rgba(255,255,255,.82);line-height:1.72;flex:1}
          .r-person{display:flex;align-items:center;gap:11px;padding-top:14px;border-top:1px solid rgba(255,255,255,.09)}
          .r-person img{width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid rgba(232,93,4,.4)}
          .r-name{font-size:14px;font-weight:700;color:#fff}
          .r-role{font-size:12px;color:rgba(255,255,255,.45);margin-top:2px}
          @media(max-width:900px){.review-grid{grid-template-columns:1fr 1fr}}
          @media(max-width:560px){.review-grid{grid-template-columns:1fr}}
        </style>
        <section class="reviews">
          <div class="reviews-inner">
            <div class="reviews-head ob">
              <div>
                <div class="section-label">Wat leden zeggen</div>
                <h2>Echte ervaringen van<br><em>echte starters</em></h2>
              </div>
              <div class="g-badge"><div class="g-logo">G</div><div><div>4.9 <span class="g-stars">★★★★★</span></div><div style="font-size:11px;color:#5F6368;margin-top:2px;font-weight:500">Google Reviews</div></div></div>
            </div>
            <div class="review-grid">
              <div class="r-card ob"><span class="r-tag">Nieuwe klant via live event</span><p class="r-quote">"Het heeft mij heel erg uit de comfort zone getrokken om nieuwe stappen te zetten. Tijdens het live event heb ik contacten gelegd en zelfs <mark class="hl">een nieuwe klant ontmoet</mark>! Kan ik BusinessBaas alleen maar aanraden."</p><div class="r-person"><img src="${CDN}/juurd-prof.jpg" alt="Juurd Beijer"><div><div class="r-name">Juurd Beijer</div><div class="r-role">Juurd Beijer Fotografie</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.08s"><span class="r-tag">Van idee naar eerste klanten</span><p class="r-quote">"Van het uitwerken van je idee tot het binnenhalen van je eerste klanten, <mark class="hl">je staat er niet alleen voor</mark>. Echt een stevige basis om mee te starten!"</p><div class="r-person"><img src="${CDN}/stan-prof.jpg" alt="Stan Vreuls"><div><div class="r-name">Stan Vreuls</div><div class="r-role">21x</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.16s"><span class="r-tag">Meer zelfvertrouwen</span><p class="r-quote">"Het brengt mij <mark class="hl">meer zelfvertrouwen en zekerheid</mark> in mijn startende bedrijf. Met focus en stapsgewijs door de trainingen gaan krijg je het gevoel dat je bedrijf tot leven komt."</p><div class="r-person"><img src="${CDN}/joyce-prof.jpg" alt="Joyce Bekkers"><div><div class="r-name">Joyce Bekkers</div><div class="r-role">Kindercoach The Joy</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.08s"><span class="r-tag">AI-coach die echt helpt</span><p class="r-quote">"Nova voelt als een écht persoon om mee te sparren: ze helpt mijn plannen te structureren en geeft precies de juiste inspiratie wanneer ik vastloop. <mark class="hl">De prijs-kwaliteitverhouding is top.</mark>"</p><div class="r-person"><img src="${CDN}/jorn-prof.jpg" alt="Jorn Gijzen"><div><div class="r-name">Jorn Gijzen</div><div class="r-role">Talent Rocketeers</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.16s"><span class="r-tag">Stevige basis gebouwd</span><p class="r-quote">"Dankzij BusinessBaas heb ik niet alleen mijn bedrijf vormgegeven, maar ook mezelf opnieuw leren kennen als ondernemer. <mark class="hl">Dé investering voor elke starter die méér wil.</mark>"</p><div class="r-person"><img src="${CDN}/shauna-prof.jpg" alt="Shauna Mols"><div><div class="r-name">Shauna Mols</div><div class="r-role">Mols Marketing</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.24s"><span class="r-tag">Stap voor stap begeleid</span><p class="r-quote">"Stap voor stap ga je aan het werk, niets wordt overgeslagen. <mark class="hl">Joeri kijkt persoonlijk met je mee</mark> en geeft advies hoe je dingen kan aanpakken. Aanrader voor persoonlijke ontwikkeling en groei!"</p><div class="r-person"><img src="${CDN}/katharina-prof.jpg" alt="Katharina März"><div><div class="r-name">Katharina März</div><div class="r-role">Katharinazorg</div></div></div></div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-reviews', BBLandingReviews);
})();
