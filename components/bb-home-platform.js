(function () {
  if (customElements.get('bb-home-platform')) return;
  const CDN = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/assets';
  class BBHomePlatform extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); this._active = 0; }
    connectedCallback() {
      this._features = [
        {
          icon: '📚', label: 'Trainingen',
          outcome: 'Structuur & richting',
          title: 'Weet precies wat je wanneer moet doen',
          desc: '17+ praktische trainingen die je door de beginfase leiden. Alleen wat nu relevant is, geen overweldigende theorie, geen eindeloos zoeken.',
          points: ['Van idee naar een helder, verkopend aanbod', 'Positionering die de juiste klanten aantrekt', 'Sales & acquisitie stap voor stap', 'Direct actie na elke les'],
          color: '#E85D04',
          photo: `${CDN}/training-afbeelding.png`
        },
        {
          icon: '🖥️', label: 'Werkplek',
          outcome: 'Van chaos naar concreet plan',
          title: 'Werk gestructureerd aan je bedrijf',
          desc: 'Geen passieve cursussen. In de digitale werkplek voer je direct de opdrachten uit. Elke week een concreet stuk verder, zichtbaar in je voortgang.',
          points: ['Opdrachten direct uitvoeren na elke training', 'Voortgang per module inzichtelijk', 'Je businessplan bouw je on-the-go', 'Altijd inzicht in waar je staat'],
          color: '#3B82F6',
          photo: `${CDN}/werkplek-afbeelding.png`
        },
        {
          icon: '🤖', label: 'AI-Coach Nova',
          outcome: 'Begeleiding 24/7',
          title: 'Persoonlijke coaching, geen chatbot',
          desc: 'Nova is niet zomaar een AI-assistent. Ze kent jóuw trainingen en jóuw situatie, en benadert je ultra-persoonlijk. Dat is iets wezenlijk anders dan ChatGPT. Toegankelijk voor minder dan €2,30 per dag.',
          points: ['Ultra-persoonlijk, afgestemd op jóuw traject', 'Altijd beschikbaar, ook \'s avonds en in het weekend', 'Advies op jouw situatie, niet op een standaard vraag', 'Gebouwd op alle BusinessBaas trainingen'],
          color: '#8B5CF6',
          photo: `${CDN}/nova-afbeelding.png`
        },
        {
          icon: '✨', label: 'Slim met AI',
          outcome: 'AI next level',
          title: 'AI echt voor je laten werken als ondernemer',
          desc: 'Ontdek hoe je AI inzet als ondernemer op een manier die écht het verschil maakt. Van e-mail en agendabeheer tot automatiseren wat jou tijd kost, zodat jij je richt op waar je echt van aanvliegt.',
          points: ['AI als werknemer, niet als zoekmachine', 'Automatiseer terugkerende taken', 'Slimmer communiceren met klanten', '🚀 In ontwikkeling — coming soon'],
          color: '#7C3AED',
          photo: `${CDN}/ai-tools-afbeelding.png`
        },
        {
          icon: '🛒', label: 'Marktplaats',
          outcome: 'Eerste opdrachten',
          title: 'Vind je eerste klanten dichter bij huis',
          desc: 'Via onze WhatsApp-community deel je jouw aanbod met mede-ondernemers. Al diverse leden hebben via BusinessBaas opdrachten bij elkaar gevonden. Zo maakte Juurd professionele foto\'s voor Inge nadat ze elkaar in de community ontmoetten.',
          points: ['Deel je aanbod in de WhatsApp-community', 'Klanten vinden via mede-ondernemers', 'Members helpen members', 'Echte opdrachten, echte relaties'],
          color: '#10B981',
          photo: `${CDN}/marktplaats-afbeelding.jpg`
        },
        {
          icon: '🤝', label: 'Community',
          outcome: 'Nooit alleen',
          title: 'Ondernemen samen met mensen die het begrijpen',
          desc: 'Een actieve community van gelijkgestemde starters. Spar over uitdagingen, test ideeën en bouw aan je netwerk. Plus: live events waar je echte klanten kunt ontmoeten.',
          points: ['Online netwerk van startende ondernemers', 'Test je ideeën veilig en krijg feedback', 'BusinessBaas LIVE events', 'Sparringspartners die jou begrijpen'],
          color: '#F59E0B',
          photo: `${CDN}/community-afbeelding.png`
        },
        {
          icon: '💬', label: '1 op 1 coaching',
          outcome: 'Expert hulp op maat',
          title: 'Kom er samen uit met een expert',
          desc: 'Kom je er samen met Nova en de community niet uit? Dan kun je 1 op 1 coaching aanvragen. Een expert helpt je weer op weg! Van een quick scan tot een uitgebreide sparringsessie, er wordt altijd afgestemd op wat jij nodig hebt om weer verder te kunnen.',
          points: ['Persoonlijke sparringsessie op aanvraag', 'Van quick scan tot uitgebreide coaching', 'Altijd afgestemd op jóuw situatie', 'Aanvulling op Nova en de community'],
          color: '#0D2240',
          photo: `${CDN}/coaching-afbeelding.jpg`
        }
      ];
      this.render();
      this._obs();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#fff;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:0.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:44px;}
          .ht h2{font-size:clamp(32px,4.5vw,52px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-0.03em;max-width:520px;}
          .ht h2 em{font-style:normal;color:var(--orange);}
          .ht p{font-size:17px;color:#5A6780;line-height:1.65;max-width:440px;margin-top:14px;}
          .hl{display:inline-flex;align-items:center;gap:7px;padding:12px 22px;background:rgba(13,34,64,.05);border-radius:50px;font-size:14px;font-weight:600;color:var(--navy);text-decoration:none;border:1.5px solid rgba(13,34,64,.12);transition:all .22s;white-space:nowrap;flex-shrink:0;}
          .hl:hover{background:var(--navy);color:#fff;border-color:var(--navy);}
          .tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:44px;background:#ECEEF4;border-radius:16px;padding:6px;width:100%;}
          .tab{display:flex;align-items:center;justify-content:center;gap:7px;padding:9px 14px;border-radius:11px;border:none;font-size:13.5px;font-weight:600;color:#64748B;cursor:pointer;background:transparent;transition:all .22s;font-family:var(--font);flex:1;}
          .tab:hover{color:var(--navy);background:rgba(13,34,64,.06);}
          .tab.active{background:#fff;color:var(--navy);box-shadow:0 2px 12px rgba(0,0,0,.1);}
          .panel{display:none;grid-template-columns:1fr 1fr;gap:72px;align-items:center;animation:fadeUp .4s ease;}
          .panel.active{display:grid;}
          @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
          .f-out{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;padding:6px 14px;border-radius:50px;}
          .pt h3{font-size:clamp(26px,3.2vw,38px);font-weight:900;color:var(--navy);line-height:1.18;letter-spacing:-.025em;margin-bottom:16px;}
          .pt p{font-size:16px;color:#5A6780;line-height:1.65;margin-bottom:26px;}
          .pts{list-style:none;display:flex;flex-direction:column;gap:11px;margin-bottom:28px;}
          .pts li{display:flex;gap:11px;align-items:center;font-size:14.5px;font-weight:500;color:#374151;}
          .ck{width:21px;height:21px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-shrink:0;font-weight:700;}
          .pcta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:50px;color:white;font-size:14.5px;font-weight:700;text-decoration:none;transition:all .22s;font-family:var(--font);}
          .pcta:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.2);}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:960px){.panel.active{grid-template-columns:1fr;}.pv{display:none;}.tabs{gap:4px;}.tab{padding:7px 13px;font-size:12.5px;}}
          @media(max-width:700px){section{padding:64px 20px;}.head{flex-direction:column;align-items:flex-start;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Het Platform</span></div>
            <div class="head ob">
              <div class="ht">
                <h2>Alles om van starter naar <em>ondernemer te groeien</em></h2>
                <p>Vijf geïntegreerde onderdelen, elk gericht op één ding: jou sneller naar je eerste betalende klanten brengen.</p>
              </div>
              <a href="/het-platform" class="hl">Bekijk het volledige platform <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
            <div class="tabs ob" id="ptabs"></div>
            <div id="ppanel"></div>
          </div>
        </section>`;
      this._renderTabs();
      this._renderPanel();
    }
    _renderTabs() {
      const el = this.shadowRoot.getElementById('ptabs');
      el.innerHTML = this._features.map((f,i)=>`<button class="tab${i===0?' active':''}" data-i="${i}">${f.icon} ${f.label}</button>`).join('');
      el.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => {
          this._active = +btn.dataset.i;
          el.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b===btn));
          this._renderPanel();
        });
      });
    }
    _renderPanel() {
      const f = this._features[this._active];
      const el = this.shadowRoot.getElementById('ppanel');
      el.innerHTML = `<div class="panel active"><div class="pt"><div class="f-out" style="background:${f.color}22;color:${f.color};">${f.icon} ${f.outcome}</div><h3>${f.title}</h3><p>${f.desc}</p><ul class="pts">${f.points.map(p=>`<li><span class="ck" style="background:${p.startsWith('🚀')?'#7C3AED':f.color};">${p.startsWith('🚀')?'→':'✓'}</span>${p}</li>`).join('')}</ul><a href="/voor-starters" class="pcta" style="background:${f.color};">Gratis training <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div><div class="pv"><img src="${f.photo}" alt="${f.label}" style="width:100%;height:auto;border-radius:20px;display:block;object-fit:cover;max-height:480px;box-shadow:0 20px 56px rgba(13,34,64,.16);" /></div></div>`;
    }
    _obs() {
      const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.1});
      this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));
    }
  }
  customElements.define('bb-home-platform', BBHomePlatform);
})();
