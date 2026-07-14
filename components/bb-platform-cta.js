(function () {
  if (customElements.get('bb-platform-cta')) return;
  /* Merged into bb-platform-pricing — kept registered to avoid 404 in existing Wix embeds. Safe to remove from Wix when convenient. */
  class BBPlatformCta extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' }).innerHTML = '<style>:host{display:none}</style>';
    }
  }
  customElements.define('bb-platform-cta', BBPlatformCta);
})();
