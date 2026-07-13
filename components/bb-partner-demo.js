(function () {
  if (customElements.get('bb-partner-demo')) return;

  const WEB3_KEY = 'e725eb57-1af1-45a5-87a9-ff25ad540eb0';

  class BBPartnerDemo extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}

          /* ── Hero ── */
          .hero{background:linear-gradient(145deg,#0D2240 0%,#142c54 60%,#0D2240 100%);padding:56px 24px 52px;text-align:center;position:relative;overflow:hidden}
          .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(232,93,4,.14) 0%,transparent 60%);pointer-events:none}
          .inner{max-width:580px;margin:0 auto;position:relative;z-index:2}
          .badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgba(232,93,4,.18);border:1px solid rgba(232,93,4,.3);border-radius:50px;font-size:11px;font-weight:700;color:rgba(232,93,4,.9);text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px}
          .dot{width:5px;height:5px;border-radius:50%;background:#E85D04;display:inline-block;animation:pulse 1.8s ease-in-out infinite;flex-shrink:0}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
          h1{font-size:clamp(24px,4.5vw,40px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:12px}
          h1 em{font-style:normal;color:#E85D04}
          .sub{font-size:16px;color:rgba(255,255,255,.62);margin-bottom:26px;font-weight:500;line-height:1.6}
          .checks{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 20px}
          .check{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:rgba(255,255,255,.6)}
          .check::before{content:'✓';color:#E85D04;font-weight:900}

          /* ── Form section ── */
          .form-section{background:#F4F6FA;padding:48px 24px 60px}
          .form-wrap{max-width:560px;margin:0 auto}
          .form-title{font-size:20px;font-weight:800;color:#0D2240;margin-bottom:6px}
          .form-sub{font-size:14px;color:#6B7280;margin-bottom:28px;line-height:1.5}

          .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
          .fg{display:flex;flex-direction:column;gap:5px}
          .fg.full{grid-column:1/-1}
          label{font-size:13px;font-weight:700;color:#0D2240;line-height:1}
          input,select,textarea{width:100%;padding:11px 14px;border:1.5px solid #D1D5DB;border-radius:10px;font-size:14px;font-family:'Inter',-apple-system,sans-serif;color:#111827;background:#fff;transition:border-color .2s,box-shadow .2s;outline:none}
          input:focus,select:focus,textarea:focus{border-color:#E85D04;box-shadow:0 0 0 3px rgba(232,93,4,.11)}
          input::placeholder,textarea::placeholder{color:#9CA3AF}
          textarea{resize:vertical;min-height:96px}
          select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;cursor:pointer}

          .btn{width:100%;padding:14px 24px;background:#E85D04;color:#fff;font-size:15px;font-weight:700;border:none;border-radius:50px;cursor:pointer;font-family:'Inter',-apple-system,sans-serif;transition:background .22s,transform .22s,box-shadow .22s;margin-top:8px;display:flex;align-items:center;justify-content:center;gap:8px}
          .btn:hover:not(:disabled){background:#CC4D00;transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,93,4,.32)}
          .btn:disabled{opacity:.6;cursor:not-allowed}

          .form-note{font-size:12px;color:#9CA3AF;text-align:center;margin-top:12px}
          .err{font-size:13px;color:#DC2626;margin-top:10px;display:none;text-align:center;line-height:1.5}

          /* ── Success ── */
          .success{display:none;text-align:center;padding:16px 0 8px}
          .sicon{width:60px;height:60px;border-radius:50%;background:rgba(16,185,129,.12);display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
          .success h3{font-size:22px;font-weight:800;color:#0D2240;margin-bottom:10px}
          .success p{font-size:15px;color:#6B7280;line-height:1.65;max-width:420px;margin:0 auto}

          @media(max-width:540px){.grid{grid-template-columns:1fr}.hero{padding:44px 20px 44px}.form-section{padding:36px 20px 52px}}
        </style>

        <div class="hero">
          <div class="inner">
            <div class="badge"><span class="dot"></span>Partner demo</div>
            <h1>Ontdek wat BusinessBaas<br>voor jouw <em>organisatie</em> kan doen</h1>
            <p class="sub">Plan een demo en zie hoe je starters begeleidt op schaal, zonder extra capaciteit van jouw team.</p>
            <div class="checks">
              <span class="check">Gratis en vrijblijvend</span>
              <span class="check">Persoonlijk gesprek</span>
              <span class="check">Binnen 2 werkdagen reactie</span>
            </div>
          </div>
        </div>

        <div class="form-section">
          <div class="form-wrap">
            <div class="form-title">Plan jouw demo in</div>
            <div class="form-sub">Vul je gegevens in en we nemen binnen 2 werkdagen contact op.</div>

            <form id="demoForm">
              <div class="grid">
                <div class="fg">
                  <label for="naam">Naam *</label>
                  <input type="text" id="naam" name="naam" placeholder="Jan de Vries" required>
                </div>
                <div class="fg">
                  <label for="organisatie">Organisatie *</label>
                  <input type="text" id="organisatie" name="organisatie" placeholder="Naam van je organisatie" required>
                </div>
                <div class="fg">
                  <label for="email">E-mailadres *</label>
                  <input type="email" id="email" name="email" placeholder="jan@organisatie.nl" required>
                </div>
                <div class="fg">
                  <label for="telefoon">Telefoonnummer</label>
                  <input type="tel" id="telefoon" name="telefoon" placeholder="+31 6 12 34 56 78">
                </div>
                <div class="fg full">
                  <label for="type">Type organisatie *</label>
                  <select id="type" name="type_organisatie" required>
                    <option value="" disabled selected>Selecteer een type...</option>
                    <option value="Gemeente / Provincie">Gemeente / Provincie</option>
                    <option value="Onderwijsinstelling">Onderwijsinstelling</option>
                    <option value="Coach / Begeleider">Coach / Begeleider</option>
                    <option value="Bedrijf / Incubator">Bedrijf / Incubator</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
                <div class="fg full">
                  <label for="starters">Aantal starters dat u begeleidt</label>
                  <select id="starters" name="aantal_starters">
                    <option value="" disabled selected>Kies een bandbreedte...</option>
                    <option value="1-10">1-10</option>
                    <option value="10-25">10-25</option>
                    <option value="25-50">25-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
                <div class="fg full">
                  <label for="vraag">Vraag of opmerking</label>
                  <textarea id="vraag" name="vraag" placeholder="Vertel gerust wat voor jou belangrijk is..."></textarea>
                </div>
              </div>
              <button type="submit" class="btn" id="submitBtn">
                Demo aanvragen
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="err" id="errMsg">Er is iets misgegaan. Probeer het opnieuw of stuur een mail naar <a href="mailto:info@businessbaas.com" style="color:#DC2626">info@businessbaas.com</a>.</div>
              <p class="form-note">We delen je gegevens nooit met derden.</p>
            </form>

            <div class="success" id="successBlock">
              <div class="sicon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14L11 20L23 8" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3>Aanvraag ontvangen!</h3>
              <p>Bedankt! We nemen binnen 2 werkdagen contact met je op om een demo in te plannen.</p>
            </div>
          </div>
        </div>`;

      const form = s.getElementById('demoForm');
      const btn  = s.getElementById('submitBtn');
      const err  = s.getElementById('errMsg');
      const ok   = s.getElementById('successBlock');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        btn.disabled = true;
        btn.textContent = 'Versturen...';
        err.style.display = 'none';

        const body = new FormData(form);
        body.append('access_key',  WEB3_KEY);
        body.append('subject',     'Nieuwe demo-aanvraag - BusinessBaas.com');
        body.append('from_name',   'BusinessBaas Partner Demo');
        body.append('replyto',     form.querySelector('#email').value);

        try {
          const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body });
          const json = await res.json();
          if (json.success) {
            window.top.location.href = 'https://www.businessbaas.com/bedankt-partner';
          } else {
            throw new Error(json.message || 'unknown');
          }
        } catch {
          err.style.display = 'block';
          btn.disabled = false;
          btn.innerHTML = 'Demo aanvragen <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        }
      });
    }
  }
  customElements.define('bb-partner-demo', BBPartnerDemo);
})();
