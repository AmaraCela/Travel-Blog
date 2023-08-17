const body = document.querySelector('body');
const btn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');
const container2 = document.getElementById('c2');
const div = document.getElementById('headWrap');
const originalImgContent = div.style.backgroundImage;
const originalWFooterImgContent = container2.style.backgroundImage;
const al = document.getElementsByClassName("al")[0];

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

btn.addEventListener('click', (event)=>{

  // event.preventDefault();
  body.classList.toggle('wintermode');
  icon.classList.add('animated');

  //saving true or false
  store(body.classList.contains('wintermode'));

  if(body.classList.contains('wintermode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-snowflake');
    if(window.location.href == "http://127.0.0.1:5500/Views/aboutUs.html"){
      div.style.backgroundImage = "url(../Images/aboutUsWinter.jpg)";
      div.style.filter = "brightness(70%)"
      // body.style.backgroundImage = none;
    }
    if(window.location.href=="http://127.0.0.1:5500/Views/tours.html")
    {
      div.style.backgroundImage = "url(../Images/albanianWinter.jpg)";
      div.style.filter = "brightness(70%)";
      al.innerText = "Spend an unforgettable winter with TravAL";
      document.getElementsByTagName("body")[0].style.backgroundColor = "#c8dde2";
    }
    if(window.location.href=="http://127.0.0.1:5500/Views/index.html")
    {
      
      document.getElementsByClassName("text-div")[0].style.backgroundColor = "#cac2db";
    }
    container2.style.backgroundImage = "url(../Images/snow.jpg)";
  }else{
    if(window.location.href=="http://127.0.0.1:5500/Views/tours.html"){
       al.innerText = "Spend an unforgettable summer with TravAL"
    document.getElementsByTagName("body")[0].style.backgroundColor = "#F0E1BA";
    }
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
    div.style.backgroundImage = originalImgContent;
    container2.style.backgroundImage = originalWFooterImgContent;
   
  }
  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});
