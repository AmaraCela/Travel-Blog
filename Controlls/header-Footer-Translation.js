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