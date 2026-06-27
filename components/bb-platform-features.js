(function () {
  if (customElements.get('bb-platform-features')) return;
  class BBPlatformFeatures extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const features = [
        {
          icon: '📚', label: 'Trainingen', color: '#E85D04',
          title: 'Weet precies wat je wanneer moet doen',
          desc: '17+ praktische trainingen die je door de beginfase leiden. Alleen wat nu relevant is, geen overweldigende theorie, geen eindeloos zoeken.',
          points: ['Van idee naar een helder, verkopend aanbod', 'Positionering die de juiste klanten aantrekt', 'Sales & acquisitie stap voor stap', 'Direct actie na elke les'],
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['Module 1: Strategie','100%','#22C55E'],['Module 2: Scoor je eerste klanten','78%','#E85D04'],['Kickstart Challenge','100%','#22C55E'],['Module 3: Slim met AI','0%','#CBD5E1']].map(([t,p,c])=>`
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:12px 16px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
                  <span style="font-size:.82rem;color:rgba(255,255,255,.85);font-weight:500">${t}</span>
                  <span style="font-size:.75rem;color:${c};font-weight:700">${p}</span>
                </div>
                <div style="height:4px;background:rgba(255,255,255,.12);border-radius:4px">
                  <div style="height:100%;width:${p};background:${c};border-radius:4px"></div>
                </div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '🖥️', label: 'Werkplek', color: '#3B82F6',
          title: 'Werk gestructureerd aan je bedrijf',
          desc: 'Geen passieve cursussen. In de digitale werkplek voer je direct de opdrachten uit. Elke week een concreet stuk verder, zichtbaar in je voortgang.',
          points: ['Opdrachten direct uitvoeren na elke training', 'Voortgang per module inzichtelijk', 'Je businessplan bouw je on-the-go', 'Altijd inzicht in waar je staat'],
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px"><div style="font-size:.7rem;color:rgba(255,255,255,.45);margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em">Voortgang</div><div style="font-size:1.6rem;font-weight:800;color:#fff">67%</div><div style="height:4px;background:rgba(255,255,255,.12);border-radius:4px;margin-top:8px"><div style="height:100%;width:67%;background:#E85D04;border-radius:4px"></div></div></div>
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px"><div style="font-size:.7rem;color:rgba(255,255,255,.45);margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em">Opdrachten</div><div style="font-size:1.6rem;font-weight:800;color:#FACC15">3</div><div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:4px">open opdrachten</div></div>
            </div>
            ${[['✅','Doelgroep bepaald en beschreven','done'],['✅','Brandstory uitgewerkt','done'],['⬜','Concurrentieanalyse invullen','open'],['⬜','Eerste salesgesprek voorbereiden','open']].map(([ic,t,st])=>`
              <div style="display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.05);border-radius:8px;padding:10px 12px">
                <span style="font-size:.9rem">${ic}</span>
                <span style="font-size:.82rem;color:rgba(255,255,255,${st==='done'?.35:.8});${st==='done'?'text-decoration:line-through':''}">${t}</span>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '🤖', label: 'AI-Coach Nova', color: '#8B5CF6',
          title: 'Persoonlijke coaching, geen chatbot',
          desc: 'Nova is niet zomaar een AI-assistent. Ze kent jóuw trainingen en jóuw situatie, en benadert je ultra-persoonlijk. Dat is iets wezenlijk anders dan ChatGPT. Toegankelijk voor minder dan €2,30 per dag.',
          points: ['Ultra-persoonlijk, afgestemd op jóuw traject', 'Altijd beschikbaar, ook \'s avonds en in het weekend', 'Advies op jouw situatie, niet op een standaard vraag', 'Gebouwd op alle BusinessBaas trainingen'],
          visual: `<div style="display:flex;flex-direction:column;gap:12px">
            ${[['Nova','Hoi! Hoe kan ik je vandaag helpen?',false],['Jij','Ik weet niet hoe ik mijn eerste klant moet aanspreken.',true],['Nova','Dat snap ik. Waar loop je precies op vast — de boodschap of het eerste contact?',false],['Jij','Eigenlijk allebei. Ik weet niet waar te beginnen.',true],['Nova','Laten we beginnen met je aanbod scherp maken. Voor wie doe je het precies?',false]].map(([who,msg,isUser])=>`
              <div style="display:flex;gap:8px;align-items:flex-start;${isUser?'flex-direction:row-reverse':''}">
                <div style="width:28px;height:28px;border-radius:50%;background:${isUser?'rgba(255,255,255,.15)':'#E85D04'};display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;color:#fff;flex-shrink:0">${who[0]}</div>
                <div style="background:${isUser?'#E85D04':'rgba(255,255,255,.1)'};border-radius:12px;padding:9px 13px;font-size:.8rem;color:rgba(255,255,255,.9);line-height:1.5;max-width:78%;${isUser?'border-bottom-right-radius:3px':'border-bottom-left-radius:3px'}">${msg}</div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '✨', label: 'Slim met AI', color: '#7C3AED',
          title: 'AI echt voor je laten werken als ondernemer',
          desc: 'Ontdek hoe je AI inzet als ondernemer op een manier die écht het verschil maakt. Van e-mail en agendabeheer tot automatiseren wat jou tijd kost, zodat jij je richt op waar je echt van aanvliegt.',
          points: ['AI als werknemer, niet als zoekmachine', 'Automatiseer terugkerende taken', 'Slimmer communiceren met klanten', '🚀 In ontwikkeling — coming soon'],
          visual: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            ${[['🔍','Marktonderzoek','Analyseer je niche in seconden'],['✍️','Content creëren','Posts, mails en aanbiedingen op maat'],['📊','Data analyseren','Inzichten uit jouw klantgegevens'],['🤝','Offertes schrijven','Professioneel, snel en overtuigend'],['🎯','Doelgroep bepalen','Persona\'s en ICP met AI-hulp'],['⚙️','Automatiseren','Workflows die voor jou werken']].map(([e,t,d])=>`
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px 12px">
                <div style="font-size:1.3rem;margin-bottom:6px">${e}</div>
                <div style="font-size:.8rem;font-weight:700;color:#fff;margin-bottom:4px">${t}</div>
                <div style="font-size:.72rem;color:rgba(255,255,255,.55);line-height:1.4">${d}</div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '🛒', label: 'Marktplaats', color: '#10B981',
          title: 'Vind je eerste klanten dichter bij huis',
          desc: 'Via onze WhatsApp-community deel je jouw aanbod met mede-ondernemers. Al diverse leden hebben via BusinessBaas opdrachten bij elkaar gevonden.',
          points: ['Deel je aanbod in de WhatsApp-community', 'Klanten vinden via mede-ondernemers', 'Members helpen members', 'Echte opdrachten, echte relaties'],
          visual: `<div style="display:flex;flex-direction:column;gap:12px">
            <div style="background:rgba(255,255,255,.07);border-radius:12px;padding:20px">
              <div style="display:flex;gap:12px;align-items:flex-start">
                <div style="width:48px;height:48px;border-radius:12px;background:#E85D04;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:#fff;flex-shrink:0">SK</div>
                <div>
                  <div style="font-size:.9rem;font-weight:700;color:#fff;margin-bottom:4px">Sandra Klein</div>
                  <div style="font-size:.75rem;color:rgba(255,255,255,.5);margin-bottom:10px">Freelance marketeer · Eindhoven</div>
                  <div style="font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.5;margin-bottom:12px">Social media strategie en contentcreatie voor MKB.</div>
                  <div style="display:flex;gap:6px;flex-wrap:wrap">${['Social Media','Content','LinkedIn'].map(t=>`<span style="background:rgba(255,255,255,.1);border-radius:50px;padding:3px 10px;font-size:.7rem;color:rgba(255,255,255,.7)">${t}</span>`).join('')}</div>
                </div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:12px;text-align:center"><div style="font-size:1.3rem;font-weight:800;color:#22C55E">12</div><div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:2px">Contactverzoeken</div></div>
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:12px;text-align:center"><div style="font-size:1.3rem;font-weight:800;color:#E85D04">3</div><div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:2px">Actieve leads</div></div>
            </div>
          </div>`
        },
        {
          icon: '🤝', label: 'Community', color: '#F59E0B',
          title: 'Ondernemen samen met mensen die het begrijpen',
          desc: 'Een actieve community van gelijkgestemde starters. Spar over uitdagingen, test ideeën en bouw aan je netwerk. Plus: live events waar je echte klanten kunt ontmoeten.',
          points: ['Online netwerk van startende ondernemers', 'Test je ideeën veilig en krijg feedback', 'BusinessBaas LIVE events', 'Sparringspartners die jou begrijpen'],
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['JB','Juurd Beijer','Hoe pakken jullie de eerste koude acquisitie aan? Ik loop hier op vast.','12 reacties','2 min geleden'],['SK','Sandra Klein','Net mijn eerste klant getekend! 🎉 De offerte-module heeft echt het verschil gemaakt.','24 reacties','1 uur geleden'],['JBe','Joyce Bekkers','Vraag over factureren aan particulieren vs. bedrijven, wie weet er meer over?','8 reacties','3 uur geleden']].map(([av,name,msg,reac,time])=>`
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px">
                <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
                  <div style="width:32px;height:32px;border-radius:50%;background:#E85D04;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0">${av}</div>
                  <div><div style="font-size:.82rem;font-weight:700;color:#fff">${name}</div><div style="font-size:.7rem;color:rgba(255,255,255,.4)">${time}</div></div>
                </div>
                <div style="font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.5;margin-bottom:8px">${msg}</div>
                <div style="font-size:.72rem;color:rgba(255,255,255,.4)">💬 ${reac}</div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '💬', label: '1 op 1 coaching', color: '#0D2240',
          title: 'Kom er samen uit met een expert',
          desc: 'Kom je er samen met Nova en de community niet uit? Dan kun je 1 op 1 coaching aanvragen. Een expert helpt je weer op weg! Van een quick scan tot een uitgebreide sparringsessie, altijd afgestemd op wat jij nodig hebt.',
          points: ['Persoonlijke sparringsessie op aanvraag', 'Van quick scan tot uitgebreide coaching', 'Altijd afgestemd op jóuw situatie', 'Aanvulling op Nova en de community'],
          visual: `<div style="display:flex;flex-direction:column;gap:12px">
            <div style="background:rgba(255,255,255,.07);border-radius:12px;padding:20px">
              <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
                <div style="width:52px;height:52px;border-radius:50%;background:#E85D04;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">👨‍💼</div>
                <div>
                  <div style="font-size:.9rem;font-weight:700;color:#fff">BusinessBaas Expert</div>
                  <div style="font-size:.75rem;color:rgba(255,255,255,.5)">Beschikbaar voor sparringsessie</div>
                </div>
              </div>
              ${[['Quick scan (30 min)','Snel inzicht in jouw knelpunt'],['Sparringsessie (60 min)','Diep duiken in jouw uitdaging'],['Terugkomgesprek','Voortgang checken en bijsturen']].map(([t,d])=>`
                <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08)">
                  <div style="width:20px;height:20px;border-radius:50%;background:rgba(232,93,4,.3);display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;color:#E85D04;flex-shrink:0;margin-top:1px">✓</div>
                  <div>
                    <div style="font-size:.82rem;font-weight:700;color:#fff;margin-bottom:2px">${t}</div>
                    <div style="font-size:.72rem;color:rgba(255,255,255,.5)">${d}</div>
                  </div>
                </div>`).join('')}
            </div>
            <div style="background:rgba(232,93,4,.15);border:1px solid rgba(232,93,4,.3);border-radius:10px;padding:14px;text-align:center">
              <div style="font-size:.82rem;color:rgba(255,255,255,.85);font-weight:600">Add-on bij jouw lidmaatschap</div>
              <div style="font-size:.72rem;color:rgba(255,255,255,.5);margin-top:4px">Aanvragen via de community of Nova</div>
            </div>
          </div>`
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
          .visual-box{background:#0D2240;border-radius:20px;padding:24px;min-height:400px;overflow:hidden;position:relative}
          .visual-badge{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:4px 12px;font-size:.72rem;font-weight:600;color:rgba(255,255,255,.7)}
          .visual-inner{position:relative;z-index:1}
          .visual-title{font-size:.75rem;font-weight:700;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px}
          .visual-content{animation:fadeSlide .35s ease}
          @keyframes fadeSlide{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
          @media(max-width:900px){.layout{grid-template-columns:1fr}.visual-panel{position:static;order:-1}}
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
                  <div class="visual-inner">
                    <div class="visual-title" id="vt"></div>
                    <div class="visual-content" id="vc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

      const fl = s.getElementById('fl');
      const vb = s.getElementById('vb');
      const vt = s.getElementById('vt');
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
        vt.textContent = f.title;
        vc.style.animation = 'none';
        vc.offsetHeight;
        vc.style.animation = '';
        vc.innerHTML = f.visual;
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
