(function () {
  if (customElements.get('bb-partner-ohb')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBPartnerOhb extends HTMLElement {
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
          .access-pill{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:14px 24px;margin-bottom:32px;font-size:14px;color:rgba(255,255,255,.75)}
          .access-pill strong{color:#22C55E;font-weight:700}
          .hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
          .btn-primary{padding:15px 36px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-primary:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 12px 32px rgba(232,93,4,.4)}
          .btn-ghost{padding:15px 36px;border:2px solid rgba(255,255,255,.3);color:#fff;font-size:15px;font-weight:600;border-radius:50px;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}
          .hero-logos{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:40px;padding-top:32px;border-top:1px solid rgba(255,255,255,.1)}
          .hl-label{font-size:12px;color:rgba(255,255,255,.35);font-weight:600;text-transform:uppercase;letter-spacing:.08em}
          .hl-sep{color:rgba(255,255,255,.2);font-size:14px}
          .hl-name{font-size:13px;color:rgba(255,255,255,.55);font-weight:600}

          /* WHAT-INCLUDED */
          .included{padding:88px 24px;background:#fff}
          .inner{max-width:1180px;margin:0 auto}
          .section-label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          .section-title{font-size:clamp(1.7rem,3.5vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:12px;text-align:center;line-height:1.2}
          .section-sub{font-size:1.02rem;color:#5A6780;max-width:540px;margin:0 auto 52px;text-align:center;line-height:1.7}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
          .feat-card{background:#F4F6FA;border-radius:20px;overflow:hidden;transition:transform .25s,box-shadow .25s}
          .feat-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(13,34,64,.1)}
          .feat-img{width:100%;height:260px;object-fit:cover;object-position:top;display:block}
          .feat-body{padding:24px}
          .feat-icon-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}
          .feat-emoji{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
          .feat-name{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
          .feat-card h3{font-size:1.05rem;font-weight:800;color:#0D2240;margin-bottom:8px;line-height:1.3}
          .feat-card p{font-size:.875rem;color:#5A6780;line-height:1.6}
          @media(max-width:640px){.feat-grid{grid-template-columns:1fr}}

          /* TIMELINE — HOW IT WORKS */
          .how{padding:72px 24px;background:#F4F6FA}
          .how-inner{max-width:760px;margin:0 auto}
          .steps{display:flex;flex-direction:column;gap:0;margin-top:40px}
          .step{display:grid;grid-template-columns:48px 1fr;gap:20px;padding-bottom:40px;position:relative}
          .step:not(:last-child)::before{content:'';position:absolute;left:23px;top:48px;bottom:0;width:2px;background:linear-gradient(to bottom,#E85D04,rgba(232,93,4,.1))}
          .step-num{width:48px;height:48px;border-radius:50%;background:#E85D04;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:900;color:#fff;flex-shrink:0}
          .step-content h4{font-size:1rem;font-weight:700;color:#0D2240;margin-bottom:6px;padding-top:12px}
          .step-content p{font-size:.875rem;color:#5A6780;line-height:1.65}

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
          <div class="partner-badge">Onderdeel van Ondernemershub Brunssum</div>
          <h1>Jouw 6 maanden <em>BusinessBaas</em> toegang</h1>
          <p>Als deelnemer van de Ondernemershub Brunssum is BusinessBaas inbegrepen in jouw traject. Hier werk je alles wat je leert direct uit in jouw eigen digitale werkplek.</p>
          <div class="hero-btns">
            <a href="https://www.businessbaas.com/het-platform" class="btn-primary">Bekijk het platform →</a>
            <a href="mailto:info@businessbaas.com" class="btn-ghost">Vragen? Neem contact op</a>
          </div>
          <div class="hero-logos">
            <span class="hl-label">In samenwerking met</span>
            <span class="hl-sep">|</span>
            <span class="hl-name">Ondernemershub Brunssum</span>
          </div>
        </div>

        <!-- FEATURES -->
        <div class="included">
          <div class="inner">
            <div class="section-label ob">Inbegrepen in jouw toegang</div>
            <h2 class="section-title ob">Alles om je leren om te zetten in actie</h2>
            <p class="section-sub ob">Naast het 12-weken programma heb je 6 maanden lang toegang tot alle tools van BusinessBaas.</p>
            <div class="feat-grid ob">
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/werkplek-afbeelding.png" alt="Digitale Werkplek">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#EFF6FF">🖥️</div><span class="feat-name" style="color:#3B82F6">Werkplek</span></div>
                  <h3>Werk gestructureerd aan je bedrijf</h3>
                  <p>De digitale werkplek is waar je de opdrachten uit het programma uitwerkt. Jouw ondernemersplan, overzichtelijk op één plek.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/nova-afbeelding.png" alt="AI-Coach Nova">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#F5F3FF">🤖</div><span class="feat-name" style="color:#8B5CF6">AI-Coach Nova</span></div>
                  <h3>Jouw persoonlijke AI-coach, 24/7</h3>
                  <p>Nova kent jouw programma en situatie. Altijd beschikbaar voor sparren, ook buiten de 12 weken van het programma.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/training-afbeelding.png" alt="Trainingen">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#FFF3EB">📚</div><span class="feat-name" style="color:#E85D04">Trainingen</span></div>
                  <h3>17+ trainingen, altijd beschikbaar</h3>
                  <p>Verdiep wat je hebt geleerd of ontdek nieuwe onderwerpen in je eigen tempo. Trainingen blijven 6 maanden toegankelijk.</p>
                </div>
              </div>
              <div class="feat-card">
                <img class="feat-img" src="${CDN}/community-afbeelding.png" alt="Community">
                <div class="feat-body">
                  <div class="feat-icon-row"><div class="feat-emoji" style="background:#FFFBEB">🤝</div><span class="feat-name" style="color:#F59E0B">Community</span></div>
                  <h3>Netwerk van gelijkgestemde starters</h3>
                  <p>Kom in contact met andere starters in BusinessBaas én van de Ondernemershub. Samen kom je verder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- HOW IT WORKS -->
        <div class="how">
          <div class="how-inner">
            <div class="section-label ob" style="text-align:left">Hoe het werkt</div>
            <h2 class="section-title ob" style="text-align:left">Van programma naar platform</h2>
            <div class="steps ob">
              <div class="step">
                <div class="step-num">1</div>
                <div class="step-content">
                  <h4>Je start het Ondernemershub Brunssum programma</h4>
                  <p>Tijdens de 12 weken werk je samen met coaches en mede-ondernemers aan jouw bedrijf. Praktisch, concreet en met de juiste begeleiding.</p>
                </div>
              </div>
              <div class="step">
                <div class="step-num">2</div>
                <div class="step-content">
                  <h4>Je activeert je gratis BusinessBaas toegang</h4>
                  <p>Inbegrepen in jouw deelname: 6 maanden toegang tot BusinessBaas. Je werkt de opdrachten uit in de digitale werkplek en hebt AI-coach Nova altijd bij de hand.</p>
                </div>
              </div>
              <div class="step">
                <div class="step-num">3</div>
                <div class="step-content">
                  <h4>Je bouwt door, ook na het programma</h4>
                  <p>De 12 weken zijn voorbij, maar je bedrijf groeit door. Met BusinessBaas heb je de tools, trainingen en community om zelfstandig verder te gaan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- QUOTE -->
        <div class="quote-section">
          <div class="quote-inner ob">
            <div class="quote-marks">"</div>
            <p class="quote-text">Die training heeft echt het verschil gemaakt voor mijn bedrijf! Dankzij de praktische en heldere aanpak heb ik mijn niche scherp voor ogen én weet ik hoe ik ze gericht kan aanspreken. Absoluut een aanrader!</p>
            <div class="quote-author">
              <img class="quote-avatar" src="${CDN}/loes-prof.png" alt="Loes Kluter">
              <div>
                <div class="quote-name">Loes Kluter</div>
                <div class="quote-role">Kluter Vastgoedpresentatie · BusinessBaas lid</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta">
          <div class="cta-inner ob">
            <h2>Jouw toegang wordt klaargezet</h2>
            <p>Interesse in de Ondernemershub Brunssum? Meld je aan via het formulier op de website of neem contact op met jouw coach van Ondernemershub Brunssum.</p>
            <div class="cta-btns">
              <a href="https://talentrocketeers.nl/ondernemershub-brunssum/#kennismaken" class="cta-btn-w">Meld je aan</a>
              <a href="https://www.businessbaas.com/het-platform" class="cta-btn-g">Bekijk het platform</a>
            </div>
            <p class="cta-note">Toegang wordt toegewezen via Ondernemershub Brunssum</p>
          </div>
        </div>`;

      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-partner-ohb', BBPartnerOhb);
})();
