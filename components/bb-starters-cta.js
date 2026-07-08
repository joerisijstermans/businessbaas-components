(function () {
  if (customElements.get('bb-starters-cta')) return;
  class BBStartersCta extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._obs();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:linear-gradient(135deg,var(--orange) 0%,#FF7A35 100%);padding:88px 24px;font-family:var(--font);position:relative;overflow:hidden;}
          section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 50%,rgba(255,255,255,.07) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(255,255,255,.05) 0%,transparent 40%);pointer-events:none;}
          .inner{max-width:700px;margin:0 auto;text-align:center;position:relative;z-index:2;}
          .badge{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;background:rgba(255,255,255,.18);border-radius:50px;font-size:11.5px;font-weight:700;color:rgba(255,255,255,.9);text-transform:uppercase;letter-spacing:.08em;margin-bottom:24px;}
          h2{font-size:clamp(32px,5vw,56px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.035em;margin-bottom:16px;}
          .sub{font-size:17.5px;color:rgba(255,255,255,.82);line-height:1.65;margin-bottom:36px;}
          .sub strong{color:#fff;font-weight:700;}
          .btn{display:inline-flex;align-items:center;gap:9px;padding:16px 36px;background:#fff;color:var(--orange);font-size:16px;font-weight:800;border-radius:50px;text-decoration:none;box-shadow:0 8px 28px rgba(0,0,0,.15);transition:transform .22s,box-shadow .22s;font-family:var(--font);}
          .btn:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(0,0,0,.22);}
          .disc{font-size:13px;color:rgba(255,255,255,.62);display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;margin-top:20px;}
          .disc span::before{content:'✓ ';font-weight:700;color:rgba(255,255,255,.8);}
          .ob{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:600px){section{padding:64px 20px;}h2{font-size:clamp(28px,8vw,42px);}}
        </style>
        <section>
          <div class="inner">
            <div class="badge ob">🎓 Gratis Training</div>
            <h2 class="ob">Jouw eerste betalende<br>klant wacht op jou</h2>
            <p class="sub ob">Start vandaag gratis en ontdek <strong>de drie stappen die het verschil maken</strong>.</p>
            <a href="https://www.businessbaas.com/gratis-training-aanvragen" class="btn ob" target="_top" data-lightbox>Gratis training starten <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 8.5H14M14 8.5L9.5 4M14 8.5L9.5 13" stroke="#E85D04" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="disc ob"><span>Geen creditcard nodig</span><span>Direct toegang</span></div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.15});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-cta', BBStartersCta);
})();
