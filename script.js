const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const iconError = document.querySelector('#icon-error');
const textError = document.querySelector('#error-text');
const form = document.querySelector('.container form');

btn.addEventListener("click", handleForm);

function handleForm(e) {
    e.preventDefault();
    validation(email);
}

const validation = (item) => {
    if (item.value === "") {
        item.style.border = '2px solid red';
        iconError.style.display = 'block';
        textError.textContent = 'please provide a valid email';
    }
    else if (validateEmail(item.value)) {
        item.style.border = '2px solid hsl(0, 36%, 70%)';
        iconError.style.display = 'none';
        textError.textContent = 'This is a valid email';
        textError.style.color = 'hsl(0, 36%, 70%)'
    }
}
function validateEmail(email) {
    var RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return RegEmail.test(String(email).toLowerCase());
}





