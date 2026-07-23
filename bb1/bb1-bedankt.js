(function () {
  if (customElements.get('bb1-bedankt')) return;
  const B = 'https://joerisijstermans.github.io/businessbaas-components/components';
  const C = ['bb-landing-bedankt'];
  C.forEach(n => { if (!customElements.get(n)) { const s = document.createElement('script'); s.src = `${B}/${n}.js`; document.head.appendChild(s); } });
  class BB1Bedankt extends HTMLElement {
    connectedCallback() { this.style.display = 'block'; this.innerHTML = C.map(n => `<${n}></${n}>`).join(''); }
  }
  customElements.define('bb1-bedankt', BB1Bedankt);
})();
