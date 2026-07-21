(function () {
  if (customElements.get('bb-funnel-notification')) return;
  class BBFunnelNotification extends HTMLElement {
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
          }
          .popup.show { transform: translateX(0); }
          .avatar {
            width: 42px; height: 42px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.05rem; font-weight: 800; color: #fff; flex-shrink: 0;
          }
          .info { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
          .name { font-size: .88rem; font-weight: 700; color: #0D2240; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .action { font-size: .78rem; color: #5A6780; line-height: 1.4; }
          .badge { display: inline-block; margin-top: 3px; font-size: .70rem; font-weight: 700; color: #059669; background: rgba(5,150,105,.1); padding: 1px 7px; border-radius: 50px; }
          .close {
            position: absolute; top: 8px; right: 10px;
            background: none; border: none; cursor: pointer;
            font-size: .95rem; color: #9CA3AF; line-height: 1;
            padding: 2px 4px; border-radius: 4px; transition: color .15s;
          }
          .close:hover { color: #374151; }
        </style>
        <div class="popup" id="popup">
          <div class="avatar" id="avatar"></div>
          <div class="info">
            <div class="name" id="name"></div>
            <div class="action" id="action"></div>
            <span class="badge">✓ Nieuw lid</span>
          </div>
          <button class="close" id="close" aria-label="Sluiten">×</button>
        </div>`;

      const members = [
        { name: 'Ravi',   city: 'Utrecht'   },
        { name: 'Sophie', city: 'Den Haag'  },
        { name: 'Finn',   city: 'Tilburg'   },
        { name: 'Lisa',   city: 'Amsterdam' },
        { name: 'Daan',   city: 'Eindhoven' },
        { name: 'Nina',   city: 'Leiden'    },
        { name: 'Lars',   city: 'Haarlem'   },
        { name: 'Julia',  city: 'Breda'     },
      ];

      const colors = ['#E85D04','#0D2240','#2563EB','#059669','#7C3AED','#DC2626','#D97706','#0891B2'];

      const popup   = s.getElementById('popup');
      const avatar  = s.getElementById('avatar');
      const nameEl  = s.getElementById('name');
      const actionEl = s.getElementById('action');
      const closeBtn = s.getElementById('close');

      let lastIndex = -1;
      let hideTimer = null;
      let nextTimer = null;
      let dismissed = false;
      let count = 0;
      const MAX = 4;

      function pickRandom() {
        let idx;
        do { idx = Math.floor(Math.random() * members.length); } while (idx === lastIndex && members.length > 1);
        lastIndex = idx;
        return members[idx];
      }

      function show() {
        if (dismissed || count >= MAX) return;
        const m = pickRandom();
        avatar.style.background = colors[lastIndex % colors.length];
        avatar.textContent = m.name.charAt(0);
        nameEl.textContent = m.name + ' · ' + m.city;
        actionEl.textContent = 'is zojuist lid geworden';
        popup.classList.add('show');
        count++;
        hideTimer = setTimeout(hide, 7000);
      }

      function hide() {
        popup.classList.remove('show');
        if (!dismissed && count < MAX) {
          const delay = 600000 + Math.random() * 300000; // 10–15 minutes
          nextTimer = setTimeout(show, delay);
        }
      }

      closeBtn.addEventListener('click', () => {
        dismissed = true;
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
        popup.classList.remove('show');
      });

      // First popup after 8 minutes
      nextTimer = setTimeout(show, 480000);
    }
  }
  customElements.define('bb-funnel-notification', BBFunnelNotification);
})();
