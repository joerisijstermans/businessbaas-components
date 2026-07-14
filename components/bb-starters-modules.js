(function () {
  if (customElements.get('bb-starters-modules')) return;
  class BBStartersModules extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
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
          .grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px;}
          .card{background:#fff;border-radius:22px;overflow:hidden;border:1px solid rgba(13,34,64,.07);box-shadow:0 4px 20px rgba(13,34,64,.06);}
          .card-head{padding:28px 28px 22px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;}
          .card-head.navy{background:var(--navy);}
          .card-head.orange{background:var(--orange);}
          .card-title{font-size:19px;font-weight:900;color:#fff;line-height:1.25;}
          .card-sub{font-size:12px;font-weight:700;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.08em;margin-top:4px;}
          .badge{padding:5px 12px;background:rgba(255,255,255,.18);border-radius:50px;font-size:11px;font-weight:700;color:#fff;white-space:nowrap;flex-shrink:0;}
          .card-body{padding:24px 28px;}
          .card-desc{font-size:15px;color:#374151;line-height:1.55;margin-bottom:16px;}
          .outcome{background:#F4F6FA;border-radius:12px;padding:14px 18px;}
          .outcome-label{font-size:11px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.07em;margin-bottom:5px;}
          .outcome p{font-size:13.5px;color:#5A6780;line-height:1.5;font-style:italic;}
          .challenge{background:linear-gradient(135deg,var(--orange),#CC4D00);border-radius:18px;padding:24px 28px;display:flex;align-items:center;gap:20px;margin-bottom:28px;}
          .ch-icon{font-size:28px;flex-shrink:0;}
          .ch-label{font-size:11px;font-weight:700;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;}
          .ch-title{font-size:18px;font-weight:900;color:#fff;margin-bottom:4px;}
          .ch-desc{font-size:14px;color:rgba(255,255,255,.82);line-height:1.5;}
          .see-more{text-align:center;}
          .see-link{display:inline-flex;align-items:center;gap:7px;font-size:15px;font-weight:700;color:var(--orange);text-decoration:none;transition:gap .2s;}
          .see-link:hover{gap:12px;}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:860px){.grid{grid-template-columns:1fr;}.challenge{flex-direction:column;gap:12px;}}
          @media(max-width:600px){section{padding:64px 20px;}.card-head,.card-body{padding-left:20px;padding-right:20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Het programma</span></div>
            <div class="hdr ob">
              <h2>Twee modules + een challenge. Één doel: jouw eerste klant.</h2>
              <p>20+ praktische trainingen verdeeld over twee modules, en een challenge om direct in actie te komen. Alles in jouw eigen tempo.</p>
            </div>
            <div class="grid ob">
              <div class="card">
                <div class="card-head navy">
                  <div><div class="card-title">Module 1</div><div class="card-sub">Strategie</div></div>
                  <span class="badge">8 trainingen</span>
                </div>
                <div class="card-body">
                  <p class="card-desc">Van idee naar een scherpe strategie, heldere positionering en een aanbod waar klanten op wachten.</p>
                  <div class="outcome">
                    <div class="outcome-label">Na deze module</div>
                    <p>Weet je wie je klant is, wat je aanbiedt en hoe je je onderscheidt van de concurrentie.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-head orange">
                  <div><div class="card-title">Module 2</div><div class="card-sub">Scoor je eerste klanten</div></div>
                  <span class="badge">9 trainingen</span>
                </div>
                <div class="card-body">
                  <p class="card-desc">Van pitch tot deal: je leert verkopen zonder verkoperig te zijn, en je eerste klantgesprek te voeren.</p>
                  <div class="outcome">
                    <div class="outcome-label">Na deze module</div>
                    <p>Heb je je eerste klantgesprek gevoerd en ben je klaar voor je eerste echte deal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="challenge ob">
              <div class="ch-icon">⚡</div>
              <div>
                <div class="ch-label">Inbegrepen bij lidmaatschap</div>
                <div class="ch-title">Kickstart Challenge</div>
                <div class="ch-desc">Concrete opdrachten, community support en een vliegende start als ondernemer, direct wanneer je start.</div>
              </div>
            </div>
            <div class="see-more ob">
              <a class="see-link" href="https://www.businessbaas.com/het-platform" target="_top">
                Bekijk het volledige trainingsaanbod
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-modules', BBStartersModules);
})();
