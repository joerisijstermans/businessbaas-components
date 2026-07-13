(function () {
  if (customElements.get('bb-pricing-faq')) return;
  class BBPricingFaq extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .wrap{background:#fff;padding:80px 24px 96px}
          .inner{max-width:680px;margin:0 auto}
          .top{text-align:center;margin-bottom:48px}
          .lbl{font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
          h2{font-size:clamp(26px,4vw,40px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1}
          .list{display:flex;flex-direction:column;gap:0}
          .item{border-bottom:1px solid #F3F4F6}
          .item:first-child{border-top:1px solid #F3F4F6}
          .q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 0;background:none;border:none;cursor:pointer;text-align:left;font-family:'Inter',sans-serif}
          .q-text{font-size:15.5px;font-weight:700;color:#0D2240;line-height:1.4}
          .icon{width:28px;height:28px;border-radius:50%;background:#F3F4F6;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,transform .3s}
          .icon svg{transition:transform .3s}
          .item.open .icon{background:rgba(232,93,4,.12)}
          .item.open .icon svg{transform:rotate(45deg)}
          .a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .35s ease}
          .item.open .a{max-height:200px}
          .a-inner{padding:0 0 20px}
          .a-inner p{font-size:14.5px;color:#5A6780;line-height:1.75}
          .a-inner a{color:#E85D04;font-weight:600;text-decoration:none}
          .a-inner a:hover{text-decoration:underline}
          .cta{margin-top:56px;text-align:center;padding:40px 32px;background:linear-gradient(135deg,#0D2240 0%,#1a3a62 100%);border-radius:20px}
          .cta p{font-size:16px;color:rgba(255,255,255,.65);margin-bottom:20px;line-height:1.6}
          .cta strong{color:#fff}
          .cta-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s;font-family:'Inter',sans-serif}
          .cta-btn:hover{background:#CC4D00;transform:translateY(-2px)}
          @media(max-width:480px){.wrap{padding:60px 20px 72px}}
        </style>
        <section class="wrap">
          <div class="inner">
            <div class="top">
              <p class="lbl">Veelgestelde vragen</p>
              <h2>Alles wat je wilt weten<br>over het lidmaatschap</h2>
            </div>
            <div class="list" id="faq"></div>
            <div class="cta">
              <p><strong>Nog een vraag?</strong><br>Stuur ons een bericht, we reageren snel.</p>
              <a class="cta-btn" href="https://www.businessbaas.com/contact" target="_top">Neem contact op <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
        </section>`;

      const faqs = [
        {
          q: 'Kan ik op elk moment opzeggen?',
          a: 'Ja. Je kunt je abonnement altijd opzeggen. Na opzegging blijf je toegang houden tot het einde van je betaalperiode. Geen gedoe, geen verborgen kosten.'
        },
        {
          q: 'Is er een gratis proefperiode?',
          a: 'We bieden geen gratis trial voor het volledige platform, maar je kunt wel gratis onze training "Jouw eerste betalende klanten" volgen. Zo zie je eerst hoe we werken voordat je een beslissing neemt. <a href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top">Vraag de gratis training aan →</a>'
        },
        {
          q: 'Wat is het verschil tussen maandelijks en jaarlijks betalen?',
          a: 'Bij maandelijkse betaling betaal je €69 per maand. Bij jaarlijkse betaling betaal je omgerekend €1,90 per dag, dat scheelt ruim €130 per jaar. Je betaalt dan eenmalig vooruit voor het hele jaar.'
        },
        {
          q: 'Zijn er nog andere kosten naast het abonnement?',
          a: 'Bijna alles zit in één prijs: trainingen, Nova AI-assistent, digitale werkplek, community en marktplaats. Er zijn twee add-ons die je los kunt afnemen: <strong>LIVE events tickets</strong> (leden krijgen altijd voorrang in de pre-sale) en <strong>1 op 1 coaching</strong>. Alles andere is volledig inbegrepen.'
        },
        {
          q: 'Hoe werkt de betaling?',
          a: 'Betaling verloopt veilig via Stripe. Je kunt betalen met creditcard of iDEAL. Je ontvangt altijd een factuur en je kunt je abonnement eenvoudig zelf beheren of stopzetten.'
        },
        {
          q: 'Ik ben net begonnen als ondernemer. Is BusinessBaas ook voor mij?',
          a: 'Juist! BusinessBaas is speciaal gebouwd voor starters. Of je nu nog een idee hebt of al een paar maanden bezig bent: het platform begeleidt je stap voor stap van idee naar je eerste betalende klant.'
        }
      ];

      const list = s.getElementById('faq');
      faqs.forEach(({ q, a }) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
          <button class="q">
            <span class="q-text">${q}</span>
            <span class="icon"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1V11M1 6H11" stroke="#0D2240" stroke-width="2" stroke-linecap="round"/></svg></span>
          </button>
          <div class="a"><div class="a-inner"><p>${a}</p></div></div>`;
        item.querySelector('.q').addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          list.querySelectorAll('.item.open').forEach(el => el.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
        list.appendChild(item);
      });
    }
  }
  customElements.define('bb-pricing-faq', BBPricingFaq);
})();
