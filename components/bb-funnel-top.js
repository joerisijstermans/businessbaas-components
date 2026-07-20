(function () {
  if (customElements.get('bb-funnel-top')) return;
  class BBFunnelTop extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif;background:#0a1a33}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}

          /* HEADER */
          .header{background:linear-gradient(to bottom,#0D2240 0%,#142c54 40%,#0a1a33 100%);padding:72px 24px 64px;text-align:center;position:relative;overflow:hidden}
          .header::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 30%,rgba(232,93,4,.13) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:760px;margin:0 auto;position:relative;z-index:2}
          .label{display:inline-flex;align-items:center;gap:8px;padding:5px 14px;margin-bottom:24px;background:rgba(232,93,4,.2);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:11.5px;font-weight:700;color:rgba(255,255,255,.85);text-transform:uppercase;letter-spacing:.1em}
          h1{font-size:clamp(28px,5vw,56px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.035em;margin-bottom:20px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:clamp(15px,2vw,18px);color:rgba(255,255,255,.65);line-height:1.6;max-width:580px;margin:0 auto 36px}
          .checks{display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:40px}
          .check{display:flex;align-items:center;gap:10px;font-size:15px;color:rgba(255,255,255,.8)}
          .check::before{content:'✓';width:22px;height:22px;border-radius:50%;background:rgba(232,93,4,.2);color:#E85D04;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .arrow{font-size:28px;color:rgba(232,93,4,.7);animation:bounce 1.6s ease-in-out infinite}
          @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}

          /* VIDEO */
          .video-wrap{max-width:900px;margin:0 auto;padding:0 24px 56px}
          .video-frame{width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.5);background:#000}
          .video-frame iframe{width:100%;height:100%;border:none;display:block}
          .caption{text-align:center;margin-top:20px;font-size:14px;color:rgba(255,255,255,.35)}
          .caption strong{color:rgba(255,255,255,.55)}
          .hot-cta{margin-top:32px;text-align:center;padding:28px 24px;background:rgba(232,93,4,.1);border:1px solid rgba(232,93,4,.2);border-radius:16px}
          .hot-cta p{font-size:15px;font-weight:700;color:rgba(255,255,255,.8);margin-bottom:14px}
          .hot-cta a{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s;font-family:'Inter',sans-serif}
          .hot-cta a:hover{background:#CC4D00;transform:translateY(-2px)}
          .hot-cta-sub{font-size:12px;color:rgba(255,255,255,.3);margin-top:10px}
        </style>

        <!-- HEADER -->
        <section class="header">
          <div class="inner">
            <div class="label ob">🎓 Gratis training</div>
            <h1 class="ob">Jouw eerste betalende klant<br>in <em>48 uur</em></h1>
            <p class="sub ob">Kijk de training en ontdek de 3 stappen die startende ondernemers gebruiken om snel hun eerste klant binnen te halen, ook als je nog geen netwerk of ervaring hebt.</p>
            <div class="checks ob">
              <span class="check">Stap 1: Bepaal wie jouw ideale klant is (in 10 minuten)</span>
              <span class="check">Stap 2: Schrijf een bericht dat mensen niet kunnen negeren</span>
              <span class="check">Stap 3: Stuur het naar 10 mensen, vandaag nog</span>
            </div>
            <div class="arrow ob">↓</div>
          </div>
        </section>

        <!-- VIDEO -->
        <div class="video-wrap">
          <div class="video-frame ob">
            <iframe
              src="https://www.youtube.com/embed/gQgM3-SN-4k?rel=0&modestbranding=1&color=white"
              title="Jouw eerste betalende klant in 48 uur – BusinessBaas gratis training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <p class="caption ob">🔒 Gratis training · <strong>Jouw eerste betalende klant in 48 uur</strong></p>
          <div class="hot-cta ob">
            <p>Klaar om te beginnen? Word nu lid en zet de volgende stap.</p>
            <a href="https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200">
              Ja, ik wil volledige toegang
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="hot-cta-sub">Maandelijks opzegbaar · Geen verborgen kosten · Direct toegang</p>
          </div>
        </div>`;

      const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
      }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-funnel-top', BBFunnelTop);
})();
