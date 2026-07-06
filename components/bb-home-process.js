(function () {
  if (customElements.get('bb-home-process')) return;
  class BBHomeProcess extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._obs();
      this.shadowRoot.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          window.parent.postMessage({ action: 'openLightbox', lightbox: 'Gratis training' }, '*');
        });
      });
    }
    render() {
      const steps = [
        { num:'01', title:'Krijg richting', desc:'Ontdek welke stappen écht belangrijk zijn voor jouw situatie. Niet alles tegelijk, maar de juiste dingen op het juiste moment. Je begint met een helder beeld van je doelgroep en aanbod.', outcome:'Week 1–4: Strategie & fundament', color:'#E85D04' },
        { num:'02', title:'Kom in actie', desc:'Werk direct aan je onderneming met concrete opdrachten. Met begeleiding van AI-coach Nova en je digitale werkplek bouw je stap voor stap aan iets tastbaars.', outcome:'Week 5–8: Bouwen & uitvoeren', color:'#3B82F6' },
        { num:'03', title:'Vind je eerste klanten', desc:'Bouw momentum richting omzet. Na 90 dagen heb je een helder aanbod, een gerichte aanpak en klanten die bij jou passen, geen theorie meer, maar resultaat.', outcome:'Week 9–13: Gemiddeld eerste klant', color:'#10B981' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#F8F9FC;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:0.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .layout{display:grid;grid-template-columns:42% 1fr;gap:80px;align-items:start;margin-bottom:48px;}
          .left h2{font-size:clamp(32px,4.5vw,52px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-0.03em;margin-bottom:18px;}
          .left h2 em{font-style:normal;color:var(--orange);}
          .left p{font-size:17px;color:#5A6780;line-height:1.7;margin-bottom:32px;}
          .cta{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:var(--orange);color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .22s,transform .22s,box-shadow .22s;font-family:var(--font);}
          .cta:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 8px 24px rgba(232,93,4,.34);}
          .steps{display:flex;flex-direction:column;}
          .step{display:flex;gap:24px;align-items:flex-start;opacity:0;transform:translateY(20px);}
          .step.show{opacity:1;transform:translateY(0);transition:opacity .65s ease,transform .65s ease;}
          .sl{display:flex;flex-direction:column;align-items:center;}
          .sn{width:48px;height:48px;border-radius:14px;font-size:14px;font-weight:900;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
          .sline{width:2px;flex:1;min-height:28px;margin:6px 0;}
          .step:last-child .sline{display:none;}
          .sb{padding-bottom:40px;flex:1;}
          .sb h3{font-size:20px;font-weight:800;color:var(--navy);margin-bottom:10px;line-height:1.2;}
          .sb p{font-size:14.5px;color:#5A6780;line-height:1.68;margin-bottom:14px;}
          .oc{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;padding:5px 12px;border-radius:50px;}
          .tl{background:linear-gradient(135deg,var(--navy),#1B3A5F);border-radius:20px;padding:28px 36px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;}
          .tli{display:flex;align-items:center;flex-wrap:wrap;gap:4px;}
          .tlit{display:flex;align-items:center;gap:8px;}
          .tld{width:8px;height:8px;border-radius:50%;background:var(--orange);flex-shrink:0;}
          .tll{font-size:13px;font-weight:600;color:rgba(255,255,255,.75);}
          .tln{width:28px;height:1px;background:rgba(255,255,255,.18);margin:0 10px;flex-shrink:0;}
          .tlc{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--orange);color:#fff;font-size:14px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .22s;font-family:var(--font);white-space:nowrap;flex-shrink:0;}
          .tlc:hover{background:#CC4D00;transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,93,4,.4);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:900px){.layout{grid-template-columns:1fr;gap:48px;}.tl{flex-direction:column;align-items:flex-start;padding:24px;}}
          @media(max-width:600px){section{padding:64px 20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Hoe het werkt</span></div>
            <div class="layout">
              <div class="left ob">
                <h2>Drie stappen naar je <em>eerste klant</em></h2>
                <p>Een bewezen aanpak die je van idee naar eerste betalende klant brengt. Elke week een concrete stap vooruit, met de juiste begeleiding op het juiste moment.</p>
                <a href="https://www.businessbaas.com/voor-starters" class="cta" data-lightbox>Start vandaag gratis <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              </div>
              <div class="steps">
                ${steps.map((s,i)=>`<div class="step" style="transition-delay:${i*120}ms;"><div class="sl"><div class="sn" style="background:${s.color};">${s.num}</div><div class="sline" style="background:linear-gradient(to bottom,${s.color}55,transparent);"></div></div><div class="sb"><h3>${s.title}</h3><p>${s.desc}</p><span class="oc" style="background:${s.color}15;color:${s.color};">→ ${s.outcome}</span></div></div>`).join('')}
              </div>
            </div>
            <div class="tl ob">
              <div class="tli">
                <div class="tlit"><div class="tld"></div><span class="tll">17+ praktische trainingen</span></div>
                <div class="tln"></div>
                <div class="tlit"><div class="tld"></div><span class="tll">AI-Coach Nova 24/7</span></div>
                <div class="tln"></div>
                <div class="tlit"><div class="tld"></div><span class="tll">Community & LIVE events</span></div>
                <div class="tln"></div>
                <div class="tlit"><div class="tld"></div><span class="tll">Digitale werkplek</span></div>
              </div>
              <a href="https://www.businessbaas.com/voor-starters" class="tlc" data-lightbox>Start gratis training →</a>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});
      this.shadowRoot.querySelectorAll('.ob,.step').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-process', BBHomeProcess);
})();
