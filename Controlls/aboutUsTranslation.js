const paragraph = document.querySelector('#paragraph');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const staff = document.querySelector('#staff');
const work = document.querySelector('#work');
const join = document.querySelector('#join-us-icon');
const ourCompany = document.querySelector('.ourCompany1');
const ourGoal = document.querySelector('.ourGoal1');
const text = document.querySelector('.text')


const aboutUsData = {
  "english" :{
    "paragraph": "About TravAl",
    "title": "Our Mission",
    "content": "Traveling and connecting with places and people is so important to us, it’s the cornerstone of why TravAl exists. We believe that traveling broadens the mind and changes the way you think. The people you meet and the experiences you have give you an improved ability to empathize with different situations and people.",
    "staff" : "Our staff",
    "work" : "Our work",
    "join" : "Join Us",
    "ourCompany" : "TravAl is an easy-to-use travel platform where you can book and manage trips for free.Enjoy exclusive rates, earn loyalty points, and benefit from complimentary 24/7 support from the leading travel management company CWT.",
    "ourGoal" : "At TravAl is all about the journey, helping you explore new challenges in a place where you can be your best self. We’ve always been pioneers, with a vision to shape the future of travel through cutting edge technology, to make it easier for everyone to enjoy amazing experiences wherever they go.",
    "text" : "Choose TravAl for unforgettable Albanian vacations."
  },
  "german" :{
    "paragraph": "Über TravAl",
    "title": "Unsere Mission",
    "content": "Reisen und das Verbinden mit Orten und Menschen sind uns sehr wichtig, es ist der Grundstein, warum TravAl existiert. Wir glauben, dass Reisen den Geist erweitert und die Art und Weise, wie man denkt, verändert. Die Menschen, die man trifft, und die Erfahrungen, die man macht, verleihen einem die verbesserte Fähigkeit, sich in unterschiedliche Situationen und Menschen hineinzuversetzen.",
    "staff": "Unser Team",
    "work": "Unsere Arbeit",
    "join": "Machen Sie mit",
    "ourCompany": "TravAl ist eine benutzerfreundliche Reiseplattform, auf der Sie kostenlos Reisen buchen und verwalten können. Genießen Sie exklusive Preise, sammeln Sie Treuepunkte und profitieren Sie vom kostenlosen 24/7-Support des führenden Reisemanagement-Unternehmens CWT.",
    "ourGoal": "Bei TravAl geht es um die Reise, die Ihnen hilft, neue Herausforderungen an einem Ort zu erkunden, an dem Sie Ihr bestes Selbst sein können. Wir waren schon immer Pioniere mit der Vision, die Zukunft des Reisens durch modernste Technologie zu gestalten, um es jedem einfacher zu machen, unglaubliche Erfahrungen zu genießen, egal wohin sie gehen.",
    "text": "Wählen Sie TravAl für unvergessliche Albanien-Urlaube."
  },
  "italian":{
    "paragraph": "A proposito di TravAl",
    "title": "La nostra Missione",
    "content": "Viaggiare e connettersi con luoghi e persone è molto importante per noi, è il fondamento per cui TravAl esiste. Crediamo che viaggiare ampli la mente e cambi il modo di pensare. Le persone che incontri e le esperienze che vivi ti danno una maggiore capacità di empatia per diverse situazioni e persone.",
    "staff": "Il nostro Staff",
    "work": "Il nostro Lavoro",
    "join": "Unisciti a Noi",
    "ourCompany": "TravAl è una piattaforma di viaggio facile da usare dove puoi prenotare e gestire viaggi gratuitamente. Goditi tariffe esclusive, accumula punti fedeltà e beneficia del supporto gratuito 24/7 dalla principale società di gestione dei viaggi CWT.",
    "ourGoal": "Presso TravAl è tutto incentrato sul viaggio, ti aiutiamo a esplorare nuove sfide in un luogo dove puoi essere il tuo miglior sé. Siamo sempre stati pionieri, con la visione di plasmare il futuro dei viaggi selectedLanguageaverso tecnologie all'avanguardia, per rendere più facile per tutti godere di esperienze straordinarie ovunque vadano.",
    "text": "Scegli TravAl per vacanze indimenticabili in Albania."
  },
  "french": {
    "paragraph": "À propos de TravAl",
    "title": "Notre Mission",
    "content": "Voyager et se connecter avec des lieux et des gens est très important pour nous, c'est la pierre angulaire de l'existence de TravAl. Nous croyons que voyager élargit l'esprit et change la façon de penser. Les personnes que vous rencontrez et les expériences que vous vivez vous donnent une capacité améliorée à éprouver de l'empathie pour différentes situations et personnes.",
    "staff": "Notre Équipe",
    "work": "Notre Travail",
    "join": "Rejoignez-nous",
    "ourCompany": "TravAl est une plateforme de voyage facile à utiliser où vous pouvez réserver et gérer des voyages gratuitement. Profitez de tarifs exclusifs, gagnez des points de fidélité et bénéficiez d'un support gratuit 24h/24 et 7j/7 de la principale société de gestion de voyages CWT.",
    "ourGoal": "Chez TravAl, tout tourne autour du voyage, en vous aidant à explorer de nouveaux défis dans un endroit où vous pouvez être votre meilleur vous-même. Nous avons toujours été des pionniers, avec une vision de façonner l'avenir du voyage grâce à des technologies de pointe, pour rendre plus facile à chacun de profiter d'expériences incroyables où qu'il aille.",
    "text": "Choisissez TravAl pour des vacances inoubliables en Albanie."
  },
  
  "espanol": {
    "paragraph": "Sobre TravAl",
    "title": "Nuestra Misión",
    "content": "Viajar y conectarse con lugares y personas es muy importante para nosotros, es la piedra angular de por qué existe TravAl. Creemos que viajar amplía la mente y cambia la forma de pensar. Las personas que conoces y las experiencias que tienes te brindan una mayor capacidad para empatizar con diferentes situaciones y personas.",
    "staff": "Nuestro Equipo",
    "work": "Nuestro Trabajo",
    "join": "Únete a Nosotros",
    "ourCompany": "TravAl es una plataforma de viajes fácil de usar donde puedes reservar y gestionar viajes de forma gratuita. Disfruta de tarifas exclusivas, gana puntos de lealtad y benefíciate del soporte gratuito las 24 horas, los 7 días de la semana, de la principal empresa de gestión de viajes, CWT.",
    "ourGoal": "En TravAl, todo se trata del viaje, te ayudamos a explorar nuevos desafíos en un lugar donde puedes ser tu mejor versión. Siempre hemos sido pioneros, con una visión de dar forma al futuro de los viajes a través de tecnología de vanguardia, para que sea más fácil para todos disfrutar de experiencias increíbles donde quiera que vayan.",
    "text": "Elige TravAl para unas vacaciones inolvidables en Albania."
  }
}

