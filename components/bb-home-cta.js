(function () {
  if (customElements.get('bb-home-cta')) return;
  class BBHomeCta extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._obs();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:linear-gradient(135deg,var(--orange) 0%,#FF7A35 100%);padding:88px 24px;font-family:var(--font);position:relative;overflow:hidden;}
          section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 50%,rgba(255,255,255,0.07) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(255,255,255,0.05) 0%,transparent 40%);pointer-events:none;}
          .inner{max-width:720px;margin:0 auto;text-align:center;position:relative;z-index:2;}
          .badge{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;background:rgba(255,255,255,0.18);border-radius:50px;font-size:11.5px;font-weight:700;color:rgba(255,255,255,0.9);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:24px;}
          h2{font-size:clamp(32px,5vw,58px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-0.035em;margin-bottom:16px;}
          .sub{font-size:17.5px;color:rgba(255,255,255,0.82);line-height:1.65;margin-bottom:36px;}
          .sub strong{color:#fff;font-weight:700;}
          .tb{display:inline-block;background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.25);border-radius:12px;padding:14px 24px;font-size:15px;font-weight:700;color:#fff;margin-bottom:32px;font-style:italic;}
          .ctas{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:20px;}
          .bw{display:inline-flex;align-items:center;gap:9px;padding:15px 32px;background:#fff;color:var(--orange);font-size:16px;font-weight:800;border-radius:50px;text-decoration:none;box-shadow:0 8px 28px rgba(0,0,0,0.15);transition:transform 0.22s,box-shadow 0.22s;font-family:var(--font);}
          .bw:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(0,0,0,0.22);}
          .disc{font-size:13px;color:rgba(255,255,255,0.62);display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;}
          .disc span{display:flex;align-items:center;gap:5px;}
          .disc span::before{content:'✓';font-weight:700;color:rgba(255,255,255,0.8);}
          .ob{opacity:0;transform:translateY(18px);transition:opacity 0.65s ease,transform 0.65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:600px){section{padding:64px 20px;}h2{font-size:clamp(28px,8vw,44px);}.sub{font-size:16px;}}
        </style>
        <section>
          <div class="inner">
            <div class="badge ob">🎓 Gratis Training</div>
            <h2 class="ob">Jouw eerste betalende<br>klant wacht op jou</h2>
            <p class="sub ob">Start vandaag met de gratis training en ontdek<br><strong>de drie stappen die het verschil maken</strong>.</p>
            <div class="tb ob">"Jouw eerste betalende klant – De drie stappen die het verschil maken"</div>
            <div class="ctas ob">
              <a href="https://www.businessbaas.com/gratis-training" class="bw" target="_top" data-lightbox>Gratis training starten <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 8.5H14M14 8.5L9.5 4M14 8.5L9.5 13" stroke="#E85D04" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
            <div class="disc ob">
              <span>Geen creditcard nodig</span>
              <span>Direct toegang</span>
              <span>Altijd opzegbaar</span>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.15});
      this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-cta', BBHomeCta);
})();
