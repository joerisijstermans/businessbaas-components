(function () {
  if (customElements.get('bb-partner-dreamchasers')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBPartnerDreamchasers extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',sans-serif}

          /* HERO */
          .hero{background:linear-gradient(145deg,#0D2240 0%,#142c54 60%,#0D2240 100%);padding:80px 24px 72px;text-align:center;position:relative;overflow:hidden}
          .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 65% 40%,rgba(232,93,4,.14) 0%,transparent 60%);pointer-events:none}
          .partner-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.35);border-radius:50px;font-size:12px;font-weight:700;color:rgba(255,255,255,.9);text-transform:uppercase;letter-spacing:.08em;margin-bottom:28px}
          .hero h1{font-size:clamp(28px,4.5vw,54px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.03em;margin-bottom:18px;max-width:700px;margin-left:auto;margin-right:auto}
          .hero h1 em{color:#E85D04;font-style:normal}
          .hero p{font-size:18px;color:rgba(255,255,255,.68);line-height:1.65;max-width:580px;margin:0 auto 36px}
          .hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
          .btn-primary{padding:15px 36px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-primary:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 12px 32px rgba(232,93,4,.4)}
          .btn-ghost{padding:15px 36px;border:2px solid rgba(255,255,255,.3);color:#fff;font-size:15px;font-weight:600;border-radius:50px;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}
          .hero-logos{display:flex;align-items:center;justify-content:center;gap:20px;margin-top:40px;padding-top:32px;border-top:1px solid rgba(255,255,255,.1)}
          .hero-logos span{font-size:12px;color:rgba(255,255,255,.35);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
          .partner-name{font-size:13px;color:rgba(255,255,255,.55);font-weight:600}

          /* INTRO */
          .intro{padding:88px 24px;background:#fff}
          .intro-inner{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
          .intro-label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          .intro h2{font-size:clamp(1.7rem,3.5vw,2.3rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:16px;line-height:1.2}
          .intro p{font-size:.97rem;color:#5A6780;line-height:1.75;margin-bottom:16px}
          .checklist{list-style:none;display:flex;flex-direction:column;gap:10px;margin-top:4px}
          .checklist li{display:flex;align-items:flex-start;gap:10px;font-size:.9rem;color:#3D4F6B;line-height:1.5}
          .checklist li::before{content:'✓';width:22px;height:22px;border-radius:50%;background:#E85D04;color:#fff;font-size:.7rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
          .intro-img{width:100%;border-radius:20px;box-shadow:0 20px 56px rgba(13,34,64,.14);display:block}
          @media(max-width:760px){.intro-inner{grid-template-columns:1fr}}

          /* FEATURES */
          .features{padding:88px 24px;background:#F4F6FA}
          .feat-inner{max-width:1180px;margin:0 auto}
          .section-label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          .section-title{font-size:clamp(1.7rem,3.5vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:12px;text-align:center;line-height:1.2}
          .section-sub{font-size:1.02rem;color:#5A6780;max-width:540px;margin:0 auto 52px;text-align:center;line-height:1.7}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
          .feat-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(13,34,64,.06);transition:transform .25s,box-shadow .25s}
          .feat-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(13,34,64,.1)}
          .feat-img{width:100%;height:260px;object-fit:cover;object-position:top;display:block}
          .feat-body{padding:24px}
          .feat-icon-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}
          .feat-emoji{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
          .feat-name{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
          .feat-card h3{font-size:1.05rem;font-weight:800;color:#0D2240;margin-bottom:8px;line-height:1.3}
          .feat-card p{font-size:.875rem;color:#5A6780;line-height:1.6}
          @media(max-width:640px){.feat-grid{grid-template-columns:1fr}}

          /* QUOTE */
          .quote-section{padding:72px 24px;background:#0D2240}
          .quote-inner{max-width:760px;margin:0 auto;text-align:center}
          .quote-marks{font-size:4rem;color:#E85D04;line-height:.8;margin-bottom:20px;font-family:Georgia,serif}
          .quote-text{font-size:clamp(1.1rem,2.5vw,1.4rem);color:rgba(255,255,255,.88);line-height:1.65;font-style:italic;margin-bottom:28px}
          .quote-author{display:flex;align-items:center;justify-content:center;gap:12px}
          .quote-avatar{width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid #E85D04}
          .quote-name{font-size:.9rem;font-weight:700;color:#fff;text-align:left}
          .quote-role{font-size:.78rem;color:rgba(255,255,255,.45);text-align:left}

          /* CTA */
          .cta{padding:88px 24px;background:linear-gradient(135deg,#E85D04 0%,#CC4D00 100%);text-align:center}
          .cta-inner{max-width:600px;margin:0 auto}
          .cta h2{font-size:clamp(1.7rem,4vw,2.5rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:14px;line-height:1.2}
          .cta p{font-size:1.05rem;color:rgba(255,255,255,.85);margin-bottom:32px;line-height:1.6}
          .cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
          .cta-btn-w{background:#fff;color:#E85D04;padding:16px 38px;border-radius:50px;font-size:1rem;font-weight:700;text-decoration:none;transition:all .2s;display:inline-block}
          .cta-btn-w:hover{background:rgba(255,255,255,.92);transform:translateY(-2px)}
          .cta-btn-g{border:2px solid rgba(255,255,255,.5);color:#fff;padding:16px 38px;border-radius:50px;font-size:1rem;font-weight:600;text-decoration:none;transition:all .2s;display:inline-block}
          .cta-btn-g:hover{border-color:#fff;background:rgba(255,255,255,.1)}
          .cta-note{font-size:.82rem;color:rgba(255,255,255,.55);margin-top:16px}

          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>

        <!-- HERO -->
        <div class="hero">
          <div class="partner-badge">Exclusief voor Dreamchasers & Huis van de Toekomst</div>
          <h1>Zet jouw droom om in een <em>echte onderneming</em></h1>
          <p>Als deelnemer van Dreamchasers of Huis van de Toekomst krijg je toegang tot BusinessBaas — met stap-voor-stap trainingen, AI-coach Nova en een community van gelijkgestemde starters.</p>
          <div class="hero-btns">
            <a href="https://www.businessbaas.com/voor-starters" class="btn-primary" data-lightbox>Start gratis →</a>
            <a href="https://www.businessbaas.com/het-platform" class="btn-ghost">Bekijk het platform</a>
          </div>
          <div class="hero-logos">
            <span>In samenwerking met</span>
            <span class="partner-name">Stichting Dreamchasers</span>
            <span class="partner-name">Huis van de Toekomst Heerlen</span>
            <span class="partner-name">BusinessBaas</span>
          </div>
        </div>

        <!-- INTRO -->
        <div class="intro">
          <div class="intro-inner">
            <div>
              <div class="intro-label ob">Waarom BusinessBaas</div>
              <h2 class="ob">De tools die jouw idee omzetten in een echt bedrijf</h2>
              <p class="ob">Bij Dreamchasers en Huis van de Toekomst draait het om lef, actie en dromen die werkelijkheid worden. BusinessBaas is de digitale ruggengraat die daarbij hoort: praktisch, betaalbaar en altijd beschikbaar.</p>
              <ul class="checklist ob">
                <li>Van idee naar een helder aanbod, stap voor stap</li>
                <li>AI-coach Nova die jou begeleidt als je vastloopt</li>
                <li>Een community van starters die begrijpen wat jij doormaakt</li>
                <li>Toegankelijk voor minder dan €2,30 per dag</li>
              </ul>
            </div>
            <img class="intro-img ob" src="${CDN}/training-afbeelding.png" alt="BusinessBaas platform" style="transition-delay:.1s">
          </div>
        </div>

        <!-- FEATURES -->
        <div class="features">
          <div class="feat-inner">
            <div class="section-label ob">Wat je krijgt</div>
            <h2 class="section-title ob">Vier tools die het verschil maken</h2>
            <p class="section-sub ob">BusinessBaas geeft je alles om te beginnen, door te zetten en te groeien als ondernemer.</p>
            <div class="feat-grid ob">
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/training-afbeelding.png" alt="Trainingen">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#FFF3EB">📚</div><span class="feat-name" style="color:#E85D04">Trainingen</span></div>
                  <h3>Praktische trainingen die echt werken</h3>
                  <p>17+ korte trainingen die je direct toepast. Van jouw aanbod bepalen tot je eerste klant binnenhalen.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/nova-afbeelding.png" alt="AI-Coach Nova">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#F5F3FF">🤖</div><span class="feat-name" style="color:#8B5CF6">AI-Coach Nova</span></div>
                  <h3>Nova — altijd voor je klaar</h3>
                  <p>Nova kent jóuw situatie en helpt je sparren, plannen en doorpakken. 24/7, ook als je 's avonds vastloopt.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/community-afbeelding.png" alt="Community">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#FFFBEB">🤝</div><span class="feat-name" style="color:#F59E0B">Community</span></div>
                  <h3>Een community die jou begrijpt</h3>
                  <p>Spar met mede-starters, test ideeën en bouw je netwerk. Plus live events waar je echte verbindingen maakt.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/marktplaats-afbeelding.jpg" alt="Marktplaats">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#ECFDF5">🛒</div><span class="feat-name" style="color:#10B981">Marktplaats</span></div>
                  <h3>Vind je eerste klanten dichter bij huis</h3>
                  <p>Deel jouw aanbod met mede-ondernemers. Al diverse leden vonden opdrachten via BusinessBaas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- QUOTE -->
        <div class="quote-section">
          <div class="quote-inner ob">
            <div class="quote-marks">"</div>
            <p class="quote-text">Het baken bij het starten van een bedrijf! Een duidelijke weg, stap voor stap, en helder advies als het even niet zo gaat als je graag zou willen.</p>
            <div class="quote-author">
              <img class="quote-avatar" src="${CDN}/inge-prof.png" alt="Inge Höper">
              <div>
                <div class="quote-name">Inge Höper</div>
                <div class="quote-role">Kommeshier · BusinessBaas lid</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta">
          <div class="cta-inner ob">
            <h2>De deur naar jouw toekomst staat open</h2>
            <p>Meld je gratis aan via de BusinessBaas website. Geen creditcard, geen verplichtingen. Gewoon starten en zien hoe ver je komt.</p>
            <div class="cta-btns">
              <a href="https://www.businessbaas.com/voor-starters" class="cta-btn-w" data-lightbox>Start gratis training</a>
              <a href="https://www.businessbaas.com/het-platform" class="cta-btn-g">Bekijk het platform</a>
            </div>
            <p class="cta-note">Aangeboden via Dreamchasers & Huis van de Toekomst Heerlen</p>
          </div>
        </div>`;

      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
      s.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          if (window.openTrainingLightbox) {
            e.preventDefault();
            window.openTrainingLightbox();
          }
        });
      });
    }
  }
  customElements.define('bb-partner-dreamchasers', BBPartnerDreamchasers);
})();
