(function () {
  if (customElements.get('bb-landing-notification')) return;
  class BBLandingNotification extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <style>
          :host { display: block; position: fixed; bottom: 24px; left: 24px; z-index: 9999; font-family: 'Inter', -apple-system, sans-serif; }
          .popup {
            display: flex; align-items: center; gap: 12px;
            background: #fff; border-radius: 16px;
            box-shadow: 0 8px 32px rgba(13,34,64,.14), 0 2px 8px rgba(0,0,0,.08);
            padding: 14px 40px 14px 14px;
            max-width: 280px; width: 280px;
            position: relative;
            transform: translateX(-110%);
            transition: transform 0.45s cubic-bezier(0.34,1.26,0.64,1);
            pointer-events: auto;
          }
          .popup.show { transform: translateX(0); }
          .avatar {
            width: 42px; height: 42px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.05rem; font-weight: 800; color: #fff;
            flex-shrink: 0;
          }
          .info { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
          .name { font-size: .88rem; font-weight: 700; color: #0D2240; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .action { font-size: .78rem; color: #5A6780; line-height: 1.4; }
          .close {
            position: absolute; top: 8px; right: 10px;
            background: none; border: none; cursor: pointer;
            font-size: .95rem; color: #9CA3AF; line-height: 1;
            padding: 2px 4px; border-radius: 4px;
            transition: color .15s;
          }
          .close:hover { color: #374151; }
        </style>
        <div class="popup" id="popup">
          <div class="avatar" id="avatar"></div>
          <div class="info">
            <div class="name" id="name"></div>
            <div class="action" id="action"></div>
          </div>
          <button class="close" id="close" aria-label="Sluiten">×</button>
        </div>`;

      const visitors = [
        { name: 'Lisa',   city: 'Amsterdam', msg: 'bekijkt de gratis training' },
        { name: 'Ravi',   city: 'Utrecht',   msg: 'is zojuist gestart' },
        { name: 'Emma',   city: 'Rotterdam', msg: 'bekijkt nu de training' },
        { name: 'Daan',   city: 'Eindhoven', msg: 'vraagt de training aan' },
        { name: 'Sophie', city: 'Den Haag',  msg: 'bekijkt de gratis training' },
        { name: 'Tim',    city: 'Groningen', msg: 'is zojuist gestart' },
        { name: 'Julia',  city: 'Breda',     msg: 'vraagt de training aan' },
        { name: 'Finn',   city: 'Tilburg',   msg: 'bekijkt nu de training' },
        { name: 'Nina',   city: 'Leiden',    msg: 'is zojuist gestart' },
        { name: 'Lars',   city: 'Haarlem',   msg: 'bekijkt de gratis training' },
      ];

      const colors = ['#E85D04', '#0D2240', '#2563EB', '#059669', '#7C3AED', '#DC2626', '#D97706', '#0891B2', '#BE185D', '#4F46E5'];

      const popup  = s.getElementById('popup');
      const avatar = s.getElementById('avatar');
      const nameEl = s.getElementById('name');
      const actionEl = s.getElementById('action');
      const closeBtn = s.getElementById('close');

      let hideTimer = null;
      let nextTimer = null;
      let lastIndex = -1;
      let dismissed = false;

      function pickRandom() {
        let idx;
        do { idx = Math.floor(Math.random() * visitors.length); } while (idx === lastIndex && visitors.length > 1);
        lastIndex = idx;
        return visitors[idx];
      }

      function show() {
        if (dismissed) return;
        const v = pickRandom();
        const colorIdx = visitors.indexOf(v) % colors.length;
        avatar.style.background = colors[colorIdx];
        avatar.textContent = v.name.charAt(0);
        nameEl.textContent = v.name + ' · ' + v.city;
        actionEl.textContent = v.msg;
        popup.classList.add('show');
        hideTimer = setTimeout(hide, 4000);
      }

      function hide() {
        popup.classList.remove('show');
        if (!dismissed) {
          nextTimer = setTimeout(show, 8000);
        }
      }

      closeBtn.addEventListener('click', () => {
        dismissed = true;
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
        popup.classList.remove('show');
      });

      // Start after 5 seconds
      nextTimer = setTimeout(show, 5000);
    }
  }
  customElements.define('bb-landing-notification', BBLandingNotification);
})();
