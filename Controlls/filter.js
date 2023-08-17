let filterIcon = document.getElementById("filter-img");
let x = document.getElementById("closing-x");

let price = document.querySelector("input[id='price']");
let numDays = document.getElementById("numberOfDays");
let priceForm = document.getElementsByClassName("price-form")[0];
let daysForm = document.getElementsByClassName("days-form")[0];

let range = document.querySelector("input[type='range']");
let value = document.querySelector("input[type='number']");
let priceSelection = document.getElementById("maxPrice");
let daysSelection = document.getElementById("p-numDays");
let select = document.getElementById("numDays"); 

let filterBtn = document.getElementById("filter-btn");
let removeFilter = document.getElementById("remove-filter");
let tours =  document.getElementsByClassName("card");

let priceChanged = false;
let daysChanged = false;


range.addEventListener("change",function(){
value.value = range.value;
priceSelection.innerText = "Max price : " + range.value+" $";
filterBtn.removeAttribute("disabled");
filterBtn.classList.add("active");  
priceChanged = true;
});

value.addEventListener("change",function(){
range.value=value.value;
priceSelection.innerText = "Max price : " + value.value +" $";
filterBtn.removeAttribute("disabled");
filterBtn.classList.add("active");  
priceChanged = true;
});

filterIcon.addEventListener("click",function(){
    if(document.getElementById("filter-div").style.display=="none")
    {
         document.getElementById("filter-div").style.display="inline-flex";
    }
    else
    {
        document.getElementById("filter-div").style.display="none";
    }
   
});

x.addEventListener("click",function(){
    document.getElementById("filter-div").style.display="none";
});

price.addEventListener("click",function(){
    daysForm.style.display="none";
    togglePrice();
});

numDays.addEventListener("click",function(){
    priceForm.style.display="none";
    toggleDays();

});
    
select.addEventListener("change",function(){
 daysSelection.innerText = "Num of days: " + select.value; 
 filterBtn.removeAttribute("disabled");
 filterBtn.classList.add("active");  
 daysChanged = true;
});
  

function togglePrice()
{
    if(priceForm.style.display==="none" || priceForm.style.display==="")
    { 
        priceForm.style.display = "inline-flex";
    }
    else{
        priceForm.style.display="none";
    }
}

function toggleDays(){
    if(daysForm.style.display==="none" || daysForm.style.display==="")
    { 
        daysForm.style.display = "inline-flex";
    }
    else{
        daysForm.style.display="none";
    }
}

//when the button is pressed the cards displayed are filtered
filterBtn.addEventListener("click",function(){
    removeFilter.removeAttribute("disabled");
    removeFilter.classList.add("active");
    let maxDays;
    let maxPrice;
    if(daysChanged)
    {
        maxDays = parseInt(select.value);
    }
    if(priceChanged)
    {
        maxPrice = parseInt(value.value);
    }

    for(let card of tours)
    {
        if(maxPrice)
        {
             if(parseInt(card.querySelector(".price").id)>parseInt(maxPrice))
             {
                card.style.display="none";
                continue;
             }
             else if(card.style.display=="none")
             {
                card.style.display="flex";
             }
        }
        if(maxDays)
        {
            if(parseInt(card.querySelector(".tag").id)!=maxDays)
            {
                card.style.display="none";
            }
            else if(card.style.display=="none")
            {
               card.style.display="flex";
            }
        }
       
    }
});
removeFilter.addEventListener("click",function(){
    for(let card of tours)
    {
        card.style.display="flex";
    }
});


for(let card of tours)
    {
        card.querySelector(".back-card").addEventListener("click",function(){
            window.location = "../Views/individualTour.html";
        })

    }
