(function () {
  if (customElements.get('bb-contact-main')) return;
  class BBContactMain extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
      this.render();
      this._bind();
      this._obs();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          :host{display:block;--orange:#E85D04;--navy:#0D2240;--font:'Inter',-apple-system,sans-serif}
          *{box-sizing:border-box;margin:0;padding:0}
          section{background:#F4F6FA;padding:88px 24px;font-family:var(--font)}
          .inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
          .form-card{background:#fff;border-radius:22px;padding:40px 36px;border:1px solid rgba(13,34,64,.07);box-shadow:0 4px 20px rgba(13,34,64,.06)}
          .form-card h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:6px}
          .form-card p{font-size:14.5px;color:#5A6780;margin-bottom:28px}
          .field{margin-bottom:18px}
          label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:6px}
          input,select,textarea{width:100%;padding:12px 16px;border:1.5px solid rgba(13,34,64,.15);border-radius:10px;font-size:15px;font-family:var(--font);color:#1F2937;background:#fff;transition:border-color .2s,box-shadow .2s;outline:none;-webkit-appearance:none}
          input:focus,select:focus,textarea:focus{border-color:var(--orange);box-shadow:0 0 0 3px rgba(232,93,4,.1)}
          textarea{resize:vertical;min-height:130px}
          .btn{width:100%;padding:15px;background:var(--orange);color:#fff;font-size:15.5px;font-weight:700;border-radius:50px;border:none;cursor:pointer;font-family:var(--font);transition:background .22s,transform .22s,box-shadow .22s;margin-top:8px}
          .btn:hover{background:#CC4D00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,93,4,.36)}
.success{display:none;text-align:center;padding:40px 20px}
          .success h3{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:10px}
          .success p{font-size:15px;color:#5A6780;line-height:1.65}
          .success .ico{font-size:48px;margin-bottom:16px}
          .right h3{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:20px}
          .contact-item{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid rgba(13,34,64,.07)}
          .contact-item:last-of-type{border-bottom:none}
          .ci-ico{width:42px;height:42px;border-radius:11px;background:#F4F6FA;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}
          .ci-lbl{font-size:12px;color:#9CA3AF;font-weight:600;margin-bottom:2px}
          .ci-val{font-size:14.5px;font-weight:600;color:var(--navy);text-decoration:none}
          .ci-val:hover{color:var(--orange)}
          .cta-cards{display:flex;flex-direction:column;gap:14px;margin-top:28px}
          .cta-card{border-radius:16px;padding:22px;border:1px solid rgba(13,34,64,.08)}
          .cta-card.navy{background:var(--navy)}
          .cta-card.outline{background:#fff;border-color:rgba(232,93,4,.25)}
          .cta-card h4{font-size:15px;font-weight:800;color:#fff;margin-bottom:6px}
          .cta-card.outline h4{color:var(--navy)}
          .cta-card p{font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;line-height:1.5}
          .cta-card.outline p{color:#5A6780}
          .cta-link{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;background:var(--orange);color:#fff;font-size:13px;font-weight:700;border-radius:50px;text-decoration:none;transition:background .2s}
          .cta-link:hover{background:#CC4D00}
          .ob{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
          .ob.show{opacity:1;transform:translateY(0)}
          @media(max-width:860px){.inner{grid-template-columns:1fr;gap:36px}}
          @media(max-width:600px){section{padding:64px 20px}.form-card{padding:28px 22px}}
        </style>
        <section>
          <div class="inner">
            <div class="form-card ob">
              <h2>Stuur ons een bericht</h2>
              <p>We reageren binnen 1 werkdag.</p>
              <form id="form">
                <div class="field"><label for="name">Naam</label><input type="text" id="name" placeholder="Jouw naam" required></div>
                <div class="field"><label for="email">E-mailadres</label><input type="email" id="email" placeholder="jouw@email.com" required></div>
                <div class="field"><label for="subject">Onderwerp</label>
                  <select id="subject">
                    <option value="">Kies een onderwerp</option>
                    <option>Vraag over het platform</option>
                    <option>Word partner / demo aanvragen</option>
                    <option>Technische vraag</option>
                    <option>Anders</option>
                  </select>
                </div>
                <div class="field"><label for="msg">Bericht</label><textarea id="msg" placeholder="Wat wil je weten of delen?" required></textarea></div>
                <button type="submit" class="btn">Verstuur bericht</button>
              </form>
              <div class="success" id="success">
                <div class="ico">✅</div>
                <h3>Bedankt voor je bericht!</h3>
                <p>We nemen binnen 1 werkdag contact met je op via e-mail.</p>
              </div>
            </div>
            <div class="right ob">
              <h3>Direct contact</h3>
              <div class="contact-item"><div class="ci-ico">✉️</div><div><div class="ci-lbl">E-mail</div><a class="ci-val" href="mailto:info@businessbaas.com">info@businessbaas.com</a></div></div>
              <div class="contact-item"><div class="ci-ico">⏱️</div><div><div class="ci-lbl">Reactietijd</div><span class="ci-val">Binnen 1 werkdag</span></div></div>
              <div class="cta-cards">
                <div class="cta-card navy">
                  <h4>Ben je starter?</h4>
                  <p>Bekijk de gratis training en ontdek of BusinessBaas bij jou past.</p>
                  <a href="https://www.businessbaas.com/gratis-training-aanvragen" class="cta-link" target="_top" data-lightbox>Gratis training starten →</a>
                </div>
                <div class="cta-card outline">
                  <h4>Ben je organisatie of coach?</h4>
                  <p>Plan een gratis demo en ontdek hoe jij BusinessBaas kunt inzetten.</p>
                  <a href="https://www.businessbaas.com/voor-partners" class="cta-link">Demo aanvragen →</a>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    }
    _bind() {
      const form = this.shadowRoot.getElementById('form');
      const success = this.shadowRoot.getElementById('success');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = this.shadowRoot.getElementById('name').value;
        const email = this.shadowRoot.getElementById('email').value;
        const msg = this.shadowRoot.getElementById('msg').value;
        if (!name || !email || !msg) return;
        form.style.display = 'none';
        success.style.display = 'block';
      });
    }
    _obs() {
      const o = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); o.unobserve(e.target); } }), { threshold: 0.08 });
      this.shadowRoot.querySelectorAll('.ob').forEach(el => o.observe(el));
    }
  }
  customElements.define('bb-contact-main', BBContactMain);
})();
