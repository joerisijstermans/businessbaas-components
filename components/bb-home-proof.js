(function () {
  if (customElements.get('bb-home-proof')) return;
  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';
  class BBHomeProof extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); this._cur = 0; }
    connectedCallback() {
      this._t = [
        { name:'Juurd Beijer', company:'Juurd Beijer Fotografie', quote:'Het heeft mij heel erg uit de comfort zone getrokken om daadwerkelijk nieuwe stappen te zetten. Tijdens het live event heb ik nieuwe mensen ontmoet, contacten gelegd en zelfs een nieuwe klant ontmoet! Kan ik BusinessBaas alleen maar aanraden.', result:'Nieuwe klant via live event', av:`${CDN}/juurd-prof.jpg` },
        { name:'Sandra Klein', company:'Sandra-Coacht', quote:'Wat een energie en inspiratie op het Businessbaas Live Event! Ik werd getriggerd om in mijn pitch mijn unieke \'ik\' nog duidelijker te laten zien. Grote complimenten aan Joeri en het hele team — ga zo door!', result:'Finalist Limburg Award 2025', av:`${CDN}/sandra-prof.jpg` },
        { name:'Joyce Bekkers', company:'Kindercoach The Joy', quote:'Het brengt mij meer zelfvertrouwen en zekerheid in mijn startende bedrijf. Met focus en stapsgewijs door de trainingen gaan krijg je meer gevoel dat je bedrijf tot leven komt. Geweldig en een echte aanrader!', result:'Meer zelfvertrouwen als ondernemer', av:`${CDN}/joyce-prof.jpg` },
        { name:'Stan Vreuls', company:'21x', quote:'Van het uitwerken van je idee tot het binnenhalen van je eerste klanten, je staat er niet alleen voor. Echt een stevige basis om mee te starten!', result:'Stevige basis voor zijn nieuwe bedrijf', av:`${CDN}/stan-prof.jpg` },
        { name:'Stephan Janssen', company:'Stephan Media', quote:'Via Businessbaas heb ik een goed framework gekregen om mijn onderneming een goede start te geven. De community is iets waar ik veel extra waarde uit haal door met lokale ondernemers te kunnen sparren over problemen waar we tegenaan lopen.', result:'Framework én actieve community', av:`${CDN}/stephan-prof.png` },
        { name:'Shauna Mols', company:'Mols marketing', quote:'Dankzij BusinessBaas heb ik niet alleen mijn bedrijf vormgegeven, maar ook mezelf opnieuw leren kennen als ondernemer. Dé investering voor elke starter die méér wil dan alleen een goed businessplan.', result:'Stevige basis voor bedrijf én zichzelf', av:`${CDN}/shauna-prof.jpg` },
        { name:'Jorn Gijzen', company:'Talent Rocketeers', quote:'Nova voelt als een écht persoon om mee te sparren: ze helpt mijn plannen te structureren en geeft precies de juiste inspiratie wanneer ik vastloop. Bovendien is de prijs-kwaliteitverhouding top: professionele tools, coaching én een actieve community.', result:'Stap voor stap opgestart in eigen tempo', av:`${CDN}/jorn-prof.jpg` },
        { name:'Katharina März', company:'Katharinazorg', quote:'Stap voor stap ga je aan het werk, niets wordt overgeslagen. Joeri kijkt persoonlijk met je mee en je krijgt advies en een fijne uitleg hoe je dingen kan aanpakken. Echt een aanrader voor persoonlijke ontwikkeling en groei!', result:'Persoonlijk advies op maat', av:`${CDN}/katharina-prof.jpg` },
        { name:'Gijs Kohlen', company:'CitralStudios', quote:'Dankzij BusinessBaas heb ik mijn ondernemersmindset echt kunnen aanscherpen. Het heeft me geholpen om niet alleen naar de groei van mijn bedrijf te kijken, maar ook naar mijn eigen ontwikkeling als ondernemer. Een waardevolle investering die je echt in beweging brengt.', result:'Ondernemersmindset aangescherpt', av:`${CDN}/gijs-prof.jpg` },
        { name:'Loes Kluter', company:'Kluter Vastgoedpresentatie', quote:'Die training heeft echt het verschil gemaakt voor mijn bedrijf! Dankzij de praktische en heldere aanpak heb ik mijn niche scherp voor ogen én weet ik hoe ik ze gericht kan aanspreken. Absoluut een aanrader!', result:'Niche scherp en gericht aanpakken', av:`${CDN}/loes-prof.png` },
        { name:'Inge Höper', company:'Kommeshier', quote:'Het baken bij het starten van een bedrijf! Een duidelijke weg, stap voor stap, en helder advies als het even niet zo gaat als je graag zou willen.', result:'Duidelijke weg, stap voor stap', av:`${CDN}/inge-prof.png` },
      ];
      this._n = this._t.length;
      this.render();
      this._bind();
      this._obs();
    }
    _vis() { return window.innerWidth >= 960 ? 3 : window.innerWidth >= 580 ? 2 : 1; }
    _pages() { return Math.ceil(this._n / this._vis()); }
    _maxCur() { return Math.max(0, this._n - this._vis()); }
    _step(dir) {
      const vis = this._vis();
      const prev = this._cur;
      this._cur = Math.max(0, Math.min(this._cur + dir * vis, this._maxCur()));
      if (this._cur === prev) this._cur = dir > 0 ? 0 : this._maxCur();
      this._slide();
    }
    _slide() {
      const sr = this.shadowRoot;
      const card = sr.querySelector('.card');
      if (!card) return;
      const step = card.getBoundingClientRect().width + 20;
      sr.querySelector('.track').style.transform = `translateX(-${this._cur * step}px)`;
      const page = Math.floor(this._cur / this._vis());
      sr.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === page));
    }
    _buildDots() {
      const dotsEl = this.shadowRoot.getElementById('dots');
      if (!dotsEl) return;
      dotsEl.innerHTML = '';
      const pages = this._pages();
      for (let i = 0; i < pages; i++) {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' on' : '');
        d.setAttribute('aria-label', 'Pagina ' + (i + 1));
        d.addEventListener('click', () => { this._cur = Math.min(i * this._vis(), this._maxCur()); this._slide(); });
        dotsEl.appendChild(d);
      }
    }
    render() {
      const t = this._t;
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#fff;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:0.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:40px;}
          .hl h2{font-size:clamp(32px,4.5vw,52px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-0.03em;margin-bottom:14px;}
          .hl h2 em{font-style:normal;color:var(--orange);}
          .gb{display:inline-flex;align-items:center;gap:10px;padding:8px 16px;background:#F8F9FA;border:1px solid #E0E0E0;border-radius:12px;}
          .gl{width:26px;height:26px;border-radius:50%;background:#fff;border:1.5px solid #E0E0E0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#4285F4;flex-shrink:0;}
          .gs{font-size:15px;font-weight:800;color:#202124;line-height:1;}
          .gst{color:#FBBC04;font-size:12px;}
          .gsl{font-size:11px;color:#5F6368;margin-top:2px;font-weight:500;}
          .slider-area{overflow:hidden;}
          .track{display:flex;gap:20px;transition:transform .45s cubic-bezier(.25,.46,.45,.94);will-change:transform;}
          .card{flex:0 0 calc((100% - 40px) / 3);background:#F4F6FA;border:1px solid rgba(13,34,64,0.09);border-radius:24px;padding:32px 28px;display:flex;flex-direction:column;transition:box-shadow .25s,transform .25s;}
          .card:hover{box-shadow:0 8px 28px rgba(13,34,64,0.09);transform:translateY(-2px);}
          blockquote{font-size:15px;color:#374151;line-height:1.72;font-style:italic;font-weight:400;flex:1;margin:0 0 24px;}
          .person{display:flex;align-items:center;gap:12px;}
          .person img{width:46px;height:46px;border-radius:50%;object-fit:cover;border:2.5px solid rgba(13,34,64,.12);flex-shrink:0;}
          .pn{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:2px;}
          .co{font-size:12px;color:#6B7280;}
          .res-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:rgba(232,93,4,.12);border-radius:50px;font-size:11px;font-weight:700;color:#E85D04;margin-top:10px;}
          .nav-row{display:flex;align-items:center;gap:14px;margin-top:24px;}
          .arr{width:42px;height:42px;border-radius:50%;border:1.5px solid rgba(13,34,64,0.18);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .22s;flex-shrink:0;color:var(--navy);padding:0;}
          .arr:hover{background:var(--navy);color:#fff;border-color:var(--navy);}
          .dots{display:flex;gap:7px;align-items:center;flex:1;}
          .dot{width:8px;height:8px;border-radius:50%;background:rgba(13,34,64,.15);border:none;cursor:pointer;padding:0;transition:all .25s;flex-shrink:0;}
          .dot.on{background:var(--orange);width:22px;border-radius:4px;}
          .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(13,34,64,.08);border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(13,34,64,.06);margin-top:48px;}
          .sc{background:#fff;padding:28px 20px;text-align:center;opacity:0;transform:translateY(14px);transition:all .6s ease;}
          .sc.show{opacity:1;transform:translateY(0);}
          .sn{font-size:36px;font-weight:900;color:var(--navy);letter-spacing:-.03em;}
          .sn span{color:var(--orange);}
          .sl2{font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:.06em;margin-top:6px;}
          .cs{text-align:center;margin-top:52px;}
          .cs p{font-size:20px;font-weight:700;color:var(--navy);margin-bottom:18px;}
          .cs p em{font-style:normal;color:var(--orange);}
          .sb{display:inline-flex;align-items:center;gap:9px;padding:14px 30px;background:var(--orange);color:#fff;font-size:15px;font-weight:700;border-radius:50px;text-decoration:none;transition:all .22s;font-family:var(--font);}
          .sb:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 8px 26px rgba(232,93,4,.35);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:960px){section{padding:64px 20px;}.card{flex:0 0 calc((100% - 20px) / 2);}}
          @media(max-width:580px){.card{flex:0 0 100%;}.stats{grid-template-columns:1fr 1fr;}}
          @media(max-width:480px){.stats{grid-template-columns:1fr;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Resultaten</span></div>
            <div class="head ob">
              <div class="hl">
                <h2>Wat starters<br><em>bereiken met ons</em></h2>
              </div>
              <div class="gb">
                <div class="gl">G</div>
                <div><div class="gs">4.9 <span class="gst">★★★★★</span></div><div class="gsl">Google Reviews</div></div>
              </div>
            </div>
            <div class="slider-area ob">
              <div class="track">
                ${t.map(s => `<div class="card">
                  <blockquote>${s.quote}</blockquote>
                  <div>
                    <div class="person">
                      <img src="${s.av}" alt="${s.name}">
                      <div><div class="pn">${s.name}</div><div class="co">${s.company}</div></div>
                    </div>
                    <div class="res-tag">✓ ${s.result}</div>
                  </div>
                </div>`).join('')}
              </div>
            </div>
            <div class="nav-row ob">
              <button class="arr prev-btn" aria-label="Vorige"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9L11 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              <div class="dots" id="dots"></div>
              <button class="arr next-btn" aria-label="Volgende"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4L12 9L7 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
            <div class="stats">
              <div class="sc"><div class="sn">25<span>+</span></div><div class="sl2">Actieve leden</div></div>
              <div class="sc" style="transition-delay:.1s"><div class="sn"><span>€</span>2,30</div><div class="sl2">Per dag coaching</div></div>
              <div class="sc" style="transition-delay:.2s"><div class="sn">90</div><div class="sl2">Dagen programma</div></div>
              <div class="sc" style="transition-delay:.3s"><div class="sn">4.9<span>★</span></div><div class="sl2">Google beoordeling</div></div>
            </div>
            <div class="cs ob">
              <p>Jij kunt het volgende <em>succesverhaal</em> zijn</p>
              <a href="/voor-starters" class="sb">Start jouw gratis training <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
        </section>`;
    }
    _bind() {
      const sr = this.shadowRoot;
      sr.querySelector('.prev-btn').addEventListener('click', () => this._step(-1));
      sr.querySelector('.next-btn').addEventListener('click', () => this._step(1));
      const track = sr.querySelector('.track');
      let tx = 0;
      track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) this._step(dx < 0 ? 1 : -1); });
      window.addEventListener('resize', () => { this._cur = 0; this._buildDots(); this._slide(); }, { passive: true });
      this._buildDots();
    }
    _obs() {
      const o = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('show'), 60); o.unobserve(e.target); } }), { threshold: 0.08 });
      this.shadowRoot.querySelectorAll('.ob,.sc').forEach(el => o.observe(el));
    }
  }
  customElements.define('bb-home-proof', BBHomeProof);
})();
