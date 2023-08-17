// if(window.location.href == "http://127.0.0.1:5501/Travel-Blog/Views/index.html"){
const langMenu = document.querySelector('.lang-menuu');
const buttons = document.querySelectorAll('.lang-btn');
const headLink1A = document.getElementById('l1');
const headLink2A = document.getElementById('l2');
const headLink3A = document.getElementById('l3');
const bookingButtonA = document.querySelector('.booking');
const sum = document.getElementById('sum');
const al = document.getElementById('al');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card1Italic = document.querySelector('.italics');
const imgT = document.getElementById('imgT');
const card2Text = document.getElementById('card2Text');
const card4Text = document.getElementById('card4Text');
const more = document.getElementById('more');
const seasonal_vacation_heading = document.querySelector('.seasonal_vacation_heading');
const seasonal_vacation_heading_winter = document.getElementById('w');
const btnMore = document.querySelectorAll('.btn-primary');
const subscribe = document.getElementById('subscribe');
const subscribeText = document.getElementById('subscribeText');
const subscribeBtn = document.getElementById('btnn');
const faqs = document.getElementById('f1');
const termsOfService = document.getElementById('f2');
const privacyPolicy = document.getElementById('f3');
const copyrights = document.querySelector('.cop');

buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const attr = button.getAttribute('language');
    console.log(attr);
    if(attr == "german"){
      document.querySelector(".selected-langg").style.backgroundImage = "url('https://flagsapi.com/BE/flat/32.png')";
    }else if(attr=="italian"){
      document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/IT/flat/32.png)";
    }else if(attr=="french"){
      document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/FR/flat/32.png)";
    }else if(attr=="espanol"){
      document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/ES/flat/32.png)";
    }else{
      document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/US/flat/32.png)";
    }
    headLink1A.textContent = data[attr].headLink1;
    headLink2A.textContent = data[attr].headLink2;
    headLink3A.textContent = data[attr].headLink3;
    bookingButtonA.textContent = data[attr].bookingButton;
    al.textContent = data[attr].al;
    sum.textContent = data[attr].sum;
    card1.textContent = data[attr].card1title;
    card2.textContent = data[attr].card2title;
    card3.textContent = data[attr].card3title;
    card4.textContent = data[attr].card4title;
    card5.textContent = data[attr].card5title;
    card1Italic.textContent = data[attr].card1ItalicTitle;
    imgT.textContent = data[attr].card1Date;
    card2Text.textContent = data[attr].card2Text;
    card4Text.textContent = data[attr].card4Text;
    more.textContent = data[attr].card5More;
    seasonal_vacation_heading.textContent = data[attr].cardCarousselSummer;
    seasonal_vacation_heading_winter.textContent = data[attr].cardCarousselWinter;
    btnMore.forEach(btn=>{
      btn.textContent = data[attr].btnMore;
    });
    subscribe.textContent = data[attr].subscribe;
    subscribeText.textContent = data[attr].subscribeText;
    subscribeBtn.textContent = data[attr].subscribe;
    faqs.textContent = data[attr].faqs;
    termsOfService.textContent = data[attr].termsOfService;
    privacyPolicy.textContent = data[attr].privacyPolicy;
    copyrights.textContent = data[attr].copyrights;
  });
});

