(function () {
  if (customElements.get('bb-starters-pricing')) return;
  class BBStartersPricing extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); this._yearly = false; }
    connectedCallback() { this.render(); }
    render() {
      const feats = ['20+ praktische trainingen','AI-coach Nova (24/7)','Slim Ondernemen met AI <span style="font-size:10px;font-weight:700;background:rgba(124,58,237,.18);color:#C4B5FD;padding:2px 8px;border-radius:50px;vertical-align:middle">binnenkort</span>','Digitale werkplek','Community & marktplaats','Altijd opzegbaar'];
      const upsells = ['LIVE events (add-on)','1 op 1 coaching (add-on)'];
      const y = this._yearly;
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#0D2240;padding:96px 24px;font-family:var(--font);position:relative;overflow:hidden;}
          section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at top right,rgba(232,93,4,.18) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:820px;margin:0 auto;position:relative;z-index:1;}
          .lbl{font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;text-align:center;display:block;}
          .hdr{text-align:center;margin-bottom:36px;}
          .hdr h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:#fff;line-height:1.12;letter-spacing:-.03em;margin-bottom:10px;}
          .hdr p{font-size:16px;color:rgba(255,255,255,.6);line-height:1.65;}
          .toggle-wrap{display:flex;justify-content:center;margin-bottom:40px;}
          .toggle{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:50px;padding:5px;display:inline-flex;gap:0;position:relative;}
          .tog-btn{position:relative;z-index:1;padding:9px 24px;border-radius:50px;font-size:14px;font-weight:600;color:rgba(255,255,255,.6);cursor:pointer;transition:color .25s;white-space:nowrap;background:none;border:none;font-family:var(--font);}
          .tog-btn.active{color:#fff;}
          .tog-slider{position:absolute;top:5px;left:5px;height:calc(100% - 10px);border-radius:50px;background:var(--navy);border:1px solid rgba(255,255,255,.15);transition:transform .3s cubic-bezier(.4,0,.2,1),width .3s;box-shadow:0 2px 12px rgba(0,0,0,.3);}
          .cards{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:32px;}
          .card{border-radius:22px;padding:32px 28px;border:2px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);position:relative;transition:all .3s;}
          .card.featured{background:rgba(255,255,255,.09);border-color:var(--orange);box-shadow:0 0 60px rgba(232,93,4,.2);}
          .best{position:absolute;top:-13px;left:50%;transform:translateX(-50%);padding:5px 18px;background:var(--orange);color:#fff;font-size:11px;font-weight:800;border-radius:50px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;}
          .plan{font-size:12px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
          .price{font-size:52px;font-weight:900;color:#fff;line-height:1;margin-bottom:4px;transition:all .3s;}
          .price span{font-size:18px;font-weight:600;color:rgba(255,255,255,.45);}
          .price-sub{font-size:13px;color:rgba(255,255,255,.45);margin-bottom:24px;min-height:20px;}
          .price-sub em{font-style:normal;color:var(--orange);font-weight:700;}
          .save-pill{display:inline-block;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.3);border-radius:50px;padding:3px 10px;font-size:11px;font-weight:700;color:#22C55E;margin-bottom:24px;}
          ul{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
          li{display:flex;align-items:center;gap:10px;font-size:14px;color:rgba(255,255,255,.7);}
          li::before{content:'✓';font-weight:800;color:var(--orange);flex-shrink:0;}
          li.up{color:rgba(255,255,255,.4);}
          li.up::before{content:'↗';color:rgba(232,93,4,.5);}
          .btn-p{display:block;text-align:center;padding:15px 24px;background:var(--orange);color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .22s,transform .22s,box-shadow .22s;font-family:var(--font);}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,.4);}
          .btn-s{display:block;text-align:center;padding:15px 24px;background:transparent;color:rgba(255,255,255,.75);font-size:15px;font-weight:600;border:1.5px solid rgba(255,255,255,.18);border-radius:50px;text-decoration:none;transition:border-color .22s,background .22s;font-family:var(--font);}
          .btn-s:hover{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);}
          .insight{background:rgba(232,93,4,.12);border-radius:16px;padding:22px 28px;border:1px solid rgba(232,93,4,.3);margin-bottom:28px;text-align:center;}
          .insight p{font-size:15px;color:rgba(255,255,255,.85);font-weight:600;line-height:1.6;font-style:italic;}
          .disc{text-align:center;font-size:13px;color:rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;}
          .disc span{display:flex;align-items:center;gap:5px;}
          .disc span::before{content:'✓';font-weight:700;color:#22C55E;}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:640px){.cards{grid-template-columns:1fr;}section{padding:64px 20px;}}
        </style>
        <section id="pricing">
          <div class="inner">
            <span class="lbl ob">Investering</span>
            <div class="hdr ob"><h2>Alles voor minder dan een kop koffie per dag</h2><p>Alles inbegrepen. Geen verborgen kosten. Altijd opzegbaar.</p></div>
            <div class="toggle-wrap ob">
              <div class="toggle" id="tgl">
                <div class="tog-slider" id="slider"></div>
                <button class="tog-btn${y?'':' active'}" id="t0">Maandelijks</button>
                <button class="tog-btn${y?' active':''}" id="t1">Jaarlijks &nbsp;<span style="font-size:11px;background:rgba(232,93,4,.25);color:#E85D04;padding:2px 7px;border-radius:50px;font-weight:700">-17%</span></button>
              </div>
            </div>
            <div class="cards ob">
              <div class="card${y?'':' featured'}">
                ${y?'':'<div class="best">Meest flexibel</div>'}
                <div class="plan">Maandelijks</div>
                <div class="price">€69<span>/maand</span></div>
                <div class="price-sub">= €2,30 per dag</div>
                ${y?'':'<div class="save-pill">Geen jaarcontract</div>'}
                <ul>${feats.map(f=>`<li>${f}</li>`).join('')}${upsells.map(f=>`<li class="up">${f}</li>`).join('')}</ul>
                <a href="#" class="${y?'btn-s':'btn-p'}">Maandelijks starten</a>
              </div>
              <div class="card${y?' featured':''}">
                ${y?'<div class="best">Meest gekozen</div>':''}
                <div class="plan">Jaarlijks</div>
                <div class="price">€690<span>/jaar</span></div>
                <div class="price-sub">= €1,90 per dag</div>
                ${y?'<div class="save-pill">2 maanden gratis t.o.v. maandelijks</div>':''}
                <ul>${feats.map(f=>`<li>${f}</li>`).join('')}${upsells.map(f=>`<li class="up">${f}</li>`).join('')}</ul>
                <a href="#" class="${y?'btn-p':'btn-s'}">Jaarlijks starten</a>
              </div>
            </div>
            <div class="insight ob"><p>"De vraag is niet: kan ik €69 missen? De vraag is: kan ik nog 6 maanden zonder klanten?"</p></div>
            <div class="disc ob"><span>Geen verborgen kosten</span><span>Direct toegang</span><span>Altijd opzegbaar</span></div>
          </div>
        </section>`;
      this._positionSlider();
      this._bind();
      this._obs();
    }
    _positionSlider(){
      const s = this.shadowRoot;
      const slider = s.getElementById('slider');
      const t0 = s.getElementById('t0');
      const t1 = s.getElementById('t1');
      if(!slider||!t0||!t1) return;
      const active = this._yearly ? t1 : t0;
      slider.style.width = active.offsetWidth + 'px';
      slider.style.transform = this._yearly ? `translateX(${t0.offsetWidth}px)` : 'translateX(0)';
    }
    _bind(){
      const s = this.shadowRoot;
      const t0 = s.getElementById('t0');
      const t1 = s.getElementById('t1');
      if(t0) t0.onclick = ()=>{ this._yearly=false; this.render(); };
      if(t1) t1.onclick = ()=>{ this._yearly=true; this.render(); };
      setTimeout(()=>this._positionSlider(), 50);
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-pricing', BBStartersPricing);
})();
