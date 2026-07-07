(function () {
  if (customElements.get('bb-gratis-training')) return;
  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';
  class BBGratisTraining extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .hero{background:#0D2240;padding:80px 24px 64px;text-align:center;position:relative;overflow:hidden}
          .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(232,93,4,.13) 0%,transparent 65%);pointer-events:none}
          .inner{max-width:640px;margin:0 auto;position:relative;z-index:2}
          .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:12px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:24px}
          .dot{width:6px;height:6px;border-radius:50%;background:#E85D04;display:inline-block;flex-shrink:0}
          h1{font-size:clamp(28px,5vw,52px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:16px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:17px;color:rgba(255,255,255,.6);line-height:1.7;max-width:500px;margin:0 auto 40px}
          .checks{display:flex;flex-wrap:wrap;justify-content:center;gap:12px 24px;margin-bottom:48px}
          .check{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:rgba(255,255,255,.85)}
          .check::before{content:'✓';width:20px;height:20px;border-radius:50%;background:rgba(232,93,4,.2);color:#E85D04;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .divider{width:48px;height:3px;background:rgba(232,93,4,.4);border-radius:2px;margin:0 auto 40px}
          .form-intro{font-size:20px;font-weight:800;color:#fff;margin-bottom:8px}
          .form-sub{font-size:15px;color:rgba(255,255,255,.45);margin-bottom:32px}
          .arrow{display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.3);font-size:13px}
          .arrow svg{animation:bounce 1.6s ease-in-out infinite}
          @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
          .ob{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <div class="hero">
          <div class="inner">
            <div class="badge ob"><span class="dot"></span>Volledig gratis</div>
            <h1 class="ob">Begin vandaag met de<br><em>gratis BusinessBaas</em> training</h1>
            <p class="sub ob">Leer alles wat je nodig hebt om je bedrijf succesvol te starten — op jouw tempo, zonder verplichtingen.</p>
            <div class="checks ob">
              <span class="check">20+ praktische modules</span>
              <span class="check">Direct toegang</span>
              <span class="check">Geen creditcard nodig</span>
              <span class="check">Altijd beschikbaar</span>
            </div>
            <div class="divider ob"></div>
            <p class="form-intro ob">Vul hieronder je gegevens in</p>
            <p class="form-sub ob">Je ontvangt direct toegang na aanmelding</p>
            <div class="arrow ob">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="rgba(255,255,255,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </div>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-gratis-training', BBGratisTraining);
})();
