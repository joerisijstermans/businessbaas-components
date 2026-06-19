(function () {
  if (customElements.get('bb-starters-modules')) return;
  class BBStartersModules extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      const m1 = ['Het belang van de juiste strategie','Mindset en ondernemerschap','Wie ben jij als ondernemer?','Van idee naar concept','Doelgroep en positionering','Concurrentieanalyse','Brandstory en klantbeleving','Roadmap en implementatie'];
      const m2 = ['Sales vs. marketing: verschil én samenwerking','Warme en koude acquisitie','De eerste verkoop: van pitch tot deal','Zichtbaarheid en lef tonen','De klantreis begrijpen','Jouw aanbod aanscherpen','Veelgemaakte misverstanden bij sales','Waarom het misgaat bij starters','Herschrijf jouw nieuwe overtuigingen'];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#F4F6FA;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hdr{max-width:580px;margin-bottom:48px;}
          .hdr h2{font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:12px;}
          .hdr p{font-size:17px;color:#5A6780;line-height:1.65;}
          .grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
          .card{background:#fff;border-radius:22px;overflow:hidden;border:1px solid rgba(13,34,64,.07);box-shadow:0 4px 20px rgba(13,34,64,.06);}
          .card-head{padding:28px 28px 22px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;}
          .card-head.navy{background:var(--navy);}
          .card-head.orange{background:var(--orange);}
          .card-title{font-size:19px;font-weight:900;color:#fff;line-height:1.25;}
          .card-sub{font-size:12px;font-weight:700;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.08em;margin-top:4px;}
          .badge{padding:5px 12px;background:rgba(255,255,255,.18);border-radius:50px;font-size:11px;font-weight:700;color:#fff;white-space:nowrap;flex-shrink:0;}
          .card-body{padding:24px 28px;}
          .card-body ul{list-style:none;display:flex;flex-direction:column;gap:9px;}
          .card-body li{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#374151;line-height:1.45;}
          .card-body li::before{content:'✓';font-weight:800;color:var(--orange);flex-shrink:0;margin-top:1px;}
          .card-footer{padding:18px 28px 24px;border-top:1px solid rgba(13,34,64,.06);}
          .card-footer p{font-size:13px;color:#5A6780;line-height:1.55;font-style:italic;}
          .extra{text-align:center;padding:24px;background:#fff;border-radius:16px;border:1px solid rgba(13,34,64,.07);}
          .extra p{font-size:15px;color:#5A6780;}
          .extra strong{color:var(--navy);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:768px){.grid{grid-template-columns:1fr;}}
          @media(max-width:600px){section{padding:64px 20px;}.card-head,.card-body,.card-footer{padding-left:20px;padding-right:20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Het programma</span></div>
            <div class="hdr ob"><h2>Twee modules + een challenge. Één doel: jouw eerste klant.</h2><p>Je begint met de fundering, strategie en positionering. Dan ga je verkopen. En als vliegende start: een challenge met 3 korte video's.</p></div>
            <div class="grid ob">
              <div class="card">
                <div class="card-head navy"><div><div class="card-title">Module 1</div><div class="card-sub">Strategie</div></div><span class="badge">8 trainingen</span></div>
                <div class="card-body"><ul>${m1.map(t=>`<li>${t}</li>`).join('')}</ul></div>
                <div class="card-footer"><p>Na Module 1 weet je wie je klant is, wat je aanbiedt en hoe je je onderscheidt.</p></div>
              </div>
              <div class="card">
                <div class="card-head orange"><div><div class="card-title">Module 2</div><div class="card-sub">Scoor je eerste klanten</div></div><span class="badge">9 trainingen</span></div>
                <div class="card-body"><ul>${m2.map(t=>`<li>${t}</li>`).join('')}</ul></div>
                <div class="card-footer"><p>Na Module 2 heb je het eerste klantgesprek gevoerd, en ben je klaar voor je eerste deal.</p></div>
              </div>
            </div>
            <div class="extra ob"><p>Aangevuld met: <strong>community &amp; marktplaats</strong>, <strong>AI-coach Nova 24/7</strong> en toegang tot de <strong>BusinessBaas Challenge</strong> (3 extra video's).</p></div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-modules', BBStartersModules);
})();
