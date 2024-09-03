const submitBtn = document.querySelector('.submit-btn');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const email = document.querySelector('#email');
const errorDisplayers = document.getElementsByClassName('error');
const inputFields = document.querySelectorAll('input');
const container = document.querySelector('.container');
const containerOverlay = document.querySelector('.container-overlay');

let count = 2;

function onValidation(current, messageString, booleanTest) {
  let message = current;
  message.textContent = messageString;
  booleanTest != 0 ? ++count : count;
}

for (let i = 0; i < inputFields.length; i++) {
  let currentInputField = inputFields[i];
  let currentErrorDisplayer = errorDisplayers[i];

  currentInputField.addEventListener('keyup', (e) => {
    let message = currentErrorDisplayer;
    e.target.value != '' ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*This field is Required', 0);
  });
}

phone.addEventListener('keyup', (e) => {
  let message = errorDisplayers[3];
  e.target.value == e.target.value.replace(/\D/g, '') ? onValidation(message, '', 1) : onValidation(message, '*Please enter valid number', 0);
});

email.addEventListener('keyup', (e) => {
  let message = errorDisplayers[2];
  email.value.includes('@') & email.value.includes('.com') ? onValidation(message, '', 1) : onValidation(message, '*Please provide a valid Email', 0);
});

password.addEventListener('keyup', (e) => {
  let message = errorDisplayers[4];
  password.value.length >= 8 ? onValidation(message, '', 1) : onValidation(message, 'Password requires minimum 8 charecters', 0);
});

passwordConfirm.addEventListener('keyup', (e) => {
  let message = errorDisplayers[5];
  password.value === e.target.value ? onValidation(message, '', 1) : onValidation(message, '*Password did not match', 0);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (count > 5) {
    container.style.display = 'none';
    containerOverlay.classList.remove('disabled');
  } else {
    for (let i = 0; i < errorDisplayers.length; i++) {
      errorDisplayers[i].textContent = '*This field is Required';
    }
  }
});
