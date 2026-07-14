(function () {
  if (customElements.get('bb-home-b2b')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBHomeB2B extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:var(--navy);padding:88px 24px;font-family:var(--font);position:relative;overflow:hidden;}
          section::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);background-size:52px 52px;pointer-events:none;}
          .glow{position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(232,93,4,0.14),transparent 68%);top:-180px;right:-120px;pointer-events:none;}
          .inner{max-width:1180px;margin:0 auto;position:relative;z-index:2;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:0.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .layout{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
          .left h2{font-size:clamp(32px,4.5vw,52px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-0.03em;margin-bottom:18px;}
          .left h2 em{font-style:normal;color:#E85D04;}
          .left p{font-size:17px;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:32px;}
          .bullets{display:flex;flex-direction:column;gap:14px;margin-bottom:36px;}
          .bullet{display:flex;align-items:flex-start;gap:13px;font-size:15px;color:rgba(255,255,255,0.80);line-height:1.5;}
          .bi{width:28px;height:28px;border-radius:8px;background:rgba(232,93,4,0.20);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;margin-top:1px;}
          .ctas{display:flex;gap:12px;flex-wrap:wrap;}
          .bm{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:var(--orange);color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:background 0.22s,transform 0.22s,box-shadow 0.22s;font-family:var(--font);}
          .bm:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,0.38);}
          .bg{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.85);font-size:15px;font-weight:600;border-radius:50px;text-decoration:none;border:1px solid rgba(255,255,255,0.16);transition:background 0.22s,transform 0.22s;font-family:var(--font);}
          .bg:hover{background:rgba(255,255,255,0.13);transform:translateY(-2px);}
          .right{display:flex;flex-direction:column;gap:16px;}
          .sc{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
          .sk{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.10);border-radius:18px;padding:24px 20px;text-align:center;transition:background 0.22s,border-color 0.22s,transform 0.22s;}
          .sk:hover{background:rgba(255,255,255,0.10);border-color:rgba(232,93,4,0.28);transform:translateY(-3px);}
          .skn{font-size:38px;font-weight:900;color:#E85D04;letter-spacing:-0.04em;line-height:1;}
          .skl{font-size:12px;font-weight:600;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.07em;margin-top:6px;line-height:1.4;}
          .skd{font-size:13px;color:rgba(255,255,255,0.58);margin-top:8px;line-height:1.5;}
          .pc{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:18px;padding:22px 24px;display:flex;align-items:center;gap:20px;}
          .pl{background:rgba(255,255,255,0.10);border-radius:10px;padding:12px 16px;font-size:13px;font-weight:800;color:#fff;line-height:1.35;flex-shrink:0;text-align:center;}
          .pt p{font-size:13.5px;font-style:italic;color:rgba(255,255,255,0.72);line-height:1.55;margin-bottom:6px;}
          .pb{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:#10B981;background:rgba(16,185,129,0.14);border-radius:50px;padding:4px 10px;}
          .ob{opacity:0;transform:translateY(22px);transition:opacity 0.65s ease,transform 0.65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:900px){.layout{grid-template-columns:1fr;gap:48px;}}
          @media(max-width:600px){section{padding:64px 20px;}.sc{grid-template-columns:1fr 1fr;}.pc{flex-direction:column;align-items:flex-start;}}
        </style>
        <section>
          <div class="glow"></div>
          <div class="inner">
            <div class="layout">
              <div class="left ob">
                <span class="lbl">Voor Organisaties &amp; Coaches</span>
                <h2>Begeleid starters op schaal<br>zonder <em>extra capaciteit</em></h2>
                <p>Werk je met startende ondernemers? BusinessBaas maakt begeleiding schaalbaar: jij houdt de regie, wij leveren het platform, de trainingen en de AI-coach.</p>
                <div class="bullets">
                  <div class="bullet"><div class="bi">⚡</div><span>Begeleid tientallen ondernemers tegelijk vanuit één partner-dashboard</span></div>
                  <div class="bullet"><div class="bi">📊</div><span>Realtime inzicht in voortgang en betrokkenheid per deelnemer</span></div>
                  <div class="bullet"><div class="bi">🎯</div><span>Bewezen 90-daagse traject, aantoonbaar resultaat voor jouw netwerk</span></div>
                  <div class="bullet"><div class="bi">🤖</div><span>AI-coach Nova neemt routinevragen over, jij focust op waardevolle gesprekken</span></div>
                </div>
                <div class="ctas">
                  <a href="https://www.businessbaas.com/partner-demo" class="bm">Demo aanvragen <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                  <a href="https://www.businessbaas.com/voor-partners" class="bg">Meer informatie</a>
                </div>
              </div>
              <div class="right">
                <div class="sc ob">
                  <div class="sk"><div class="skn">25+</div><div class="skl">Actieve deelnemers</div><div class="skd">Maken dagelijks gebruik van het platform</div></div>
                  <div class="sk"><div class="skn">90</div><div class="skl">Dagen traject</div><div class="skd">Bewezen weg van idee naar eerste klant</div></div>
                  <div class="sk"><div class="skn" style="font-size:22px;line-height:1.2;">Op aanvraag</div><div class="skl">Prijs per seat</div><div class="skd">Tarief op maat. Neem contact op voor een offerte</div></div>
                  <div class="sk"><div class="skn">3</div><div class="skl">Stappen om te starten</div><div class="skd">Uitnodigen → aan de slag → monitoren</div></div>
                </div>
                <div class="pc ob">
                  <div class="pl" style="background:transparent;padding:4px 8px;"><img src="${CDN}/starterscentrum-logo.png" alt="StartersCentrum Limburg" style="max-width:120px;max-height:56px;object-fit:contain;display:block;"></div>
                  <div class="pt">
                    <p>"BusinessBaas heeft onze begeleiding van startende ondernemers volledig getransformeerd."</p>
                    <div class="pb">✓ Volledig operationeel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    }
    _obs() {
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.1});
      this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-b2b', BBHomeB2B);
})();
