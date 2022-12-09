import throttle from 'lodash.throttle'

// const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormValue, 500));
form.addEventListener('submit', onFormSubmit);
// input.addEventListener('input', onInput);
// textarea.addEventListener('input', onTextareaInput);

// const formData = {}
// console.log(formData);

function onFormValue(evt) {
    const formEl = evt.target.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

populateForm()

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function populateForm() {
        const saveData = localStorage.getItem('feedback-form-state');
        const parseDate = JSON.parse(saveData)

        if (parseDate) {
        input.value = parseDate.email;
        textarea.value = parseDate.message;
        }
    }





//---------------

// const formData = {};
// console.log(formData);

// form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;
    
// });

// populateTextarea();

// function onFormSubmit(evt) {
//     evt.preventDefault();

//     evt.currentTarget.reset();
//     localStorage.removeItem('feedback-form-state');
// }

// function onTextareaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem('feedback-form-state', message);
// }

// function populateTextarea() {
//     const savedMessage = localStorage.getItem('feedback-form-state');

//     if (savedMessage) {
//         textarea.value = savedMessage;
//     }
// }
// const email = evt.target.value;

// localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
// const saveData = localStorage.getItem('feedback-form-state');
// const parseDate = JSON.parse(saveData)



// Відстежуй на формі подію input, і щоразу записуй у 
//локальне сховище об'єкт з полями email і message, 
//у яких зберігай поточні значення полів форми. 
//Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, 
//і якщо там є збережені дані, заповнюй ними поля форми. 
//В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, 
//а також виводь у консоль об'єкт з полями email, message 
//та їхніми поточними значеннями.


// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.