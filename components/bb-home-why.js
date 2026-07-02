(function () {
  if (customElements.get('bb-home-why')) return;
  class BBHomeWhy extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._obs();
      this.shadowRoot.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          if (window.openTrainingLightbox) {
            e.preventDefault();
            window.openTrainingLightbox();
          }
        });
      });
    }
    render() {
      const items = [
        { num:'01', title:'Helder stappenplan', desc:'Geen losse tips of tegenstrijdige adviezen meer. Je volgt een bewezen 90-daags traject dat je precies vertelt wat je wanneer moet doen, stap voor stap richting je eerste klant.', outcome:'Van chaos naar overzicht', color:'#E85D04' },
        { num:'02', title:'Begeleiding die bij je past', desc:'Je staat er niet alleen voor. AI-coach Nova geeft persoonlijk feedback op jouw situatie, altijd beschikbaar. Professionele coaching voor minder dan €2 per dag, toegankelijk voor elke starter.', outcome:'Nooit meer vastlopen', color:'#3B82F6' },
        { num:'03', title:'Actie, geen theorie', desc:'Elke training heeft directe opdrachten die je uitvoert in je werkplek. Je leert niet passief, je bouwt tegelijkertijd aan je echte bedrijf. Na 90 dagen heb je resultaat, niet alleen kennis.', outcome:'Van idee naar eerste klanten', color:'#10B981' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#FFF8F5;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1100px;margin:0 auto;}
          .hd{text-align:center;margin-bottom:64px;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:0.10em;margin-bottom:16px;justify-content:center;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hd h2{font-size:clamp(30px,4.5vw,50px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:14px;}
          .hd h2 em{font-style:normal;color:var(--orange);}
          .hd p{font-size:17px;color:#5A6780;line-height:1.65;max-width:480px;margin:0 auto;}
          .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-bottom:56px;}
          .item{padding:40px 36px;background:#fff;position:relative;opacity:0;transform:translateY(20px);}
          .item.show{opacity:1;transform:translateY(0);transition:opacity .65s ease,transform .65s ease;}
          .item:first-child{border-radius:20px 0 0 20px;}
          .item:last-child{border-radius:0 20px 20px 0;}
          .bar{position:absolute;top:0;left:0;right:0;height:4px;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;}
          .num{font-size:60px;font-weight:900;opacity:.1;line-height:1;margin-bottom:20px;letter-spacing:-.04em;}
          .item h3{font-size:21px;font-weight:800;color:var(--navy);line-height:1.2;margin-bottom:12px;}
          .item p{font-size:15px;color:#5A6780;line-height:1.7;margin-bottom:20px;}
          .oc{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;}
          .oc::before{content:'✓';}
          .cr{text-align:center;}
          .btn{display:inline-flex;align-items:center;gap:9px;padding:15px 32px;background:var(--orange);color:#fff;font-size:15.5px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .22s;font-family:var(--font);box-shadow:0 4px 20px rgba(232,93,4,.28);}
          .btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 32px rgba(232,93,4,.38);}
          .disc{font-size:13px;color:#9CA3AF;margin-top:12px;}
          .ob{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:860px){.grid{grid-template-columns:1fr;gap:10px;}.item{border-radius:16px!important;}.item::before{border-radius:16px 16px 0 0;}}
          @media(max-width:600px){section{padding:64px 20px;}.item{padding:28px 24px;}}
        </style>
        <section>
          <div class="inner">
            <div class="hd ob">
              <div class="lbl">Waarom BusinessBaas</div>
              <h2>Terwijl anderen nog zoeken,<br>bouw <em>jij al</em></h2>
              <p>Drie redenen waarom starters met BusinessBaas wél doorbreken, zonder weken te verspillen aan zoeken.</p>
            </div>
            <div class="grid">
              ${items.map((it,i)=>`<div class="item" data-delay="${i*120}"><span class="bar" style="background:${it.color};"></span><div class="num" style="color:${it.color};">${it.num}</div><h3>${it.title}</h3><p>${it.desc}</p><span class="oc" style="color:${it.color};">${it.outcome}</span></div>`).join('')}
            </div>
            <div class="cr ob">
              <a href="https://www.businessbaas.com/voor-starters" class="btn" data-lightbox>Gratis starten <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <p class="disc">Geen creditcard nodig · Direct toegang</p>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){const d=+(e.target.dataset.delay||0);setTimeout(()=>e.target.classList.add('show'),d);o.unobserve(e.target);}}),{threshold:0.08});
      this.shadowRoot.querySelectorAll('.ob,.item').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-why', BBHomeWhy);
})();
