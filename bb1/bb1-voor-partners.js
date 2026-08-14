(function () {
  if (customElements.get('bb1-voor-partners')) return;
  const B = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/components';
    if(!document.querySelector('link[data-bb-font]')){const _f=document.createElement('link');_f.rel='stylesheet';_f.href='https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';_f.setAttribute('data-bb-font','1');document.head.appendChild(_f);}
  const C = ['bb-partners-header','bb-partners-forwho','bb-partners-process','bb-partners-dashboard','bb-partners-why','bb-partners-testimonial','bb-partners-logos','bb-partners-cta'];
  function _load(n){if(!customElements.get(n)){const s=document.createElement('script');s.src=`${B}/${n}.js`;document.head.appendChild(s);}}
  class BB1VoorPartners extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML=C.map(n=>{const h=/hero/.test(n)?600:/nav/.test(n)?72:/footer/.test(n)?220:/pricing/.test(n)?580:/faq/.test(n)?480:/cta/.test(n)?320:/notification/.test(n)?0:400;return`<${n} style="display:block;min-height:${h}px"></${n}>`;}).join('');const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){_load(e.target.tagName.toLowerCase());ob.unobserve(e.target);}}),{rootMargin:'300px'});C.forEach(n=>{const el=this.querySelector(n);if(el)o.observe(el);}); }
  }
  customElements.define('bb1-voor-partners', BB1VoorPartners);
})();
