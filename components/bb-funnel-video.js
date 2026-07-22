(function () {
  if (customElements.get('bb-funnel-video')) return;
  class BBFunnelVideo extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif;background:#0a1a33}
          .wrap{max-width:900px;margin:0 auto;padding:0 24px 56px}
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
        <div class="wrap">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/gQgM3-SN-4k?rel=0&modestbranding=1&color=white"
              title="Jouw eerste betalende klant in 48 uur – BusinessBaas gratis training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <p class="caption">🔒 Gratis training · <strong>Jouw eerste betalende klant in 48 uur</strong></p>
          <div class="hot-cta">
            <p>Klaar om te beginnen? Word nu lid en zet de volgende stap.</p>
            <a href="https://buy.stripe.com/aFabJ22gG8sy9Fa1nqeZ200">
              Ja, ik wil volledige toegang
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <p class="hot-cta-sub">✓ Direct toegang &nbsp;·&nbsp; ✓ Geen verborgen kosten &nbsp;·&nbsp; ✓ Maandelijks opzegbaar</p>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-funnel-video', BBFunnelVideo);
})();