const data = {
  "english" :{
    "headLink1": "Tours",
    "headLink2": "About Us",
    "headLink3": "Contacts",
    "bookingButton": "Book a Tour",
    "al": "Albanian",
    "sum": "Summer",
    "card1title":" Saranda Tours",
    "card2title": "Ksamil Tours",
    "card3title": "Berat Tours",
    "card4title": "Valbona Tours",
    "card5title": "Visit beautiful Albania",
    "card1ItalicTitle" : "Summer Tours",
    "card1Date" : "5-10 August",
    "card2Text" : "Most searched",
    "card4Text" : "Northern tours",
    "card5More" : "More destinations...",
    "cardCarousselSummer" : "Summer Vacation",
    "cardCarousselWinter" : "Winter Cacation",
    "btnMore" : "More",
    "subscribe" : "Subscribe",
    "subscribeText" : "be the first who knows",
    "faqs" : "FAQs",
    "termsOfService" : "Terms Of Service",
    "privacyPolicy" : "Privacy Policy",
    "copyrights" : "@copyright2023"
  },
  "german" :{
    "headLink1": "Touren",
    "headLink2": "Über Uns",
    "headLink3": "Kontakte",
    "bookingButton": "Eine Reise buchen",
    "al" :"Albanischer",
    "sum": "Sommer",
    "card1title":"Saranda Touren",
    "card2title": "Ksamil Touren",
    "card3title": "Berat Touren",
    "card4title": "Valbona Touren",
    "card5title": "Besuchen Sie das schöne Albanien",
    "card1ItalicTitle" : "Sommertouren",
    "card1Date" : "5-10 August",
    "card2Text" : "Am häufigsten gesucht",
    "card4Text" : "Nordtouren",
    "card5More" : "Andere Ziele…",
    "cardCarousselSummer" : "Sommerurlaub",
    "cardCarousselWinter" : "Winterurlaub",
    "btnMore" : "Mehr",
    "subscribe" : "Abonnieren",
    "subscribeText" : "sei der Erste, der es weiß",
    "faqs" : "FAQs",
    "termsOfService" : "Nutzungsbedingungen",
    "privacyPolicy" : "Datenschutzrichtlinie", 
    "copyrights" : "@Urheberrecht2023"
  },
  "italian":{
    "headLink1": "Tour",
    "headLink2": "Chi Siamo",
    "headLink3": "Contatti",
    "bookingButton": "Prenota un tour",
    "al": "Albanese",
    "sum": "Estate ",
    "card1title":"Saranda Tour",
    "card2title": "Ksamil Tour",
    "card3title": "Berat Tour",
    "card4title": "Valbona Tour",
    "card5title": "Visita la bellissima Albania",
    "card1ItalicTitle" : "Tour Estivi",
    "card1Date" : "5-10 Agosto",
    "card2Text" : "Più cercato",
    "card4Text" : "Tour del Nord",
    "card5More" : "Altre destinazioni...",
    "cardCarousselSummer" : "Vacanze Estive",
    "cardCarousselWinter" : "Vacanze Invernali",
    "btnMore" : "Più di",
    "subscribe" : "Sottoscrivi",
    "subscribeText" : "puoi essere il primo a saperlo",
    "faqs" : "FAQs",
    "termsOfService" : "Termini di servizio",
    "privacyPolicy" : "Politica sulla riservatezza",
    "copyrights" : "@diritto d'autore2023"
  },
  "french": {
    "headLink1": "Tours",
    "headLink2": "À Propos",
    "headLink3": "Contacts",
    "bookingButton": "Réserver un Tour",
    "al": "Albanais",
    "sum": "Été",
    "card1title": "Tours à Saranda",
    "card2title": "Tours à Ksamil",
    "card3title": "Tours à Berat",
    "card4title": "Tours à Valbona",
    "card5title": "Visitez la belle Albanie",
    "card1ItalicTitle": "Tours d'Été",
    "card1Date": "5-10 Août",
    "card2Text": "Le plus recherché",
    "card4Text": "Tours du Nord",
    "card5More": "Plus de destinations...",
    "cardCarousselSummer": "Vacances d'Été",
    "cardCarousselWinter": "Vacances d'Hiver",
    "btnMore": "Plus",
    "subscribe": "S'Abonner",
    "subscribeText": "soyez le premier à savoir",
    "faqs": "FAQ",
    "termsOfService": "Conditions d'utilisation",
    "privacyPolicy": "Politique de confidentialité",
    "copyrights": "@droits d'auteur2023"
  },
  
  "espanol": {
    "headLink1": "Tours",
    "headLink2": "Sobre Nosotros",
    "headLink3": "Contactos",
    "bookingButton": "Reservar un Tour",
    "al": "Albanés",
    "sum": "Verano",
    "card1title": "Tours en Saranda",
    "card2title": "Tours en Ksamil",
    "card3title": "Tours en Berat",
    "card4title": "Tours en Valbona",
    "card5title": "Visita la hermosa Albania",
    "card1ItalicTitle": "Tours de Verano",
    "card1Date": "5-10 Agosto",
    "card2Text": "Más buscados",
    "card4Text": "Tours del Norte",
    "card5More": "Más destinos...",
    "cardCarousselSummer": "Vacaciones de Verano",
    "cardCarousselWinter": "Vacaciones de Invierno",
    "btnMore": "Más",
    "subscribe": "Suscribirse",
    "subscribeText": "sé el primero en saberlo",
    "faqs": "Preguntas Frecuentes",
    "termsOfService": "Términos de Servicio",
    "privacyPolicy": "Política de Privacidad",
    "copyrights": "@derechos de autor2023"
  }
}

// }