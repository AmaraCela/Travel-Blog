const faqp1 = document.querySelector('#faqp1');
const ch1 = document.querySelector('#ch1');
// const div1 = document.querySelector('#div1');
const h6Div1 = document.querySelector('#h6Div1');
const p1Div1 = document.querySelector('#p1Div1');
const h61Div1 = document.querySelector('#h61Div1');
const p11Div1 = document.querySelector('#p11Div1');
const button1 = document.querySelector('#button1');
const div2 = document.querySelector('#div2');
const button2 = document.querySelector('#button2');
// const div3 = document.querySelector('#div3');
const h6Div3 = document.querySelector('#h6Div3');
const p1Div3 = document.querySelector('#p1Div3');
const p11Div3 = document.querySelector('#p11Div3');
const button3 = document.querySelector('#button3');
const ch2 = document.querySelector('#ch2');
const button4 = document.querySelector('#button4');
const div4 = document.querySelector('#div4');
const button5 = document.querySelector('#button5');
const div5 = document.querySelector('#div5');
const button6 = document.querySelector('#button6');
// const div6 = document.querySelector('#div6');
const h6Div6 = document.querySelector('#h6Div6');
const p1Div6 = document.querySelector('#p1Div6');
const p11Div6 = document.querySelector('#p11Div6');
const h61Div6 = document.querySelector('#h61Div6');
const p13Div6 = document.querySelector('#p13Div6');
const p12Div6 = document.querySelector('#p12Div6');
const p14Div6 = document.querySelector('#p14Div6');
const ch3 = document.querySelector('#ch3');
const button7 = document.querySelector('#button7');
const div7 = document.querySelector('#div7');
const button8 = document.querySelector("#button8");
// const div8 = document.querySelector('#div8');
const p1Div8 = document.querySelector('#p1Div8');
const p11Div8 = document.querySelector('#p11Div8');
const button9 = document.querySelector('#button9');
const div9 = document.querySelector('#div9');
const serviceTitle = document.querySelector('.serviceTitle');
const serviceContent = document.querySelector('.serviceContent');
const policyTitle = document.querySelector('.policyTitle');
const policyContent = document.querySelector('.policyContent');
const cookies = document.querySelector('.cookies');
const security = document.querySelector('.security');
const qAnda = document.querySelector('.qAnda');
const p1Second = document.querySelector('#p1');
const p2Second = document.querySelector('#p2');
const p3Second = document.querySelector('#p3');
const link = document.querySelector('#link');

