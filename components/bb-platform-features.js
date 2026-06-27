(function () {
  if (customElements.get('bb-platform-features')) return;
  class BBPlatformFeatures extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      const features = [
        {
          icon: '🎓', label: '17 trainingen', color: '#0D2240',
          title: 'Stap-voor-stap Trainingen',
          desc: 'Twee modules met 17 praktische trainingen én een Kickstart Challenge. Werkboeken, checklists en opdrachten die je direct kunt toepassen, in jouw eigen tempo.',
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['Module 1: Jouw ondernemersidentiteit','100%','#22C55E'],['Module 2: KVK & administratie','100%','#22C55E'],['Module 3: Doelgroep & niche','78%','#E85D04'],['Module 4: Prijsstrategie','0%','#CBD5E1'],['Module 5: Eerste klanten','0%','#CBD5E1']].map(([t,p,c]) => `
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
          icon: '🤖', label: 'AI-gedreven', color: '#E85D04',
          title: 'Nova, jouw AI-coach',
          desc: 'Jouw persoonlijke businesscoach, altijd beschikbaar. Nova kent jouw trainingen, weet waar je mee bezig bent en helpt je doorpakken als je vastloopt. Nooit generiek, altijd in jouw context.',
          visual: `<div style="display:flex;flex-direction:column;gap:12px">
            ${[['Nova','Hoi! Hoe kan ik je vandaag helpen?',false],['Jij','Ik weet niet hoe ik mijn eerste klant moet aanspreken.',true],['Nova','Dat snap ik. Waar loop je precies op vast — de boodschap of het eerste contact?',false],['Jij','Eigenlijk allebei. Ik weet gewoon niet waar ik moet beginnen.',true],['Nova','Laten we beginnen met je aanbod scherp maken. Vertel: voor wie doe je het precies?',false]].map(([who,msg,isUser]) => `
              <div style="display:flex;gap:8px;align-items:flex-start;${isUser ? 'flex-direction:row-reverse' : ''}">
                <div style="width:28px;height:28px;border-radius:50%;background:${isUser ? 'rgba(255,255,255,.15)' : '#E85D04'};display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;color:#fff;flex-shrink:0">${who[0]}</div>
                <div style="background:${isUser ? '#E85D04' : 'rgba(255,255,255,.1)'};border-radius:12px;padding:9px 13px;font-size:.8rem;color:rgba(255,255,255,.9);line-height:1.5;max-width:78%;${isUser ? 'border-bottom-right-radius:3px' : 'border-bottom-left-radius:3px'}">${msg}</div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '✨', label: 'Nieuw', color: '#7C3AED',
          title: 'Slim Ondernemen met AI',
          desc: 'Naast Nova leer je ook hoe je als ondernemer AI-tools slim inzet in je dagelijks werk. Van automatiseren tot creëren, van onderzoek doen tot klanten winnen.',
          visual: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            ${[['🔍','Marktonderzoek','AI analyseert je niche in seconden'],['✍️','Content creëren','Posts, mails en aanbiedingen op maat'],['📊','Data analyseren','Inzichten uit jouw klantgegevens'],['🤝','Offertes schrijven','Professioneel, snel en overtuigend'],['🎯','Doelgroep bepalen','Persona\'s en ICP met AI-hulp'],['⚙️','Automatiseren','Workflows die voor jou werken']].map(([e,t,d]) => `
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px 12px">
                <div style="font-size:1.3rem;margin-bottom:6px">${e}</div>
                <div style="font-size:.8rem;font-weight:700;color:#fff;margin-bottom:4px">${t}</div>
                <div style="font-size:.72rem;color:rgba(255,255,255,.55);line-height:1.4">${d}</div>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '🖥️', label: 'Altijd bij', color: '#0D9488',
          title: 'Digitale Werkplek',
          desc: 'De plek waar jouw ondernemersplan vorm krijgt. Alle opdrachten uit de trainingen werk je hier direct uit in jouw eigen omgeving. Jouw onderneming, opgebouwd stap voor stap.',
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px"><div style="font-size:.7rem;color:rgba(255,255,255,.45);margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em">Voortgang</div><div style="font-size:1.6rem;font-weight:800;color:#fff">67%</div><div style="height:4px;background:rgba(255,255,255,.12);border-radius:4px;margin-top:8px"><div style="height:100%;width:67%;background:#E85D04;border-radius:4px"></div></div></div>
              <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px"><div style="font-size:.7rem;color:rgba(255,255,255,.45);margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em">Opdrachten</div><div style="font-size:1.6rem;font-weight:800;color:#FACC15">3</div><div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:4px">open opdrachten</div></div>
            </div>
            ${[['✅','Doelgroep bepaald en beschreven','done'],['✅','Brandstory uitgewerkt','done'],['⬜','Concurrentieanalyse invullen','open'],['⬜','Eerste salesgesprek voorbereiden','open']].map(([ic,t,st]) => `
              <div style="display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.05);border-radius:8px;padding:10px 12px">
                <span style="font-size:.9rem">${ic}</span>
                <span style="font-size:.82rem;color:rgba(255,255,255,${st === 'done' ? .35 : .8});${st === 'done' ? 'text-decoration:line-through' : ''}">${t}</span>
              </div>`).join('')}
          </div>`
        },
        {
          icon: '👥', label: 'Live events', color: '#7C3AED',
          title: 'Community & Coaching',
          desc: 'Je staat er niet alleen voor. Stel vragen aan medestarters, deel ervaringen en neem deel aan live groepscoaching sessies met Joeri en gastexperts.',
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['JB','Juurd Beijer','Hoe pakken jullie de eerste koude acquisitie aan? Ik loop hier op vast.','12 reacties','2 min geleden'],['SK','Sandra Klein','Net mijn eerste klant getekend! 🎉 De offerte-module heeft echt het verschil gemaakt.','24 reacties','1 uur geleden'],['JBe','Joyce Bekkers','Vraag over factureren aan particulieren vs. bedrijven, wie weet er meer over?','8 reacties','3 uur geleden']].map(([av,name,msg,reac,time]) => `
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
          icon: '🛒', label: 'Klanten vinden', color: '#16A34A',
          title: 'Marktplaats',
          desc: 'Zet jezelf in de spotlights op onze B2B-marktplaats. Vind klanten en samenwerkingen, nog voordat je officieel van start gaat.',
          visual: `<div style="display:flex;flex-direction:column;gap:12px">
            <div style="background:rgba(255,255,255,.07);border-radius:12px;padding:20px">
              <div style="display:flex;gap:12px;align-items:flex-start">
                <div style="width:48px;height:48px;border-radius:12px;background:#E85D04;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:#fff;flex-shrink:0">SK</div>
                <div>
                  <div style="font-size:.9rem;font-weight:700;color:#fff;margin-bottom:4px">Sandra Klein</div>
                  <div style="font-size:.75rem;color:rgba(255,255,255,.5);margin-bottom:10px">Freelance marketeer · Eindhoven</div>
                  <div style="font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.5;margin-bottom:12px">Social media strategie en contentcreatie voor MKB.</div>
                  <div style="display:flex;gap:6px;flex-wrap:wrap">${['Social Media','Content','LinkedIn'].map(t => `<span style="background:rgba(255,255,255,.1);border-radius:50px;padding:3px 10px;font-size:.7rem;color:rgba(255,255,255,.7)">${t}</span>`).join('')}</div>
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
          icon: '📅', label: 'Maandelijks', color: '#2563EB',
          title: 'LIVE Events & Webinars',
          desc: 'Exclusieve online en offline events voor leden: expert-sessies, netwerkmomenten en BusinessBaas Masterclasses met Joeri en gastsprekers.',
          visual: `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['Volgende week','BusinessBaas LIVE Masterclass','Eerste klanten winnen in 30 dagen','Di 24 jun · 20:00','Joeri Sijstermans',true],['Over 2 weken','Expert Session: Belasting voor ZZP','Alles wat je moet weten als starter','Ma 30 jun · 19:30','Gastspreker: Ellen Bakker',false],['Volgende maand','Netwerk Event Limburg','Live bijeenkomst voor BusinessBaas-leden','Za 12 jul · 14:00','Echt, Limburg',false]].map(([when,title,sub,dt,host,featured]) => `
              <div style="background:${featured ? 'rgba(232,93,4,.2)' : 'rgba(255,255,255,.07)'};border:1px solid ${featured ? 'rgba(232,93,4,.4)' : 'rgba(255,255,255,.08)'};border-radius:10px;padding:14px">
                <div style="font-size:.68rem;font-weight:700;color:${featured ? '#E85D04' : 'rgba(255,255,255,.4)'};text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px">${when}</div>
                <div style="font-size:.85rem;font-weight:700;color:#fff;margin-bottom:3px">${title}</div>
                <div style="font-size:.75rem;color:rgba(255,255,255,.55);margin-bottom:8px">${sub}</div>
                <div style="display:flex;justify-content:space-between;font-size:.72rem;color:rgba(255,255,255,.4)"><span>📅 ${dt}</span><span>👤 ${host}</span></div>
              </div>`).join('')}
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
          .lbl{font-size:.8rem;font-weight:700;color:#E85D04;letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
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
              <div class="lbl">Wat je krijgt</div>
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
