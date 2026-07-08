(function () {
  if (customElements.get('bb-platform-cta')) return;
  class BBPlatformCta extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#0D2240;font-family:'Inter',sans-serif;text-align:center;position:relative;overflow:hidden}
          section::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 70% 40%,rgba(232,93,4,.12) 0%,transparent 55%);pointer-events:none}
          .inner{max-width:640px;margin:0 auto}
          .inner{max-width:640px;margin:0 auto;position:relative;z-index:1}
          h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:16px;line-height:1.2}
          p{font-size:1.05rem;color:rgba(255,255,255,.65);margin-bottom:36px;line-height:1.6}
          .btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
          .btn-p{background:#E85D04;color:#fff;padding:16px 36px;border-radius:50px;font-size:1rem;font-weight:700;text-decoration:none;transition:background .2s,transform .2s,box-shadow .2s;display:inline-block;font-family:'Inter',sans-serif}
          .btn-p:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,.38)}
          .btn-g{border:2px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);padding:16px 36px;border-radius:50px;font-size:1rem;font-weight:600;text-decoration:none;transition:all .2s;display:inline-block;font-family:'Inter',sans-serif}
          .btn-g:hover{border-color:rgba(255,255,255,.6);background:rgba(255,255,255,.07)}
          .sub-note{margin-top:16px;font-size:.85rem;color:rgba(255,255,255,.35)}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <h2 class="ob">Overtuigd? Begin vandaag.</h2>
            <p class="ob">Word direct lid en krijg toegang tot alle trainingen, Nova, de digitale werkplek en de community. Of stel eerst een vraag — we helpen je graag.</p>
            <div class="btns ob">
              <a class="btn-p" href="https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200" target="_top">Word nu lid — €690/jaar <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="vertical-align:middle;margin-left:4px"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <a class="btn-g" href="https://www.businessbaas.com/contact" target="_top">Stel een vraag</a>
            </div>
            <p class="sub-note ob">Of start eerst gratis: <a href="https://www.businessbaas.com/gratis-training-aanvragen" target="_top" style="color:rgba(255,255,255,.55);text-underline-offset:3px;text-decoration:underline">bekijk de gratis training →</a></p>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .15 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-cta', BBPlatformCta);
})();
