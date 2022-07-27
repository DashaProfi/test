import {sendData} from "./api.js";

const form = document.querySelector('.form');
const formItems = document.querySelectorAll('.form__item');
const TIME = 200;
const submitButton = document.querySelector('.form__button');
const signUpForm = document.querySelector('.sign-up');
const signUpRegistered = document.querySelector('.sign-up-registered');


form.addEventListener('submit', (evt) => {
		evt.preventDefault();
			sendData(new FormData(evt.target));
	signUpForm.classList.add('visually-hidden');
	signUpRegistered.classList.remove('visually-hidden');
	})


function startAnimation() {
		formItems.forEach((item,i)=>{
			setTimeout(()=>{
        item.classList.add('form__item--animated')
			}, i*TIME)
		} )
}
startAnimation();

// new Vivus(
// 	'svg',
// 	{
// 		type: 'delayed',
// 		duration: 400,
// 	}
// );

function shakeSubmitButton(){
	submitButton.classList.add ('form__button--animated');
}

submitButton.addEventListener('animationend', function() {
	submitButton.classList.remove('form__button--animated');
});

export {shakeSubmitButton, submitButton, form};
