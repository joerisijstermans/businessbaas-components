(function () {
  if (customElements.get('bb-platform-pricing')) return;
  class BBPlatformPricing extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#0D2240;font-family:'Inter',sans-serif;text-align:center;position:relative;overflow:hidden}
          .blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.2;pointer-events:none}
          .blob1{width:400px;height:400px;background:#E85D04;top:-100px;right:-80px}
          .blob2{width:350px;height:350px;background:#2563EB;bottom:-80px;left:-60px}
          .inner{max-width:720px;margin:0 auto;position:relative;z-index:1}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:16px;line-height:1.2}
          .price-big{font-size:clamp(3rem,8vw,5rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;margin:24px 0 8px}
          .price-big span{color:#E85D04}
          .price-note{font-size:1rem;color:rgba(255,255,255,.6);margin-bottom:8px}
          .price-alt{font-size:.85rem;color:rgba(255,255,255,.35);margin-bottom:36px}
          .includes{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:40px}
          .pill{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:5px 13px;font-size:.8rem;color:rgba(255,255,255,.8);font-weight:500}
          .btn{background:#E85D04;color:#fff;padding:18px 48px;border-radius:50px;font-size:1.05rem;font-weight:700;text-decoration:none;display:inline-block;transition:background .2s,transform .2s;font-family:'Inter',sans-serif}
          .btn:hover{background:#CC4D00;transform:translateY(-2px)}
          .direct{margin-top:16px;font-size:.88rem;color:rgba(255,255,255,.45)}
          .direct a{color:rgba(255,255,255,.7);text-decoration:underline;text-underline-offset:3px}
          .footnote{font-size:.82rem;color:rgba(255,255,255,.4);margin-top:16px}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="blob blob1"></div>
          <div class="blob blob2"></div>
          <div class="inner">
            <div class="lbl ob">Prijs</div>
            <h2 class="ob">Alles voor minder dan een kop koffie per dag</h2>
            <div class="price-big ob">€1,90</div>
            <div class="price-note ob">per dag, bij jaarlijks betalen</div>
            <div class="price-alt ob">of €69 per maand</div>
            <div class="includes ob">
              <span class="pill">✓ Alle trainingen</span>
              <span class="pill">✓ Nova AI-assistent</span>
              <span class="pill">✓ Digitale werkplek</span>
              <span class="pill">✓ Community</span>
              <span class="pill">✓ LIVE events</span>
              <span class="pill">✓ Marktplaats</span>
            </div>
            <a class="btn ob" href="https://www.businessbaas.com/voor-starters" data-lightbox>Start gratis training</a>
            <p class="direct ob">Al overtuigd? <a href="https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202">Direct lid worden →</a></p>
            <p class="footnote ob">✓ Geen verborgen kosten &nbsp;·&nbsp; ✓ Direct toegang &nbsp;·&nbsp; ✓ Altijd opzegbaar</p>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .12 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
      s.querySelectorAll('[data-lightbox]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          if (window.openTrainingLightbox) {
            e.preventDefault();
            window.openTrainingLightbox();
          }
        });
      });
    }
  }
  customElements.define('bb-platform-pricing', BBPlatformPricing);
})();
