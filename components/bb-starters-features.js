(function () {
  if (customElements.get('bb-starters-features')) return;
  class BBStartersFeatures extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); this._obs(); }
    render() {
      const feats = [
        { icon:'📚', t:'20+ Trainingen', d:'Praktische trainingen die je stap voor stap begeleiden van idee naar eerste klant. Elke training eindigt met een concrete opdracht.' },
        { icon:'💻', t:'Digitale Werkplek', d:'Werk elke opdracht direct uit op het platform. Geen losse Word-documenten of notitieblokjes, alles op één plek.' },
        { icon:'🤖', t:'Nova, je AI-coach', d:'Jouw 24/7 sparringspartner. Nova kent het volledige programma, stelt de juiste vragen en helpt je verder als je vastzit. Jij bepaalt wat je deelt.' },
        { icon:'✨', t:'Slim Ondernemen met AI', d:'Leer hoe je als starter AI-tools slim inzet: van contentcreatie en marktonderzoek tot automatisering en klantenwerving. Snel, praktisch en toepasbaar.', soon: true },
        { icon:'👥', t:'Community', d:'Ondernemers die precies begrijpen wat jij doormaakt. Stel vragen, deel successen en groei samen sneller.' },
        { icon:'🎯', t:'Marktplaats', d:'Test je aanbod binnen de community. Vind je eerste klanten dichter bij huis dan je denkt.' },
        { icon:'🎤', t:'LIVE Events', d:'Bouw je netwerk op in het echt. Juurd ontmoette tijdens een BusinessBaas LIVE event zijn eerste klant!', upsell: true },
        { icon:'💬', t:'1 op 1 Coaching', d:'Kom je er niet uit met Nova of de community? Vraag een persoonlijke sessie aan met een expert. Van quick scan tot uitgebreide sparring, altijd op maat.', upsell: true },
      ];
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{background:#fff;padding:96px 24px;font-family:var(--font);}
          .inner{max-width:1180px;margin:0 auto;}
          .lbl{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.10em;margin-bottom:16px;}
          .lbl::before{content:'';display:block;width:26px;height:2px;background:var(--orange);border-radius:2px;}
          .hdr{max-width:580px;margin-bottom:52px;}
          .hdr h2{font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--navy);line-height:1.12;letter-spacing:-.03em;margin-bottom:12px;}
          .hdr p{font-size:17px;color:#5A6780;line-height:1.65;}
          .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
          .feat{background:#fff;border-radius:18px;padding:28px 24px;border:1px solid rgba(13,34,64,.07);transition:transform .28s,box-shadow .28s;}
          .feat:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(13,34,64,.10);}
          .feat.upsell{background:#FAFBFF;border:1.5px dashed rgba(13,34,64,.15);}
          .feat-ico{width:52px;height:52px;border-radius:14px;background:#F4F6FA;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px;}
          .feat-t{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;display:flex;align-items:center;gap:8px;}
          .addon-badge{font-size:10px;font-weight:700;color:var(--orange);background:rgba(232,93,4,.10);border-radius:50px;padding:2px 8px;text-transform:uppercase;letter-spacing:.05em;flex-shrink:0;}
          .soon-badge{font-size:10px;font-weight:700;color:#7C3AED;background:rgba(124,58,237,.10);border-radius:50px;padding:2px 8px;text-transform:uppercase;letter-spacing:.05em;flex-shrink:0;}
          .feat-d{font-size:14px;color:#5A6780;line-height:1.6;}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
          .ob.show{opacity:1;transform:translateY(0);}
          @media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr);}}
          @media(max-width:580px){.grid{grid-template-columns:1fr;}section{padding:64px 20px;}}
        </style>
        <section>
          <div class="inner">
            <div class="ob"><span class="lbl">Wat je krijgt</span></div>
            <div class="hdr ob"><h2>Meer dan een cursus.<br>Een compleet platform.</h2><p>Alles wat je nodig hebt om jouw bedrijf te bouwen, op één plek.</p></div>
            <div class="grid ob">${feats.map(f=>`<div class="feat${f.upsell?' upsell':''}"><div class="feat-ico">${f.icon}</div><div class="feat-t">${f.t}${f.upsell?'<span class="addon-badge">add-on</span>':''}${f.soon?'<span class="soon-badge">coming soon</span>':''}</div><div class="feat-d">${f.d}</div></div>`).join('')}</div>
          </div>
        </section>`;
    }
    _obs(){const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('show'),60);o.unobserve(e.target);}}),{threshold:0.08});this.shadowRoot.querySelectorAll('.ob').forEach(el=>o.observe(el));}
  }
  customElements.define('bb-starters-features', BBStartersFeatures);
})();
