console.log('heloooooo')
// const btns = document.querySelectorAll('.lang-btn');
const subscribeBtn = document.getElementById('btnn');
const faqs = document.getElementById('f1');
const termsOfService = document.getElementById('f2');
const privacyPolicy = document.getElementById('f3');
const copyrights = document.querySelector('.cop');
const subscribe = document.querySelector('#subscribe');
const subscribeText = document.querySelector('#subscribeText');

// const storedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const footerData = {
  "english" :{
    "subscribe" : "Subscribe",
    "subscribeText" : "be the first who knows",
    "faqs" : "FAQs",
    "termsOfService" : "Terms Of Service",
    "privacyPolicy" : "Privacy Policy",
    "copyrights" : "@copyright2023",
  },
  "german" :{
    "subscribe" : "Abonnieren",
    "subscribeText" : "sei der Erste, der es weiß",
    "faqs" : "FAQs",
    "termsOfService" : "Nutzungsbedingungen",
    "privacyPolicy" : "Datenschutzrichtlinie", 
    "copyrights" : "@Urheberrecht2023",
  },
  "italian":{
    "subscribe" : "Sottoscrivi",
    "subscribeText" : "puoi essere il primo a saperlo",
    "faqs" : "FAQs",
    "termsOfService" : "Termini di servizio",
    "privacyPolicy" : "Politica sulla riservatezza",
    "copyrights" : "@diritto d'autore2023"
  },
  "french": {
    "subscribe": "S'Abonner",
    "subscribeText": "soyez le premier à savoir",
    "faqs": "FAQ",
    "termsOfService": "Conditions d'utilisation",
    "privacyPolicy": "Politique de confidentialité",
    "copyrights": "@droits d'auteur2023"
  },
  
  "espanol": {
    "subscribe": "Suscribirse",
    "subscribeText": "sé el primero en saberlo",
    "faqs": "Preguntas Frecuentes",
    "termsOfService": "Términos de Servicio",
    "privacyPolicy": "Política de Privacidad",
    "copyrights": "@derechos de autor2023"
  }
}
function updateFooterContent(selectedLanguage){
  subscribe.textContent = footerData[selectedLanguage].subscribe;
  subscribeText.textContent = footerData[selectedLanguage].subscribeText;
  subscribeBtn.textContent = footerData[selectedLanguage].subscribe;
  faqs.textContent = footerData[selectedLanguage].faqs;
  termsOfService.textContent = footerData[selectedLanguage].termsOfService;
  privacyPolicy.textContent = footerData[selectedLanguage].privacyPolicy;
  copyrights.textContent = footerData[selectedLanguage].copyrights;
  localStorage.setItem('selectedLanguage', selectedLanguage);
}

updateFooterContent(storedLanguage);

// let selectedLanguage = storedLanguage;
buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log('hello again')
    button.classList.add('active');

    selectedLanguage = button.getAttribute('language');
    updateFooterContent(selectedLanguage);
  });
});
