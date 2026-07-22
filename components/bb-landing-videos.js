(function () {
  if (customElements.get('bb-landing-videos')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBLandingVideos extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
          .ob.show{opacity:1;transform:none}
          .videos{padding:80px 24px;background:#fff}
          .videos-inner{max-width:860px;margin:0 auto;text-align:center}
          .section-label{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:#E85D04;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;justify-content:center}
          .section-label::before{content:'';display:block;width:26px;height:2px;background:#E85D04;border-radius:2px}
          h2{font-size:clamp(26px,3.5vw,42px);font-weight:900;color:#0D2240;letter-spacing:-.03em;line-height:1.1;margin-bottom:12px}
          h2 em{font-style:normal;color:#E85D04}
          .videos-sub{font-size:17px;color:#5A6780;margin-bottom:48px}
          .vid-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
          .vid-card{border-radius:20px;overflow:hidden;background:#0D2240;box-shadow:0 8px 32px rgba(13,34,64,.15)}
          .vid-frame{width:100%;aspect-ratio:9/16;display:block}
          .vid-frame iframe{width:100%;height:100%;border:none;display:block}
          .vid-info{padding:18px 22px}
          .vid-name{font-size:15px;font-weight:700;color:#fff}
          .vid-role{font-size:13px;color:rgba(255,255,255,.45);margin-top:3px}
          .vid-tag{display:inline-block;margin-top:10px;background:rgba(232,93,4,.2);color:#E85D04;font-size:12px;font-weight:700;padding:4px 12px;border-radius:50px;text-transform:uppercase;letter-spacing:.05em}
          @media(max-width:620px){.vid-grid{grid-template-columns:1fr}}
        </style>
        <section class="videos">
          <div class="videos-inner">
            <div class="section-label ob">In hun eigen woorden</div>
            <h2 class="ob">Hoor het van <em>BusinessBaas-leden</em></h2>
            <p class="videos-sub ob">Geen marketingpraatjes, gewoon echte ervaringen van starters die de stap hebben gezet.</p>
            <div class="vid-grid">
              <div class="vid-card ob">
                <div class="vid-frame"><iframe src="https://www.youtube.com/embed/SaKGtn-n1p8?rel=0&modestbranding=1" title="Katharina März – Katharinazorg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div class="vid-info"><div class="vid-name">Katharina März</div><div class="vid-role">Katharinazorg</div><span class="vid-tag">Persoonlijk advies op maat</span></div>
              </div>
              <div class="vid-card ob" style="transition-delay:.12s">
                <div class="vid-frame"><iframe src="https://www.youtube.com/embed/iNu3gVMENtU?rel=0&modestbranding=1" title="Jamie Senden – Overgangsconsulent" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div class="vid-info"><div class="vid-name">Jamie Senden</div><div class="vid-role">Overgangsconsulent</div><span class="vid-tag">Verandert mijn mindset</span></div>
              </div>
            </div>
          </div>
        </section>`;
      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }), { threshold: 0.08 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-landing-videos', BBLandingVideos);
})();
