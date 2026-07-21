(function () {
  if (customElements.get('bb1-het-platform')) return;
  const B = 'https://joerisijstermans.github.io/businessbaas-components/components';
  const C = ['bb-platform-header','bb-platform-features','bb-platform-nova','bb-platform-workspace','bb-platform-modules','bb-platform-extras','bb-platform-pricing','bb-platform-cta'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1HetPlatform extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML = C.map(n => `<${n}></${n}>`).join(''); }
  }
  customElements.define('bb1-het-platform', BB1HetPlatform);
})();
