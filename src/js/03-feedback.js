var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');


updateOutput();
form.addEventListener("input", throttle(onFormInput, 500));

form.addEventListener("submit", onFormSubmit);

function onFormInput(evt) {

     const feedbackFormState = {
        email: email.value,
        message: message.value,
    };

   localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

function onFormSubmit(evt) {

    console.log('localStorage:', JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.clear();
}

function updateOutput() {
    const data = localStorage.getItem("feedback-form-state");

    if (data){
        parsedData = JSON.parse(data);
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }
}
