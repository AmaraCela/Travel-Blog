const l0 = document.querySelector('#l0');
const main = document.querySelector('#main-p-individual');
const small = document.querySelector('#small-descr');
const descr = document.querySelector('#descr');
const nextDates = document.querySelector('#nextDates');
const itinerary = document.querySelector('#itinerary');
const paragraph = document.querySelector('#paragraph');
const bookTour = document.querySelector('#bookTour');
const date = document.querySelector('#date');
const numOfPeople = document.querySelector('#numOfPeople');
const rating = document.querySelector('#rating');
const avg = document.querySelector('.avg');
const value = document.querySelector('#value');


const indTourData = {
  "english" :{
    "l0" : "Home",
    "main" : "Ksamil Tour",
    "small" : "5 day tour - 100$",
    "descr" : "Description of the trip",
    "nextDates" : "Next dates:",
    "itinerary" : "Itinerary:",
    "paragraph" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque molestiae commodi inventore laboriosam maxime! Quos, nostrum amet voluptas vero in adipisci delectus ab cupiditate nam aliquam doloribus dolor iusto sed voluptates velit numquam, error mollitia cum unde perferendis? A, repellat. Iusto vitae quisquam nisi magni aperiam? Cumque cupiditate nihil voluptate explicabo? Pariatur, aliquam accusantium consectetur corporis ducimus repudiandae veritatis earum impedit cupiditate officiis blanditiis accusamus ut similique aperiam repellat omnis inventore necessitatibus tempore quae molestias ipsum itaque illum! Architecto ut nostrum quasi obcaecati quas necessitatibus? Possimus voluptas reprehenderit ipsa perferendis, repellat, enim porro nostrum blanditiis corrupti rerum corporis sapiente.",
    "bookTour" : "Book a tour:",
    "date" : "Choose a departing date:",
    "numOfPeople" : "Number of people: ",
    "rating" : "Leave a rating:",
    "avg" : "Average rating: 4.1/5.0",
    "value" : "Proceed"
  },
  "german" :{
    "l0" : "Heim",
    "main": "Ksamil Tour",
    "small": "5-Tage-Tour - 100 $",
    "descr": "Beschreibung der Reise",
    "nextDates": "Nächste Termine:",
    "itinerary": "Reiseroute:",
    "paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque molestiae commodi inventore laboriosam maxime! Quos, nostrum amet voluptas vero in adipisci delectus ab cupiditate nam aliquam doloribus dolor iusto sed voluptates velit numquam, error mollitia cum unde perferendis? A, repellat. Iusto vitae quisquam nisi magni aperiam? Cumque cupiditate nihil voluptate explicabo? Pariatur, aliquam accusantium consectetur corporis ducimus repudiandae veritatis earum impedit cupiditate officiis blanditiis accusamus ut similique aperiam repellat omnis inventore necessitatibus tempore quae molestias ipsum itaque illum! Architecto ut nostrum quasi obcaecati quas necessitatibus? Possimus voluptas reprehenderit ipsa perferendis, repellat, enim porro nostrum blanditiis corrupti rerum corporis sapiente.",
    "bookTour": "Tour buchen:",
    "date": "Wählen Sie ein Abreisedatum:",
    "numOfPeople": "Anzahl der Personen:",
    "rating": "Bewertung hinterlassen:",
    "avg": "Durchschnittliche Bewertung: 4,1/5,0",
    "value" : "Fortfahren"
  },
  "italian":{
    "l0" : "Casa",
    "main": "Tour a Ksamil",
    "small": "Tour di 5 giorni - 100 $",
    "descr": "Descrizione del viaggio",
    "nextDates": "Date successive:",
    "itinerary": "Itinerario:",
    "paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque molestiae commodi inventore laboriosam maxime! Quos, nostrum amet voluptas vero in adipisci delectus ab cupiditate nam aliquam doloribus dolor iusto sed voluptates velit numquam, error mollitia cum unde perferendis? A, repellat. Iusto vitae quisquam nisi magni aperiam? Cumque cupiditate nihil voluptate explicabo? Pariatur, aliquam accusantium consectetur corporis ducimus repudiandae veritatis earum impedit cupiditate officiis blanditiis accusamus ut similique aperiam repellat omnis inventore necessitatibus tempore quae molestias ipsum itaque illum! Architecto ut nostrum quasi obcaecati quas necessitatibus? Possimus voluptas reprehenderit ipsa perferendis, repellat, enim porro nostrum blanditiis corrupti rerum corporis sapiente.",
    "bookTour": "Prenota un tour:",
    "date": "Scegli una data di partenza:",
    "numOfPeople": "Numero di persone:",
    "rating": "Lascia una valutazione:",
    "avg": "Valutazione media: 4,1/5,0",
    "value" : "Procedere"
  },
  "french": {
    "l0" : "Maison",
    "main": "Tour à Ksamil",
    "small": "Tour de 5 jours - 100 $",
    "descr": "Description du voyage",
    "nextDates": "Prochaines dates :",
    "itinerary": "Itinéraire :",
    "paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque molestiae commodi inventore laboriosam maxime! Quos, nostrum amet voluptas vero in adipisci delectus ab cupiditate nam aliquam doloribus dolor iusto sed voluptates velit numquam, error mollitia cum unde perferendis? A, repellat. Iusto vitae quisquam nisi magni aperiam? Cumque cupiditate nihil voluptate explicabo? Pariatur, aliquam accusantium consectetur corporis ducimus repudiandae veritatis earum impedit cupiditate officiis blanditiis accusamus ut similique aperiam repellat omnis inventore necessitatibus tempore quae molestias ipsum itaque illum! Architecto ut nostrum quasi obcaecati quas necessitatibus? Possimus voluptas reprehenderit ipsa perferendis, repellat, enim porro nostrum blanditiis corrupti rerum corporis sapiente.",
    "bookTour": "Réservez un tour :",
    "date": "Choisissez une date de départ :",
    "numOfPeople": "Nombre de personnes :",
    "rating": "Laisser une évaluation :",
    "avg": "Note moyenne : 4,1/5,0",
    "value" : "Procéder"
  },
  
  "espanol": {
    "l0" : "Hogar",
    "main": "Tour a Ksamil",
    "small": "Tour de 5 días - 100 $",
    "descr": "Descripción del viaje",
    "nextDates": "Próximas fechas:",
    "itinerary": "Itinerario:",
    "paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque molestiae commodi inventore laboriosam maxime! Quos, nostrum amet voluptas vero in adipisci delectus ab cupiditate nam aliquam doloribus dolor iusto sed voluptates velit numquam, error mollitia cum unde perferendis? A, repellat. Iusto vitae quisquam nisi magni aperiam? Cumque cupiditate nihil voluptate explicabo? Pariatur, aliquam accusantium consectetur corporis ducimus repudiandae veritatis earum impedit cupiditate officiis blanditiis accusamus ut similique aperiam repellat omnis inventore necessitatibus tempore quae molestias ipsum itaque illum! Architecto ut nostrum quasi obcaecati quas necessitatibus? Possimus voluptas reprehenderit ipsa perferendis, repellat, enim porro nostrum blanditiis corrupti rerum corporis sapiente.",
    "bookTour": "Reservar un tour:",
    "date": "Elija una fecha de salida:",
    "numOfPeople": "Número de personas:",
    "rating": "Dejar una calificación:",
    "avg": "Calificación promedio: 4,1/5,0",
    "value" : "Proceder"
  }
}

function updateIndTourContent(selectedLanguage, selectedFlag){
  l0.textContent = indTourData[selectedLanguage].l0;
  main.textContent = indTourData[selectedLanguage].main;
  small.textContent = indTourData[selectedLanguage].small;
  descr.textContent = indTourData[selectedLanguage].descr;
  nextDates.textContent = indTourData[selectedLanguage].nextDates;
  itinerary.textContent = indTourData[selectedLanguage].itinerary;
  paragraph.textContent = indTourData[selectedLanguage].paragraph;
  bookTour.textContent = indTourData[selectedLanguage].bookTour;
  date.textContent = indTourData[selectedLanguage].date;
  numOfPeople.textContent = indTourData[selectedLanguage].numOfPeople;
  rating.textContent = indTourData[selectedLanguage].rating;
  avg.textContent = indTourData[selectedLanguage].avg;
  value.value = indTourData[selectedLanguage].value

  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector('.selected-langg').style.backgroundImage = storedLanguage;
updateIndTourContent(storedLanguage, storedFlag);

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
  updateIndTourContent(selectedLanguage, selectedFlag);
  });
})