const form = document.querySelector('.form');
const email = document.querySelector('.form__email--input');
const submit = document.querySelector('#submit.form__button--click');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEmail();
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
