const l0 = document.querySelector('#l0');
const introTitle = document.querySelector('.intro-title');
const safety = document.querySelector('#safety');
const paragraph = document.querySelector('#paragraph');
const question = document.querySelector('#question');
const middleA = document.querySelector('.middle-a');
const experience = document.querySelector('#experience');
const paragraph1 = document.querySelector('#paragraph1');
const viewP = document.querySelector('.view-p');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');

const ourWorkData = {
  "english" :{
    "l0" : "Home",
    "introTitle" : "Why choose TravAl?",
    "safety" : "Safety",
    "paragraph" : "Experience a safe trip, thanks to our rigorous maintenance and experienced drivers.",
    "question" : "Interested to find out more?",
    "middleA" : "Contact Us",
    "experience" : "Experience",
    "paragraph1" : "With over 20 years of experience, TravAl remains the most trusted company in the market.  ",
    "viewP" : "View a collection of our memorable trips",
    "p1" : "Memory from Trip to Berat \n 28/03/2021",
    "p2" : " Memory from Trip to Shkodra \n 01/06/2022",
    "p3" : "  Memory from Trip to Borshi \n 28/03/2021",
    "p4" : "Memory from Trip to Kruje \n 17/05/2020"
  },
  "german" :{
    "l0" : "Heim",
    "introTitle": "Warum TravAl wählen?",
    "safety": "Sicherheit",
    "paragraph": "Erleben Sie eine sichere Reise dank unserer strengen Wartung und erfahrenen Fahrer.",
    "question": "Interessiert, mehr zu erfahren?",
    "middleA": "Kontaktiere uns",
    "experience": "Erfahrung",
    "paragraph1": "Mit über 20 Jahren Erfahrung bleibt TravAl das vertrauenswürdigste Unternehmen auf dem Markt.",
    "viewP": "Sehen Sie sich eine Sammlung unserer unvergesslichen Reisen an",
    "p1": "Erinnerung an die Reise nach Berat \n 28/03/2021",
    "p2": "Erinnerung an die Reise nach Shkodra \n 01/06/2022",
    "p3": "Erinnerung an die Reise nach Borshi \n 28/03/2021",
    "p4": "Erinnerung an die Reise nach Kruje \n 17/05/2020"
  },
  "italian":{
    "l0" : "Casa",
    "introTitle": "Perché scegliere TravAl?",
    "safety": "Sicurezza",
    "paragraph": "Vivi un viaggio sicuro grazie alla nostra rigorosa manutenzione e agli autisti esperti.",
    "question": "Interessato a saperne di più?",
    "middleA": "Contattaci",
    "experience": "Esperienza",
    "paragraph1": "Con oltre 20 anni di esperienza, TravAl rimane l'azienda più affidabile sul mercato.",
    "viewP": "Guarda una collezione dei nostri viaggi memorabili",
    "p1": "Ricordo del viaggio a Berat \n 28/03/2021",
    "p2": "Ricordo del viaggio a Shkodra \n 01/06/2022",
    "p3": "Ricordo del viaggio a Borshi \n 28/03/2021",
    "p4": "Ricordo del viaggio a Kruje \n 17/05/2020"
  },
  "french": {
    "l0" : "Maison",
    "introTitle": "Pourquoi choisir TravAl ?",
    "safety": "Sécurité",
    "paragraph": "Vivez un voyage en toute sécurité grâce à notre entretien rigoureux et à nos conducteurs expérimentés.",
    "question": "Intéressé à en savoir plus ?",
    "middleA": "Contactez-nous",
    "experience": "Expérience",
    "paragraph1": "Avec plus de 20 ans d'expérience, TravAl reste la société la plus fiable du marché.",
    "viewP": "Découvrez une collection de nos voyages mémorables",
    "p1": "Souvenir du voyage à Berat \n 28/03/2021",
    "p2": "Souvenir du voyage à Shkodra \n 01/06/2022",
    "p3": "Souvenir du voyage à Borshi \n 28/03/2021",
    "p4": "Souvenir du voyage à Kruje \n 17/05/2020"
  },
  
  "espanol": {
    "l0" : "Hogar",
    "introTitle": "¿Por qué elegir TravAl?",
    "safety": "Seguridad",
    "paragraph": "Experimenta un viaje seguro gracias a nuestro riguroso mantenimiento y a nuestros conductores experimentados.",
    "question": "¿Interesado en saber más?",
    "middleA": "Contáctanos",
    "experience": "Experiencia",
    "paragraph1": "Con más de 20 años de experiencia, TravAl sigue siendo la empresa más confiable en el mercado.",
    "viewP": "Mira una colección de nuestros viajes memorables",
    "p1": "Recuerdo del viaje a Berat \n 28/03/2021",
    "p2": "Recuerdo del viaje a Shkodra \n 01/06/2022",
    "p3": "Recuerdo del viaje a Borshi \n 28/03/2021",
    "p4": "Recuerdo del viaje a Kruje \n 17/05/2020"
  }
}


function updateWorkContent(selectedLanguage, selectedFlag){
  l0.textContent = ourWorkData[selectedLanguage].l0;
  introTitle.textContent = ourWorkData[selectedLanguage].introTitle;
  safety.textContent = ourWorkData[selectedLanguage].safety;
  paragraph.textContent = ourWorkData[selectedLanguage].paragraph;
  question.textContent = ourWorkData[selectedLanguage].question;
  middleA.textContent = ourWorkData[selectedLanguage].middleA;
  experience.textContent = ourWorkData[selectedLanguage].experience;
  paragraph1.textContent = ourWorkData[selectedLanguage].paragraph1;
  viewP.textContent = ourWorkData[selectedLanguage].viewP;
  p1.textContent = ourWorkData[selectedLanguage].p1;
  p2.textContent = ourWorkData[selectedLanguage].p2;
  p3.textContent = ourWorkData[selectedLanguage].p3;
  p4.textContent = ourWorkData[selectedLanguage].p4;

  localStorage.setItem('selectedLanguage',selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector('.selected-langg').style.backgroundImage = storedFlag;
updateWorkContent(storedLanguage,storedFlag);


buttons.forEach(button =>{
  button.addEventListener('click', (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');
    selectedLanguage = button.getAttribute('language');
  console.log(selectedLanguage);
  
  if(selectedLanguage == "german"){
    selectedFlag = "url('https://flagsapi.com/BE/flat/32.png')";
  }else if(selectedLanguage=="italian"){
    selectedFlag = "url(https://flagsapi.com/IT/flat/32.png)";
  }else if(selectedLanguage=="french"){
    selectedFlag = "url(https://flagsapi.com/FR/flat/32.png)";
  }else if(selectedLanguage=="espanol"){
    selectedFlag = "url(https://flagsapi.com/ES/flat/32.png)";
  }else{
    selectedFlag = "url(https://flagsapi.com/US/flat/32.png)";
  }
  document.querySelector('.selected-langg').style.backgroundImage = selectedFlag;
  updateWorkContent(selectedLanguage, selectedFlag);
  });
})