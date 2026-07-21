(function () {
  if (customElements.get('bb-starters-faq')) return;
  class BBStartersFaq extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._bind(); this._obs(); }
    render() {
      const faqs = [
        { q:'Is er een gratis proefperiode?', a:'Ja! Start met de gratis training "Jouw eerste betalende klant, De drie stappen die het verschil maken". Geen creditcard nodig, direct toegang.' },
        { q:'Hoeveel tijd heb ik per week nodig?', a:'Wij adviseren tussen de 2 en 4 uur per week, maar jij bepaalt dat helemaal zelf. Je werkt op jouw eigen tempo: wanneer jij tijd hebt, wanneer het jou uitkomt. De trainingen zijn kort en gericht op concrete actie, geen marathonsessies.' },
        { q:'Wat als ik nog geen bedrijfsidee heb?', a:'Geen probleem. Module 1 begint juist met het ontdekken en aanscherpen van jouw idee. Van vaag idee naar concrete propositie, stap voor stap.' },
        { q:'Wat is het verschil met een gewone online cursus?', a:'BusinessBaas is een volledig platform, geen passieve cursus. Je werkt direct in je digitale werkplek, krijgt coaching van AI-coach Nova en bent onderdeel van een actieve community. Je leert niet alleen, je bouwt tegelijkertijd aan je echte bedrijf.' },
        { q:'Wat doet AI-coach Nova precies?', a:'Nova is geen gewone chatbot. Ze kent jóuw trainingen, jóuw voortgang en jóuw situatie, en geeft advies dat echt op jou is afgestemd. Beschikbaar 24/7, ook als je \'s avonds twijfels hebt of vastloopt.' },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#F4F6FA;padding:88px 24px;font-family:var(--font);}
          .inner{max-width:760px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;justify-content:center;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hd{text-align:center;margin-bottom:48px;}
          .hd h2{font-size:clamp(28px,4vw,44px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:10px;}
          .hd p{font-size:16px;color:#5A6780;line-height:1.65;}
          .faq{display:flex;flex-direction:column;gap:8px;margin-bottom:40px;}
          .qi{background:#fff;border-radius:14px;border:1px solid rgba(13,34,64,.07);overflow:hidden;transition:box-shadow .22s,border-color .22s;}
          .qi.open{box-shadow:0 6px 24px rgba(13,34,64,.08);border-color:rgba(232,93,4,.2);}
          .qh{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;cursor:pointer;gap:16px;user-select:none;}
          .qt{font-size:15.5px;font-weight:700;color:var(--navy);flex:1;transition:color .2s;}
          .qi.open .qt{color:var(--orange);}
          .ico{width:28px;height:28px;border-radius:50%;background:rgba(13,34,64,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .22s;}
          .qi.open .ico{background:var(--orange);}
          .ico svg{transition:transform .3s;}
          .qi.open .ico svg{transform:rotate(45deg);}
          .ico svg path{transition:stroke .22s;}
          .qi.open .ico svg path{stroke:#fff;}
          .qa{max-height:0;overflow:hidden;transition:max-height .38s cubic-bezier(.4,0,.2,1);}
          .qi.open .qa{max-height:200px;}
          .qa p{padding:0 24px 22px;font-size:15px;color:#5A6780;line-height:1.72;}
          .bot{text-align:center;}
          .bot p{font-size:15px;color:#5A6780;}
          .bot a{color:var(--orange);font-weight:600;text-decoration:none;}
          .bot a:hover{text-decoration:underline;}
          .ob{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:600px){section{padding:64px 20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="hd ob"><div class="lbl">Veelgestelde vragen</div><h2>Alles wat je wilt weten</h2><p>Geen verrassingen achteraf.</p></div>
            <div class="faq ob">${faqs.map((f,i)=>`<div class="qi${i===0?' open':''}"><div class="qh"><span class="qt">${f.q}</span><span class="ico"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2V12M2 7H12" stroke="#0D2240" stroke-width="2" stroke-linecap="round"/></svg></span></div><div class="qa"><p>${f.a}</p></div></div>`).join('')}</div>
            <div class="bot ob"><p>Vragen over kosten of opzeggen? <a href="https://www.businessbaas.com/prijzen">Bekijk de prijzenpagina</a> of <a href="https://www.businessbaas.com/contact">neem contact op</a>.</p></div>
          </div>
        </section>`;
    }
    _bind(){this.shadowRoot.querySelectorAll('.qi').forEach(item=>{item.querySelector('.qh').addEventListener('click',()=>{const isOpen=item.classList.contains('open');this.shadowRoot.querySelectorAll('.qi.open').forEach(o=>o.classList.remove('open'));if(!isOpen)item.classList.add('open');});});}
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-faq', BBStartersFaq);
})();
