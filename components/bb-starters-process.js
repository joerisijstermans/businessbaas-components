(function () {
  if (customElements.get('bb-starters-process')) return;
  class BBStartersProcess extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      const steps = [
        { n:'01', t:'Start gratis', d:'Voltooi de gratis training "Jouw eerste betalende klant" en ontdek de drie stappen die het verschil maken. Geen creditcard nodig.' },
        { n:'02', t:'Volg de trainingen', d:'Ga stap voor stap door Module 1 (Strategie) en Module 2 (Scoor je eerste klanten). Werk direct uit in je digitale werkplek.' },
        { n:'03', t:'Verdien je eerste klant', d:'Met Nova als AI-coach, LIVE events en een actieve community naast je, zet je de stap van leren naar echte omzet.' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#fff;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hdr{max-width:540px;margin-bottom:56px;}
          .hdr h2{font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:12px;}
          .hdr p{font-size:17px;color:#5A6780;line-height:1.65;}
          .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-bottom:48px;position:relative;}
          .steps::before{content:'';position:absolute;top:36px;left:calc(16.66% + 20px);right:calc(16.66% + 20px);height:2px;background:linear-gradient(90deg,var(--orange),rgba(232,93,4,.2));pointer-events:none;}
          .step{text-align:center;}
          .num{width:72px;height:72px;border-radius:50%;background:var(--orange);color:#fff;font-size:22px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(232,93,4,.28);}
          .st{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:10px;}
          .sd{font-size:15px;color:#5A6780;line-height:1.65;}
          .cta-wrap{text-align:center;}
          .btn{display:inline-flex;align-items:center;gap:8px;padding:15px 32px;background:var(--orange);color:#fff;font-size:16px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .22s,transform .22s,box-shadow .22s;font-family:var(--font);}
          .btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,.36);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:768px){.steps{grid-template-columns:1fr;gap:28px;}.steps::before{display:none;}}
          @media(max-width:600px){section{padding:64px 20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Hoe het werkt</span></div>
            <div class="hdr ob"><h2>Drie stappen naar je eerste klant</h2><p>Een bewezen aanpak die je van idee naar omzet brengt.</p></div>
            <div class="steps ob">${steps.map(s=>`<div class="step"><div class="num">${s.n}</div><div class="st">${s.t}</div><div class="sd">${s.d}</div></div>`).join('')}</div>
            <div class="cta-wrap ob"><a href="https://www.businessbaas.com/gratis-training-aanvragen" class="btn" target="_top" data-lightbox>Begin met stap 1, gratis <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.1});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-process', BBStartersProcess);
})();
