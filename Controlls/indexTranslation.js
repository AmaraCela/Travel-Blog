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
const btnMore = document.querySelectorAll('.more-btn');

const indexData = {
  "english" :{
    "al": "Albanian",
    "sum": "Summer",
    "winter" : "Winter",
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
    "cardCarousselWinter" : "Winter Vacation",
    "btnMore" : "More"
  },
  "german" :{
    "al" :"Albanischer",
    "sum": "Sommer",
    "winter" : "Winter",
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
    "btnMore" : "Mehr"
  },
  "italian":{
    "al": "Albanese",
    "sum": "Estate ",
    "winter" : "Inverno",
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
    "btnMore" : "Più di"
  },
  "french": {
    "al": "Albanais",
    "sum": "Été",
    "winter" : "Hiver",
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
    "btnMore": "Plus"
  },
  
  "espanol": {
    "al": "Albanés",
    "sum": "Verano",
    "winter" : "Invierno",
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
    "btnMore": "Más"
  }
}

function updateIndexContent(selectedLanguage, selectedFlag){
  al.textContent = indexData[selectedLanguage].al;
  card1.textContent = indexData[selectedLanguage].card1title;
  card2.textContent = indexData[selectedLanguage].card2title;
  card3.textContent = indexData[selectedLanguage].card3title;
  card4.textContent = indexData[selectedLanguage].card4title;
  card5.textContent = indexData[selectedLanguage].card5title;
  card1Italic.textContent = indexData[selectedLanguage].card1ItalicTitle;
  imgT.textContent = indexData[selectedLanguage].card1Date;
  card2Text.textContent = indexData[selectedLanguage].card2Text;
  card4Text.textContent = indexData[selectedLanguage].card4Text;
  more.textContent = indexData[selectedLanguage].card5More;
  seasonal_vacation_heading.textContent = indexData[selectedLanguage].cardCarousselSummer;
  seasonal_vacation_heading_winter.textContent = indexData[selectedLanguage].cardCarousselWinter;
  btnMore.forEach(btn=>{
    btn.textContent = indexData[selectedLanguage].btnMore;
  });

  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector('.selected-langg').style.backgroundImage = storedFlag;
updateIndexContent(storedLanguage, storedFlag);

buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    selectedLanguage = button.getAttribute('language');
    // console.log(selectedLanguage);
    // console.log('stored language at indexTranslation is ',storedLanguage)
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
    updateIndexContent(selectedLanguage, selectedFlag);
    
  });
});