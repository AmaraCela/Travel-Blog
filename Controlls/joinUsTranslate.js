const joinUs = document.querySelector('#joinUs');
const h3 = document.querySelector('#h3');
const namee = document.querySelector('#name');
const surnamee = document.querySelector('#surname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const sub = document.querySelector('#sub');

const joinUsData = {
  "english" : {
    "joinUs" : "Join Us",
    "h3" : "Fill the form an become part of our agency",
    "namee" : "Enter your name",
    "surnamee" : "Enter your surname",
    "email" : "Enter your email",
    "phone" : "Enter your phone number",
    "address" : "Enter your address",
    "sub" : "Submit"
  },
  "german": {
    "joinUs": "Mach mit",
    "h3": "Fülle das Formular aus und werde Teil unserer Agentur",
    "namee": "Gib deinen namen ein",
    "surnamee": "Gib deinen Nachnamen ein",
    "email": "Gib deine E-Mail ein",
    "phone": "Gib deine Telefonnummer ein",
    "address": "Gib deine Adresse ein",
    "sub": "Abschicken"
  },
  "italian": {
    "joinUs": "Unisciti a Noi",
    "h3": "Compila il modulo e diventa parte della nostra agenzia",
    "namee": "Inserisci il tuo nome",
    "surnamee": "Inserisci il tuo cognome",
    "email": "Inserisci la tua email",
    "phone": "Inserisci il tuo numero di telefono",
    "address": "Inserisci il tuo indirizzo",
    "sub": "Invia"
  },
  "french": {
    "joinUs": "Rejoignez-nous",
    "h3": "Remplissez le formulaire et devenez membre de notre agence",
    "namee": "Entrez votre nom",
    "surnamee": "Entrez votre nom de famille",
    "email": "Entrez votre email",
    "phone": "Entrez votre numéro de téléphone",
    "address": "Entrez votre adresse",
    "sub": "Soumettre"
  },
  "espanol": {
    "joinUs": "Únete a Nosotros",
    "h3": "Completa el formulario y forma parte de nuestra agencia",
    "namee": "Ingresa tu nombre",
    "surnamee": "Ingresa tu apellido",
    "email": "Ingresa tu correo electrónico",
    "phone": "Ingresa tu número de teléfono",
    "address": "Ingresa tu dirección",
    "sub": "Enviar"
  }
}

// const storedLanguage = localStorage.getItem('selectedLanguage') || 'english';

function updateJoinContent(selectedLanguage){
  joinUs.textContent = joinUsData[selectedLanguage].joinUs;
  h3.textContent = joinUsData[selectedLanguage].h3;
  namee.placeholder = joinUsData[selectedLanguage].namee;
  surnamee.placeholder = joinUsData[selectedLanguage].surnamee;
  email.placeholder = joinUsData[selectedLanguage].email;
  phone.placeholder = joinUsData[selectedLanguage].phone;
  address.placeholder = joinUsData[selectedLanguage].address;
  sub.textContent = joinUsData[selectedLanguage].sub;

  localStorage.setItem('selectedLanguage', selectedLanguage);
}

buttons.forEach(button =>{
  button.addEventListener("click", (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const selectedLanguage = button.getAttribute('language');
    console.log(selectedLanguage);
    updateJoinContent(selectedLanguage);
  });
});