(function () {
  if (customElements.get('bb-home-problem')) return;
  class BBHomeProblem extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._obs();
    }
    render() {
      const problems = [
        { icon: '🤔', title: 'Je weet niet waar je moet beginnen', desc: 'Elk pad lijkt goed, maar je mist een duidelijk startpunt. Wat doe je eerst?' },
        { icon: '💸', title: 'Je hebt nog geen klanten', desc: 'Je bent bezig, maar de omzet laat op zich wachten. Het voelt alsof er iets mist.' },
        { icon: '🧭', title: 'Je mist structuur en begeleiding', desc: 'Je doet het alleen, zonder duidelijke route. Dat voelt soms overweldigend.' },
        { icon: '🎯', title: 'Je weet niet hoe je jezelf verkoopt', desc: 'Je bent goed in je vak, maar hoe vertel je dat overtuigend? Klanten vinden begint met de juiste boodschap.' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host { display: block; --orange: #E85D04; --navy: #0D2240; --font: 'Inter',-apple-system,sans-serif; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          section { background: #F4F6FA; padding: 96px 24px; font-family: var(--font); }
          .inner { max-width: 1180px; margin: 0 auto; }
          .lbl { display: inline-flex; align-items: center; gap: 10px; font-size: 11.5px; font-weight: 700; color: var(--orange); text-transform: uppercase; letter-spacing: 0.10em; margin-bottom: 16px; }
          .lbl::before { content: ''; display: block; width: 26px; height: 2px; background: var(--orange); border-radius: 2px; }
          .hdr { max-width: 580px; margin-bottom: 48px; }
          .hdr h2 { font-size: clamp(30px,4vw,48px); font-weight: 900; color: var(--navy); line-height: 1.12; letter-spacing: -0.03em; margin-bottom: 12px; }
          .hdr p { font-size: 17px; color: #5A6780; line-height: 1.65; }
          .grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-bottom: 48px; }
          .item { background: #fff; border-radius: 18px; padding: 26px 22px; border: 1px solid rgba(13,34,64,0.07); display: flex; gap: 15px; align-items: flex-start; transition: transform 0.28s ease, box-shadow 0.28s ease; }
          .item:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(13,34,64,0.09); }
          .ico { width: 44px; height: 44px; border-radius: 12px; background: rgba(220,38,38,0.08); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
          .it { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 5px; line-height: 1.35; }
          .id { font-size: 13.5px; color: #6B7280; line-height: 1.55; }
          .res { background: var(--navy); border-radius: 20px; padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
          .rt p { font-size: clamp(20px,2.8vw,28px); font-weight: 800; color: #fff; line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 6px; }
          .rt p em { font-style: normal; color: #FF8C42; }
          .rt span { font-size: 14px; color: rgba(255,255,255,0.42); font-weight: 500; }
          .rc { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: var(--orange); color: #fff; font-size: 15px; font-weight: 700; border-radius: 50px; text-decoration: none; transition: background 0.22s,transform 0.22s,box-shadow 0.22s; font-family: var(--font); white-space: nowrap; flex-shrink: 0; }
          .rc:hover { background: #CC4D00; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,93,4,0.38); }
          .ob { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
          .ob.show { opacity: 1; transform: translateY(0); }
          @media (max-width:960px) { .grid { grid-template-columns:1fr 1fr; } }
          @media (max-width:600px) { section { padding:64px 20px; } .grid { grid-template-columns:1fr; } .res { padding:28px 24px; flex-direction:column; align-items:flex-start; } }
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Herken je dit?</span></div>
            <div class="hdr ob">
              <h2>Veel starters blijven te lang hangen</h2>
              <p>Je wil aan de slag, maar ergens loopt het vast.</p>
            </div>
            <div class="grid">
              ${problems.map((p,i)=>`<div class="item ob" style="transition-delay:${i*70}ms;"><div class="ico">${p.icon}</div><div><div class="it">${p.title}</div><div class="id">${p.desc}</div></div></div>`).join('')}
            </div>
            <div class="res ob">
              <div class="rt">
                <p>BusinessBaas helpt je van <em>ideeën naar uitvoering</em>.</p>
                <span>Kort. Krachtig.</span>
              </div>
              <a href="https://www.businessbaas.com/gratis-training" class="rc" target="_top" data-lightbox>Ontdek hoe het werkt <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o = new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});
      this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-problem', BBHomeProblem);
})();
