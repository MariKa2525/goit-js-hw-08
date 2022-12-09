import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
console.log(input);
form.addEventListener('submit', onFormSubmit);
input.addEventListener('input', throttle(onTextareaInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));
// Відстежуй на формі подію input, і щоразу записуй у 
//локальне сховище об'єкт з полями email і message, 
//у яких зберігай поточні значення полів форми. 

const formData = {};
console.log(formData);

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    
});

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(evt) {
    const email = evt.currentTarget.value;
    const message = evt.currentTarget.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(evt));
}

function populateTextarea() {
    const saveData = localStorage.getItem('feedback-form-state');
    const parseDate = JSON.parse(saveData)

    console.log(parseDate);

    if (parseDate) {
        input.value = parseDate.email;
        textarea.value = parseDate.message;
        console.log(parseDate.email);
        console.log(parseDate.message);
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

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.