import {showAlertOk, showAlertError,resetForm} from "./util.js";
import {shakeSubmitButton} from "./form.js";

function sendData(body) {
	fetch('/server/ok.json', {
		method: 'GET',
	})
		.then((response) => response.json()
			.then((data)	=> {
			if (data.message) {
				resetForm();
				showAlertOk(data.message);
			} else {
				shakeSubmitButton();
				showAlertError(data.error)
			}
		}));
}

export {sendData};
