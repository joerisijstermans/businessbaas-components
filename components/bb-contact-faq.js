(function () {
  if (customElements.get('bb-contact-faq')) return;
  class BBContactFaq extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif}
          *{box-sizing:border-box;margin:0;padding:0}
          section{background:#fff;padding:72px 24px;font-family:var(--font)}
          .inner{max-width:720px;margin:0 auto;text-align:center}
          h2{font-size:clamp(24px,3.5vw,36px);font-weight:900;color:var(--navy);letter-spacing:-.03em;margin-bottom:10px}
          .sub{font-size:16px;color:#5A6780;margin-bottom:40px}
          .items{display:grid;grid-template-columns:1fr;gap:12px;text-align:left;margin-bottom:32px}
          .item{background:#F4F6FA;border-radius:14px;padding:20px 24px}
          .iq{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:6px}
          .ia{font-size:14px;color:#5A6780;line-height:1.6}
          .ia a{color:var(--orange);font-weight:600;text-decoration:none}
          .ia a:hover{text-decoration:underline}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
          .ob.show{opacity:1;transform:translateY(0)}
          @media(max-width:600px){section{padding:56px 20px}}
        </style>
        <section>
          <div class="inner">
            <h2 class="ob">Veelgestelde vragen</h2>
            <p class="sub ob">Snel antwoord op de meest gestelde vragen.</p>
            <div class="items ob">
              <div class="item"><div class="iq">Hoe snel krijg ik antwoord?</div><div class="ia">Binnen 1 werkdag via e-mail op <a href="mailto:info@businessbaas.com">info@businessbaas.com</a>.</div></div>
              <div class="item"><div class="iq">Ik wil partner worden, wat zijn de mogelijkheden?</div><div class="ia">Stuur ons een bericht via het formulier of bekijk de <a href="https://www.businessbaas.com/voor-partners">partnerspagina</a>. We plannen graag een gratis kennismaking.</div></div>
              <div class="item"><div class="iq">Ik heb technische vragen over het platform.</div><div class="ia">Stuur een e-mail naar <a href="mailto:info@businessbaas.com">info@businessbaas.com</a> met een omschrijving van je vraag. We helpen je snel verder.</div></div>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); o.unobserve(e.target); } }), { threshold: 0.1 });
      this.shadowRoot.querySelectorAll('.ob').forEach(el => o.observe(el));
    }
  }
  customElements.define('bb-contact-faq', BBContactFaq);
})();
