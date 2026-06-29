(function () {
  if (customElements.get('bb-legal-av')) return;
  class BBLegalAv extends HTMLElement {
    connectedCallback() {
      const s = this.attachShadow({ mode: 'open' });
      s.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          :host{display:block;font-family:'Inter',sans-serif}
        </style>
        <!-- HEADER BANNER -->
        <div style="background:linear-gradient(145deg,#0D2240,#142c54);padding:64px 24px;text-align:center;font-family:'Inter',sans-serif;position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(232,93,4,0.1) 0%,transparent 65%);pointer-events:none"></div>
          <div style="position:relative;z-index:1">
            <div style="display:inline-flex;align-items:center;gap:8px;padding:5px 14px;background:rgba(232,93,4,0.2);border:1px solid rgba(232,93,4,0.3);border-radius:50px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:.09em;margin-bottom:18px">Juridisch</div>
            <h1 style="font-size:clamp(28px,4vw,44px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:10px">Algemene Voorwaarden</h1>
            <p style="font-size:16px;color:rgba(255,255,255,0.55);max-width:480px;margin:0 auto;line-height:1.6">Van toepassing op alle B2C-abonnementen</p>
          </div>
        </div>

        <!-- CONTENT -->
        <div style="max-width:760px;margin:0 auto;padding:64px 24px 96px">
          <p style="font-size:.8rem;color:#9CA3AF;margin-bottom:48px">Laatst bijgewerkt: 15 april 2026</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 1 – Bedrijfsgegevens</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deze algemene voorwaarden zijn van toepassing op alle diensten aangeboden door:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Handelsnaam:</strong> BusinessBaas</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Rechtsvorm:</strong> Eenmanszaak</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>KvK-nummer:</strong> 90226801</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Vestigingsplaats:</strong> Echt, Nederland</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>E-mail:</strong> <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a></li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 2 – Definities</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">In deze algemene voorwaarden wordt verstaan onder:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Deelnemer:</strong> een natuurlijk persoon van 18 jaar of ouder die een abonnement afsluit op het BusinessBaas-platform.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Diensten:</strong> het totaal aan door BusinessBaas aangeboden producten en diensten, waaronder online trainingen, AI-coach Nova, de digitale werkplek (Mural), de WhatsApp-community en optionele persoonlijke coaching.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Nova:</strong> de AI-coach binnen het platform, aangedreven door Pickaxe/OpenAI. Nova verstrekt uitsluitend algemene informatie en geeft geen professioneel juridisch, financieel of medisch advies.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Platform:</strong> de digitale leeromgeving van BusinessBaas, inclusief alle bijbehorende tools en diensten.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Abonnement:</strong> de overeenkomst op basis waarvan de deelnemer toegang krijgt tot de diensten van BusinessBaas.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 3 – Toepasselijkheid</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten en diensten van BusinessBaas aan de deelnemer. Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen. Algemene voorwaarden van de deelnemer worden uitdrukkelijk van de hand gewezen.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 4 – Leeftijdsbeperking</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De diensten van BusinessBaas zijn uitsluitend bestemd voor personen van 18 jaar en ouder. Door een abonnement af te sluiten, bevestigt de deelnemer dat hij of zij ten minste 18 jaar oud is. BusinessBaas is gerechtigd accounts van minderjarigen onmiddellijk en zonder kennisgeving te beëindigen. Eventueel betaalde bedragen worden gerestitueerd naar rato van de resterende abonnementsperiode.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 5 – Aanbod en totstandkoming van de overeenkomst</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Alle aanbiedingen van BusinessBaas zijn vrijblijvend. De overeenkomst komt tot stand op het moment dat de deelnemer:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">zich aanmeldt via het platform;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">deze algemene voorwaarden accepteert; en</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">de eerste betaling verricht via Stripe of Mollie.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas behoudt zich het recht voor een aanmelding zonder opgave van redenen te weigeren.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 6 – Abonnement en opzegging</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas biedt de volgende abonnementsvormen aan:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Maandabonnement:</strong> € 69,– per maand, opzegbaar met een opzegtermijn van 1 kalendermaand. De opzegging gaat in aan het einde van de lopende abonnementsmaand.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Jaarabonnement:</strong> € 690,– per jaar (één betaling vooraf). Na afloop van het jaar wordt het abonnement automatisch omgezet naar een maandabonnement, tenzij tijdig is opgezegd.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Opzegging kan plaatsvinden via de accountomgeving op het platform of per e-mail aan <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a>. Bij een prijsverhoging ontvangt de deelnemer minimaal 30 dagen van tevoren schriftelijk bericht. De deelnemer heeft in dat geval het recht het abonnement kosteloos te beëindigen voor de ingangsdatum van de verhoging.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 7 – Betaling</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Alle vermelde bedragen zijn inclusief btw, tenzij anders aangegeven. Betalingen worden verwerkt via Stripe of Mollie. Bij een maandabonnement wordt het abonnementsgeld maandelijks automatisch geïncasseerd.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Bij niet tijdige of mislukte betaling heeft BusinessBaas het recht de toegang tot het platform te blokkeren totdat de openstaande bedragen volledig zijn voldaan. BusinessBaas is gerechtigd administratiekosten en wettelijke rente in rekening te brengen bij betalingsverzuim.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 8 – Herroepingsrecht</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De deelnemer verleent bij het afsluiten van het abonnement uitdrukkelijk toestemming voor onmiddellijke uitvoering van de overeenkomst en erkent daarmee dat het herroepingsrecht vervalt zodra toegang tot de digitale diensten is verleend. Dit is in overeenstemming met artikel 6:230p sub f Burgerlijk Wetboek.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 9 – Gebruik van de diensten</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:8px"><strong>9.1 Nova (AI-coach)</strong></p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Nova is de AI-coach van BusinessBaas, aangedreven door het Pickaxe-platform op de OpenAI-infrastructuur. Nova verstrekt uitsluitend algemene, informatieve antwoorden. De deelnemer blijft te allen tijde zelf verantwoordelijk voor zijn of haar eigen beslissingen en de toepassing van verkregen informatie. Nova vervangt geen professioneel juridisch, financieel of medisch advies.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:8px"><strong>9.2 Digitale werkplek (Mural)</strong></p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De deelnemer ontvangt toegang tot een persoonlijke digitale werkplek via Mural. De toegangslink wordt elke 24 uur vernieuwd. De deelnemer is zelf verantwoordelijk voor de beveiliging van de toegangslink en mag deze niet delen met derden. BusinessBaas is niet aansprakelijk voor ongeautoriseerde toegang als gevolg van het delen van de link door de deelnemer.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:8px"><strong>9.3 Trainingen en leermateriaal</strong></p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De trainingen en materialen van BusinessBaas bevatten algemene informatie en zijn bedoeld als educatieve hulpmiddelen. De deelnemer is zelf verantwoordelijk voor de toepassing van de verkregen kennis in zijn of haar specifieke situatie.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:8px"><strong>9.4 WhatsApp-community</strong></p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deelname aan de WhatsApp-community is optioneel. Naast deze algemene voorwaarden zijn ook de gebruiksvoorwaarden en het privacybeleid van Meta van toepassing op het gebruik van WhatsApp. BusinessBaas is niet aansprakelijk voor de werking of het beleid van het Meta-platform.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 10 – Aansprakelijkheid en resultaatgarantie</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas biedt een leerplatform en stelt kennis, tools en begeleiding beschikbaar. BusinessBaas geeft geen garantie op specifieke resultaten, zoals inkomen, klanten, omzet of ondernemingssucces. Resultaten zijn volledig afhankelijk van de inzet, omstandigheden en keuzes van de deelnemer zelf.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De aansprakelijkheid van BusinessBaas is te allen tijde beperkt tot het bedrag dat de deelnemer in de voorafgaande drie maanden heeft betaald, tenzij sprake is van opzet of grove schuld aan de zijde van BusinessBaas. BusinessBaas is nimmer aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of reputatieschade.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 11 – Intellectueel eigendom</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Alle content op het BusinessBaas-platform – waaronder trainingen, video's, teksten, afbeeldingen, tools en overige materialen – is eigendom van BusinessBaas en is beschermd door het auteursrecht en overige intellectuele eigendomsrechten.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Het is de deelnemer niet toegestaan content te kopiëren, te verspreiden, openbaar te maken of commercieel te exploiteren zonder voorafgaande schriftelijke toestemming van BusinessBaas. Het abonnement verleent uitsluitend een persoonlijk, niet-overdraagbaar gebruiksrecht voor de duur van het abonnement.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 12 – Beëindiging en sancties</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is gerechtigd de toegang van een deelnemer tot het platform te <strong>opschorten</strong> bij wanbetaling, totdat het openstaande bedrag volledig is voldaan.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is gerechtigd het abonnement <strong>onmiddellijk te beëindigen</strong> zonder restitutie en zonder kennisgeving vooraf in geval van:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">misbruik van het platform of de diensten;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">schending van intellectuele eigendomsrechten van BusinessBaas;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">overdracht van toegangsgegevens of content aan derden zonder toestemming;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">enige andere ernstige tekortkoming in de nakoming van deze voorwaarden.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Bij overtreding van het intellectueel eigendomsverbod is de deelnemer een onmiddellijk opeisbare boete verschuldigd van <strong>€ 500,– per overtreding</strong>, vermeerderd met <strong>€ 100,– per dag</strong> dat de overtreding voortduurt, onverminderd het recht van BusinessBaas op volledige schadevergoeding.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 13 – Overmacht</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is niet aansprakelijk voor tekortkomingen in de nakoming van de overeenkomst die het gevolg zijn van omstandigheden buiten haar redelijke controle. Dit omvat onder meer storingen bij derden-platforms (Wix, Mural, OpenAI, Stripe, Mollie, Zoom), cyberaanvallen, internetstoringen, brand, overheidsmaatregelen of pandemieën.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Indien de overmachtsituatie langer dan 30 dagen voortduurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden. De deelnemer heeft in dat geval recht op restitutie van de betaalde abonnementsgelden naar rato van de resterende, niet-genoten abonnementsperiode.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 14 – Persoonsgegevens</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas verwerkt persoonsgegevens van deelnemers conform de Algemene Verordening Gegevensbescherming (AVG). Voor meer informatie over de verwerking van persoonsgegevens verwijzen wij naar ons <a href="https://www.businessbaas.com/privacybeleid" style="color:#E85D04;text-decoration:none">Privacybeleid</a>.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 15 – Klachten</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Klachten over de dienstverlening van BusinessBaas dienen binnen 14 dagen na het ontstaan van de klacht schriftelijk te worden ingediend per e-mail aan <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a>. BusinessBaas streeft ernaar klachten binnen 5 werkdagen te beantwoorden. Indien een klacht niet naar tevredenheid wordt opgelost, kan de deelnemer zich wenden tot de bevoegde rechter.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 16 – Wijzigingen van de voorwaarden</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Deelnemers worden minimaal 30 dagen van tevoren schriftelijk (per e-mail) op de hoogte gesteld van wijzigingen. Bij ingrijpende wijzigingen die de rechten van de deelnemer materieel beïnvloeden, heeft de deelnemer het recht het abonnement kosteloos te beëindigen voor de ingangsdatum van de wijziging.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 17 – Slotbepalingen</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Op alle overeenkomsten tussen BusinessBaas en de deelnemer is uitsluitend Nederlands recht van toepassing. Geschillen die niet in onderling overleg kunnen worden opgelost, worden voorgelegd aan de bevoegde rechter van de <strong>Rechtbank Limburg</strong>.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Indien een bepaling van deze algemene voorwaarden nietig of vernietigbaar blijkt, tast dit de geldigheid van de overige bepalingen niet aan. Partijen zullen in dat geval een vervangende bepaling overeenkomen die zoveel mogelijk recht doet aan de strekking van de nietige of vernietigde bepaling.</p>
        </div>
      `;
    }
  }
  customElements.define('bb-legal-av', BBLegalAv);
})();
