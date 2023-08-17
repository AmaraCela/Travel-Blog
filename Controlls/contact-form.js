const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const requiredInputs = contactForm.querySelectorAll("[required]");
let hasClickedForm = false;
let clickedOutofForm = false;

function disableSubmitButton() {
  submitButton.disabled = true;
  submitButton.hover = false;
  clickedOutofForm = true;
  submitButton.classList.add("disabled");
  submitButton.classList.remove("enabled");
}

function enableSubmitButton() {
  submitButton.disabled = false;
  submitButton.classList.remove("disabled");
  submitButton.classList.add("enabled");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
}

function validateInputs() {
  let formIsValid = true;

  requiredInputs.forEach((input) => {
    if (!input.value) {
      formIsValid = false;
    } 
    if (input.type === "email" && !validateEmail(input)) {
      formIsValid = false;
    }
  });
  return formIsValid;
}

function handleClickOutside(event) {
  if (!contactForm.contains(event.target) && event.target !== contactForm) {
    if (hasClickedForm && !validateInputs()) {
        disableSubmitButton();
    }
  }
}

function handleInputChange() {
  if (validateInputs()) {
    enableSubmitButton();
  } else {
    if(clickedOutofForm){
        disableSubmitButton();
    }
  }
}

contactForm.addEventListener("click", () => {
  if (!hasClickedForm) {
    console.log("Clicked form for the first time");
  }
  hasClickedForm = true;
});

document.addEventListener('click', handleClickOutside);

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if (validateInputs()) {
    contactForm.submit();
  } else {
    disableSubmitButton();
  }
});

requiredInputs.forEach(input => {
  input.addEventListener("input", handleInputChange);
});