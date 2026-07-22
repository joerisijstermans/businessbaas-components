(function () {
  if (customElements.get('bb-landing-form-bg')) return;
  class BBLandingFormBg extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block}
          .bg{background:#0D2240;padding:48px 24px 64px;min-height:372px}
        </style>
        <div class="bg"></div>`;
    }
  }
  customElements.define('bb-landing-form-bg', BBLandingFormBg);
})();
