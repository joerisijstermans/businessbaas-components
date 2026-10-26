(function(){
  if(customElements.get('bb-home-stats'))return;
  class BBHomeStats extends HTMLElement{
    connectedCallback(){
      const s=this.attachShadow({mode:'open'});
      s.innerHTML=`
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',-apple-system,sans-serif}
          .bar{background:#0D2240;border-bottom:1px solid rgba(255,255,255,.08);padding:0 24px;position:relative;overflow:hidden}
          .bar::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:52px 52px;pointer-events:none}
          .inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);position:relative;z-index:1}
          .stat{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 16px;gap:4px;border-right:1px solid rgba(255,255,255,.08)}
          .stat:last-child{border-right:none}
          .val{font-size:clamp(26px,3vw,36px);font-weight:900;color:#E85D04;letter-spacing:-.03em;line-height:1}
          .lbl{font-size:13px;font-weight:600;color:rgba(255,255,255,.65);text-align:center;line-height:1.3}
          @media(max-width:600px){
            .inner{grid-template-columns:repeat(2,1fr)}
            .stat:nth-child(2){border-right:none}
            .stat:nth-child(3){border-right:1px solid rgba(255,255,255,.08)}
            .stat:nth-child(1),.stat:nth-child(2){border-bottom:1px solid rgba(255,255,255,.08)}
          }
        </style>
        <div class="bar">
          <div class="inner">
            <div class="stat"><span class="val">3</span><span class="lbl">Modules</span></div>
            <div class="stat"><span class="val">20+</span><span class="lbl">Praktische trainingen</span></div>
            <div class="stat"><span class="val">90</span><span class="lbl">Dagen programma</span></div>
            <div class="stat"><span class="val">4,9★</span><span class="lbl">Google beoordeling</span></div>
          </div>
        </div>`;
    }
  }
  customElements.define('bb-home-stats',BBHomeStats);
})();
