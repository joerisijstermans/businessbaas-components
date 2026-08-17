(function(){
  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';
  if(customElements.get('bb-partners-logos'))return;
  class BBPartnersLogos extends HTMLElement{
    constructor(){super();this.attachShadow({mode:'open'});}
    connectedCallback(){this.render();this._obs();}
    render(){
      this.shadowRoot.innerHTML=`
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#fff;padding:72px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;text-align:center;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:40px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px;}
          .card{background:#F4F6FA;border-radius:16px;border:1px solid rgba(13,34,64,.07);padding:32px 20px 24px;display:flex;flex-direction:column;align-items:center;gap:18px;transition:box-shadow .22s,transform .22s;}
          .card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(13,34,64,.08);}
          .logo-wrap{height:90px;display:flex;align-items:center;justify-content:center;}
          .logo-wrap img{max-height:90px;max-width:150px;object-fit:contain;}
          .name{font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;text-align:center;}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr);}}
          @media(max-width:600px){section{padding:48px 20px;}.grid{gap:14px;}.card{padding:24px 16px 20px;}.logo-wrap{height:72px;}.logo-wrap img{max-height:72px;max-width:120px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Onze partners</span></div>
            <div class="grid ob">
              <div class="card">
                <div class="logo-wrap"><img src="${CDN}/logo-starterscentrum-nieuw.png" alt="Starterscentrum Limburg"></div>
                <span class="name">Starterscentrum Limburg</span>
              </div>
              <div class="card">
                <div class="logo-wrap"><img src="${CDN}/logo-gemeente-maastricht-nieuw.png" alt="Gemeente Maastricht"></div>
                <span class="name">Gemeente Maastricht</span>
              </div>
              <div class="card">
                <div class="logo-wrap"><img src="${CDN}/logo-dreamchasers-nieuw.png" alt="Stichting Dreamchasers"></div>
                <span class="name">Stichting Dreamchasers</span>
              </div>
              <div class="card">
                <div class="logo-wrap"><img src="${CDN}/logo-ohb-nieuw.png" alt="Ondernemershub Brunssum"></div>
                <span class="name">Ondernemershub Brunssum</span>
              </div>
              <div class="card">
                <div class="logo-wrap"><img src="${CDN}/logo-nic-nieuw.png" alt="New Insight Consulting"></div>
                <span class="name">New Insight Consulting</span>
              </div>
            </div>
          </div>
        </section>`;
    }
    _obs(){
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.1});
      this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-partners-logos',BBPartnersLogos);
})();
