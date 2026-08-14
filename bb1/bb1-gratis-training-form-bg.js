(function () {
  if (customElements.get('bb1-gratis-training-form-bg')) return;
  const B = 'https://cdn.jsdelivr.net/gh/joerisijstermans/businessbaas-components@main/components';
    if(!document.querySelector('link[data-bb-font]')){const _f=document.createElement('link');_f.rel='stylesheet';_f.href='https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';_f.setAttribute('data-bb-font','1');document.head.appendChild(_f);}
  const C = ['bb-landing-form-bg'];
  function _load(n){if(!customElements.get(n)){const s=document.createElement('script');s.src=`${B}/${n}.js`;document.head.appendChild(s);}};C.slice(0,2).forEach(_load);
  class BB1GratisTrainingFormBg extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML=C.map(n=>{const h=/hero/.test(n)?'700px':/header/.test(n)?'350px':/nav/.test(n)?'72px':/footer/.test(n)?'220px':/pricing/.test(n)?'700px':/faq/.test(n)?'600px':/cta/.test(n)?'350px':/notification/.test(n)?'0px':'500px';return`<${n} style="display:block;min-height:${h}"></${n}>`;}).join('');const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){_load(e.target.tagName.toLowerCase());ob.unobserve(e.target);}}),{rootMargin:'300px'});C.forEach(n=>{const el=this.querySelector(n);if(el)o.observe(el);}); }
  }
  customElements.define('bb1-gratis-training-form-bg', BB1GratisTrainingFormBg);
})();
