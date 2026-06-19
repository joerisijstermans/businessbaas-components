(function () {
  if (customElements.get('bb-starters-problem')) return;
  class BBStartersProblem extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      const items = [
        { icon:'🤔', t:'Weet niet waar te beginnen', d:'Je hebt een idee maar mist een duidelijk startpunt. Elk pad lijkt goed, maar welke kies je?' },
        { icon:'💸', t:'Nog geen betalende klanten', d:'Je bent druk, je leert, je werkt, maar de omzet laat op zich wachten.' },
        { icon:'🌀', t:'Verliest focus en richting', d:'Te veel ideeën, te weinig structuur. Je weet dat je iets moet doen maar niet wat.' },
        { icon:'⏳', t:'Blijft leren zonder actie', d:'Kennis genoeg. Maar de stap van leren naar doen zetten? Dáár loopt het vast.' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#F4F6FA;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hdr{max-width:560px;margin-bottom:48px;}
          .hdr h2{font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:12px;}
          .hdr p{font-size:17px;color:#5A6780;line-height:1.65;}
          .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:48px;}
          .item{background:#fff;border-radius:18px;padding:28px 24px;border:1px solid rgba(13,34,64,.07);display:flex;gap:16px;align-items:flex-start;transition:transform .28s,box-shadow .28s;}
          .item:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(13,34,64,.09);}
          .ico{width:46px;height:46px;border-radius:12px;background:rgba(220,38,38,.08);display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0;}
          .it{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:5px;line-height:1.35;}
          .id{font-size:13.5px;color:#6B7280;line-height:1.55;}
          .res{background:var(--navy);border-radius:20px;padding:40px 48px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px;}
          .rt p{font-size:clamp(19px,2.6vw,26px);font-weight:800;color:#fff;line-height:1.3;letter-spacing:-.02em;margin-bottom:6px;}
          .rt p em{font-style:normal;color:#FF8C42;}
          .rt span{font-size:14px;color:rgba(255,255,255,.42);font-weight:500;}
          .rc{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:var(--orange);color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .22s,transform .22s,box-shadow .22s;font-family:var(--font);white-space:nowrap;flex-shrink:0;}
          .rc:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 8px 24px rgba(232,93,4,.38);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:700px){.grid{grid-template-columns:1fr;}.res{padding:28px 24px;flex-direction:column;align-items:flex-start;}}
          @media(max-width:600px){section{padding:64px 20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Herken je dit?</span></div>
            <div class="hdr ob"><h2>Starters lopen vast op dezelfde dingen</h2><p>Je wil aan de slag, maar ergens loopt het vast. Herken jij dit?</p></div>
            <div class="grid ob">${items.map(i=>`<div class="item"><div class="ico">${i.icon}</div><div><div class="it">${i.t}</div><div class="id">${i.d}</div></div></div>`).join('')}</div>
            <div class="res ob">
              <div class="rt"><p>BusinessBaas geeft je structuur,<br>begeleiding en <em>tools</em> om die stap wél te zetten.</p><span>Van idee naar eerste klant, in jouw tempo</span></div>
              <a href="#gratis-training" class="rc">Gratis starten <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.1});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-problem', BBStartersProblem);
})();
