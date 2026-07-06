(function () {
  if (customElements.get('bb-about-cta')) return;
  class BBAboutCta extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:linear-gradient(135deg,#E85D04 0%,#CC4D00 100%);font-family:'Inter',sans-serif;text-align:center}
          .inner{max-width:640px;margin:0 auto}
          h2{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:16px;line-height:1.2}
          p{font-size:1.05rem;color:rgba(255,255,255,.85);margin-bottom:36px;line-height:1.6}
          .btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
          .btn-w{background:#fff;color:#E85D04;padding:16px 36px;border-radius:50px;font-size:1rem;font-weight:700;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-w:hover{background:rgba(255,255,255,.9);transform:translateY(-2px)}
          .btn-g{border:2px solid rgba(255,255,255,.5);color:#fff;padding:16px 36px;border-radius:50px;font-size:1rem;font-weight:600;text-decoration:none;transition:all .2s;display:inline-block}
          .btn-g:hover{border-color:#fff;background:rgba(255,255,255,.1)}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <h2 class="ob">Sluit je aan bij onze community</h2>
            <p class="ob">Begin met de gratis training en ontdek hoe BusinessBaas jou van idee naar eerste klant brengt. Geen creditcard, geen verplichtingen.</p>
            <div class="btns ob">
              <a class="btn-w" href="https://www.businessbaas.com/voor-starters" data-lightbox>Start gratis training</a>
              <a class="btn-g" href="https://www.businessbaas.com/contact">Neem contact op</a>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .15 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
      s.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          window.parent.postMessage({ action: 'openLightbox', lightbox: 'Gratis training' }, '*');
        });
      });
    }
  }
  customElements.define('bb-about-cta', BBAboutCta);
})();
