(function () {
  if (customElements.get('bb1-voor-partners')) return;
  const B = 'https://joerisijstermans.github.io/businessbaas-components/components';
  const C = ['bb-partners-header','bb-partners-logos','bb-partners-why','bb-partners-forwho','bb-partners-process','bb-partners-dashboard','bb-partners-testimonial','bb-partners-cta'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1VoorPartners extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML = C.map(n => `<${n}></${n}>`).join(''); }
  }
  customElements.define('bb1-voor-partners', BB1VoorPartners);
})();
