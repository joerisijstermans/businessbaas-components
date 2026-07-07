(function () {
  if (customElements.get('bb-platform-features')) return;
  const CDN = 'https://joerisijstermans.github.io/businessbaas-components/assets';
  class BBPlatformFeatures extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const features = [
        {
          icon: '📚', label: 'Trainingen', color: '#E85D04',
          title: 'Weet precies wat je wanneer moet doen',
          desc: '17+ praktische trainingen die je door de beginfase leiden. Alleen wat nu relevant is, geen overweldigende theorie, geen eindeloos zoeken.',
          points: ['Van idee naar een helder, verkopend aanbod', 'Positionering die de juiste klanten aantrekt', 'Sales & acquisitie stap voor stap', 'Direct actie na elke les'],
          photo: `${CDN}/training-afbeelding.png`
        },
        {
          icon: '🖥️', label: 'Werkplek', color: '#3B82F6',
          title: 'Werk gestructureerd aan je bedrijf',
          desc: 'Geen passieve cursussen. In de digitale werkplek voer je direct de opdrachten uit. Elke week een concreet stuk verder, zichtbaar in je voortgang.',
          points: ['Opdrachten direct uitvoeren na elke training', 'Voortgang per module inzichtelijk', 'Je businessplan bouw je on-the-go', 'Altijd inzicht in waar je staat'],
          photo: `${CDN}/werkplek-afbeelding.png`
        },
        {
          icon: '🤖', label: 'AI-Coach Nova', color: '#8B5CF6',
          title: 'Persoonlijke coaching, geen chatbot',
          desc: 'Nova is niet zomaar een AI-assistent. Ze kent jóuw trainingen en jóuw situatie, en benadert je ultra-persoonlijk. Dat is iets wezenlijk anders dan ChatGPT. Toegankelijk voor minder dan €2,30 per dag.',
          points: ['Ultra-persoonlijk, afgestemd op jóuw traject', 'Altijd beschikbaar, ook \'s avonds en in het weekend', 'Advies op jouw situatie, niet op een standaard vraag', 'Gebouwd op alle BusinessBaas trainingen'],
          photo: `${CDN}/nova-afbeelding.png`
        },
        {
          icon: '✨', label: 'Slim met AI', color: '#7C3AED',
          title: 'AI echt voor je laten werken als ondernemer',
          desc: 'Ontdek hoe je AI inzet als ondernemer op een manier die écht het verschil maakt. Van e-mail en agendabeheer tot automatiseren wat jou tijd kost, zodat jij je richt op waar je echt van aanvliegt.',
          points: ['AI als werknemer, niet als zoekmachine', 'Automatiseer terugkerende taken', 'Slimmer communiceren met klanten', '🚀 In ontwikkeling — coming soon'],
          photo: `${CDN}/ai-tools-afbeelding.png`
        },
        {
          icon: '🛒', label: 'Marktplaats', color: '#10B981',
          title: 'Vind je eerste klanten dichter bij huis',
          desc: 'Via onze WhatsApp-community deel je jouw aanbod met mede-ondernemers. Al diverse leden hebben via BusinessBaas opdrachten bij elkaar gevonden.',
          points: ['Deel je aanbod in de WhatsApp-community', 'Klanten vinden via mede-ondernemers', 'Members helpen members', 'Echte opdrachten, echte relaties'],
          photo: `${CDN}/marktplaats-afbeelding.jpg`
        },
        {
          icon: '🤝', label: 'Community', color: '#F59E0B',
          title: 'Ondernemen samen met mensen die het begrijpen',
          desc: 'Een actieve community van gelijkgestemde starters. Spar over uitdagingen, test ideeën en bouw aan je netwerk. Plus: live events waar je echte klanten kunt ontmoeten.',
          points: ['Online netwerk van startende ondernemers', 'Test je ideeën veilig en krijg feedback', 'BusinessBaas LIVE events', 'Sparringspartners die jou begrijpen'],
          photo: `${CDN}/community-afbeelding.png`
        },
        {
          icon: '💬', label: '1 op 1 coaching', color: '#0D2240',
          title: 'Kom er samen uit met een expert',
          desc: 'Kom je er samen met Nova en de community niet uit? Dan kun je 1 op 1 coaching aanvragen. Een expert helpt je weer op weg! Van een quick scan tot een uitgebreide sparringsessie, altijd afgestemd op wat jij nodig hebt.',
          points: ['Persoonlijke sparringsessie op aanvraag', 'Van quick scan tot uitgebreide coaching', 'Altijd afgestemd op jóuw situatie', 'Aanvulling op Nova en de community'],
          photo: `${CDN}/coaching-afbeelding.jpg`
        }
      ];

      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          section{padding:88px 24px;background:#fff;font-family:'Inter',sans-serif}
          .inner{max-width:1200px;margin:0 auto}
          .hdr{margin-bottom:56px}
          .label{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
          h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#0D2240;letter-spacing:-.03em;margin-bottom:14px;line-height:1.12}
          .sub{font-size:1.05rem;color:#5A6780;line-height:1.7;max-width:520px}
          .layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
          .feat-list{display:flex;flex-direction:column;gap:4px}
          .feat-item{padding:16px 20px;border-radius:14px;cursor:pointer;transition:background .2s;border:1px solid transparent}
          .feat-item:hover{background:#F4F6FA}
          .feat-item.active{background:#F4F6FA;border-color:rgba(13,34,64,.08);box-shadow:0 4px 20px rgba(13,34,64,.07)}
          .feat-top{display:flex;align-items:center;gap:12px}
          .feat-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;transition:opacity .2s}
          .feat-icon.inactive{opacity:.5;filter:grayscale(50%)}
          .feat-title{font-size:.98rem;font-weight:700;color:#0D2240;transition:color .2s}
          .feat-item:not(.active) .feat-title{color:#5A6780;font-weight:500}
          .feat-desc{font-size:.84rem;color:#5A6780;line-height:1.6;margin-top:8px;display:none}
          .feat-item.active .feat-desc{display:block}
          .feat-bar{height:3px;background:#E4E8F0;border-radius:3px;margin-top:12px;overflow:hidden;display:none}
          .feat-item.active .feat-bar{display:block}
          .feat-bar-fill{height:100%;border-radius:3px;background:#E85D04;width:0%;transition:width .1s linear}
          .visual-panel{position:sticky;top:88px}
          .visual-box{border-radius:20px;overflow:hidden;position:relative;min-height:400px;background:#0D2240}
          .visual-badge{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);border-radius:50px;padding:5px 14px;font-size:.72rem;font-weight:600;color:#fff;z-index:1}
          .visual-content{width:100%;height:100%;animation:fadeSlide .35s ease}
          .visual-content img{width:100%;height:420px;object-fit:cover;display:block}
          @keyframes fadeSlide{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
          @media(max-width:900px){.layout{grid-template-columns:1fr}.visual-panel{position:static;order:-1}.visual-box{min-height:auto}.visual-content img{height:240px}}
          @media(max-width:480px){.visual-content img{height:200px}}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
          .ob.show{opacity:1;transform:none}
        </style>
        <section id="features">
          <div class="inner">
            <div class="hdr ob">
              <div class="label">Wat je krijgt</div>
              <h2>Zeven tools in één platform</h2>
              <p class="sub">BusinessBaas is meer dan een cursus. Het is je complete ondernemers-ecosysteem.</p>
            </div>
            <div class="layout ob">
              <div class="feat-list" id="fl"></div>
              <div class="visual-panel">
                <div class="visual-box">
                  <span class="visual-badge" id="vb"></span>
                  <div class="visual-content" id="vc"></div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

      const fl = s.getElementById('fl');
      const vb = s.getElementById('vb');
      const vc = s.getElementById('vc');
      let current = 0;
      let progress = 0;
      let interval;

      function render() {
        fl.innerHTML = '';
        features.forEach((f, i) => {
          const el = document.createElement('div');
          el.className = 'feat-item' + (i === current ? ' active' : '');
          el.innerHTML = `
            <div class="feat-top">
              <div class="feat-icon${i === current ? '' : ' inactive'}" style="background:${i === current ? f.color : '#F4F6FA'}">${f.icon}</div>
              <span class="feat-title">${f.title}</span>
            </div>
            ${i === current ? `<p class="feat-desc">${f.desc}</p><div class="feat-bar"><div class="feat-bar-fill" id="bar${i}" style="width:${progress}%"></div></div>` : ''}`;
          el.onclick = () => { current = i; progress = 0; clearInterval(interval); startCycle(); render(); updateVisual(); };
          fl.appendChild(el);
        });
      }

      function updateVisual() {
        const f = features[current];
        vb.textContent = f.label;
        vc.style.animation = 'none';
        vc.offsetHeight;
        vc.style.animation = '';
        vc.innerHTML = `<img src="${f.photo}" alt="${f.label}">`;
      }

      function startCycle() {
        interval = setInterval(() => {
          progress += 1;
          const bar = s.getElementById('bar' + current);
          if (bar) bar.style.width = progress + '%';
          if (progress >= 100) {
            progress = 0;
            current = (current + 1) % features.length;
            render();
            updateVisual();
          }
        }, 100);
      }

      render();
      updateVisual();
      startCycle();

      const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), { threshold: .1 });
      s.querySelectorAll('.ob').forEach(el => obs.observe(el));
    }
  }
  customElements.define('bb-platform-features', BBPlatformFeatures);
})();
