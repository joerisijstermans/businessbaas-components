(function () {
  if (customElements.get('bb1-gratis-training-aanvragen-onder')) return;
  const B = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/components';
    if(!document.querySelector('link[data-bb-font]')){const _f=document.createElement('link');_f.rel='stylesheet';_f.href='https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';_f.setAttribute('data-bb-font','1');document.head.appendChild(_f);}
  const C = ['bb-gratis-training-after'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1GratisAanvragenOnder extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML=C.map(n=>{const h=/hero/.test(n)?600:/nav/.test(n)?72:/footer/.test(n)?220:/pricing/.test(n)?580:/faq/.test(n)?480:/cta/.test(n)?320:/notification/.test(n)?0:400;return`<${n} style="display:block;min-height:${h}px"></${n}>`;}).join(''); }
  }
  customElements.define('bb1-gratis-training-aanvragen-onder', BB1GratisAanvragenOnder);
})();
