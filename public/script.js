document.querySelector('#signup-submit').onclick = function(event){
	event.preventDefault();
	console.log('work'); 
	let name = document.querySelector('#signup-name');
	let email = document.querySelector('#signup-email');
	let phone = document.querySelector('#signup-phone');
	let pass = document.querySelector('#signup-pass');
	let data = {
		"name" :name,
		"email":email,
		"phone":phone,
		"pass":pass,
	}

	ajax('signup.php','POST',signup,dataArray);

	function signup(result){
       console.log(result) ;
       if (result ==2) {
       	   alert('Заполните поля');
	   }
       	   else if (result ==1) {
       	   	     alert('Успех. Теперь можно войти!')

       	   }
       	   else {
       	   	     alert('Ошибка, повторите регистрацию позже!');
       	   }
       }

       

	}


