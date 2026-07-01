(function () {
  if (customElements.get('bb-about-facts')) return;
  class BBAboutFacts extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:72px 24px;background:#0D2240;font-family:'Inter',sans-serif}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
          h2{font-size:clamp(1.6rem,3.5vw,2.2rem);font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:20px;line-height:1.25}
          h2 em{color:#E85D04;font-style:normal}
          p{font-size:.95rem;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:24px}
          .facts{display:grid;grid-template-columns:1fr 1fr;gap:20px}
          .fact{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:20px}
          .fact .v{font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:-.03em}
          .fact .v em{color:#E85D04;font-style:normal}
          .fact .l{font-size:.8rem;color:rgba(255,255,255,.5);margin-top:4px}
          .links{display:flex;gap:16px;flex-wrap:wrap}
          .link-btn{padding:12px 28px;border-radius:50px;font-size:.9rem;font-weight:700;text-decoration:none;transition:all .2s;display:inline-block}
          .link-btn.primary{background:#E85D04;color:#fff}
          .link-btn.primary:hover{background:#CC4D00}
          .link-btn.ghost{border:2px solid rgba(255,255,255,.3);color:#fff}
          .link-btn.ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}
          @media(max-width:768px){.inner{grid-template-columns:1fr}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section>
          <div class="inner">
            <div>
              <h2 class="ob">BusinessBaas <em>in cijfers</em></h2>
              <p class="ob">Van een idee in Echt, Limburg tot een erkend platform voor starters door heel Nederland, dit zijn de feiten.</p>
              <div class="links ob">
                <a class="link-btn primary" href="https://buy.stripe.com/dRm5kE8F4cIO8B65DGeZ202">Probeer gratis</a>
                <a class="link-btn ghost" href="succesverhalen.html">Lees succesverhalen</a>
              </div>
            </div>
            <div class="facts ob">
              <div class="fact"><div class="v"><em>2025</em></div><div class="l">Lancering</div></div>
              <div class="fact"><div class="v">25<em>+</em></div><div class="l">Actieve leden</div></div>
              <div class="fact"><div class="v">20<em>+</em></div><div class="l">Trainingen</div></div>
              <div class="fact"><div class="v">4.9<em>/5</em></div><div class="l">Gemiddelde beoordeling</div></div>
              <div class="fact" style="grid-column:1/-1"><div class="v">🏆 <em>Finalist</em></div><div class="l">Limburg Awards 2025</div></div>
            </div>
          </div>
        </section>`;

      // Counter targets: keyed by label text for reliable matching
      const counterTargets = [
        { label: 'Actieve leden',          target: 25,  decimals: 0, suffix: '<em>+</em>' },
        { label: 'Trainingen',             target: 20,  decimals: 0, suffix: '<em>+</em>' },
        { label: 'Gemiddelde beoordeling', target: 4.9, decimals: 1, suffix: '<em>/5</em>' },
      ];

      const DURATION = 1400; // ms

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function animateCounter(vEl, target, decimals, suffix) {
        const start = performance.now();
        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / DURATION, 1);
          const eased = easeOutCubic(progress);
          const current = eased * target;
          const formatted = decimals > 0
            ? current.toFixed(decimals).replace('.', ',')
            : Math.floor(current).toString();
          vEl.innerHTML = formatted + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            // Ensure final value is exact
            const finalFormatted = decimals > 0
              ? target.toFixed(decimals).replace('.', ',')
              : target.toString();
            vEl.innerHTML = finalFormatted + suffix;
          }
        }
        requestAnimationFrame(tick);
      }

      let countersRun = false;

      function runCounters() {
        if (countersRun) return;
        countersRun = true;
        const facts = s.querySelectorAll('.facts .fact');
        facts.forEach(fact => {
          const lEl = fact.querySelector('.l');
          const vEl = fact.querySelector('.v');
          if (!lEl || !vEl) return;
          const labelText = lEl.textContent.trim();
          const cfg = counterTargets.find(c => c.label === labelText);
          if (!cfg) return;
          animateCounter(vEl, cfg.target, cfg.decimals, cfg.suffix);
        });
      }

      // General scroll-in observer for .ob elements
      const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          // When the facts grid becomes visible, trigger counters
          if (e.target.classList.contains('facts')) {
            runCounters();
          }
        }
      }), { threshold: .1 });

      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-about-facts', BBAboutFacts);
})();
