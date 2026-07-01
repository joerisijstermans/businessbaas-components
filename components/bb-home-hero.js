(function () {
  if (customElements.get('bb-home-hero')) return;

  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';

  class BBHomeHero extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._animate(); }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          :host { display: block; width: 100%; margin: 0; padding: 0; --orange: #E85D04; --navy: #0D2240; --font: 'Inter', -apple-system, sans-serif; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          .hero { min-height: 100vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(145deg, #EFF2FA 0%, #F7F9FF 40%, #FFFAF8 100%); position: relative; font-family: var(--font); padding: 0 24px; }
          .blob { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
          .blob-o { width: 600px; height: 600px; background: rgba(232,93,4,0.09); top: -200px; right: -120px; }
          .blob-n { width: 500px; height: 500px; background: rgba(13,34,64,0.06); bottom: -80px; left: -160px; }
          .inner { max-width: 1180px; margin: 0 auto; padding: 120px 0 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; position: relative; z-index: 2; width: 100%; }
          .badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 16px; background: rgba(232,93,4,0.10); border: 1px solid rgba(232,93,4,0.22); border-radius: 50px; margin-bottom: 28px; font-size: 11.5px; font-weight: 700; color: #B84800; text-transform: uppercase; letter-spacing: 0.07em; opacity: 0; transform: translateY(10px); transition: opacity 0.55s ease, transform 0.55s ease; }
          .badge.show { opacity: 1; transform: translateY(0); }
          .badge-dot { width: 6px; height: 6px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
          @keyframes pulse { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(.75);} }
          h1 { font-size: clamp(36px, 4vw, 60px); font-weight: 900; line-height: 1.08; color: var(--navy); letter-spacing: -0.038em; margin-bottom: 16px; opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
          h1.show { opacity: 1; transform: translateY(0); }
          .accent-line { font-size: clamp(18px, 2.2vw, 26px); font-weight: 800; color: var(--orange); margin-bottom: 22px; display: block; opacity: 0; transform: translateY(14px); transition: opacity 0.65s ease, transform 0.65s ease; }
          .accent-line.show { opacity: 1; transform: translateY(0); }
          .sub { font-size: 17px; font-weight: 400; line-height: 1.7; color: #5A6780; max-width: 480px; margin-bottom: 36px; opacity: 0; transform: translateY(14px); transition: opacity 0.7s ease, transform 0.7s ease; }
          .sub.show { opacity: 1; transform: translateY(0); }
          .ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 18px; opacity: 0; transform: translateY(12px); transition: opacity 0.65s ease, transform 0.65s ease; }
          .ctas.show { opacity: 1; transform: translateY(0); }
          .btn-p { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: var(--orange); color: #fff; font-size: 15.5px; font-weight: 700; border-radius: 50px; text-decoration: none; transition: background 0.22s, transform 0.22s, box-shadow 0.22s; font-family: var(--font); }
          .btn-p:hover { background: #CC4D00; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,93,4,0.36); }
          .btn-s { display: inline-flex; align-items: center; gap: 10px; padding: 14px 24px; background: transparent; color: var(--navy); font-size: 15.5px; font-weight: 600; border: 1.5px solid rgba(13,34,64,0.22); border-radius: 50px; text-decoration: none; transition: border-color 0.22s, background 0.22s, transform 0.22s; font-family: var(--font); }
          .btn-s:hover { border-color: var(--navy); background: rgba(13,34,64,0.04); transform: translateY(-2px); }
          .play-icon { width: 26px; height: 26px; border-radius: 50%; background: rgba(13,34,64,0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .disclaimer { font-size: 12.5px; color: #9CA3AF; font-style: italic; margin-bottom: 32px; opacity: 0; transition: opacity 0.6s ease; }
          .disclaimer.show { opacity: 1; }
          .sp { display: flex; align-items: center; gap: 14px; opacity: 0; transform: translateY(10px); transition: opacity 0.6s ease, transform 0.6s ease; }
          .sp.show { opacity: 1; transform: translateY(0); }
          .avatars { display: flex; }
          .av { width: 38px; height: 38px; border-radius: 50%; border: 2.5px solid #fff; object-fit: cover; margin-left: -10px; box-shadow: 0 2px 8px rgba(0,0,0,0.13); }
          .av:first-child { margin-left: 0; }
          .sp-text { font-size: 14px; font-weight: 500; color: #4B5563; }
          .sp-text strong { color: var(--navy); font-weight: 700; }
          .right { position: relative; height: 580px; opacity: 0; transform: translateX(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
          .right.show { opacity: 1; transform: translateX(0); }
          .photo { width: 100%; height: 100%; object-fit: cover; object-position: 35% center; border-radius: 28px; box-shadow: 0 24px 64px rgba(13,34,64,0.18); display: block; }
          .fc { position: absolute; background: #fff; border-radius: 16px; box-shadow: 0 8px 32px rgba(13,34,64,0.14); padding: 14px 18px; opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
          .fc-1 { top: 28px; right: -28px; width: 216px; transform: translateY(-12px); }
          .fc-1.show { opacity: 1; transform: translateY(0); }
          .fc-lbl { font-size: 10px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 7px; }
          .fc-1-val { font-size: 14px; font-weight: 700; color: var(--navy); display: flex; align-items: center; gap: 8px; }
          .fc-1-arrow { width: 22px; height: 22px; border-radius: 50%; background: rgba(232,93,4,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .fc-2 { left: -32px; top: 50%; transform: translateY(-60%); width: 184px; }
          .fc-2.show { opacity: 1; transform: translateY(-50%); }
          .fc-2-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
          .fc-2-name { font-size: 13px; font-weight: 700; color: var(--navy); }
          .fc-2-pct { font-size: 13px; font-weight: 800; color: var(--orange); }
          .fc-2-bar { height: 6px; background: #F3F4F6; border-radius: 3px; overflow: hidden; }
          .fc-2-fill { height: 100%; width: 65%; background: linear-gradient(90deg, var(--orange), #FF9954); border-radius: 3px; }
          .fc-3 { bottom: 32px; right: -28px; width: 204px; transform: translateY(12px); }
          .fc-3.show { opacity: 1; transform: translateY(0); }
          .fc-3-val { font-size: 15px; font-weight: 800; color: var(--navy); margin-bottom: 12px; }
          .fc-3-avs { display: flex; }
          .fc-3-av { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #fff; object-fit: cover; margin-left: -6px; }
          .fc-3-av:first-child { margin-left: 0; }
          .fc-3-more { width: 26px; height: 26px; border-radius: 50%; background: #F3F4F6; margin-left: -6px; font-size: 9px; font-weight: 700; color: #6B7280; display: flex; align-items: center; justify-content: center; border: 2px solid #fff; }
          @media (max-width: 960px) { .hero { padding: 0 20px; } .inner { grid-template-columns: 1fr; gap: 48px; padding: 100px 0 60px; } .right { height: 420px; } .fc-1 { right: 0; } .fc-3 { right: 0; } }
          @media (max-width: 580px) { .inner { padding: 88px 0 48px; } h1 { font-size: clamp(34px,9vw,48px); } .right { height: 320px; } .fc-2 { display: none; } .fc-1 { right: -4px; } .fc-3 { right: -4px; } }
        </style>
        <section class="hero" role="banner">
          <div class="blob blob-o"></div>
          <div class="blob blob-n"></div>
          <div class="inner">
            <div class="left">
              <div class="badge" id="badge"><span class="badge-dot"></span>Ondernemersplatform voor starters</div>
              <h1 id="h1">Van idee naar je<br>eerste betalende<br>klant.</h1>
              <span class="accent-line" id="acc">Wij begeleiden je.</span>
              <p class="sub" id="sub">BusinessBaas geeft je de structuur, begeleiding en tools om echt vooruit te komen: van strategie tot je eerste omzet.</p>
              <div class="ctas" id="ctas">
                <a href="https://www.businessbaas.com/gratis-training" class="btn-p" onclick="event.preventDefault();window.openTrainingLightbox&&window.openTrainingLightbox();">Gratis training <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                <a href="#hoe-het-werkt" class="btn-s"><span class="play-icon"><svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="#0D2240"/></svg></span>Bekijk hoe het werkt</a>
              </div>
              <p class="disclaimer" id="disc">✓ Geen verborgen kosten &nbsp;&nbsp; ✓ Direct toegang &nbsp;&nbsp; ✓ Altijd opzegbaar</p>
              <div class="sp" id="sp">
                <div class="avatars">
                  <img class="av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/joyce-prof.jpg" alt="Joyce">
                  <img class="av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/marleen-prof.jpg" alt="Marleen">
                  <img class="av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/katharina-prof.jpg" alt="Katharina">
                  <img class="av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/inge-prof.png" alt="Inge">
                  <img class="av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/loes-prof.png" alt="Loes">
                </div>
                <p class="sp-text"><strong>25+ starters</strong> gingen je al voor</p>
              </div>
            </div>
            <div class="right" id="right">
              <img class="photo" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/hero-afbeelding.png" alt="Ondernemer aan het werk">
              <div class="fc fc-1" id="fc1">
                <div class="fc-lbl">Volgende stap</div>
                <div class="fc-1-val">
                  <span class="fc-1-arrow"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="#E85D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  Bepaal je aanbod
                </div>
              </div>
              <div class="fc fc-2" id="fc2">
                <div class="fc-lbl">Voortgang</div>
                <div class="fc-2-row"><span class="fc-2-name">Module 2</span><span class="fc-2-pct">65%</span></div>
                <div class="fc-2-bar"><div class="fc-2-fill"></div></div>
              </div>
              <div class="fc fc-3" id="fc3">
                <div class="fc-lbl">Doel</div>
                <div class="fc-3-val">Eerste klanten</div>
                <div class="fc-3-avs">
                  <img class="fc-3-av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/joyce-prof.jpg" alt="">
                  <img class="fc-3-av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/stan-prof.jpg" alt="">
                  <img class="fc-3-av" src="https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets/jorn-prof.jpg" alt="">
                  <div class="fc-3-more">+22</div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    }
    _animate() {
      [['badge',100],['h1',180],['acc',260],['sub',340],['ctas',420],['disc',480],['sp',520]].forEach(([id,delay]) => {
        setTimeout(() => { const el = this.shadowRoot.getElementById(id); if (el) el.classList.add('show'); }, delay);
      });
      setTimeout(() => { const el = this.shadowRoot.getElementById('right'); if (el) el.classList.add('show'); }, 400);
      setTimeout(() => { const el = this.shadowRoot.getElementById('fc1'); if (el) el.classList.add('show'); }, 700);
      setTimeout(() => { const el = this.shadowRoot.getElementById('fc2'); if (el) el.classList.add('show'); }, 860);
      setTimeout(() => { const el = this.shadowRoot.getElementById('fc3'); if (el) el.classList.add('show'); }, 1020);
    }
  }
  customElements.define('bb-home-hero', BBHomeHero);
})();
