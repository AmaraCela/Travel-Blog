const carouselImgs = document.getElementsByClassName("carousel-img");

const rightArrow = document.querySelector("img[alt='right-arrow']");
const leftArrow = document.querySelector("img[alt='left-arrow']");

let active = 0; 

for(let i = 1;i<carouselImgs.length;i++)
{
    carouselImgs[i].style.opacity = 0;
    carouselImgs[i].style.zIndex = 1;

}

rightArrow.addEventListener("click",function(){
    if(active == carouselImgs.length-1)
    {
       carouselImgs[active].style.opacity = 0;
       carouselImgs[active].style.zIndex = 1;
       carouselImgs[0].style.opacity = 1;
       carouselImgs[0].style.zIndex = 4;
       active = 0; 
       
    }
    else
    {
        carouselImgs[active].style.zIndex = 1;
        carouselImgs[active++].style.opacity = 0;
        carouselImgs[active].style.opacity = 1;
        carouselImgs[active].style.zIndex = 4;
    }

    
});


leftArrow.addEventListener("click",function(){
    if(active == 0)
    {
        carouselImgs[0].style.opacity = 0;
        carouselImgs[0].style.zIndex = 1;
        carouselImgs[carouselImgs.length-1].style.opacity = 1;
        carouselImgs[carouselImgs.length-1].style.zIndex = 4;
        active = carouselImgs.length-1;
    }
    else{
        carouselImgs[active].style.zIndex = 1;
        carouselImgs[active--].style.opacity = 0;

        carouselImgs[active].style.opacity = 1;
        carouselImgs[active].style.zIndex = 4;
    }
});
    

    