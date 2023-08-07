const body = document.querySelector('body');
const btn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');
const sum = document.getElementById('sum');
const imgIcon = document.getElementById('Wicon');


const originalSumContent = sum.innerHTML;
const originalImgiconContent = imgIcon.src;
function store(value){
  localStorage.setItem('wintermode',value);
}

function load(){
  const wintermode = localStorage.getItem('wintermode');

  if(!wintermode){
    store(false);
    icon.classList.add('fa-sun');
  }
  else if(wintermode == 'true'){
    body.classList.add('wintermode');
    icon.classList.add('fa-snowflake');
  }else{
    icon.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', ()=>{

  body.classList.toggle('wintermode');
  icon.classList.add('animated');

  //saving true or false
  store(body.classList.contains('wintermode'));

  if(body.classList.contains('wintermode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-snowflake');
    sum.innerHTML = 'Winter';
    imgIcon.src = "../Images/winterIcon.png";
  }else{
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
    sum.innerHTML = originalSumContent;
    imgIcon.src = originalImgiconContent;
  }

  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});
