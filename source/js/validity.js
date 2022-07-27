import {form, shakeSubmitButton, submitButton} from "./form.js";

const regExp = /((?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d))/;
const regExpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const password = document.querySelector('#password');
const email = document.querySelector('#email');
const confirmPassword = document.querySelector('#confirm-password');
const allInputsInForm = form.querySelectorAll('input');


function checkUserPassword() {
	if (!regExp.test(password.value)) {
		password.setCustomValidity('Пароль пользователя должен содержать от 8 символов, заглавные и строчные буквы');
	} else {
		password.setCustomValidity('');
	}
	password.reportValidity();
}

password.addEventListener('change', () => {
	checkUserPassword();
})

confirmPassword.addEventListener('change', () =>

{
	if (confirmPassword.value !== password.value) {
		confirmPassword.setCustomValidity('Неверный пароль, попробуйту ввести еще раз');
	} else {
		confirmPassword.setCustomValidity('');
	}
		confirmPassword.reportValidity();
}
)

function checkUserEmail() {
	if (!regExpEmail.test(email.value)) {
		email.classList.add('form__input-text--email-error');
		email.classList.remove('form__input-text--email-check');
	} else {
		email.classList.remove('form__input-text--email-error');
		email.classList.add('form__input-text--email-check');
	}


}

email.addEventListener('change', () => {
	checkUserEmail();
})


submitButton.addEventListener('click', ()=>{
	for (let i = 0; i < allInputsInForm.length; i++) {
		if (!allInputsInForm[i].checkValidity()){
			shakeSubmitButton();
		}
	}
})

export {checkUserPassword}
