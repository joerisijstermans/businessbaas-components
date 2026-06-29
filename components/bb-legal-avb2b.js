(function () {
  if (customElements.get('bb-legal-avb2b')) return;
  class BBLegalAvB2b extends HTMLElement {
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
            <h1 style="font-size:clamp(28px,4vw,44px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:10px">Algemene Voorwaarden B2B</h1>
            <p style="font-size:16px;color:rgba(255,255,255,0.55);max-width:480px;margin:0 auto;line-height:1.6">Van toepassing op alle partnerovereenkomsten</p>
          </div>
        </div>

        <!-- CONTENT -->
        <div style="max-width:760px;margin:0 auto;padding:64px 24px 96px">
          <p style="font-size:.8rem;color:#9CA3AF;margin-bottom:48px">Laatst bijgewerkt: 15 april 2026</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 1 – Bedrijfsgegevens</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deze algemene voorwaarden B2B zijn van toepassing op alle diensten aangeboden door:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Handelsnaam:</strong> BusinessBaas</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Rechtsvorm:</strong> Eenmanszaak</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>KvK-nummer:</strong> 90226801</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Adres:</strong> Hulststraat 5, 6101 MH Echt, Nederland</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>E-mail:</strong> <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a></li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Website:</strong> <a href="https://www.businessbaas.com" style="color:#E85D04;text-decoration:none">www.businessbaas.com</a></li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 2 – Definities</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">In deze algemene voorwaarden B2B wordt verstaan onder:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>BusinessBaas:</strong> de platform provider en licentieverstrekker als omschreven in artikel 1.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Partner:</strong> de organisatie (rechtspersoon of eenmanszaak) die een licentieovereenkomst sluit met BusinessBaas voor het gebruik van het platform ten behoeve van haar deelnemers.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Deelnemer:</strong> een natuurlijk persoon van 18 jaar of ouder die door de Partner wordt uitgenodigd om toegang te krijgen tot het BusinessBaas-platform.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Seat:</strong> een gebruikslicentie voor één individuele deelnemer voor een periode van 12 maanden.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>B2B Dashboard:</strong> de beheersomgeving waarmee de Partner deelnemers kan uitnodigen, beheren en voortgang kan monitoren.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Licentieperiode:</strong> de overeengekomen looptijd van de partnerovereenkomst, standaard 12 maanden.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Aansluitkosten:</strong> eenmalige kosten voor de technische setup en partner-onboarding bij aanvang van de samenwerking.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 3 – Toepasselijkheid</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deze algemene voorwaarden B2B zijn van toepassing op alle offertes, overeenkomsten en diensten van BusinessBaas aan partnerorganisaties. Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien uitdrukkelijk en schriftelijk overeengekomen. De algemene voorwaarden van de Partner worden uitdrukkelijk van de hand gewezen.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 4 – Licentie en looptijd</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Licentieovereenkomsten tussen BusinessBaas en de Partner worden aangegaan voor een initiële periode van 12 maanden. Na afloop van de licentieperiode wordt de overeenkomst automatisch verlengd met eenzelfde periode van 12 maanden, tenzij de Partner de overeenkomst schriftelijk heeft opgezegd met inachtneming van een opzegtermijn van minimaal 30 dagen vóór het einde van de lopende licentieperiode.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Opzegging dient schriftelijk te worden ingediend per e-mail aan <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a>. Opzegging zonder inachtneming van de opzegtermijn is niet mogelijk; de overeenkomst loopt in dat geval door tot het einde van de lopende licentieperiode.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 5 – Geldigheid offerte</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Offertes van BusinessBaas zijn geldig gedurende 30 dagen na de offertedatum, tenzij uitdrukkelijk anders vermeld. Na het verstrijken van deze termijn vervalt de offerte en is BusinessBaas niet langer gebonden aan de daarin genoemde prijzen en voorwaarden. Een verlopen offerte kan uitsluitend worden gebruikt als basis voor een nieuw aanbod na uitdrukkelijke bevestiging door BusinessBaas. Offertes gelden niet automatisch voor toekomstige bestellingen.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 6 – Seats, toewijzing en gebruik</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De Partner koopt het overeengekomen aantal seats voor de volledige licentieperiode. De volgende voorwaarden gelden voor het gebruik van seats:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Seats zijn beschikbaar voor toewijzing aan deelnemers gedurende de volledige licentieperiode.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">De individuele licentie van een deelnemer start op het moment van toewijzing en loopt 12 maanden.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Uitbreiding van het aantal seats gedurende de licentieperiode is mogelijk. De kosten worden berekend op basis van het aantal resterende maanden van de licentieperiode (pro rata).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Seats zijn persoonsgebonden en niet overdraagbaar aan andere deelnemers zonder voorafgaande schriftelijke toestemming van BusinessBaas.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Bij beëindiging van de licentieovereenkomst vervallen alle niet-toegewezen seats zonder recht op restitutie.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 7 – Prijzen, aansluitkosten en betaling</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De volgende prijzen zijn van toepassing, tenzij uitdrukkelijk anders overeengekomen in de offerte:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Basisprijs:</strong> € 684,30 per seat per jaar (excl. btw) / € 828,– per seat per jaar (incl. 21% btw).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Volumekorting 10–24 seats:</strong> 10% korting op de basisprijs.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Volumekorting 25–49 seats:</strong> 15% korting op de basisprijs.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Volumekorting 50–99 seats:</strong> 20% korting op de basisprijs.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Volumekorting 100+ seats:</strong> 25% korting op de basisprijs.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Aansluitkosten:</strong> € 295,– excl. btw (eenmalig). De aansluitkosten komen te vervallen bij een initiële afname van 50 seats of meer.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De jaarlicentie en eventuele aansluitkosten worden vooraf gefactureerd en dienen binnen 30 dagen na factuurdatum te worden voldaan. Bij betalingsverzuim is de Partner van rechtswege de wettelijke handelsrente verschuldigd als bedoeld in artikel 6:119a BW, alsmede de buitengerechtelijke incassokosten conform de Wet normering buitengerechtelijke incassokosten (WIK).</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 8 – B2B Dashboard en deelnemersbeheer</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De Partner ontvangt toegang tot het B2B Dashboard voor het beheren van deelnemers en het monitoren van voortgang. De volgende voorwaarden zijn van toepassing:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">De Partner is verantwoordelijk voor het correct en tijdig uitnodigen van deelnemers via het dashboard.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Voortgangsdata van deelnemers is uitsluitend beschikbaar voor de begeleiding en ondersteuning van die deelnemers.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Het is de Partner uitdrukkelijk niet toegestaan voortgangsdata te gebruiken voor personeelsevaluaties, profilering of andere doeleinden zonder de uitdrukkelijke, geïnformeerde toestemming van de betreffende deelnemers.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">De toegang tot het dashboard is strikt beperkt tot geautoriseerde medewerkers van de Partner.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 9 – Verantwoordelijkheden van de Partner</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De Partner is verantwoordelijk voor het nakomen van de volgende verplichtingen:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Deelnemers voorafgaand aan de toegangsverlening informeren over de verwerking van hun persoonsgegevens, conform de B2B Verwerkingsafspraak en het privacybeleid van BusinessBaas.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Uitsluitend personen van 18 jaar of ouder uitnodigen als deelnemer.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Het B2B Dashboard correct en zorgvuldig beheren en toegang tot geautoriseerde personen beperken.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Voldoen aan alle toepasselijke wet- en regelgeving, waaronder de AVG, de UAVG en andere relevante Nederlandse en Europese wetgeving.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">BusinessBaas onverwijld informeren bij een (vermoeden van een) beveiligingsincident of datalek dat betrekking heeft op deelnemersgegevens.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 10 – Aansprakelijkheid en resultaatgarantie</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas biedt een leerplatform en stelt kennis, tools en begeleiding beschikbaar. BusinessBaas geeft geen garanties op specifieke resultaten, waaronder maar niet beperkt tot omzet, klantenwerving, ondernemingssucces of certificering van deelnemers.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is niet aansprakelijk voor:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">indirecte schade, gevolgschade, gederfde winst of reputatieschade van de Partner of deelnemers;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">schade als gevolg van het niet of onvoldoende benutten van het platform door deelnemers;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">tijdelijke onbeschikbaarheid van het platform als gevolg van onderhoud, storingen of omstandigheden buiten de controle van BusinessBaas.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De totale aansprakelijkheid van BusinessBaas jegens de Partner is te allen tijde beperkt tot het bedrag dat de Partner in de voorafgaande 12 maanden aan BusinessBaas heeft betaald, tenzij sprake is van opzet of grove nalatigheid aan de zijde van BusinessBaas.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 11 – Intellectueel eigendom</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Alle trainingen, materialen, content, methodieken, tools en overige elementen van het BusinessBaas-platform zijn en blijven eigendom van BusinessBaas en zijn beschermd door het auteursrecht en overige intellectuele eigendomsrechten.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Partners en deelnemers mogen de content van het platform uitsluitend gebruiken voor persoonlijk leren en individuele toepassing. Het kopiëren, verspreiden, openbaar maken, bewerken of op enige andere wijze commercieel exploiteren van de content is niet toegestaan zonder voorafgaande uitdrukkelijke schriftelijke toestemming van BusinessBaas.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De Partner is aansprakelijk voor schendingen van de intellectuele eigendomsrechten van BusinessBaas door haar deelnemers of andere aan haar toe te rekenen personen. Bij overtreding is de Partner een direct opeisbare boete verschuldigd van € 500,– per overtreding, vermeerderd met € 100,– per dag dat de overtreding voortduurt, onverminderd het recht van BusinessBaas op volledige schadevergoeding.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 12 – Persoonsgegevens en verwerking</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De verwerking van persoonsgegevens van deelnemers in het kader van de partnerovereenkomst is geregeld in de <strong>B2B Verwerkingsafspraak</strong>. Deze Verwerkingsafspraak maakt een verplicht en onlosmakelijk onderdeel uit van de overeenkomst tussen BusinessBaas en de Partner.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Door het ondertekenen of elektronisch accepteren van de licentieovereenkomst bevestigt de Partner kennis te hebben genomen van de B2B Verwerkingsafspraak en daarmee akkoord te gaan. BusinessBaas en de Partner treden in het kader van deze overeenkomst op als gezamenlijke verwerkingsverantwoordelijken als bedoeld in artikel 26 AVG, voor zover het de verwerking van deelnemersgegevens betreft.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 13 – Beëindiging</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is gerechtigd de overeenkomst met onmiddellijke ingang te beëindigen, zonder rechterlijke tussenkomst en zonder gehouden te zijn tot enige restitutie of schadevergoeding, in de volgende gevallen:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">de Partner schiet ernstig tekort in de nakoming van de overeenkomst en herstelt dit niet binnen 14 dagen na schriftelijke ingebrekestelling;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">de Partner wordt in staat van faillissement verklaard of surseance van betaling aanvraagt;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">de Partner het platform misbruikt of intellectuele eigendomsrechten van BusinessBaas schendt;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">de Partner de verplichtingen uit de B2B Verwerkingsafspraak niet nakomt.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Bij beëindiging zijn reeds betaalde licentiekosten niet restitueerbaar, tenzij de beëindiging het gevolg is van een toerekenbare tekortkoming van BusinessBaas zelf.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 14 – Vertrouwelijkheid</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van de andere partij ontvangen of te weten komen. Onder vertrouwelijke informatie wordt in ieder geval verstaan: commerciële gegevens, prijsinformatie, deelnemersdata, technische specificaties, methodieken en bedrijfsstrategieën.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De geheimhoudingsverplichting geldt voor de duur van de overeenkomst en blijft van kracht gedurende 3 jaar na beëindiging van de overeenkomst. Openbaarmaking aan derden is uitsluitend toegestaan indien dit wettelijk verplicht is of uitdrukkelijk schriftelijk is overeengekomen.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 15 – Overmacht</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is niet aansprakelijk voor tekortkomingen in de nakoming van de overeenkomst die het gevolg zijn van omstandigheden buiten haar redelijke controle, waaronder storingen bij derde partijen (Wix, Mural, OpenAI, Stripe, Mollie, Zoom), cyberaanvallen, internetstoringen, brand, overheidsmaatregelen of pandemieën. In geval van overmacht worden de verplichtingen van BusinessBaas opgeschort voor de duur van de overmachtsituatie.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Indien de overmachtsituatie langer dan 30 dagen voortduurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden. BusinessBaas zal in dat geval de reeds betaalde licentiekosten naar rato vergoeden voor de niet-genoten licentieperiode.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 16 – Vrijwaring door de Partner</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">De Partner vrijwaart BusinessBaas volledig voor alle aanspraken van derden, waaronder deelnemers, toezichthouders en overheidsinstanties, die voortvloeien uit of verband houden met:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">het verstrekken van onjuiste, onvolledige of onrechtmatig verkregen deelnemersdata aan BusinessBaas;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">het nalaten deelnemers te informeren over de verwerking van hun persoonsgegevens, conform de B2B Verwerkingsafspraak;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">misbruik van het platform of onrechtmatig gebruik van voortgangsdata van deelnemers;</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">schendingen van toepasselijke wet- en regelgeving door de Partner.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 17 – Wijzigingen van voorwaarden en tarieven</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas behoudt zich het recht voor deze algemene voorwaarden B2B en de gehanteerde tarieven te wijzigen. De Partner wordt minimaal 60 dagen van tevoren schriftelijk op de hoogte gesteld van de voorgenomen wijziging.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Bij materiële wijzigingen die de rechten of verplichtingen van de Partner wezenlijk beïnvloeden, heeft de Partner het recht de overeenkomst kosteloos te beëindigen vóór de ingangsdatum van de wijziging, door dit schriftelijk aan BusinessBaas kenbaar te maken. Indien de Partner de overeenkomst niet tijdig beëindigt, wordt de Partner geacht akkoord te zijn gegaan met de wijziging.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 18 – Slotbepalingen</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Op alle overeenkomsten tussen BusinessBaas en de Partner is uitsluitend Nederlands recht van toepassing. De toepasselijkheid van het Weens Koopverdrag (CISG) is uitdrukkelijk uitgesloten.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Partijen zullen eventuele geschillen in eerste instantie trachten op te lossen door middel van onderling overleg. Indien partijen er niet in slagen het geschil minnelijk te schikken, wordt het voorgelegd aan de bevoegde rechter van de <strong>Rechtbank Limburg</strong>.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Indien een bepaling van deze algemene voorwaarden B2B nietig of vernietigbaar blijkt, tast dit de geldigheid van de overige bepalingen niet aan. Partijen zullen in dat geval een vervangende bepaling overeenkomen die zoveel mogelijk recht doet aan de strekking van de nietige of vernietigde bepaling.</p>
        </div>
      `;
    }
  }
  customElements.define('bb-legal-avb2b', BBLegalAvB2b);
})();
