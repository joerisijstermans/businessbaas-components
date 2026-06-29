(function () {
  if (customElements.get('bb-landing-start')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingStart extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif;background:#fff;color:#111;overflow-x:hidden}
          a{color:inherit;text-decoration:none}
          img{display:block;max-width:100%}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}

          /* TOP BAR */
          .topbar{position:sticky;top:0;z-index:999;background:rgba(255,255,255,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,.07);padding:0 32px;height:68px;display:flex;align-items:center;justify-content:space-between}
          .logo{display:flex;align-items:center;gap:10px}
          .logo-text{font-size:18px;font-weight:800;color:#0D2240;letter-spacing:-.4px}
          .logo-text em{font-style:normal;color:#E85D04}
          .topbar-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 22px;background:#E85D04;color:#fff;font-size:14px;font-weight:700;border-radius:50px;transition:background .2s,transform .2s,box-shadow .2s}
          .topbar-cta:hover{background:#CC4D00;transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,93,4,.35)}
          @media(max-width:480px){.topbar{padding:0 20px}.topbar-cta{font-size:13px;padding:9px 16px}}

          /* HERO */
          .hero{background:linear-gradient(150deg,#0D2240 0%,#142c54 55%,#0f2845 100%);padding:96px 24px 88px;position:relative;overflow:hidden;text-align:center}
          .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 65% 40%,rgba(232,93,4,.15) 0%,transparent 60%);pointer-events:none}
          .hero-inner{max-width:780px;margin:0 auto;position:relative;z-index:2}
          .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;margin-bottom:28px;background:rgba(232,93,4,.2);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:12px;font-weight:700;color:rgba(255,255,255,.85);text-transform:uppercase;letter-spacing:.09em}
          .hero h1{font-size:clamp(34px,6vw,68px);font-weight:900;color:#fff;line-height:1.05;letter-spacing:-.035em;margin-bottom:22px}
          .hero h1 em{font-style:normal;color:#E85D04}
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

          /* PAIN */
          .pain{padding:96px 24px;background:#F4F6FA}
          .pain-inner{max-width:1000px;margin:0 auto}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          .pain h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:52px}
          .pain h2 em{font-style:normal;color:#E85D04}
          .pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
          .pain-card{background:#fff;border-radius:18px;padding:28px 24px;border:1px solid rgba(13,34,64,.07);transition:box-shadow .22s,transform .22s}
          .pain-card:hover{box-shadow:0 8px 28px rgba(13,34,64,.1);transform:translateY(-3px)}
          .pain-icon{font-size:32px;margin-bottom:16px}
          .pain-card h3{font-size:17px;font-weight:800;color:#0D2240;margin-bottom:10px}
          .pain-card p{font-size:14px;color:#5A6780;line-height:1.7}
          @media(max-width:760px){.pain-grid{grid-template-columns:1fr 1fr}}
          @media(max-width:480px){.pain-grid{grid-template-columns:1fr}}

          /* STEPS */
          .steps{padding:80px 24px;background:#0D2240}
          .steps-inner{max-width:980px;margin:0 auto}
          .steps h2{font-size:clamp(26px,3.5vw,40px);font-weight:900;color:#fff;letter-spacing:-.03em;text-align:center;margin-bottom:56px}
          .steps h2 em{font-style:normal;color:#E85D04}
          .step-row{display:flex;gap:0}
          .step{flex:1;text-align:center;position:relative;padding:0 16px}
          .step:not(:last-child)::after{content:'→';position:absolute;right:-12px;top:22px;font-size:20px;color:rgba(255,255,255,.25);font-weight:700}
          .step-num{width:48px;height:48px;border-radius:50%;background:rgba(232,93,4,.18);border:2px solid rgba(232,93,4,.4);display:inline-flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#E85D04;margin-bottom:16px}
          .step h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:8px}
          .step p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6}
          @media(max-width:640px){.step-row{flex-direction:column;gap:36px}.step:not(:last-child)::after{content:'↓';right:auto;left:50%;top:auto;bottom:-24px;transform:translateX(-50%)}}

          /* SOLUTION */
          .solution{padding:96px 24px;background:#fff}
          .solution-inner{max-width:1100px;margin:0 auto;text-align:center}
          .solution h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          .solution h2 em{font-style:normal;color:#E85D04}
          .solution-sub{font-size:18px;color:#5A6780;line-height:1.65;max-width:560px;margin:0 auto 64px}
          .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;text-align:left}
          .feat-card{border-radius:22px;padding:36px 32px;background:linear-gradient(145deg,#0D2240,#162f55);transition:box-shadow .25s,transform .25s}
          .feat-card:hover{transform:translateY(-5px);box-shadow:0 24px 52px rgba(13,34,64,.25)}
          .feat-icon{width:52px;height:52px;border-radius:14px;background:rgba(232,93,4,.18);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px}
          .feat-card h3{font-size:20px;font-weight:800;color:#fff;margin-bottom:10px}
          .feat-card p{font-size:14.5px;color:rgba(255,255,255,.6);line-height:1.7}
          @media(max-width:680px){.feat-grid{grid-template-columns:1fr}}

          /* REVIEWS */
          .reviews{padding:96px 24px;background:#F4F6FA}
          .reviews-inner{max-width:1100px;margin:0 auto}
          .reviews-head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:48px}
          .reviews h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1}
          .reviews h2 em{font-style:normal;color:#E85D04}
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

          /* VIDEOS */
          .videos{padding:80px 24px;background:#fff}
          .videos-inner{max-width:860px;margin:0 auto;text-align:center}
          .videos h2{font-size:clamp(26px,3.5vw,42px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:12px}
          .videos h2 em{font-style:normal;color:#E85D04}
          .videos-sub{font-size:17px;color:#5A6780;margin-bottom:48px}
          .vid-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
          .vid-card{border-radius:20px;overflow:hidden;background:#0D2240;box-shadow:0 8px 32px rgba(13,34,64,.15)}
          .vid-card video{width:100%;display:block;aspect-ratio:9/13;object-fit:cover}
          .vid-info{padding:18px 22px}
          .vid-name{font-size:15px;font-weight:700;color:#fff}
          .vid-role{font-size:13px;color:rgba(255,255,255,.45);margin-top:3px}
          .vid-tag{display:inline-block;margin-top:10px;background:rgba(232,93,4,.2);color:#E85D04;font-size:12px;font-weight:700;padding:4px 12px;border-radius:50px;text-transform:uppercase;letter-spacing:.05em}
          @media(max-width:620px){.vid-grid{grid-template-columns:1fr}}

          /* PRICING */
          .pricing{padding:96px 24px;background:#F4F6FA}
          .pricing-inner{max-width:900px;margin:0 auto;text-align:center}
          .pricing h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
          .pricing h2 em{font-style:normal;color:#E85D04}
          .pricing-sub{font-size:17px;color:#5A6780;max-width:500px;margin:0 auto 52px;line-height:1.65}
          .plan-card{background:linear-gradient(145deg,#0D2240,#162f55);border-radius:28px;padding:52px 48px;position:relative;overflow:hidden}
          .plan-card::before{content:'';position:absolute;top:-80px;right:-80px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,.12),transparent 70%);pointer-events:none}
          .plan-price-row{display:flex;align-items:baseline;justify-content:center;gap:6px;margin-bottom:8px}
          .plan-from{font-size:16px;color:rgba(255,255,255,.45);font-weight:500}
          .plan-price{font-size:72px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .plan-price-sub{font-size:18px;color:rgba(255,255,255,.5);font-weight:500}
          .plan-free-note{font-size:15px;color:rgba(255,255,255,.5);margin-bottom:36px}
          .plan-free-note strong{color:rgba(232,93,4,.9);font-weight:700}
          .plan-feats{list-style:none;margin-bottom:40px;display:flex;flex-direction:column;gap:12px}
          .plan-feats li{display:flex;align-items:flex-start;gap:12px;text-align:left}
          .plan-feats li::before{content:'✓';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.18);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
          .plan-feats li span{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}
          .soon-badge{font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle;margin-left:6px}
          .plan-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:#E85D04;color:#fff;font-size:17px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:14px}
          .plan-cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.4)}
          .plan-guarantee{font-size:13px;color:rgba(255,255,255,.35)}
          @media(max-width:600px){.plan-card{padding:36px 24px}.plan-price{font-size:56px}}

          /* FAQ */
          .faq{padding:96px 24px;background:#fff}
          .faq-inner{max-width:720px;margin:0 auto}
          .faq h2{font-size:clamp(26px,3.5vw,40px);font-weight:900;color:#0D2240;letter-spacing:-.03em;text-align:center;margin-bottom:52px}
          .faq-item{border-bottom:1px solid rgba(13,34,64,.1)}
          .faq-q{width:100%;text-align:left;padding:20px 0;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:16px;font-weight:700;color:#0D2240;font-family:'Inter',sans-serif}
          .faq-icon{font-size:22px;color:#E85D04;flex-shrink:0;transition:transform .25s}
          .faq-item.open .faq-icon{transform:rotate(45deg)}
          .faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}
          .faq-item.open .faq-a{max-height:300px;padding-bottom:20px}
          .faq-a p{font-size:15px;color:#5A6780;line-height:1.72}

          /* FINAL CTA */
          .final{padding:96px 24px;background:#0D2240;text-align:center;position:relative;overflow:hidden}
          .final::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(232,93,4,.15) 0%,transparent 65%);pointer-events:none}
          .final-inner{max-width:680px;margin:0 auto;position:relative;z-index:2}
          .final h2{font-size:clamp(30px,5vw,56px);font-weight:900;color:#fff;letter-spacing:-.035em;line-height:1.08;margin-bottom:20px}
          .final h2 em{font-style:normal;color:#E85D04}
          .final p{font-size:18px;color:rgba(255,255,255,.6);line-height:1.65;margin-bottom:44px}
          .final-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 42px;background:#E85D04;color:#fff;font-size:18px;font-weight:700;border-radius:50px;transition:background .22s,transform .22s,box-shadow .22s;margin-bottom:16px}
          .final-cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 16px 40px rgba(232,93,4,.45)}
          .final-note{font-size:13px;color:rgba(255,255,255,.35)}

          /* FOOTER */
          .foot{padding:28px 32px;background:#0a1c38;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
          .foot .logo-text{font-size:16px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:-.3px}
          .foot .logo-text em{font-style:normal;color:rgba(232,93,4,.6)}
          .foot-links{display:flex;gap:20px;flex-wrap:wrap}
          .foot-links a{font-size:13px;color:rgba(255,255,255,.35);transition:color .2s;text-decoration:none}
          .foot-links a:hover{color:rgba(255,255,255,.7)}
        </style>

        <!-- TOP BAR -->
        <header class="topbar">
          <div class="logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="8" fill="#0D2240"/>
              <rect x="6" y="19" width="9" height="9" rx="2" fill="#E85D04"/>
              <rect x="19" y="10" width="9" height="18" rx="2" fill="#E85D04" opacity="0.62"/>
            </svg>
            <span class="logo-text">Business<em>Baas</em></span>
          </div>
          <a href="https://www.businessbaas.com/voor-starters" class="topbar-cta">
            Start gratis training
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </header>

        <!-- HERO -->
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
        </section>

        <!-- PAIN POINTS -->
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
        </section>

        <!-- STEPS -->
        <section class="steps">
          <div class="steps-inner">
            <h2 class="ob">Van dag 1 naar <em>eerste klant</em> — stap voor stap</h2>
            <div class="step-row">
              <div class="step ob"><div class="step-num">1</div><h3>Start gratis</h3><p>Begin direct met de gratis training. Geen creditcard, geen verplichting.</p></div>
              <div class="step ob" style="transition-delay:.1s"><div class="step-num">2</div><h3>Bouw je fundament</h3><p>Definieer je doelgroep, pitch en brandstory via de stap-voor-stap modules.</p></div>
              <div class="step ob" style="transition-delay:.2s"><div class="step-num">3</div><h3>Sparren met Nova</h3><p>AI-coach Nova geeft je persoonlijk advies, 24/7 beschikbaar als je vastloopt.</p></div>
              <div class="step ob" style="transition-delay:.3s"><div class="step-num">4</div><h3>Eerste klant</h3><p>Met je salesaanpak en netwerk ga je actief op zoek — en landt je eerste ja.</p></div>
            </div>
          </div>
        </section>

        <!-- SOLUTION -->
        <section class="solution">
          <div class="solution-inner">
            <div class="section-label ob" style="justify-content:center">Het platform</div>
            <h2 class="ob">Alles wat je nodig hebt<br><em>op één plek</em></h2>
            <p class="solution-sub ob">Geen losse tools, geen dure coaches. BusinessBaas bundelt trainingen, AI-begeleiding, een werkplek en een community in één betaalbaar platform.</p>
            <div class="feat-grid">
              <div class="feat-card ob"><div class="feat-icon">🎓</div><h3>20+ Praktische trainingen</h3><p>Van doelgroepbepaling tot salesgesprek — de modules zijn kort, concreet en direct toepasbaar. Jij werkt in jouw tempo, maar je werkt wél.</p></div>
              <div class="feat-card ob" style="transition-delay:.1s"><div class="feat-icon">🤖</div><h3>Nova, jouw AI-coach</h3><p>Altijd beschikbaar, nooit oordelend. Nova helpt je vastgelopen plannen vlottrekken, feedback geven op je teksten en antwoorden geven op de vragen die je googelt maar niet durft te stellen.</p></div>
              <div class="feat-card ob" style="transition-delay:.2s"><div class="feat-icon">🗂️</div><h3>Digitale werkplek</h3><p>Jouw ondernemersplan, je doelgroep, je pitches en je voortgang — allemaal op één overzichtelijke plek. Geen losse notitieblokken meer.</p></div>
              <div class="feat-card ob" style="transition-delay:.3s"><div class="feat-icon">🤝</div><h3>Community &amp; marktplaats</h3><p>Ondernemers die precies begrijpen wat jij doormaakt. Spar over klanten, wissel kennis uit en vind je eerste opdrachten via de interne marktplaats.</p></div>
            </div>
          </div>
        </section>

        <!-- REVIEWS -->
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
              <div class="r-card ob"><span class="r-tag">Nieuwe klant via live event</span><p class="r-quote">"Het heeft mij heel erg uit de comfort zone getrokken om nieuwe stappen te zetten. Tijdens het live event heb ik contacten gelegd en zelfs een nieuwe klant ontmoet! Kan ik BusinessBaas alleen maar aanraden."</p><div class="r-person"><img src="${CDN}/juurd-prof.jpg" alt="Juurd Beijer"><div><div class="r-name">Juurd Beijer</div><div class="r-role">Juurd Beijer Fotografie</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.08s"><span class="r-tag">Van idee naar eerste klanten</span><p class="r-quote">"Van het uitwerken van je idee tot het binnenhalen van je eerste klanten, je staat er niet alleen voor. Echt een stevige basis om mee te starten!"</p><div class="r-person"><img src="${CDN}/stan-prof.jpg" alt="Stan Vreuls"><div><div class="r-name">Stan Vreuls</div><div class="r-role">21x</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.16s"><span class="r-tag">Meer zelfvertrouwen</span><p class="r-quote">"Het brengt mij meer zelfvertrouwen en zekerheid in mijn startende bedrijf. Met focus en stapsgewijs door de trainingen gaan krijg je het gevoel dat je bedrijf tot leven komt."</p><div class="r-person"><img src="${CDN}/joyce-prof.jpg" alt="Joyce Bekkers"><div><div class="r-name">Joyce Bekkers</div><div class="r-role">Kindercoach The Joy</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.08s"><span class="r-tag">AI-coach die echt helpt</span><p class="r-quote">"Nova voelt als een écht persoon om mee te sparren: ze helpt mijn plannen te structureren en geeft precies de juiste inspiratie wanneer ik vastloop. De prijs-kwaliteitverhouding is top."</p><div class="r-person"><img src="${CDN}/jorn-prof.jpg" alt="Jorn Gijzen"><div><div class="r-name">Jorn Gijzen</div><div class="r-role">Talent Rocketeers</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.16s"><span class="r-tag">Stevige basis gebouwd</span><p class="r-quote">"Dankzij BusinessBaas heb ik niet alleen mijn bedrijf vormgegeven, maar ook mezelf opnieuw leren kennen als ondernemer. Dé investering voor elke starter die méér wil."</p><div class="r-person"><img src="${CDN}/shauna-prof.jpg" alt="Shauna Mols"><div><div class="r-name">Shauna Mols</div><div class="r-role">Mols Marketing</div></div></div></div>
              <div class="r-card ob" style="transition-delay:.24s"><span class="r-tag">Stap voor stap begeleid</span><p class="r-quote">"Stap voor stap ga je aan het werk, niets wordt overgeslagen. Joeri kijkt persoonlijk met je mee en geeft advies hoe je dingen kan aanpakken. Aanrader voor persoonlijke ontwikkeling en groei!"</p><div class="r-person"><img src="${CDN}/katharina-prof.jpg" alt="Katharina März"><div><div class="r-name">Katharina März</div><div class="r-role">Katharinazorg</div></div></div></div>
            </div>
          </div>
        </section>

        <!-- VIDEO TESTIMONIALS -->
        <section class="videos">
          <div class="videos-inner">
            <div class="section-label ob" style="justify-content:center;display:inline-flex">In hun eigen woorden</div>
            <h2 class="ob">Hoor het van <em>BusinessBaas-leden</em></h2>
            <p class="videos-sub ob">Geen marketingpraatjes — gewoon echte ervaringen van starters die de stap hebben gezet.</p>
            <div class="vid-grid">
              <div class="vid-card ob">
                <video controls><source src="${CDN}/review-katharina.mp4" type="video/mp4"></video>
                <div class="vid-info"><div class="vid-name">Katharina März</div><div class="vid-role">Katharinazorg</div><span class="vid-tag">Persoonlijk advies op maat</span></div>
              </div>
              <div class="vid-card ob" style="transition-delay:.12s">
                <video controls><source src="${CDN}/review-jamie.mp4" type="video/mp4"></video>
                <div class="vid-info"><div class="vid-name">Jamie Senden</div><div class="vid-role">Overgangsconsulent</div><span class="vid-tag">Verandert mijn mindset</span></div>
              </div>
            </div>
          </div>
        </section>

        <!-- PRICING -->
        <section class="pricing">
          <div class="pricing-inner">
            <div class="section-label ob" style="justify-content:center;display:inline-flex">Transparante prijs</div>
            <h2 class="ob">Begin gratis.<br>Groei in <em>jouw tempo</em>.</h2>
            <p class="pricing-sub ob">Start met de gratis training en beslis daarna of BusinessBaas bij jou past. Geen verplichtingen, geen verrassingen.</p>
            <div class="plan-card ob">
              <div class="plan-price-row"><span class="plan-from">Lidmaatschap vanaf</span><span class="plan-price">€69</span><span class="plan-price-sub">/maand</span></div>
              <p class="plan-free-note">🎓 <strong>Begin gratis</strong> met de BusinessBaas training — geen creditcard nodig</p>
              <ul class="plan-feats">
                <li><span>20+ praktische trainingen</span></li>
                <li><span>AI-coach Nova (24/7)</span></li>
                <li><span>Slim Ondernemen met AI <span class="soon-badge">binnenkort</span></span></li>
                <li><span>Digitale werkplek</span></li>
                <li><span>Community &amp; marktplaats</span></li>
                <li><span>Altijd opzegbaar</span></li>
              </ul>
              <a href="https://www.businessbaas.com/voor-starters" class="plan-cta">
                Start gratis training
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <p class="plan-guarantee">Maandelijks opzegbaar · Geen verborgen kosten</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="faq">
          <div class="faq-inner">
            <h2 class="ob">Veelgestelde vragen</h2>
            <div class="faq-item ob"><button class="faq-q">Is de gratis training écht gratis?<span class="faq-icon">+</span></button><div class="faq-a"><p>Ja, 100% gratis — zonder creditcard en zonder automatische verlenging. Je krijgt direct toegang tot de BusinessBaas starttraining. Wil je daarna verder met het volledige platform, dan kies je zelf of je lid wilt worden.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Voor wie is BusinessBaas bedoeld?<span class="faq-icon">+</span></button><div class="faq-a"><p>Voor mensen die hun eigen bedrijf willen starten of net gestart zijn. Of je nu een dienst, product of freelance activiteit wilt opzetten — BusinessBaas helpt je van idee naar eerste betalende klant. Geen specifieke achtergrond of opleiding nodig.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Hoeveel tijd kost het per week?<span class="faq-icon">+</span></button><div class="faq-a"><p>De meeste leden werken 3–5 uur per week met het platform. De trainingen zijn modulair opgebouwd, zodat je zelf bepaalt wanneer en hoe snel je gaat. Alles blijft altijd beschikbaar, dus je loopt nooit achter.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Wat is het verschil met een cursus op YouTube?<span class="faq-icon">+</span></button><div class="faq-a"><p>YouTube geeft je informatie, BusinessBaas geeft je een systeem. De combinatie van gestructureerde modules, een werkplek waar je daadwerkelijk je plan opbouwt, persoonlijke AI-coach Nova en een community van starters zorgt ervoor dat je in actie komt — en blijft.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Kan ik op elk moment stoppen?<span class="faq-icon">+</span></button><div class="faq-a"><p>Ja. Het lidmaatschap is maandelijks opzegbaar, zonder reden of gedoe. Je hebt altijd de controle. Wij geloven dat je blijft omdat het je wat oplevert, niet omdat je vast zit aan een contract.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Hoe werkt AI-coach Nova precies?<span class="faq-icon">+</span></button><div class="faq-a"><p>Nova is een AI-coach die kennis heeft van jouw situatie als starter en de BusinessBaas-aanpak. Je kunt haar vragen stellen, laten meedenken over je doelgroep, feedback vragen op je teksten of sparren over hoe je een salesgesprek aanpakt. Ze is 24/7 beschikbaar — ook als je om 23:00 uur aan je businessplan werkt.</p></div></div>
          </div>
        </section>

        <!-- FINAL CTA -->
        <section class="final">
          <div class="final-inner">
            <h2 class="ob">Klaar om te beginnen?<br><em>Start vandaag gratis.</em></h2>
            <p class="ob">Honderden starters gingen je voor. De volgende stap is simpel: klik op de knop en begin direct met de gratis training. Geen excuses meer — de tijd is nu.</p>
            <a href="https://www.businessbaas.com/voor-starters" class="final-cta ob">
              Start gratis training
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="final-note ob">Gratis starten · Geen creditcard · Altijd opzegbaar</p>
          </div>
        </section>

        <!-- FOOTER -->
        <footer class="foot">
          <span class="logo-text">Business<em>Baas</em></span>
          <div class="foot-links">
            <a href="https://www.businessbaas.com/privacybeleid">Privacybeleid</a>
            <a href="https://www.businessbaas.com/algemene-voorwaarden">Algemene Voorwaarden</a>
            <a href="https://www.businessbaas.com/contact">Contact</a>
            <a href="https://www.businessbaas.com/">Terug naar website</a>
          </div>
        </footer>`;

      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));

      s.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          s.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });
    }
  }
  customElements.define('bb-landing-start', BBLandingStart);
})();
