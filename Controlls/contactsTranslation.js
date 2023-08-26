const l0 = document.querySelector('#l0');
const h1 = document.querySelector('#h1');
const span = document.querySelector('#span');
const text1 = document.querySelector('.text1');
const locationn = document.querySelector('.location')
const text2 = document.querySelector('.text2');
const call = document.querySelector('.call');
const text3 = document.querySelector('.text3');
const mail = document.querySelector('.mail');
const text4 = document.querySelector('.text4');
const question = document.querySelector('#question');
const write = document.querySelector('#write');
const submitButtonn = document.querySelector('#submit-button');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phoneNum');
const message = document.querySelector('#message');

const contactsData = {
  "english" :{
    "l0" : "Home",
    "h1": "Get in touch",
    "span": "Want to get in touch? We would love to hear from you. Here is how you can reach us...",
    "text1": "Visit us at our office",
    "locationn" : "locationn_on",
    "text2" : "Rr: “Reshit Çollaku”, Tiranë",
    "call" : "call",
    "text3" : "0673454234",
    "mail" : "mail",
    "text4" : "info@example.com",
    "question" : "Have a question?",
    "write" : "Write to us!",
    "submitButtonn" : "Submit",
    "firstName" : "First Name",
    "lastName" : "Last Name",
    "email" : "Email",
    "phoneNum" : "Phone Number",
    "message" : "Message"
  },
  "german" :{
    "l0" : "Heim",
    "h1": "Kontakt aufnehmen",
    "span": "Möchten Sie Kontakt aufnehmen? Wir würden gerne von Ihnen hören. Hier erfahren Sie, wie Sie uns erreichen können...",
    "text1": "Besuchen Sie uns im Büro",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Haben Sie eine Frage?",
    "write": "Schreiben Sie uns!",
    "submitButtonn": "Absenden",
    "firstName": "Vorname",
    "lastName": "Nachname",
    "email": "E-Mail",
    "phoneNum": "Telefonnummer",
    "message": "Nachricht"
  },
  "italian":{
    "l0" : "Casa",
    "h1": "Contattaci",
    "span": "Vuoi metterti in contatto? Ci piacerebbe sentirti. Ecco come puoi raggiungerci...",
    "text1": "Vieni a trovarci in ufficio",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Hai una domanda?",
    "write": "Scrivici!",
    "submitButtonn": "Invia",
    "firstName": "Nome",
    "lastName": "Cognome",
    "email": "Email",
    "phoneNum": "Numero di Telefono",
    "message": "Messaggio"
  },
  "french": {
    "l0" : "Maison",
    "h1": "Nous contacter",
    "span": "Envie de nous contacter ? Nous aimerions avoir de vos nouvelles. Voici comment vous pouvez nous joindre...",
    "text1": "Rendez-nous visite à notre bureau",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Vous avez une question ?",
    "write": "Écrivez-nous !",
    "submitButtonn": "Envoyer",
    "firstName": "Prénom",
    "lastName": "Nom",
    "email": "Email",
    "phoneNum": "Numéro de téléphone",
    "message": "Message"
  },
  
  "espanol": {
    "l0" : "Hogar",
    "h1": "Ponte en contacto",
    "span": "¿Quieres ponerte en contacto? Nos encantaría saber de ti. Así es cómo puedes contactarnos...",
    "text1": "Visítanos en nuestra oficina",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "¿Tienes una pregunta?",
    "write": "¡Escríbenos!",
    "submitButtonn": "Enviar",
    "firstName": "Nombre",
    "lastName": "Apellido",
    "email": "Correo electrónico",
    "phoneNum": "Número de teléfono",
    "message": "Mensaje"
  }
}

function updateContactsContent(selectedLanguage, selectedFlag){
  
  l0.textContent = contactsData[selectedLanguage].l0;
  h1.textContent = contactsData[selectedLanguage].h1;
  span.textContent = contactsData[selectedLanguage].span;
  text1.textContent = contactsData[selectedLanguage].text1;
  locationn.textContent = contactsData[selectedLanguage].locationn;
  text2.textContent = contactsData[selectedLanguage].text2;
  call.textContent = contactsData[selectedLanguage].call;
  text3.textContent = contactsData[selectedLanguage].text3;
  mail.textContent = contactsData[selectedLanguage].mail;
  text4.textContent = contactsData[selectedLanguage].text4;
  question.textContent = contactsData[selectedLanguage].question;
  write.textContent = contactsData[selectedLanguage].write;
  submitButtonn.textContent = contactsData[selectedLanguage].submitButtonn; 
  firstName.placeholder = `${contactsData[selectedLanguage].firstName}`;
  lastName.placeholder = `${contactsData[selectedLanguage].lastName}`;
  email.placeholder = `${contactsData[selectedLanguage].email}`;
  phoneNum.placeholder = `${contactsData[selectedLanguage].phoneNum}`;
  message.placeholder = `${contactsData[selectedLanguage].message}`;

  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('selectedFlag', selectedFlag);
}

document.querySelector('.selected-langg').style.backgroundImage = storedFlag;
updateContactsContent(storedLanguage, storedFlag);


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

  document.querySelector('.selected-langg').style.backgroundImage = selectedLanguage;
  updateContactsContent(selectedLanguage, selectedFlag);
  });
})
