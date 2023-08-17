{/* <script src="./main-for-navbar.js"></script> */}

btn.addEventListener('click', (event)=>{
  
    //saving true or false
  
    if(body.classList.contains('wintermode')){

        div.style.backgroundImage = "url(../Images/albanianWinter.jpg)";
        div.style.filter = "brightness(70%)";
        al.innerText = "Spend an unforgettable winter with TravAL";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#c8dde2";
    }else{
        al.innerText = "Spend an unforgettable summer with TravAL"
        document.getElementsByTagName("body")[0].style.backgroundColor = "#F0E1BA";
    }
    setTimeout(() => {
      icon.classList.remove('animated');
    }, 500);
  });