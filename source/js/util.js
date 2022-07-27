const ALERT_SHOW_TIME =5000;
const form = document.querySelector('.form');

function showAlertOk(message){
	const alertContainer = document.createElement('div');
	alertContainer.style.zIndex = 100;
	alertContainer.style.position = 'absolute';
	alertContainer.style.left = 0;
	alertContainer.style.top = 0;
	alertContainer.style.right = 0;
	alertContainer.style.padding = '10px 3px';
	alertContainer.style.fontSize = '30px';
	alertContainer.style.lineHeight = '123%';
	alertContainer.style.textAlign = 'center';
	alertContainer.style.backgroundColor = 'white';
	alertContainer.style.border = '3px solid #5A61ED';

	alertContainer.textContent = message;

	document.body.append(alertContainer);

	setTimeout(() => {
		alertContainer.remove();
	}, ALERT_SHOW_TIME);
};

function showAlertError(message){
	const alertContainer = document.createElement('div');
	alertContainer.style.zIndex = '100';
	alertContainer.style.position = 'absolute';
	alertContainer.style.left = '0';
	alertContainer.style.top = '0';
	alertContainer.style.right = '0';
	alertContainer.style.padding = '10px 3px';
	alertContainer.style.fontSize = '30px';
	alertContainer.style.lineHeight = '123%';
	alertContainer.style.textAlign = 'center';
	alertContainer.style.backgroundColor = 'white';
	alertContainer.style.border = '3px solid #FF2828';



	alertContainer.textContent = message;

	document.body.append(alertContainer);

	setTimeout(() => {
		alertContainer.remove();
	}, ALERT_SHOW_TIME);
};

function resetForm(){
	form.reset();
}

export {showAlertOk, showAlertError, resetForm};
