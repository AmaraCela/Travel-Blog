const toggleButton = document.getElementsByClassName('toggle-buttonn')[0];
const elements = document.getElementsByClassName('elements')[0];
const selectedLang = document.getElementsByClassName('lang-menuu')[0];
let elementsActive = false;
toggleButton.addEventListener('click', (event) =>{
  event.preventDefault();
  elements.classList.toggle('active');
  selectedLang.classList.toggle('active');
  elementsActive = !elementsActive;
  if(elementsActive)
    document.getElementsByClassName('titlee')[0].style.marginTop = "290px";
  else
  document.getElementsByClassName('titlee')[0].style.marginTop = "100px";
});