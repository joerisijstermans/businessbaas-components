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
          section{padding:104px 24px 96px;background:#0D2240;font-family:'Inter',sans-serif;text-align:center;position:relative;overflow:hidden}
          .blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.16;pointer-events:none}
          .blob1{width:500px;height:500px;background:#E85D04;top:-160px;right:-120px}
          .blob2{width:420px;height:420px;background:#2563EB;bottom:-120px;left:-80px}
          .inner{max-width:620px;margin:0 auto;position:relative;z-index:1}
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px}
          h2{font-size:clamp(2rem,4.5vw,3.2rem);font-weight:900;color:#fff;letter-spacing:-.04em;margin-bottom:40px;line-height:1.1}
          h2 em{font-style:normal;color:#E85D04}
          .price-block{margin-bottom:40px}
          .price-big{font-size:clamp(4rem,10vw,6rem);font-weight:900;color:#fff;letter-spacing:-.05em;line-height:1}
          .price-big span{color:#E85D04}
          .price-note{font-size:.95rem;color:rgba(255,255,255,.45);margin-top:6px}
          .btn-p{display:inline-flex;align-items:center;gap:9px;padding:17px 40px;background:#E85D04;color:#fff;font-size:1.05rem;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s,box-shadow .2s;font-family:'Inter',sans-serif;margin-bottom:14px}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 14px 36px rgba(232,93,4,.42)}
          .trust{font-size:.82rem;color:rgba(255,255,255,.28);margin-bottom:24px}
          .divider{width:40px;height:1px;background:rgba(255,255,255,.1);margin:0 auto 28px}
          .plans-link{display:inline-flex;align-items:center;gap:6px;font-size:.9rem;font-weight:600;color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s}
          .plans-link:hover{color:rgba(255,255,255,.85)}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="blob blob1"></div>
          <div class="blob blob2"></div>
          <div class="inner">
            <div class="lbl ob">Kom aan boord</div>
            <h2 class="ob">Voor minder dan een<br>kop koffie per dag<em>.</em></h2>
            <div class="price-block ob">
              <div class="price-big">€1,90<span>/dag</span></div>
              <p class="price-note">bij jaarlijkse betaling</p>
            </div>
            <a class="btn-p ob" href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top" data-lightbox>
              Gratis training starten
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 8.5H14M14 8.5L9.5 4M14 8.5L9.5 13" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="trust ob">Geen creditcard nodig &nbsp;·&nbsp; Direct toegang &nbsp;·&nbsp; Geen verborgen kosten</p>
            <div class="divider ob"></div>
            <a class="plans-link ob" href="https://www.businessbaas.com/prijzen" target="_top">
              Bekijk alle abonnementen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-pricing', BBPlatformPricing);
})();
