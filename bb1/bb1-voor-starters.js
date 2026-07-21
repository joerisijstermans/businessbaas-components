(function () {
  if (customElements.get('bb1-voor-starters')) return;
  const B = 'https://joerisijstermans.github.io/businessbaas-components/components';
  const C = ['bb-starters-header','bb-starters-problem','bb-starters-process','bb-starters-modules','bb-starters-features','bb-starters-testimonials','bb-starters-pricing','bb-starters-faq','bb-starters-cta'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1VoorStarters extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML = C.map(n => `<${n}></${n}>`).join(''); }
  }
  customElements.define('bb1-voor-starters', BB1VoorStarters);
})();
