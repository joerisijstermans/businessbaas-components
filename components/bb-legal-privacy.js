(function () {
  if (customElements.get('bb-legal-privacy')) return;
  class BBLegalPrivacy extends HTMLElement {
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
            <h1 style="font-size:clamp(28px,4vw,44px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.03em;margin-bottom:10px">Privacybeleid</h1>
            <p style="font-size:16px;color:rgba(255,255,255,0.55);max-width:480px;margin:0 auto;line-height:1.6">Hoe wij omgaan met jouw gegevens</p>
          </div>
        </div>

        <!-- CONTENT -->
        <div style="max-width:760px;margin:0 auto;padding:64px 24px 96px">
          <p style="font-size:.8rem;color:#9CA3AF;margin-bottom:48px">Laatst bijgewerkt: 15 april 2026</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 1 – Wie zijn wij</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas is een eenmanszaak, ingeschreven bij de Kamer van Koophandel onder nummer 90226801, gevestigd te Echt, Nederland. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Website: <a href="https://www.businessbaas.com" style="color:#E85D04;text-decoration:none">www.businessbaas.com</a></li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">E-mail: <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a></li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">KvK-nummer: 90226801</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Vestigingsplaats: Echt, Nederland</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 2 – Doel van dit privacybeleid</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Dit privacybeleid legt uit welke persoonsgegevens wij verzamelen, voor welke doeleinden wij deze verwerken, op welke grondslagen wij ons beroepen, met welke partijen wij gegevens delen, hoe lang wij gegevens bewaren en welke rechten jij als betrokkene hebt.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Uitvoeringswet AVG (UAVG).</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 3 – Minimumleeftijd</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Onze diensten zijn uitsluitend bestemd voor personen van 18 jaar en ouder. Wij verzamelen niet bewust persoonsgegevens van minderjarigen. Indien wij constateren dat gegevens van een minderjarige zijn verstrekt, zullen wij deze onverwijld verwijderen en het bijbehorende account beëindigen.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 4 – Welke gegevens verzamelen wij</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Afhankelijk van de diensten die je gebruikt, kunnen wij de volgende categorieën persoonsgegevens verwerken:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Identificatie- en contactgegevens:</strong> naam, e-mailadres, postadres en bedrijfsinformatie.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Betalingsgegevens:</strong> transactiegegevens verwerkt via Stripe of Mollie. Volledige betaalgegevens worden niet door ons opgeslagen; deze worden uitsluitend door de betalingsdienstaanbieder verwerkt.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Gebruiksgegevens en voortgang:</strong> logingeschiedenis, module-voortgang, voltooide onderdelen en interactiepatronen binnen het platform.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Werkplek-inhoud (Mural):</strong> content die je aanmaakt in je digitale werkplek, zoals notities, canvassen en ingevulde oefeningen.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Nova AI-invoer:</strong> vragen en invoer die je verstrekt aan AI-coach Nova, verwerkt via het Pickaxe/OpenAI-platform.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Technische gegevens:</strong> IP-adres, browsertype en -versie, apparaattype, besturingssysteem en sessiegegevens.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Communicatiegegevens:</strong> berichten, e-mails en WhatsApp-berichten die je met ons uitwisselt, inclusief community-berichten.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Automatiseringsgegevens (n8n):</strong> gegevens die worden verwerkt in het kader van geautomatiseerde workflows en koppelingen tussen platformcomponenten.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Videoconferentiegegevens (Zoom):</strong> naam, e-mailadres, opname-toestemmingen en sessiegegevens bij deelname aan coachingsgesprekken of webinars via Zoom.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 5 – Doeleinden en grondslagen</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Wij verwerken persoonsgegevens uitsluitend voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Platformtoegang en dienstverlening:</strong> het aanmaken en beheren van accounts, het verlenen van toegang tot trainingen, AI-coach en digitale werkplek. Grondslag: uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Betalingsverwerking:</strong> het innen van abonnementsgelden en het bijhouden van financiële administratie. Grondslag: uitvoering van de overeenkomst en wettelijke verplichting (art. 6 lid 1 sub b en c AVG).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>E-mailmarketing en updates:</strong> het toesturen van nieuwsbrieven, platformupdates en relevante aanbiedingen. Grondslag: toestemming (art. 6 lid 1 sub a AVG); afmelden is te allen tijde mogelijk.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Analyse en platformverbetering:</strong> het analyseren van gebruikspatronen om de kwaliteit en gebruikservaring van het platform te verbeteren. Grondslag: gerechtvaardigd belang (art. 6 lid 1 sub f AVG).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Nakomen van wettelijke verplichtingen:</strong> belastingadministratie, bewaarplichten en het voldoen aan overheidsverzoeken. Grondslag: wettelijke verplichting (art. 6 lid 1 sub c AVG).</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 6 – Subverwerkers en derden</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas maakt gebruik van de volgende subverwerkers en derde partijen bij de uitvoering van haar diensten. Met alle verwerkers zijn verwerkersovereenkomsten gesloten, of zij voldoen anderszins aan de AVG:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Wix:</strong> hostingplatform en website-infrastructuur.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Mural:</strong> digitale werkplek voor deelnemers (whiteboard en canvas-omgeving).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Pickaxe / OpenAI:</strong> infrastructuur voor AI-coach Nova; gegevens worden verwerkt conform het OpenAI-privacybeleid.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Stripe:</strong> internationale betalingsverwerking.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Mollie:</strong> Nederlandse betalingsverwerking.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>n8n:</strong> automatiseringsplatform voor workflows en platformintegraties.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Zoom:</strong> videoconferentieplatform voor coaching en webinars.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Meta / WhatsApp:</strong> optionele community-omgeving; gebruik is onderworpen aan de voorwaarden en het privacybeleid van Meta.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Wij verstrekken geen persoonsgegevens aan derden voor commerciële doeleinden, tenzij daarvoor expliciete toestemming is verkregen of een wettelijke verplichting bestaat.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 7 – Nova (AI-coach)</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Nova is de AI-coach binnen het BusinessBaas-platform, aangedreven door het Pickaxe-platform op de OpenAI-infrastructuur. Invoer die je verstrekt aan Nova wordt verwerkt via OpenAI. OpenAI verwijdert gespreksdata standaard na 30 dagen.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Wij adviseren nadrukkelijk geen persoonlijk identificeerbare informatie, gevoelige financiële gegevens of bijzondere categorieën persoonsgegevens in te voeren bij Nova. De adviezen van Nova hebben een informatief karakter en vervangen geen professioneel juridisch, financieel of medisch advies.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 8 – Bewaartermijnen</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zo lang als wettelijk verplicht. De volgende termijnen zijn van toepassing:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Klantaccounts:</strong> 2 jaar na beëindiging van het abonnement, waarna gegevens worden geanonimiseerd of verwijderd.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Facturatie- en boekhoudkundige gegevens:</strong> 7 jaar, conform de wettelijke bewaarplicht (art. 52 AWR).</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Trainingsvoortgang en -gegevens:</strong> 2 jaar na het laatste gebruik van het platform.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Coachingsaantekeningen en -verslagen:</strong> 2 jaar na afloop van het coachingstraject.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Zoomgegevens:</strong> 7 tot 31 dagen, afhankelijk van de instellingen van de betreffende sessie.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Nova AI-invoer (via OpenAI):</strong> maximaal 30 dagen, conform het beleid van OpenAI.</li>
          </ul>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 9 – Cookies en tracking</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Onze website maakt gebruik van cookies en vergelijkbare technologieën. Wij onderscheiden de volgende categorieën:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Functionele cookies:</strong> noodzakelijk voor het functioneren van de website; geen toestemming vereist.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Analytische cookies:</strong> voor het meten van websitegebruik en het verbeteren van de gebruikservaring; uitsluitend na expliciete opt-in.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Marketingcookies:</strong> voor het tonen van relevante advertenties en het bijhouden van conversies; uitsluitend na expliciete opt-in.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Je kunt je cookievoorkeuren te allen tijde aanpassen via de cookiebanner op onze website of via de instellingen van je browser.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 10 – B2B-deelnemers</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Wanneer deelnemers toegang krijgen tot het BusinessBaas-platform via een partnerorganisatie, treden BusinessBaas en de betreffende partnerorganisatie op als gezamenlijke verwerkingsverantwoordelijken in de zin van artikel 26 AVG. De onderlinge afspraken over verantwoordelijkheden en rechten van betrokkenen zijn vastgelegd in de B2B Verwerkingsafspraak.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Deelnemers die via een partnerorganisatie zijn uitgenodigd, kunnen zich voor de uitoefening van hun privacyrechten wenden tot zowel BusinessBaas als hun partnerorganisatie.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 11 – Jouw rechten</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Op grond van de AVG heb je de volgende rechten met betrekking tot jouw persoonsgegevens:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Inzagerecht:</strong> je kunt opvragen welke persoonsgegevens wij van jou verwerken.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Correctierecht:</strong> je kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Recht op verwijdering:</strong> je kunt verzoeken om verwijdering van jouw persoonsgegevens ('recht op vergetelheid').</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Recht op verwerkingsbeperking:</strong> je kunt in bepaalde gevallen verzoeken de verwerking tijdelijk te beperken.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Bezwaarrecht:</strong> je kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing doeleinden.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Recht op intrekking van toestemming:</strong> indien verwerking is gebaseerd op toestemming, kun je deze te allen tijde intrekken zonder dat dit de rechtmatigheid van de verwerking vóór intrekking aantast.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>Recht op gegevensoverdraagbaarheid:</strong> je kunt verzoeken om overdracht van jouw gegevens in een gestructureerd, gangbaar en machineleesbaar formaat.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Om een van deze rechten uit te oefenen, kun je contact met ons opnemen via <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a>. Wij reageren binnen 30 dagen op jouw verzoek. Indien wij jouw verzoek niet kunnen inwilligen, lichten wij toe waarom.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Indien je van mening bent dat wij jouw gegevens niet conform de wet verwerken, heb je het recht een klacht in te dienen bij de <strong>Autoriteit Persoonsgegevens</strong> via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener" style="color:#E85D04;text-decoration:none">www.autoriteitpersoonsgegevens.nl</a>.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 12 – Beveiliging</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas neemt passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies, openbaarmaking of vernietiging. Deze maatregelen omvatten onder meer:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Versleutelde gegevensoverdracht via TLS/HTTPS.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Strikt toegangsbeheer: uitsluitend geautoriseerde medewerkers en verwerkers hebben toegang tot persoonsgegevens.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Regelmatige beoordeling en actualisering van beveiligingsmaatregelen.</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Verwerkersovereenkomsten met alle subverwerkers die passende beveiligingsnormen hanteren.</li>
          </ul>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Ondanks onze inspanningen kan geen enkele beveiligingsmaatregel absolute garanties bieden. In geval van een datalek zullen wij de wettelijke meldingsprocedures volgen en betrokkenen informeren indien de inbreuk een hoog risico voor hun rechten en vrijheden met zich meebrengt.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 13 – Wijzigingen in dit privacybeleid</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">BusinessBaas behoudt zich het recht voor dit privacybeleid te allen tijde aan te passen, bijvoorbeeld als gevolg van wijzigingen in wet- of regelgeving, nieuwe diensten of gewijzigde verwerkingsactiviteiten. De meest actuele versie is steeds beschikbaar op onze website.</p>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Bij substantiële wijzigingen die jouw rechten of de verwerking van jouw gegevens materieel beïnvloeden, zullen wij jou hierover per e-mail informeren ten minste 14 dagen vóór de ingangsdatum van de wijziging.</p>

          <h2 style="font-size:1.25rem;font-weight:800;color:#0D2240;margin:36px 0 12px">Artikel 14 – Contact</h2>
          <p style="font-size:.95rem;color:#374151;line-height:1.75;margin-bottom:16px">Voor vragen over dit privacybeleid of de verwerking van jouw persoonsgegevens kun je contact opnemen met:</p>
          <ul style="padding-left:20px;margin-bottom:16px;display:flex;flex-direction:column;gap:6px">
            <li style="font-size:.95rem;color:#374151;line-height:1.65"><strong>BusinessBaas</strong></li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">E-mail: <a href="mailto:info@businessbaas.com" style="color:#E85D04;text-decoration:none">info@businessbaas.com</a></li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">KvK: 90226801</li>
            <li style="font-size:.95rem;color:#374151;line-height:1.65">Vestigingsplaats: Echt, Nederland</li>
          </ul>
        </div>
      `;
    }
  }
  customElements.define('bb-legal-privacy', BBLegalPrivacy);
})();
