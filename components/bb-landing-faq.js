(function () {
  if (customElements.get('bb-landing-faq')) return;
  class BBLandingFaq extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .faq{padding:96px 24px;background:#fff}
          .faq-inner{max-width:720px;margin:0 auto}
          h2{font-size:clamp(26px,3.5vw,40px);font-weight:900;color:#0D2240;letter-spacing:-.03em;text-align:center;margin-bottom:52px}
          .faq-item{border-bottom:1px solid rgba(13,34,64,.1)}
          .faq-q{width:100%;text-align:left;padding:20px 0;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:16px;font-weight:700;color:#0D2240;font-family:'Inter',sans-serif}
          .faq-icon{font-size:22px;color:#E85D04;flex-shrink:0;transition:transform .25s}
          .faq-item.open .faq-icon{transform:rotate(45deg)}
          .faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}
          .faq-item.open .faq-a{max-height:300px;padding-bottom:20px}
          .faq-a p{font-size:15px;color:#5A6780;line-height:1.72}
        </style>
        <section class="faq">
          <div class="faq-inner">
            <h2 class="ob">Veelgestelde vragen</h2>
            <div class="faq-item ob"><button class="faq-q">Is de gratis training écht gratis?<span class="faq-icon">+</span></button><div class="faq-a"><p>Ja, 100% gratis — zonder creditcard en zonder automatische verlenging. Je krijgt direct toegang tot de BusinessBaas starttraining. Wil je daarna verder met het volledige platform, dan kies je zelf of je lid wilt worden.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Voor wie is BusinessBaas bedoeld?<span class="faq-icon">+</span></button><div class="faq-a"><p>Voor mensen die hun eigen bedrijf willen starten of net gestart zijn. Of je nu een dienst, product of freelance activiteit wilt opzetten — BusinessBaas helpt je van idee naar eerste betalende klant. Geen specifieke achtergrond of opleiding nodig.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Hoeveel tijd kost het per week?<span class="faq-icon">+</span></button><div class="faq-a"><p>De meeste leden werken 3–5 uur per week met het platform. De trainingen zijn modulair opgebouwd, zodat je zelf bepaalt wanneer en hoe snel je gaat. Alles blijft altijd beschikbaar, dus je loopt nooit achter.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Wat is het verschil met een cursus op YouTube?<span class="faq-icon">+</span></button><div class="faq-a"><p>YouTube geeft je informatie, BusinessBaas geeft je een systeem. De combinatie van gestructureerde modules, een werkplek waar je daadwerkelijk je plan opbouwt, persoonlijke AI-coach Nova en een community van starters zorgt ervoor dat je in actie komt — en blijft.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Kan ik op elk moment stoppen?<span class="faq-icon">+</span></button><div class="faq-a"><p>Ja. Het lidmaatschap is maandelijks opzegbaar, zonder reden of gedoe. Je hebt altijd de controle. Wij geloven dat je blijft omdat het je wat oplevert, niet omdat je vast zit aan een contract.</p></div></div>
            <div class="faq-item ob"><button class="faq-q">Hoe werkt AI-coach Nova precies?<span class="faq-icon">+</span></button><div class="faq-a"><p>Nova is een AI-coach die kennis heeft van jouw situatie als starter en de BusinessBaas-aanpak. Je kunt haar vragen stellen, laten meedenken over je doelgroep, feedback vragen op je teksten of sparren over hoe je een salesgesprek aanpakt. Ze is 24/7 beschikbaar — ook als je om 23:00 uur aan je businessplan werkt.</p></div></div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
      s.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          s.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });
    }
  }
  customElements.define('bb-landing-faq', BBLandingFaq);
})();
