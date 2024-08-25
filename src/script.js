// VARIABLES
const submitButton = document.querySelector(".cta-form__button");
const emailInput = document.getElementById("email");
const errorSpan = document.querySelector(".cta-form__error");

// FUNCTIONS & METHODS
function validateEmail() {
    if (!emailInput.value.includes("@")) {
        errorSpan.style.display = "block";
        errorSpan.innerText = 'Please enter a valid email address';
    }
}

// INITIALIZE & EVENT LISTENERS
submitButton.addEventListener("click", validateEmail);