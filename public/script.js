document.querySelector('#signup-submit').onclick = function(event){
	event.preventDefault();
	console.log('work'); 
	let name = document.querySelector('#signup-name').value;
	let email = document.querySelector('#signup-email').value;
	let phone = document.querySelector('#signup-phone').value;
	let pass = document.querySelector('#signup-pass').value;
	let data = {
		"firstname" :name,
		"email":email,
		"phone":phone,
		"password":pass,
	}

	ajax('signup.php','POST', signup, data);

	function signup(result){
       console.log(result) ;
       if (result == 2) {
       	   alert('Заполните поля');
	   }
       	   else if (result == 1) {
       	   	     alert('Успех. Теперь можно войти!')

       	   }
       	   else {
       	   	     alert('Ошибка, повторите регистрацию позже!');
       	   }
       }

       

	}


