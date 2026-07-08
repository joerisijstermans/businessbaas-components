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
          section{padding:100px 24px 88px;background:#0D2240;font-family:'Inter',sans-serif;text-align:center;position:relative;overflow:hidden}
          .blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.18;pointer-events:none}
          .blob1{width:480px;height:480px;background:#E85D04;top:-140px;right:-100px}
          .blob2{width:400px;height:400px;background:#2563EB;bottom:-100px;left:-80px}
          .inner{max-width:680px;margin:0 auto;position:relative;z-index:1}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.9rem,4vw,3rem);font-weight:900;color:#fff;letter-spacing:-.035em;margin-bottom:8px;line-height:1.12}
          .tagline{font-size:1.05rem;color:rgba(255,255,255,.55);margin-bottom:32px;line-height:1.6}
          .price-wrap{display:flex;align-items:baseline;justify-content:center;gap:6px;margin-bottom:6px}
          .price-big{font-size:clamp(3.5rem,9vw,5.5rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1}
          .price-big span{color:#E85D04}
          .price-note{font-size:1rem;color:rgba(255,255,255,.55);margin-bottom:36px}
          .includes{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:44px}
          .pill{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:50px;padding:6px 14px;font-size:.8rem;color:rgba(255,255,255,.8);font-weight:500}
          .ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
          .btn-p{background:#E85D04;color:#fff;padding:16px 36px;border-radius:50px;font-size:1rem;font-weight:700;text-decoration:none;transition:background .2s,transform .2s,box-shadow .2s;display:inline-flex;align-items:center;gap:8px;font-family:'Inter',sans-serif}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 12px 32px rgba(232,93,4,.4)}
          .btn-g{border:2px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);padding:16px 32px;border-radius:50px;font-size:1rem;font-weight:600;text-decoration:none;transition:all .2s;display:inline-block;font-family:'Inter',sans-serif}
          .btn-g:hover{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.07)}
          .trust{font-size:.85rem;color:rgba(255,255,255,.32);margin-top:8px}
          .divider{width:48px;height:1px;background:rgba(255,255,255,.12);margin:36px auto}
          .direct-wrap{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap}
          .direct-label{font-size:.9rem;color:rgba(255,255,255,.45)}
          .direct-btn{display:inline-flex;align-items:center;gap:6px;font-size:.9rem;font-weight:700;color:rgba(255,255,255,.7);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.25);padding-bottom:1px;transition:color .2s,border-color .2s}
          .direct-btn:hover{color:#fff;border-color:rgba(255,255,255,.6)}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="blob blob1"></div>
          <div class="blob blob2"></div>
          <div class="inner">
            <div class="lbl ob">Prijs</div>
            <h2 class="ob">Alles voor minder dan<br>een kop koffie per dag</h2>
            <p class="tagline ob">20+ trainingen, Nova, digitale werkplek, community en marktplaats — alles inbegrepen.</p>
            <div class="price-wrap ob">
              <div class="price-big">€1,90<span>/dag</span></div>
            </div>
            <p class="price-note ob">bij jaarlijks betalen (€690/jaar) &nbsp;·&nbsp; of €69/maand</p>
            <div class="includes ob">
              <span class="pill">✓ 20+ trainingen</span>
              <span class="pill">✓ AI-coach Nova</span>
              <span class="pill">✓ Digitale werkplek</span>
              <span class="pill">✓ Community</span>
              <span class="pill">✓ Marktplaats</span>
            </div>
            <div class="ctas ob">
              <a class="btn-p" href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top" data-lightbox>Start gratis <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <a class="btn-g" href="https://www.businessbaas.com/contact" target="_top">Stel een vraag</a>
            </div>
            <p class="trust ob">Geen creditcard nodig &nbsp;·&nbsp; Direct toegang &nbsp;·&nbsp; Geen verborgen kosten</p>
            <div class="divider ob"></div>
            <div class="direct-wrap ob">
              <span class="direct-label">Al overtuigd?</span>
              <a class="direct-btn" href="https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200" target="_top">Word direct lid — €690/jaar <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style="vertical-align:middle"><path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-pricing', BBPlatformPricing);
})();
