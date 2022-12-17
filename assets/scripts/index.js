let errorsInfo = document.getElementById('errorsInfo');



function checkValidity(input) {

  var validity = input.validity;

  if (validity.valueMissing) {
      errors.push('Поле ' + input.placeholder + ' не заполнено');
  }
  if (validity.patternMismatch) {
      errors.push('Неверный формат заполнения');
  }
  
}   

function checkAll() {
  errors = []; 
  let inputs = document.querySelectorAll('input');

  for (let input of inputs) {
      checkValidity(input);
  }

  errorsInfo.innerHTML = errors.join('/ <br>');

}


 const formElement = document.querySelector('.form');

	formElement.addEventListener('submit', function (evt) {
		evt.preventDefault();
	   
        checkAll();
    if (errors.length === 0) {
      let user = { 
        name: document.querySelector('#userName').value,
        login: document.querySelector('#login').value,
      }
      fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },

      })
      .then (res => res.json())
      .then (user => console.log(user))
    }
	});

