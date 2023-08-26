const l0 = document.querySelector('#l0');
const StaffTitleP = document.querySelector('#StaffTitleP');
const meetAndGreet = document.querySelector('#meetAndGreet');
const travelConsultant = document.querySelectorAll('.tc');
const travelCoordinator = document.querySelector('#coordinator');
const travelGuide = document.querySelector('#guide');
const travelBooker = document.querySelector('#booker');
const travelManager = document.querySelector('#manager');
const info = document.querySelectorAll('.info');


const ourStaffData = {
  "english" :{
    "l0" : "Home",
    "StaffTitleP": "Our Staff",
    "meetAndGreet": "Meet The Team",
    "travelConsultant": "Travel Consultant",
    "travelCoordinator" : "Travel Coordinator",
    "travelGuide" : "Tour Guide",
    "travelBooker" : "Booker",
    "travelManager" : "Tour manager",
    "info" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    
  },
  "german" :{
    "l0" : "Heim",
    "StaffTitleP": "Unser Personal",
    "meetAndGreet": "Team Treffen",
    "travelConsultant": "Reiseberater",
    "travelCoordinator": "Reisekoordinator",
    "travelGuide": "Reiseleiter",
    "travelBooker": "Buchungsbeauftragter",
    "travelManager": "Tourmanager",
    "info": "Lorem Ipsum ist einfach nur Blindtext der Druck- und Satzindustrie.",
  },
  "italian":{
    "l0" : "Casa",
    "StaffTitleP": "Il Nostro Staff",
    "meetAndGreet": "Incontra il Team",
    "travelConsultant": "Consulente di Viaggio",
    "travelCoordinator": "Coordinatore di Viaggio",
    "travelGuide": "Guida Turistica",
    "travelBooker": "Prenotatore",
    "travelManager": "Responsabile del Tour",
    "info": "Lorem Ipsum è un testo segnaposto utilizzato nel settore della stampa e della tipografia."
  },
  "french": {
    "l0" : "Maison",
    "StaffTitleP": "Notre Équipe",
    "meetAndGreet": "Rencontrez l'Équipe",
    "travelConsultant": "Conseiller en Voyage",
    "travelCoordinator": "Coordinateur de Voyage",
    "travelGuide": "Guide Touristique",
    "travelBooker": "Agent de Réservation",
    "travelManager": "Responsable de Circuit",
    "info": "Lorem Ipsum est simplement un texte factice de l'industrie de l'imprimerie et de la composition."
  },
  
  "espanol": {
    "l0" : "Hogar",
    "StaffTitleP": "Nuestro Equipo",
    "meetAndGreet": "Conoce al Equipo",
    "travelConsultant": "Consultor de Viajes",
    "travelCoordinator": "Coordinador de Viajes",
    "travelGuide": "Guía Turístico",
    "travelBooker": "Reservador",
    "travelManager": "Gerente de Tours",
    "info": "Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y composición tipográfica."
  }
}

function updateStaffContent(selectedLanguage, selectedFlag){
  l0.textContent = ourStaffData[selectedLanguage].l0;
  StaffTitleP.textContent = ourStaffData[selectedLanguage].StaffTitleP;
  meetAndGreet.textContent = ourStaffData[selectedLanguage].meetAndGreet;
  travelConsultant.forEach(tv=>{
    tv.textContent = ourStaffData[selectedLanguage].travelConsultant;
  });
  travelCoordinator.textContent = ourStaffData[selectedLanguage].travelCoordinator;
  travelGuide.textContent = ourStaffData[selectedLanguage].travelGuide;
  travelBooker.textContent = ourStaffData[selectedLanguage].travelBooker;
  travelManager.textContent = ourStaffData[selectedLanguage].travelManager;
  info.forEach(i=>{
    i.textContent = ourStaffData[selectedLanguage].info;
  });

  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector('.selected-langg').style.backgroundImage = storedFlag;
updateStaffContent(storedLanguage, storedFlag);


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

  document.querySelector(".selected-langg").style.backgroundImage = selectedFlag;
  updateStaffContent(selectedLanguage, selectedFlag);
  });

});