const langMenu = document.querySelector('.lang-menuu');
const buttons = document.querySelectorAll('.lang-btn');
const headLink1A = document.getElementById('l1');
const headLink2A = document.getElementById('l2');
const headLink3A = document.getElementById('l3');
const bookingButtonA = document.querySelector('.booking');
const subscribeBtn = document.getElementById('btnn');
const faqs = document.getElementById('f1');
const termsOfService = document.getElementById('f2');
const privacyPolicy = document.getElementById('f3');
const copyrights = document.querySelector('.cop');
const subscribe = document.querySelector('#subscribe');
const subscribeText = document.querySelector('#subscribeText');

const storedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const storedFlag = localStorage.getItem('selectedFlag') || "url(https://flagsapi.com/US/flat/32.png)";


const data = {
  "english" :{
    "headLink1": "Tours",
    "headLink2": "About Us",
    "headLink3": "Contacts",
    "bookingButton": "Book a Tour",
    "subscribe" : "Subscribe",
    "subscribeText" : "be the first who knows",
    "faqs" : "FAQs",
    "termsOfService" : "Terms Of Service",
    "privacyPolicy" : "Privacy Policy",
    "copyrights" : "@copyright2023",
  },
  "german" :{
    "headLink1": "Touren",
    "headLink2": "Über Uns",
    "headLink3": "Kontakte",
    "bookingButton": "Eine Reise buchen",
    "subscribe" : "Abonnieren",
    "subscribeText" : "sei der Erste, der es weiß",
    "faqs" : "FAQs",
    "termsOfService" : "Nutzungsbedingungen",
    "privacyPolicy" : "Datenschutzrichtlinie", 
    "copyrights" : "@Urheberrecht2023",
  },
  "italian":{
    "headLink1": "Tour",
    "headLink2": "Chi Siamo",
    "headLink3": "Contatti",
    "bookingButton": "Prenota un tour",
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
    "subscribe": "Suscribirse",
    "subscribeText": "sé el primero en saberlo",
    "faqs": "Preguntas Frecuentes",
    "termsOfService": "Términos de Servicio",
    "privacyPolicy": "Política de Privacidad",
    "copyrights": "@derechos de autor2023"
  }
}

function updateContent(selectedLanguage, selectedFlag){
  headLink1A.textContent = data[selectedLanguage].headLink1;
  headLink2A.textContent = data[selectedLanguage].headLink2;
  headLink3A.textContent = data[selectedLanguage].headLink3;
  bookingButtonA.textContent = data[selectedLanguage].bookingButton;
  subscribe.textContent = data[selectedLanguage].subscribe;
  subscribeText.textContent = data[selectedLanguage].subscribeText;
  subscribeBtn.textContent = data[selectedLanguage].subscribe;
  faqs.textContent = data[selectedLanguage].faqs;
  termsOfService.textContent = data[selectedLanguage].termsOfService;
  privacyPolicy.textContent = data[selectedLanguage].privacyPolicy;
  copyrights.textContent = data[selectedLanguage].copyrights;
  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector(".selected-langg").style.backgroundImage = storedFlag;
updateContent(storedLanguage, storedFlag);

let selectedLanguage = storedLanguage;
buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    selectedLanguage = button.getAttribute('language');
    let selectedFlag = ""
    // console.log('local ',localStorage.getItem('selectedLanguage') );
    if(selectedLanguage == "german"){
      selectedFlag = "url('https://flagsapi.com/BE/flat/32.png')";
    }else if(selectedLanguage=="italian"){
      selectedFlag = "url(https://flagsapi.com/IT/flat/32.png)";
    }else if(selectedLanguage=="french"){
      selectedFlag = "url(https://flagsapi.com/FR/flat/32.png)";
    }else if(selectedLanguage=="espanol"){
      selectedFlag = "url(https://flagsapi.com/ES/flat/32.png)";
    }
    document.querySelector(".selected-langg").style.backgroundImage = selectedFlag;
    updateContent(selectedLanguage, selectedFlag);
  });
});