const storedFig1 = localStorage.getItem('fig1') || "../Images/title.png";
const storedFig2 = localStorage.getItem('fig2') || "../Images/title2.png";

function updateaboutUsContent(selectedLanguage, selectedFlag, fig1, fig2){
  paragraph.textContent = aboutUsData[selectedLanguage].paragraph;
  title.textContent = aboutUsData[selectedLanguage].title;
  content.textContent = aboutUsData[selectedLanguage].content;
  staff.textContent = aboutUsData[selectedLanguage].staff;
  work.textContent = aboutUsData[selectedLanguage].work;
  join.textContent = aboutUsData[selectedLanguage].join;
  ourCompany.textContent = aboutUsData[selectedLanguage].ourCompany;
  ourGoal.textContent = aboutUsData[selectedLanguage].ourGoal;
  text.textContent = aboutUsData[selectedLanguage].text;

  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
  localStorage.setItem('fig1', fig1);
  localStorage.setItem('fig2', fig2);
}

document.querySelector('.selected-langg').style.backgroundImage = storedFlag;
document.querySelector('#t1').src = storedFig1;
document.querySelector('#t2').src = storedFig2;

updateaboutUsContent(storedLanguage, storedFlag, storedFig1, storedFig2);

buttons.forEach(button =>{
    button.addEventListener('click', (event)=>{
      event.preventDefault();
      langMenu.querySelector('.active').classList.remove('active');
      button.classList.add('active');

      const selectedLanguage = button.getAttribute('language');
      let fig1 = "";
      let fig2 = "";
    console.log(selectedLanguage);
    if(selectedLanguage == "german"){
      selectedFlag = "url('https://flagsapi.com/BE/flat/32.png')";
      fig1 = "../Images/germanTitle1.png";
      fig2 = "../Images/germanTitle2.png";
    }else if(selectedLanguage=="italian"){
      selectedFlag = "url(https://flagsapi.com/IT/flat/32.png)";
      fig1 = "../Images/italianTitle1.png";
      fig2 = "../Images/italianTitle2.png";
    }else if(selectedLanguage=="french"){
      selectedFlag = "url(https://flagsapi.com/FR/flat/32.png)";
      fig1 = "../Images/frenchTitle1.png";
      fig2 = "../Images/frenchTitle2.png";
    }else if(selectedLanguage=="espanol"){
      selectedFlag = "url(https://flagsapi.com/ES/flat/32.png)";
      fig1 = "../Images/spanishTitle1.png";
      fig2 = "../Images/spanishTitle2.png";
    }else{
      selectedFlag = "url(https://flagsapi.com/US/flat/32.png)";
      fig1 = "../Images/title.png";
      fig2 = "../Images/title2.png";
    }
    document.querySelector('.selected-langg').style.backgroundImage = selectedFlag;
    document.querySelector('#t1').src = fig1;
    document.querySelector('#t2').src = fig2;
    updateaboutUsContent(selectedLanguage, selectedFlag, fig1, fig2);
    });
});