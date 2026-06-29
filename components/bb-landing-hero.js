(function () {
  if (customElements.get('bb-landing-hero')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingHero extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          a{color:inherit;text-decoration:none}
          img{display:block;max-width:100%}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .hero{background:linear-gradient(150deg,#0D2240 0%,#142c54 55%,#0f2845 100%);padding:96px 24px 88px;position:relative;overflow:hidden;text-align:center}
          .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 65% 40%,rgba(232,93,4,.15) 0%,transparent 60%);pointer-events:none}
          .hero-inner{max-width:780px;margin:0 auto;position:relative;z-index:2}
          .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;margin-bottom:28px;background:rgba(232,93,4,.2);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:12px;font-weight:700;color:rgba(255,255,255,.85);text-transform:uppercase;letter-spacing:.09em}
          h1{font-size:clamp(34px,6vw,68px);font-weight:900;color:#fff;line-height:1.05;letter-spacing:-.035em;margin-bottom:22px}
          h1 em{font-style:normal;color:#E85D04}
          .hero-sub{font-size:clamp(16px,2.2vw,20px);color:rgba(255,255,255,.65);line-height:1.65;max-width:580px;margin:0 auto 40px}
          .hero-cta-wrap{display:flex;flex-direction:column;align-items:center;gap:12px}
          .btn-primary{display:inline-flex;align-items:center;gap:10px;padding:17px 36px;background:#E85D04;color:#fff;font-size:17px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s}
          .btn-primary:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .hero-note{font-size:13px;color:rgba(255,255,255,.4)}
          .hero-note strong{color:rgba(255,255,255,.65);font-weight:600}
          .avatar-strip{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:56px;flex-wrap:wrap}
          .avatars{display:flex}
          .avatars img{width:40px;height:40px;border-radius:50%;object-fit:cover;border:3px solid #0D2240;margin-left:-10px}
          .avatars img:first-child{margin-left:0}
          .strip-text{font-size:14px;color:rgba(255,255,255,.6);line-height:1.5}
          .strip-text strong{color:#fff;font-weight:700}
        </style>
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-badge ob">Gratis starten — geen creditcard nodig</div>
            <h1 class="ob">Van idee naar<br><em>eerste klant</em></h1>
            <p class="hero-sub ob">BusinessBaas begeleidt jou stap voor stap van ondernemer-in-wording naar een bedrijf dat écht klanten aantrekt — met 20+ praktische trainingen, AI-coach Nova en een community van starters die precies begrijpen wat jij doormaakt.</p>
            <div class="hero-cta-wrap ob">
              <a href="https://www.businessbaas.com/voor-starters" class="btn-primary">
                Start gratis training
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <span class="hero-note">Gratis beginnen · <strong>€69/mnd</strong> als je verderlid wilt</span>
            </div>
            <div class="avatar-strip ob">
              <div class="avatars">
                <img src="${CDN}/jorn-prof.jpg" alt="Jorn">
                <img src="${CDN}/joyce-prof.jpg" alt="Joyce">
                <img src="${CDN}/juurd-prof.jpg" alt="Juurd">
                <img src="${CDN}/shauna-prof.jpg" alt="Shauna">
                <img src="${CDN}/stan-prof.jpg" alt="Stan">
                <img src="${CDN}/stephan-prof.png" alt="Stephan">
              </div>
              <div class="strip-text"><strong>25+ starters</strong> gingen je voor<br>Gemiddeld <strong>4.9/5</strong> op Google Reviews</div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-hero', BBLandingHero);
})();
