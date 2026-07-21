(function () {
  if (customElements.get('bb1-home')) return;
  const B = 'https://joerisijstermans.github.io/businessbaas-components/components';
  const C = ['bb-home-hero','bb-home-problem','bb-home-platform','bb-home-process','bb-home-proof','bb-home-why','bb-home-b2b','bb-home-faq','bb-home-cta'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1Home extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML = C.map(n => `<${n}></${n}>`).join(''); }
  }
  customElements.define('bb1-home', BB1Home);
})();
