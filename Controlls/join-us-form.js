const joinUsPopup = document.getElementById('join-us-popup');

function handlePopupEvent(e) {
    if (e.target === joinUsPopup || e.key === 'Escape') {
        joinUsPopup.classList.add('inactive-popup');
    }
}

window.addEventListener('click', handlePopupEvent);
window.addEventListener('keydown', handlePopupEvent);






//Experiment
const joinUsForm = document.getElementById("join-us-form");
const JoinUsSubmitButton = document.getElementById("join-submit-button");
const requiredInputs = joinUsForm.querySelectorAll("[required]");
let hasSubmitedOnce = false;

console.log(joinUsForm);
console.log(JoinUsSubmitButton);
console.log(requiredInputs);

function disableSubmitButton() {
    JoinUsSubmitButton.disabled = true;
    
    JoinUsSubmitButton.classList.add("inactive-join-us-btn");
    JoinUsSubmitButton.classList.remove("active-join-us-btn");
}

function enableSubmitButton() {
    JoinUsSubmitButton.disabled = false;
  
    JoinUsSubmitButton.classList.remove("inactive-join-us-btn");
    JoinUsSubmitButton.classList.add("active-join-us-btn");
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
}

function isPDFFile(file) {
    const fileRegex = /.*\.pdf$/;
    return fileRegex.test(file.value);
}


function validateInputs() {
    let formIsValid = true;

    requiredInputs.forEach((input) => {
        if (!input.value) {
            formIsValid = false;
        }
        if (input.type === "email" && !validateEmail(input)) {
            console.log('email is not valid');
            formIsValid = false;
        }
        if (input.type === "file" && !isPDFFile(input)) {
            console.log('file is not valid');
            formIsValid = false;
        }
    });
    return formIsValid;
}

const fileInput = document.getElementById('join-us-file');
const fileInputLabel = document.querySelector('#join-us-file-label');
let previousFileLabelText = fileInputLabel.textContent;

function updateFileInputLabel() {
    if (fileInput.files.length > 0) {
        fileInputLabel.textContent = fileInput.files[0].name;
    } else {
        fileInputLabel.textContent = "...";
    }
}

function handleInputChange() {
    updateFileInputLabel();

    if (validateInputs()) {
      enableSubmitButton();
    }else{
        if(hasSubmitedOnce){
            disableSubmitButton();
        }
    }
  }

  joinUsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (validateInputs()) {
        joinUsForm.submit();
    } else {
      disableSubmitButton();
      hasSubmitedOnce = true;
    }
});

  fileInput.addEventListener('change', updateFileInputLabel);

  requiredInputs.forEach(input => {
    input.addEventListener("input", handleInputChange);
  });

