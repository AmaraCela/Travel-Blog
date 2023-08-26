const threeInOne_popup = document.querySelector('#threeinone');
function handlePopUp(event){
  if(event.target === threeInOne_popup || event.key === 'Escape'){
    threeInOne_popup.classList.add('inactive-popup');
  }
}

window.addEventListener('click', handlePopUp);
window.addEventListener('keydown', handlePopUp);