import throttle from 'lodash.throttle'

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormValue, 500));
form.addEventListener('submit', onFormSubmit);

function onFormValue() {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
}

populateForm()

function onFormSubmit(evt) {
    evt.preventDefault();

    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
        const saveData = localStorage.getItem(LOCALSTORAGE_KEY);
        const parseDate = JSON.parse(saveData);

        if (parseDate) {
        input.value = parseDate.email;
        textarea.value = parseDate.message;
        }
    }