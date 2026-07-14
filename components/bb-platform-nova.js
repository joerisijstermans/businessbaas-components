(function () {
  if (customElements.get('bb-platform-nova')) return;
  class BBPlatformNova extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#0D2240;font-family:'Inter',sans-serif;overflow:hidden;position:relative}
          .blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.25}
          .blob1{width:500px;height:500px;background:#E85D04;top:-150px;right:-100px}
          .blob2{width:400px;height:400px;background:#2563EB;bottom:-100px;left:-80px}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative;z-index:1}
          .label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:20px;line-height:1.15}
          h2 span{color:#E85D04}
          p{font-size:1rem;color:rgba(255,255,255,.72);line-height:1.7;margin-bottom:20px}
          .bullets{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:32px}
          .bullets li{display:flex;align-items:flex-start;gap:12px;color:rgba(255,255,255,.85);font-size:.95rem;line-height:1.5}
          .bullets li::before{content:'✓';width:22px;height:22px;border-radius:50%;background:#E85D04;color:#fff;font-size:.7rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
          .privacy{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:10px 16px;font-size:.8rem;color:rgba(255,255,255,.6)}
          .chat{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:24px;display:flex;flex-direction:column;gap:16px}
          .msg{display:flex;gap:10px;align-items:flex-start}
          .msg.nova{flex-direction:row}
          .msg.user{flex-direction:row-reverse}
          .avatar{width:32px;height:32px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700}
          .avatar.n{background:#E85D04;color:#fff}
          .avatar.u{background:rgba(255,255,255,.15);color:#fff;font-size:.7rem}
          .bubble{padding:12px 16px;border-radius:14px;font-size:.875rem;line-height:1.55;max-width:82%}
          .bubble.n{background:rgba(255,255,255,.1);color:rgba(255,255,255,.9);border-bottom-left-radius:4px}
          .bubble.u{background:#E85D04;color:#fff;border-bottom-right-radius:4px;text-align:right}
          .typing{display:flex;gap:4px;align-items:center;padding:12px 16px;background:rgba(255,255,255,.08);border-radius:14px;border-bottom-left-radius:4px}
          .dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.4);animation:blink 1.2s infinite}
          .dot:nth-child(2){animation-delay:.2s}
          .dot:nth-child(3){animation-delay:.4s}
          @keyframes blink{0%,80%,100%{opacity:.3}40%{opacity:1}}
          .chat-input{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:12px 20px;color:rgba(255,255,255,.4);font-size:.85rem;margin-top:8px;font-family:'Inter',sans-serif}
          @media(max-width:900px){.inner{grid-template-columns:1fr;gap:48px}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="blob blob1"></div>
          <div class="blob blob2"></div>
          <div class="inner">
            <div>
              <div class="label ob">Jouw AI-coach</div>
              <h2 class="ob"><span>Nova</span> staat altijd voor je klaar</h2>
              <p class="ob">Nova is meer dan een assistent. Ze is jouw persoonlijke businesscoach die er altijd voor je is, ook als het even tegenzit. Ze kent jouw trainingsprogramma van binnen en buiten, weet precies waar je mee bezig bent en helpt je de volgende stap zetten op het moment dat jij het nodig hebt.</p>
              <ul class="bullets ob">
                <li>Er voor je als je vastloopt, twijfelt of gewoon even wil sparren</li>
                <li>Kent je trainingen, altijd op de hoogte van waar jij staat</li>
                <li>Helpt je denken, plannen en doorpakken, 24/7</li>
                <li>Reageert in jouw context, nooit generiek of van de plank</li>
              </ul>
              <div class="privacy ob">🔒 Jij kiest wat je deelt. Jouw gegevens blijven veilig.</div>
            </div>
            <div class="ob" style="transition-delay:.1s">
              <div style="border-radius:20px;overflow:hidden;aspect-ratio:16/9;box-shadow:0 16px 48px rgba(0,0,0,0.35);margin-bottom:14px">
                <video width="100%" height="100%" controls style="display:block;object-fit:cover">
                  <source src="https://video.wixstatic.com/video/6c17f4_6d950e28f6264dc1904fa600c8fd6013/1080p/mp4/file.mp4" type="video/mp4">
                </video>
              </div>
              <p style="text-align:center;font-size:.8rem;color:rgba(255,255,255,.4);margin:0">Nova stelt zich voor · 31 sec</p>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-nova', BBPlatformNova);
})();
