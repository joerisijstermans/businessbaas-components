(function () {
  if (customElements.get('bb-platform-extras')) return;
  class BBPlatformExtras extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const faqs = [
        { q: 'Wat zit er precies inbegrepen?', a: 'Je krijgt toegang tot 20+ praktische trainingen (Module 1: Strategie + Module 2: Scoor je eerste klanten), de Kickstart Challenge, AI-coach Nova, de digitale werkplek, en de WhatsApp-community met marktplaats. Live events en 1-op-1 coaching zijn optionele add-ons.' },
        { q: 'Hoe werkt AI-coach Nova?', a: 'Nova is een AI-coach die jóuw traject kent — jouw doelgroep, jouw aanbod, jouw voortgang in de trainingen. Stel vragen op elk moment van de dag en krijg advies dat aansluit op jouw situatie. Geen generieke antwoorden.' },
        { q: 'Kan ik opzeggen wanneer ik wil?', a: 'Het maandabonnement (€69/maand) kun je per maand opzeggen. Het jaarabonnement (€690/jaar) geldt voor één jaar. Geen verborgen kosten, geen kleine lettertjes.' },
        { q: 'Is dit ook geschikt als ik al een tijdje bezig ben?', a: 'BusinessBaas is primair ontworpen voor starters in de eerste fase: van idee naar eerste klant. Ben je net gestart of wil je een stevigere basis leggen, dan is het platform voor jou. Ben je al een jaar of langer actief als ondernemer, dan heb je waarschijnlijk meer baat bij een ander traject.' },
        { q: 'Wat als ik vastloop of vragen heb?', a: 'Dan heb je Nova (AI-coach, 24/7 beschikbaar), de WhatsApp-community met mede-starters, en de mogelijkheid om live events bij te wonen. Je staat er niet alleen voor.' },
      ];
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:760px;margin:0 auto}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;text-align:center}
          h2{font-size:clamp(1.6rem,3.2vw,2.4rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.15;margin-bottom:48px;text-align:center}
          .faq-item{border-bottom:1px solid rgba(13,34,64,.08)}
          .faq-item:first-of-type{border-top:1px solid rgba(13,34,64,.08)}
          .faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;text-align:left}
          .faq-q-text{font-size:1rem;font-weight:700;color:#0D2240;line-height:1.4}
          .faq-icon{width:28px;height:28px;border-radius:50%;background:rgba(232,93,4,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}
          .faq-icon svg{width:14px;height:14px;transition:transform .3s}
          .faq-item.open .faq-icon{background:#E85D04}
          .faq-item.open .faq-icon svg{transform:rotate(45deg)}
          .faq-item.open .faq-icon svg path{stroke:#fff}
          .faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease}
          .faq-a-inner{padding:0 0 20px;font-size:.93rem;color:#5A6780;line-height:1.7}
          .faq-item.open .faq-a{max-height:300px}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
          @media(max-width:520px){section{padding:64px 20px}}
        </style>
        <section>
          <div class="inner">
            <div class="lbl ob">Veelgestelde vragen</div>
            <h2 class="ob">Alles wat je wil weten</h2>
            ${faqs.map((f,i) => `
            <div class="faq-item ob" style="transition-delay:${i * 60}ms">
              <button class="faq-q">
                <span class="faq-q-text">${f.q}</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M7 2V12M2 7H12" stroke="#E85D04" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
            </div>`).join('')}
          </div>
        </section>`;
      s.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          s.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-extras', BBPlatformExtras);
})();