const threeInOneData = {
  "english" :{
  "faqp1" : "Traveling is one of those things that naturally gives rise to queries, concerns and doubts, so we’re here to put your mind at ease.For questions frequent and otherwise, this is the spot.",
  "ch1" : "Choosing a trip",
  "button1": "Trip styles",
  "h6Div1" : "Which style of trip is right for me?",
  "p1Div1" : "Our four styles of travel – Basix, Original, Comfort and Premium – cover a whole gamut of travel experiences. To find out which one has ‘You’ written all over it, visit our trip styles page.",
  "h61Div1" : "Are trips physically demanding?",
  "p11Div1" : "Want to lie in a hammock and not move until cocktail hour? We’ve got a trip for that. Want to power up the side of a mountain at high altitude? We’ve also got a trip for that. To determine what type of trip suits you best, each of our trips comes with a Physical Rating to let you know how physically demanding it is… or isn’t.",
  "div2" : "  Intrepid is committed to making travel widely accessible, regardless of ability or disability. We ask that you carefully consider whether you are physically and mentally able to complete the itinerary you have chosen, recognising that on many trips you will be required to carry your own bags and use public transport. Where we can we will make reasonable adjustments to the operation of our trips to facilitate the requirements of disabled travellers – such as booking ground floor accommodation, or having our leaders communicate important directions in writing as well as verbally. Many travellers with disabilities have been able to enjoy our trips by travelling with a friend or companion who can assist with specific needs. If joining a group trip is not practical we may be able to provide you with a private departure. Please contact our sales team for further information on any of our itineraries.",
  "button2" : "I have a disability – can I join an Intrepid trip?",
  "h6Div3" : "Flights",
  "p1Div3" : "Flights to the tour destination are not included in the trip price. However, on-tour flights and all other modes of on-tour transport are included. If you'd like help booking international flights*, please get in touch via phone or live chat to request a quote.",
  "p11Div3" : "*Excluding customers in North America.",
  "button3" : "Are flights and airport transfers included in the tour price?",
  "ch2" : "Booking",
  "div4" : " Oh no! Sorry to hear you missed out. Our promotions run for a limited time only, so you need to get in there quickly to snag a good deal. Make sure you’re signed up to our email list so that you’re in the know for future sales.",
  "button4" : "Why has the price of a trip I wanted to book changed?",
  "div5" : "  Oh no! Sorry to hear you missed out. Our promotions run for a limited time only, so you need to get in there quickly to snag a good deal. Make sure you’re signed up to our email list so that you’re in the know for future sales.",
  "button5" : "Why has the price of a trip I wanted to book changed?",
  "h6Div6" : "I paid for a trip but haven't received confirmation, is it going ahead?",
  "p1Div6" : "We know you’re probably itching to see that confirmation email land in your inbox, but hold tight! It can take us a couple of days to process your booking. We’ll send you an update in 2 to 4 business days.",
  "p11Div6" : "If you booked an on request trip and space is unavailable, we’ll let you know via email and provide you with a full refund.",
  "h61Div6" : "I booked trip extras but haven't received confirmation, how long should this take?",
  "p12Div6" : "It can take a few days for our team to confirm airport transfers, pre/post-trip accommodation and other extras with our local suppliers on the ground. Please give us 2 to 4 business days to email you an update.",
  "p13Div6" : "When will I know all the details of my trip?",
  "p14Div6" : "All trip details are available in yourEssential Trip Information If there are last-minute changes such as a new joining or finishing point, we’ll email you an update before the trip begins. We recommend that you book pre/post-trip accommodation through Intrepid, as we'll normally re-book you into a new hotel if the joining/finishing point changes to save you the hassle.",
  "button6" : "Booking confirmation ",
  "ch3" : "Payments",
  "div7" : " No surcharges apply when paying for your trip with a credit card, but there may be restrictions on which card you can use depending on your location.&nbsp;",
  "button7" : "Is there a surcharge when paying by credit card?",
  "p1Div8" : "Full payment is required 56 days before departure to avoid trip cancellation.",
  "p11Div8" : "*A number of trips including Polar, Adventure Cruises, gorilla permit trips and select Tailor-Made itineraries have different conditions.",
  "button8" : "When is the final due date for my trip?",
  "div9" : " an I use credit to pay the trip deposit or remaining balance?br><br>Absolutely. You can use your credit as a deposit toward the outstanding balance of a trip or keep hold of it for a future adventure – credits don’t expire for most of our trips.<br><br>*Please note that any credits you have with third parties may have expiry dates. ",
  "button9" : "Credits",
  "serviceTitle" : "Terms of Service",
  "serviceContent" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br>Contrary to popular belief, Lorem Ipsum is not simply random text.",
  "policyContent" : " While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Journey Travel &amp; Tours. Here then, is our promise to our individual customers: We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services and other opportunities, and to administer our business.We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to our normal disciplinary process.We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed an interest in their service or product. Please note that this Privacy Policy does not apply to these other companys use of customer information.Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and to allow us to audit them for compliance.We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information (except when we’re prohibited by law) and how to notify us about errors which we will promptly correct.",
  "policyTitle"  : "Privacy Policy",
  "cookies" : "Cookies",
  "security" : "Security",
  "qAnda" : "Comments and Questions",
  "p1" : "We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our Web site or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a Web site and stored on your hard drive or temporarily in your computer’s memory.",
  "p2" : "The personally identifiable information we collect about you is stored in limited access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information.",
  "p3" : "If you have any questions, comments or concerns about our Privacy Policy, ",
  "link" : "contact us."
  },
  "german": {
    "faqp1": "Reisen ist eine dieser Aktivitäten, die naturgemäß Fragen, Bedenken und Zweifel aufwerfen, daher sind wir hier, um Ihre Bedenken zu zerstreuen. Für häufig gestellte und andere Fragen ist dies der richtige Ort.",
    "ch1": "Eine Reise wählen",
    "button1": "Reisestile",
    "h6Div1": "Welcher Reisestil passt zu mir?",
    "p1Div1": "Unsere vier Reisestile - Basix, Original, Komfort und Premium - decken eine Vielzahl von Reiseerfahrungen ab. Um herauszufinden, welcher Stil perfekt zu Ihnen passt, besuchen Sie unsere Reisestile Seite.",
    "h61Div1": "Sind die Reisen körperlich anspruchsvoll?",
    "p11Div1": "Wollen Sie in einer Hängematte liegen und sich nicht bewegen, bis die Cocktailstunde beginnt? Wir haben eine Reise dafür. Möchten Sie an der Seite eines Berges in großer Höhe hochwandern? Wir haben auch eine Reise dafür. Um herauszufinden, welcher Reisestil am besten zu Ihnen passt, enthält jede unserer Reisen eine körperliche Bewertung, die Ihnen mitteilt, wie anspruchsvoll sie körperlich ist… oder auch nicht.",
    "div2": "Intrepid ist darauf bedacht, Reisen unabhängig von Fähigkeiten oder Behinderungen weitestgehend zugänglich zu machen. Wir bitten Sie darum, sorgfältig zu prüfen, ob Sie physisch und mental in der Lage sind, die von Ihnen gewählte Reiseroute zu absolvieren, und zu erkennen, dass Sie auf vielen Reisen Ihre eigenen Taschen tragen und öffentliche Verkehrsmittel nutzen müssen. Wo immer möglich, werden wir vernünftige Anpassungen an den Ablauf unserer Reisen vornehmen, um den Anforderungen behinderter Reisender gerecht zu werden – wie beispielsweise die Buchung von Unterkünften im Erdgeschoss oder das Kommunizieren wichtiger Anweisungen unserer Reiseleiter sowohl schriftlich als auch verbal. Viele Reisende mit Behinderungen konnten unsere Reisen genießen, indem sie mit einem Freund oder Begleiter gereist sind, der bei spezifischen Bedürfnissen unterstützen kann. Falls die Teilnahme an einer Gruppenreise nicht praktikabel ist, können wir möglicherweise eine private Abreise für Sie arrangieren. Bitte setzen Sie sich mit unserem Verkaufsteam in Verbindung, um weitere Informationen zu unseren Reiserouten zu erhalten.",
    "button2": "Ich habe eine Behinderung – kann ich an einer Intrepid-Reise teilnehmen?",
    "h6Div3": "Flüge",
    "p1Div3": "Flüge zum Reiseziel der Tour sind nicht im Reisepreis inbegriffen. On-Tour-Flüge und alle anderen Transportmittel während der Tour sind jedoch inbegriffen. Wenn Sie Hilfe bei der Buchung internationaler Flüge benötigen*, kontaktieren Sie uns bitte telefonisch oder im Live-Chat, um ein Angebot anzufordern.",
    "p11Div3": "*Kunden in Nordamerika ausgenommen.",
    "button3": "Sind Flüge und Flughafentransfers im Tourpreis enthalten?",
    "ch2": "Buchung",
    "div4": "Oh nein! Es tut uns leid zu hören, dass Sie es verpasst haben. Unsere Aktionen laufen nur für begrenzte Zeit, also müssen Sie schnell handeln, um ein gutes Angebot zu ergattern. Stellen Sie sicher, dass Sie auf unserer E-Mail-Liste angemeldet sind, damit Sie über zukünftige Verkäufe informiert sind.",
    "button4": "Warum hat sich der Preis für eine Reise, die ich buchen wollte, geändert?",
    "div5": "Oh nein! Es tut uns leid zu hören, dass Sie es verpasst haben. Unsere Aktionen laufen nur für begrenzte Zeit, also müssen Sie schnell handeln, um ein gutes Angebot zu ergattern. Stellen Sie sicher, dass Sie auf unserer E-Mail-Liste angemeldet sind, damit Sie über zukünftige Verkäufe informiert sind.",
    "button5": "Warum hat sich der Preis für eine Reise, die ich buchen wollte, geändert?",
    "h6Div6": "Ich habe für eine Reise bezahlt, aber noch keine Bestätigung erhalten. Wird die Reise stattfinden?",
    "p1Div6": "Wir wissen, dass Sie wahrscheinlich darauf brennen, diese Bestätigungs-E-Mail in Ihrem Posteingang zu sehen, aber halten Sie durch! Es kann ein paar Tage dauern, bis wir Ihre Buchung bearbeiten. Wir werden Ihnen innerhalb von 2 bis 4 Werktagen ein Update senden.",
    "p11Div6": "Wenn Sie eine On-Request-Reise gebucht haben und kein Platz verfügbar ist, werden wir Sie per E-Mail benachrichtigen und Ihnen eine vollständige Rückerstattung anbieten.",
    "h61Div6": "Ich habe zusätzliche Reiseleistungen gebucht, aber noch keine Bestätigung erhalten. Wie lange dauert das?",
    "p12Div6": "Es kann einige Tage dauern, bis unser Team Flughafentransfers, Vor-/Nach-Reise-Unterkünfte und andere Extras mit unseren lokalen Lieferanten vor Ort bestätigt. Bitte geben Sie uns 2 bis 4 Werktage Zeit, um Ihnen ein Update per E-Mail zu senden.",
    "p13Div6": "Wann werde ich alle Details meiner Reise erfahren?",
    "p14Div6": "Alle Reisedetails finden Sie in Ihrem Essential Trip Information. Wenn es last-minute Änderungen wie einen neuen Treff- oder Endpunkt gibt, werden wir Ihnen vor Reisebeginn ein Update per E-Mail senden. Wir empfehlen Ihnen, Vor-/Nach-Reise-Unterkünfte über Intrepid zu buchen, da wir Sie normalerweise in ein neues Hotel umbuchen werden, wenn sich der Treff-/Endpunkt ändert, um Ihnen den Aufwand zu ersparen.",
    "button6": "Buchungsbestätigung",
    "ch3": "Zahlungen",
    "div7": "Für die Bezahlung Ihrer Reise mit einer Kreditkarte fallen keine Zuschläge an, es können jedoch Einschränkungen hinsichtlich der verwendbaren Karte je nach Ihrem Standort gelten.",
    "button7": "Fällt ein Zuschlag bei Zahlung mit Kreditkarte an?",
    "p1Div8": "Die vollständige Zahlung ist 56 Tage vor Abreise fällig, um eine Stornierung der Reise zu vermeiden.",
    "p11Div8": "*Einige Reisen, einschließlich Polarreisen, Adventure Cruises, Gorilla-Permit-Reisen und ausgewählte maßgeschneiderte Reiserouten, haben unterschiedliche Bedingungen.",
    "button8": "Wann ist der endgültige Fälligkeitstermin für meine Reise?",
    "div9": "Kann ich Guthaben verwenden, um die Anzahlung oder den verbleibenden Betrag für die Reise zu bezahlen? Absolut. Sie können Ihr Guthaben als Anzahlung für den ausstehenden Betrag einer Reise verwenden oder es für ein zukünftiges Abenteuer aufbewahren – Guthaben verfallen für die meisten unserer Reisen nicht. Bitte beachten Sie jedoch, dass Guthaben, die Sie bei Drittanbietern haben, Verfallsdaten haben können.",
    "button9": "Guthaben",
    "serviceTitle": "Nutzungsbedingungen",
    "serviceContent": "Lorem Ipsum ist nur Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 16. Jahrhundert der Branchenstandard für Blindtext, als ein unbekannter Drucker eine Zeile mit Text nahm und sie durcheinander warf, um ein Musterbuch zu erstellen. Es hat nicht nur fünf Jahrhunderte überlebt, sondern auch den Sprung in die elektronische Schriftsatz, die im Wesentlichen unverändert geblieben ist. Es wurde in den 1960er Jahren mit dem Aufkommen von Letraset-Blättern mit Lorem Ipsum-Passagen populär gemacht und in jüngerer Zeit mit Desktop-Publishing-Software wie Aldus PageMaker, einschließlich Versionen von Lorem Ipsum.",
    "policyContent": "Während Informationen die Grundlage unserer Fähigkeit bilden, erstklassigen Service zu bieten, ist das Vertrauen unserer Kunden unsere wichtigste Ressource. Die Sicherung von Kundendaten und die Verwendung nur in dem Umfang, den unsere Kunden wünschen würden, haben für uns alle bei Journey Travel & Tours oberste Priorität. Hier ist also unser Versprechen an unsere einzelnen Kunden:Wir werden gemäß strengen Standards für Sicherheit und Vertraulichkeit alle Informationen schützen, die unsere Kunden mit uns teilen.Wir werden die Sammlung und Verwendung von Kundendaten auf das Mindeste beschränken, das wir benötigen, um unseren Kunden erstklassigen Service zu bieten, einschließlich der Beratung unserer Kunden über unsere Produkte, Dienstleistungen und andere Möglichkeiten sowie zur Verwaltung unseres Geschäfts.Wir werden nur autorisierten Mitarbeitern, die im ordnungsgemäßen Umgang mit Kundendaten geschult sind, den Zugriff auf diese Informationen gestatten. Mitarbeiter, die unser Datenschutzversprechen verletzen, unterliegen unserem normalen Disziplinarverfahren.Wir werden keine Kundendaten an externe Organisationen weitergeben, es sei denn, wir haben den Kunden zuvor in Offenlegungen oder Vereinbarungen informiert oder sind gesetzlich dazu verpflichtet.Wir werden immer die Kontrolle über die Vertraulichkeit unserer Kundendaten behalten. Wir können jedoch Kundendaten mit seriösen Unternehmen teilen, wenn ein Kunde Interesse an ihrem Service oder Produkt geäußert hat. Bitte beachten Sie, dass diese Datenschutzrichtlinie nicht für die Verwendung von Kundendaten durch diese anderen Unternehmen gilt.Immer wenn wir andere Organisationen einstellen, um Support-Services bereitzustellen, werden wir verlangen, dass sie unseren Datenschutzstandards entsprechen und uns gestatten, sie auf Einhaltung zu überprüfen.Wir werden versuchen, Kundendateien vollständig, aktuell und korrekt zu halten. Wir werden unseren Kunden mitteilen, wie und wo sie bequem auf ihre Informationen zugreifen können (außer wenn dies gesetzlich untersagt ist) und wie sie uns auf Fehler hinweisen können, die wir umgehend korrigieren werden.",
    "policyTitle": "Datenschutzrichtlinie",
    "cookies": "Cookies",
    "security": "Sicherheit",
    "qAnda": "Kommentare und Fragen",
    "p1": "Wir setzen Cookie-Technologie ein, um Besuchern und Kunden zu helfen, sich schneller auf unserer Website zu bewegen. Wenn Sie sich auf unserer Website anmelden oder von mehreren wichtigen Funktionen profitieren, können wir Cookies an Ihren Computer senden. Ein Cookie ist eine Zeichenfolge von Informationen, die von einer Website gesendet und auf Ihrer Festplatte oder vorübergehend im Arbeitsspeicher Ihres Computers gespeichert wird.",
    "p2": "Die personenbezogenen Informationen, die wir über Sie sammeln, werden in eingeschränkten Zugangsservern gespeichert. Wir werden Schutzmaßnahmen ergreifen, um die Sicherheit dieser Server und Ihrer personenbezogenen Informationen zu gewährleisten.",
    "p3": "Wenn Sie Fragen, Kommentare oder Bedenken zu unserer Datenschutzrichtlinie haben, kontaktieren Sie uns bitte ",
    "link" : "hier"
  },
  "italian": {
    "faqp1": "Viaggiare è una di quelle cose che naturalmente dà origine a domande, preoccupazioni e dubbi, quindi siamo qui per tranquillizzare la vostra mente. Per domande frequenti e non, questo è il posto giusto.",
    "ch1": "Scegliere un viaggio",
    "button1": "Stili di viaggio",
    "h6Div1": "Quale stile di viaggio fa per me?",
    "p1Div1": "I nostri quattro stili di viaggio - Basix, Original, Comfort e Premium - coprono una vasta gamma di esperienze di viaggio. Per scoprire quale stile ha il tuo nome scritto sopra, visita la nostra pagina degli stili di viaggio.",
    "h61Div1": "Le gite sono fisicamente impegnative?",
    "p11Div1": "Vuoi sdraiarti in un'amaca e non muoverti fino all'ora del cocktail? Abbiamo una gita per questo. Vuoi salire lungo il fianco di una montagna ad alta quota? Abbiamo anche una gita per questo. Per determinare quale tipo di gita fa al caso tuo, ciascuna delle nostre gite è accompagnata da una Valutazione Fisica che ti informa quanto è impegnativa dal punto di vista fisico... o non lo è.",
    "div2": "Intrepid si impegna a rendere i viaggi ampiamente accessibili, indipendentemente dalle capacità o disabilità. Vi chiediamo di valutare attentamente se siete fisicamente e mentalmente in grado di completare l'itinerario che avete scelto, riconoscendo che in molti viaggi dovrete portare da soli i vostri bagagli e utilizzare i mezzi pubblici. Quando possibile, apporteremo adeguamenti ragionevoli all'organizzazione dei nostri viaggi per agevolare le esigenze dei viaggiatori disabili, come ad esempio la prenotazione di alloggi al piano terra o la comunicazione da parte dei nostri leader di importanti istruzioni sia per iscritto che verbalmente. Molti viaggiatori con disabilità sono stati in grado di godersi le nostre gite viaggiando con un amico o un accompagnatore che può assistere con esigenze specifiche. Se la partecipazione a un viaggio di gruppo non è pratica, potremmo essere in grado di fornirvi una partenza privata. Vi preghiamo di contattare il nostro team di vendita per ulteriori informazioni su qualsiasi itinerario.",
    "button2": "Ho una disabilità - posso unirmi a un viaggio Intrepid?",
    "h6Div3": "Voli",
    "p1Div3": "I voli per la destinazione del tour non sono inclusi nel prezzo del tour. Tuttavia, i voli in loco e tutti gli altri mezzi di trasporto in loco sono inclusi. Se desideri assistenza nella prenotazione di voli internazionali*, ti preghiamo di contattarci via telefono o chat dal vivo per richiedere un preventivo.",
    "p11Div3": "*Esclusi i clienti in Nord America.",
    "button3": "I voli e i trasferimenti in aeroporto sono inclusi nel prezzo del tour?",
    "ch2": "Prenotazione",
    "div4": "Oh no! Spiacente di sentire che hai perso l'offerta. Le nostre promozioni durano per un periodo limitato, quindi devi agire velocemente per ottenere un buon affare. Assicurati di essere iscritto alla nostra lista e-mail per essere informato sulle vendite future.",
    "button4": "Perché il prezzo di un viaggio che volevo prenotare è cambiato?",
    "div5": "Oh no! Spiacente di sentire che hai perso l'offerta. Le nostre promozioni durano per un periodo limitato, quindi devi agire velocemente per ottenere un buon affare. Assicurati di essere iscritto alla nostra lista e-mail per essere informato sulle vendite future.",
    "button5": "Perché il prezzo di un viaggio che volevo prenotare è cambiato?",
    "h6Div6": "Ho pagato per un viaggio ma non ho ricevuto conferma, si svolgerà?",
    "p1Div6": "Sappiamo che sei probabilmente ansioso di vedere quella e-mail di conferma arrivare nella tua casella di posta, ma aspetta! Ci vogliono un paio di giorni per elaborare la tua prenotazione. Ti invieremo un aggiornamento entro 2-4 giorni lavorativi.",
    "p11Div6": "Se hai prenotato un viaggio su richiesta e lo spazio non è disponibile, ti informeremo tramite e-mail e ti forniremo un rimborso completo.",
    "h61Div6": "Ho prenotato servizi aggiuntivi per il viaggio ma non ho ricevuto conferma, quanto tempo dovrebbe passare?",
    "p12Div6": "Può essere necessario alcuni giorni per confermare i trasferimenti in aeroporto, l'alloggio pre/post-viaggio e altri servizi extra con i nostri fornitori locali. Ti preghiamo di darci da 2 a 4 giorni lavorativi per inviarti un aggiornamento via e-mail.",
    "p13Div6": "Quando avrò tutte le dettagli del mio viaggio?",
    "p14Div6": "Tutti i dettagli del viaggio sono disponibili nella tua Informazione Essenziale sul Viaggio. Se ci sono cambiamenti dell'ultimo minuto, come un nuovo punto di incontro o di partenza, ti invieremo un aggiornamento via e-mail prima dell'inizio del viaggio. Ti consigliamo di prenotare l'alloggio pre/post-viaggio tramite Intrepid, poiché solitamente ti prenoteremo in un nuovo hotel se il punto di incontro/partenza cambia, per risparmiarti la seccatura.",
    "button6": "Conferma della prenotazione",
    "ch3": "Pagamenti",
    "div7": "Non ci sono sovrapprezzi quando si paga il viaggio con una carta di credito, ma potrebbero esserci restrizioni sulla carta che è possibile utilizzare in base alla vostra posizione.",
    "button7": "Viene applicato un sovrapprezzo per il pagamento con carta di credito?",
    "p1Div8": "È richiesto il pagamento completo 56 giorni prima della partenza per evitare la cancellazione del viaggio.",
    "p11Div8": "*Un certo numero di viaggi, tra cui Polar, Adventure Cruises, gorilla permit trips e alcune itinerari su misura, hanno condizioni diverse.",
    "button8": "Qual è la data di scadenza finale per il mio viaggio?",
    "div9": "Posso utilizzare il credito per pagare l'anticipo o il saldo rimanente del viaggio? Assolutamente. Puoi utilizzare il tuo credito come anticipo per il saldo in sospeso di un viaggio o conservarlo per un'avventura futura: i crediti non scadono per la maggior parte dei nostri viaggi. Tieni presente, tuttavia, che eventuali crediti che hai con terze parti potrebbero avere date di scadenza.",
    "button9": "Crediti",
    "serviceTitle": "Termini di servizio",
    "serviceContent": "Lorem Ipsum è un testo segnaposto utilizzato nell'industria della stampa e della tipografia. Lorem Ipsum è stato il testo segnaposto standard del settore fin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e lo mischiò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, rimanendo sostanzialmente inalterato. Fu reso popolare negli anni '60 con la diffusione dei fogli di Letraset che contenevano passaggi del Lorem Ipsum, e più recentemente con software di impaginazione come Aldus PageMaker che includeva versioni del Lorem Ipsum.<br><br>Contrariamente a quanto si pensi, il Lorem Ipsum non è semplicemente un testo casuale.",
    "policyContent": "Sebbene le informazioni siano la base della nostra capacità di fornire un servizio superiore, la fiducia dei nostri clienti è il nostro bene più importante. Mantenere sicure le informazioni dei clienti e utilizzarle solo come i clienti vorrebbero, è una priorità assoluta per tutti noi presso Journey Travel & Tours. Ecco quindi la nostra promessa ai nostri clienti singoli:Presteremo molta attenzione, secondo rigorosi standard di sicurezza e riservatezza, a tutte le informazioni che i nostri clienti condivideranno con noi.Limiteremo la raccolta e l'uso delle informazioni dei clienti al minimo necessario per fornire un servizio superiore ai nostri clienti, il che include informare i nostri clienti sui nostri prodotti, servizi e altre opportunità, e per amministrare la nostra attività.Permetteremo solo ai dipendenti autorizzati, che sono formati nel corretto trattamento delle informazioni dei clienti, di avere accesso a tali informazioni. I dipendenti che violano la nostra Promessa sulla Privacy saranno soggetti al nostro normale processo disciplinare.Non riveleremo informazioni dei clienti a organizzazioni esterne, a meno che non abbiamo precedentemente informato il cliente in divulgazioni o accordi, o che siamo obbligati per legge.Manteneremo sempre il controllo sulla riservatezza delle informazioni dei clienti. Tuttavia, potremmo condividere informazioni dei clienti con aziende affidabili quando un cliente ha manifestato interesse per il loro servizio o prodotto. Si prega di notare che questa Politica sulla Privacy non si applica all'uso da parte di queste altre aziende delle informazioni dei clienti.Ogni volta che assumiamo altre organizzazioni per fornire servizi di supporto, richiederemo loro di conformarsi ai nostri standard di privacy e di permetterci di esaminarli per la conformità.Cercheremo di mantenere i file dei clienti completi, aggiornati e accurati. Indicheremo ai nostri clienti come e dove accedere comodamente alle proprie informazioni (tranne quando ciò è vietato dalla legge) e come comunicarci gli errori che correggeremo tempestivamente.",
    "policyTitle": "Politica sulla Privacy",
    "cookies": "Cookie",
    "security": "Sicurezza",
    "qAnda": "Commenti e Domande",
    "p1": "Utilizziamo la tecnologia dei cookie per aiutare i visitatori e i clienti a spostarsi più velocemente attraverso il nostro sito. Quando ti registri sul nostro sito web o usufruisci di alcune funzionalità chiave, potremmo passare i cookie al tuo computer. Un cookie è una stringa di informazioni inviata da un sito web e memorizzata sull'hard disk o temporaneamente nella memoria del computer.",
    "p2": "Le informazioni personali identificabili che raccogliamo su di te sono memorizzate su server a accesso limitato. Manterremo misure di sicurezza per proteggere la sicurezza di questi server e delle tue informazioni personali identificabili.",
    "p3": "Se hai domande, commenti o preoccupazioni sulla nostra Politica sulla Privacy, per favore ",
    "link" : "contattaci"
  },
  "french": {
    "faqp1": "Voyager est l'une de ces choses qui suscitent naturellement des questions, des préoccupations et des doutes, alors nous sommes là pour vous rassurer. Pour des questions fréquentes et autres, c'est l'endroit idéal.",
    "ch1": "Choisir un voyage",
    "button1": "Styles de voyage",
    "h6Div1": "Quel style de voyage me convient?",
    "p1Div1": "Nos quatre styles de voyage - Basix, Original, Confort et Premium - couvrent toute une gamme d'expériences de voyage. Pour savoir lequel correspond parfaitement à vos attentes, visitez notre page sur les styles de voyage.",
    "h61Div1": "Les voyages sont-ils physiquement exigeants ?",
    "p11Div1": "Envie de vous allonger dans un hamac et de ne pas bouger jusqu'à l'heure du cocktail ? Nous avons un voyage pour cela. Envie de gravir le flanc d'une montagne en haute altitude ? Nous avons également un voyage pour cela. Pour déterminer quel type de voyage vous convient le mieux, chacun de nos voyages est accompagné d'une Évaluation Physique pour vous indiquer à quel point il est exigeant sur le plan physique... ou pas.",
    "div2": "Intrepid s'engage à rendre les voyages largement accessibles, quelle que soit la capacité ou le handicap. Nous vous demandons de bien réfléchir si vous êtes physiquement et mentalement capable de compléter l'itinéraire que vous avez choisi, en reconnaissant que lors de nombreux voyages, vous devrez porter vos propres bagages et utiliser les transports en commun. Lorsque cela est possible, nous apporterons des ajustements raisonnables au déroulement de nos voyages pour faciliter les besoins des voyageurs handicapés, tels que la réservation d'un hébergement au rez-de-chaussée ou la communication par nos guides d'instructions importantes par écrit ainsi que verbalement. De nombreux voyageurs handicapés ont pu apprécier nos voyages en voyageant avec un ami ou un accompagnateur capable de répondre à des besoins spécifiques. Si rejoindre un voyage de groupe n'est pas pratique, nous pourrions être en mesure de vous proposer un départ privé. Veuillez contacter notre équipe de vente pour plus d'informations sur l'un de nos itinéraires.",
    "button2": "J'ai un handicap - puis-je participer à un voyage Intrepid ?",
    "h6Div3": "Vols",
    "p1Div3": "Les vols vers la destination du circuit ne sont pas inclus dans le prix du voyage. Cependant, les vols en cours de circuit et tous les autres modes de transport en cours de circuit sont inclus. Si vous souhaitez de l'aide pour réserver des vols internationaux*, veuillez nous contacter par téléphone ou via le chat en direct pour demander un devis.",
    "p11Div3": "*À l'exclusion des clients en Amérique du Nord.",
    "button3": "Les vols et les transferts aéroport sont-ils inclus dans le prix du circuit ?",
    "ch2": "Réservation",
    "div4": "Oh non ! Désolé d'apprendre que vous avez raté l'offre. Nos promotions ne durent que pour une durée limitée, donc vous devez agir rapidement pour obtenir une bonne affaire. Assurez-vous d'être inscrit à notre liste de diffusion par e-mail pour être informé des ventes futures.",
    "button4": "Pourquoi le prix d'un voyage que je voulais réserver a-t-il changé ?",
    "div5": "Oh non ! Désolé d'apprendre que vous avez raté l'offre. Nos promotions ne durent que pour une durée limitée, donc vous devez agir rapidement pour obtenir une bonne affaire. Assurez-vous d'être inscrit à notre liste de diffusion par e-mail pour être informé des ventes futures.",
    "button5": "Pourquoi le prix d'un voyage que je voulais réserver a-t-il changé ?",
    "h6Div6": "J'ai payé pour un voyage mais je n'ai pas reçu de confirmation, va-t-il avoir lieu ?",
    "p1Div6": "Nous savons que vous êtes probablement impatient de recevoir cette confirmation par e-mail dans votre boîte de réception, mais soyez patient ! Il nous faut quelques jours pour traiter votre réservation. Nous vous enverrons une mise à jour dans un délai de 2 à 4 jours ouvrables.",
    "p11Div6": "Si vous avez réservé un voyage sur demande et que l'espace n'est pas disponible, nous vous en informerons par e-mail et vous fournirons un remboursement complet.",
    "h61Div6": "J'ai réservé des extras pour le voyage mais je n'ai pas reçu de confirmation, combien de temps cela devrait-il prendre ?",
    "p12Div6": "Il peut falloir quelques jours à notre équipe pour confirmer les transferts aéroportuaires, l'hébergement avant/après le voyage et d'autres extras avec nos fournisseurs locaux sur place. Veuillez nous accorder 2 à 4 jours ouvrables pour vous envoyer une mise à jour par e-mail.",
    "p13Div6": "Quand saurai-je tous les détails de mon voyage ?",
    "p14Div6": "Tous les détails du voyage sont disponibles dans votre Informations Essentielles sur le Voyage. En cas de changements de dernière minute, tels qu'un nouveau point de départ ou d'arrivée, nous vous enverrons une mise à jour par e-mail avant le début du voyage. Nous vous recommandons de réserver l'hébergement avant/après le voyage via Intrepid, car nous vous réserverons normalement dans un nouvel hôtel si le point de départ/d'arrivée change, pour vous éviter les tracas.",
    "button6": "Confirmation de la réservation",
    "ch3": "Paiements",
    "div7": "Aucun frais supplémentaire n'est appliqué lors du paiement de votre voyage avec une carte de crédit, mais il peut y avoir des restrictions quant à la carte que vous pouvez utiliser en fonction de votre emplacement.",
    "button7": "Y a-t-il des frais supplémentaires lors du paiement par carte de crédit ?",
    "p1Div8": "Le paiement intégral est requis 56 jours avant le départ pour éviter l'annulation du voyage.",
    "p11Div8": "*Un certain nombre de voyages, notamment les voyages en Antarctique, les croisières d'aventure, les voyages avec permis pour les gorilles et certains itinéraires sur mesure, ont des conditions différentes.",
    "button8": "Quelle est la date limite finale pour mon voyage ?",
    "div9": "Puis-je utiliser un crédit pour payer l'acompte ou le solde restant du voyage ? Absolument. Vous pouvez utiliser votre crédit comme acompte pour le solde en cours d'un voyage ou le conserver pour une aventure future : les crédits n'expirent pas pour la plupart de nos voyages. Cependant, veuillez noter que les crédits que vous avez auprès de tiers peuvent avoir des dates d'expiration.",
    "button9": "Crédits",
    "serviceTitle": "Conditions de service",
    "serviceContent": "Lorem Ipsum est simplement un texte factice utilisé dans l'industrie de l'imprimerie et de la composition. Lorem Ipsum a été le texte factice standard de l'industrie depuis le XVIe siècle, lorsqu'un imprimeur inconnu a pris une galée de caractères et l'a brouillée pour en faire un livre de spécimens. Il a survécu non seulement à cinq siècles, mais aussi au passage à la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la diffusion des feuilles Letraset contenant des passages du Lorem Ipsum, et plus récemment avec les logiciels de PAO comme Aldus PageMaker, incluant des versions du Lorem Ipsum.<br><br>Contrairement à une croyance populaire, le Lorem Ipsum n'est pas simplement du texte aléatoire.",
    "policyContent": "Bien que l'information soit la pierre angulaire de notre capacité à fournir un service supérieur, la confiance de nos clients est notre bien le plus important. Maintenir la sécurité des informations de nos clients et les utiliser uniquement comme nos clients le souhaiteraient est une priorité absolue pour nous tous chez Journey Travel & Tours. Voici donc notre promesse à nos clients individuels :Nous protégerons, selon des normes strictes de sécurité et de confidentialité, toutes les informations que nos clients partageront avec nous.Nous limiterons la collecte et l'utilisation des informations des clients au minimum nécessaire pour fournir un service supérieur à nos clients, ce qui inclut informer nos clients de nos produits, services et autres opportunités, et administrer notre entreprise.Nous permettrons uniquement aux employés autorisés, formés à la manipulation correcte des informations des clients, d'accéder à ces informations. Les employés enfreignant notre Promesse de confidentialité seront soumis à notre processus disciplinaire habituel.Nous ne divulguerons pas les informations des clients à une organisation externe à moins que nous n'ayons précédemment informé le client dans des divulgations ou accords, ou que nous y soyons tenus par la loi.Nous conserverons toujours le contrôle sur la confidentialité des informations des clients. Cependant, nous pourrions partager les informations des clients avec des entreprises réputées lorsque le client a manifesté un intérêt pour leur service ou leur produit. Veuillez noter que cette Politique de confidentialité ne s'applique pas à l'utilisation par ces autres entreprises des informations des clients.Chaque fois que nous engageons d'autres organisations pour fournir des services de support, nous exigerons qu'elles se conforment à nos normes de confidentialité et nous autorisent à les auditer pour vérifier leur conformité.Nous tenterons de maintenir les dossiers des clients complets, à jour et exacts. Nous indiquerons à nos clients comment et où accéder commodément à leurs informations (sauf lorsque la loi nous l'interdit) et comment nous signaler les erreurs que nous corrigerons rapidement.",
    "policyTitle": "Politique de confidentialité",
    "cookies": "Cookies",
    "security": "Sécurité",
    "qAnda": "Commentaires et Questions",
    "p1": "Nous utilisons la technologie des cookies pour aider les visiteurs et les clients à naviguer plus rapidement sur notre site. Lorsque vous vous connectez à notre site Web ou profitez de certaines fonctionnalités clés, nous pouvons transférer des cookies sur votre ordinateur. Un cookie est une chaîne d'informations envoyée par un site Web et stockée sur votre disque dur ou temporairement dans la mémoire de votre ordinateur.",
    "p2": "Les informations personnelles identifiables que nous recueillons à votre sujet sont stockées sur des serveurs à accès limité. Nous maintiendrons des mesures de protection pour sécuriser la sécurité de ces serveurs et de vos informations personnelles identifiables.",
    "p3": "Si vous avez des questions, des commentaires ou des préoccupations concernant notre Politique de confidentialité, veuillez, ",
    "link" : "nous contacter"
  },
  "espanol": {
    "faqp1": "Viajar es una de esas cosas que naturalmente suscita preguntas, inquietudes y dudas, así que estamos aquí para tranquilizar tu mente. Para preguntas frecuentes y otras, este es el lugar indicado.",
    "ch1": "Elegir un viaje",
    "button1": "Estilos de viaje",
    "h6Div1": "¿Qué estilo de viaje es el adecuado para mí?",
    "p1Div1": "Nuestros cuatro estilos de viaje: Basix, Original, Confort y Premium, abarcan una amplia gama de experiencias de viaje. Para descubrir cuál se adapta perfectamente a ti, visita nuestra página de estilos de viaje.",
    "h61Div1": "¿Son exigentes físicamente los viajes?",
    "p11Div1": "¿Quieres descansar en una hamaca y no moverte hasta la hora del cóctel? Tenemos un viaje para eso. ¿Quieres subir una montaña a gran altitud? También tenemos un viaje para eso. Para determinar qué tipo de viaje te conviene mejor, cada uno de nuestros viajes viene con una Clasificación Física para indicarte qué tan exigente es físicamente... o no.",
    "div2": "Intrepid se compromete a hacer que los viajes sean ampliamente accesibles, sin importar la capacidad o discapacidad. Te pedimos que consideres cuidadosamente si estás física y mentalmente capacitado para completar el itinerario que has elegido, reconociendo que en muchos viajes se te pedirá que lleves tus propias maletas y uses el transporte público. Siempre que sea posible, haremos ajustes razonables en la operación de nuestros viajes para facilitar las necesidades de los viajeros discapacitados, como reservar alojamiento en la planta baja o hacer que nuestros líderes comuniquen direcciones importantes por escrito además de verbalmente. Muchos viajeros con discapacidades han podido disfrutar de nuestros viajes viajando con un amigo o acompañante que pueda ayudar con necesidades específicas. Si unirse a un viaje en grupo no es práctico, es posible que podamos ofrecerte una salida privada. Por favor, comunica con nuestro equipo de ventas para obtener más información sobre cualquiera de nuestros itinerarios.",
    "button2": "Tengo una discapacidad, ¿puedo unirme a un viaje de Intrepid?",
    "h6Div3": "Vuelos",
    "p1Div3": "Los vuelos hacia el destino del tour no están incluidos en el precio del viaje. Sin embargo, los vuelos en el tour y todos los demás modos de transporte en el tour están incluidos. Si deseas ayuda para reservar vuelos internacionales*, por favor, comunica por teléfono o chat en vivo para solicitar una cotización.",
    "p11Div3": "*Excluyendo a los clientes en América del Norte.",
    "button3": "¿Están incluidos los vuelos y los traslados al aeropuerto en el precio del tour?",
    "ch2": "Reserva",
    "div4": "¡Oh no! Lamentamos saber que te perdiste la oferta. Nuestras promociones tienen una duración limitada, así que debes actuar rápidamente para conseguir una buena oferta. Asegúrate de estar registrado en nuestra lista de correo electrónico para estar al tanto de futuras ventas.",
    "button4": "¿Por qué ha cambiado el precio de un viaje que quería reservar?",
    "div5": "¡Oh no! Lamentamos saber que te perdiste la oferta. Nuestras promociones tienen una duración limitada, así que debes actuar rápidamente para conseguir una buena oferta. Asegúrate de estar registrado en nuestra lista de correo electrónico para estar al tanto de futuras ventas.",
    "button5": "¿Por qué ha cambiado el precio de un viaje que quería reservar?",
    "h6Div6": "He pagado un viaje pero no he recibido confirmación, ¿se llevará a cabo?",
    "p1Div6": "Sabemos que probablemente estás ansioso por ver ese correo de confirmación en tu bandeja de entrada, pero espera un momento. Puede que nos lleve unos días procesar tu reserva. Te enviaremos una actualización en 2 a 4 días hábiles.",
    "p11Div6": "Si reservaste un viaje bajo demanda y no hay espacio disponible, te lo haremos saber por correo electrónico y te proporcionaremos un reembolso completo.",
    "h61Div6": "Reservé extras para el viaje pero no he recibido confirmación, ¿cuánto tiempo debería llevar esto?",
    "p12Div6": "Puede llevar algunos días que nuestro equipo confirme los traslados al aeropuerto, el alojamiento antes/después del viaje y otros extras con nuestros proveedores locales en el destino. Por favor, danos de 2 a 4 días hábiles para enviarte una actualización.",
    "p13Div6": "¿Cuándo conoceré todos los detalles de mi viaje?",
    "p14Div6": "Todos los detalles del viaje están disponibles en tu Información Esencial del Viaje. Si hay cambios de último minuto, como un nuevo punto de encuentro o finalización, te enviaremos una actualización antes de que comience el viaje. Recomendamos que reserves el alojamiento antes/después del viaje a través de Intrepid, ya que normalmente te reasignaremos a un nuevo hotel si cambia el punto de encuentro/finalización para ahorrarte molestias.",
    "button6": "Confirmación de reserva",
    "ch3": "Pagos",
    "div7": "No se aplican recargos al pagar tu viaje con tarjeta de crédito, pero puede haber restricciones sobre qué tarjeta puedes usar según tu ubicación.",
    "button7": "¿Hay recargo al pagar con tarjeta de crédito?",
    "p1Div8": "Se requiere el pago completo 56 días antes de la salida para evitar la cancelación del viaje.",
    "p11Div8": "*Varios viajes, incluyendo los de la Antártida, cruceros de aventura, viajes con permisos para gorilas y algunos itinerarios a medida, tienen condiciones diferentes.",
    "button8": "¿Cuál es la fecha límite final para mi viaje?",
    "div9": "¿Puedo usar crédito para pagar el depósito del viaje o el saldo restante? Absolutamente. Puedes usar tu crédito como depósito para el saldo pendiente de un viaje o mantenerlo para una aventura futura: los créditos no caducan en la mayoría de nuestros viajes. Sin embargo, ten en cuenta que los créditos que tengas con terceros pueden tener fechas de vencimiento.",
    "button9": "Créditos",
    "serviceTitle": "Condiciones de servicio",
    "serviceContent": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el siglo XVI, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de textos de muestra. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con la creación de hojas Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.<br><br>A diferencia de la creencia popular, Lorem Ipsum no es simplemente un texto aleatorio.",
    "policyContent": "Si bien la información es la base de nuestra capacidad para brindar un servicio superior, el activo más importante es la confianza de nuestros clientes. Mantener segura la información del cliente y utilizarla solo como nuestros clientes desearían es una prioridad principal para todos nosotros en Journey Travel & Tours. Aquí está nuestra promesa a nuestros clientes individuales:Protegeremos, de acuerdo con normas estrictas de seguridad y confidencialidad, cualquier información que nuestros clientes compartan con nosotros.Limitaremos la recopilación y el uso de la información del cliente al mínimo necesario para brindar un servicio superior a nuestros clientes, lo que incluye asesorar a nuestros clientes sobre nuestros productos, servicios y otras oportunidades, y administrar nuestro negocio.Permitiremos solo a los empleados autorizados, capacitados en el manejo adecuado de la información del cliente, tener acceso a esa información. Los empleados que violen nuestra Promesa de privacidad estarán sujetos a nuestro proceso disciplinario normal.No revelaremos información del cliente a ninguna organización externa a menos que hayamos informado previamente al cliente en divulgaciones o acuerdos, o estemos obligados por la ley.Mantendremos siempre el control sobre la confidencialidad de la información del cliente. Sin embargo, podríamos compartir información del cliente con empresas confiables cuando un cliente haya expresado interés en su servicio o producto. Ten en cuenta que esta Política de privacidad no se aplica al uso de esta información por parte de otras compañías.Cada vez que contratemos a otras organizaciones para proporcionar servicios de soporte, les exigiremos que se ajusten a nuestros estándares de privacidad y nos permitan auditarlos para verificar su cumplimiento.Intentaremos mantener los archivos de los clientes completos, actualizados y precisos. Le diremos a nuestros clientes cómo y dónde acceder convenientemente a su información (excepto cuando la ley nos lo prohíba) y cómo notificarnos sobre errores que corregiremos rápidamente.",
    "policyTitle": "Política de privacidad",
    "cookies": "Cookies",
    "security": "Seguridad",
    "qAnda": "Comentarios y preguntas",
    "p1": "Empleamos la tecnología de cookies para ayudar a los visitantes y clientes a moverse más rápido a través de nuestro sitio. Cuando te registras en nuestro sitio web o aprovechas algunas características clave, podemos enviar cookies a tu computadora. Una cookie es una cadena de información que se envía desde un sitio web y se almacena en tu disco duro o temporalmente en la memoria de tu computadora.",
    "p2": "La información personal identificable que recopilamos sobre ti se almacena en servidores de acceso limitado. Mantendremos salvaguardias para proteger la seguridad de estos servidores y tu información personal identificable.",
    "p3": "Si tienes alguna pregunta, comentario o inquietud acerca de nuestra Política de privacidad, por favor ",
    "link" : "contáctanos"
  }  
}
function updateThreeInOneContent(selectedLanguage){
  faqp1.textContent = threeInOneData[selectedLanguage].faqp1;
  ch1.textContent = threeInOneData[selectedLanguage].ch1;
  h61Div1.textContent = threeInOneData[selectedLanguage].h61Div1;
  p11Div1.textContent = threeInOneData[selectedLanguage].p11Div1;
  h6Div1.textContent = threeInOneData[selectedLanguage].h6Div1;
  p1Div1.textContent = threeInOneData[selectedLanguage].p1Div1;
  button1.textContent = threeInOneData[selectedLanguage].button1;
  div2.textContent = threeInOneData[selectedLanguage].div2;
  button2.textContent = threeInOneData[selectedLanguage].button2;
  h6Div3.textContent = threeInOneData[selectedLanguage].h6Div1;
  p1Div3.textContent = threeInOneData[selectedLanguage].p1Div3;
  p11Div3.textContent = threeInOneData[selectedLanguage].p11Div3;
  button3.textContent = threeInOneData[selectedLanguage].button3;
  ch2.textContent = threeInOneData[selectedLanguage].ch2;
  div4.textContent = threeInOneData[selectedLanguage].div4;
  button4.textContent = threeInOneData[selectedLanguage].button4;
  div5.textContent = threeInOneData[selectedLanguage].div5;
  button5.textContent = threeInOneData[selectedLanguage].button5;
  h6Div6.textContent = threeInOneData[selectedLanguage].h6Div6;
  p1Div6.textContent = threeInOneData[selectedLanguage].p1Div6;
  h61Div6.textContent = threeInOneData[selectedLanguage].h61Div6;
  p11Div6.textContent = threeInOneData[selectedLanguage].p11Div6;
  p12Div6.textContent = threeInOneData[selectedLanguage].p12Div6;
  p13Div6.textContent = threeInOneData[selectedLanguage].p13Div6;
  p14Div6.textContent = threeInOneData[selectedLanguage].p14Div6;
  button6.textContent = threeInOneData[selectedLanguage].button6;
  ch3.textContent = threeInOneData[selectedLanguage].ch3;
  div7.textContent = threeInOneData[selectedLanguage].div7;
  button7.textContent = threeInOneData[selectedLanguage].button7;
  p1Div8.textContent = threeInOneData[selectedLanguage].p1Div8;
  p11Div8.textContent = threeInOneData[selectedLanguage].p11Div8;
  button8.textContent = threeInOneData[selectedLanguage].button8;
  div9.textContent = threeInOneData[selectedLanguage].div9;
  button9.textContent = threeInOneData[selectedLanguage].button9;
  serviceTitle.textContent = threeInOneData[selectedLanguage].serviceTitle;
  serviceContent.textContent = threeInOneData[selectedLanguage].serviceContent;
  policyTitle.textContent = threeInOneData[selectedLanguage].policyTitle;
  policyContent.textContent = threeInOneData[selectedLanguage].policyContent;
  cookies.textContent = threeInOneData[selectedLanguage].cookies;
  security.textContent = threeInOneData[selectedLanguage].security;
  qAnda.textContent = threeInOneData[selectedLanguage].qAnda;
  p1Second.textContent = threeInOneData[selectedLanguage].p1;
  p2Second.textContent = threeInOneData[selectedLanguage].p2;
  p3Second.textContent = threeInOneData[selectedLanguage].p3;
  link.textContent = threeInOneData[selectedLanguage].link;

  localStorage.setItem('selectedLanguage', selectedLanguage);
}

updateThreeInOneContent(storedLanguage);

buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    selectedLanguage = button.getAttribute('language');
    console.log(selectedLanguage);
    updateThreeInOneContent(selectedLanguage);
  });
});
