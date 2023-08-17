const main = document.querySelector('#main-p');
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

buttons.forEach(button =>{
  button.addEventListener('click', (event)=>{
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

  main.textContent = indTourData[attr].main;
  small.textContent = indTourData[attr].small;
  descr.textContent = indTourData[attr].descr;
  nextDates.textContent = indTourData[attr].nextDates;
  itinerary.textContent = indTourData[attr].itinerary;
  paragraph.textContent = indTourData[attr].paragraph;
  bookTour.textContent = indTourData[attr].bookTour;
  date.textContent = indTourData[attr].date;
  numOfPeople.textContent = indTourData[attr].numOfPeople;
  rating.textContent = indTourData[attr].rating;
  avg.textContent = indTourData[attr].avg;
  value.value = indTourData[attr].value
  });
})

const indTourData = {
  "english" :{
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