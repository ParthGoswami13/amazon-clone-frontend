var form=document.getElementById("form")
var username=document.getElementById("name");
var password=document.getElementById("pass");
var password2=document.getElementById("pass2");
var num=document.getElementById("num");
var email=document.getElementById("email");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const uservalue=username.value.trim();
    const passvalue=password.value.trim();
    const pass2value=password2.value.trim();
    const numvalue=num.value.trim();
    const emailvalue=email.value.trim();
    let a=0;

    if(uservalue === ''){
        setErrorFor(username,'Username cannot be blank');//add error class
    }
    else{
        setSuccessFor(username)
        a++;//add success class
    }

    if(emailvalue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailvalue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        a++;
	}
	
	if(passvalue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
        a++;
	}
	
	if(pass2value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passvalue !== pass2value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
        a++;
	}

    if(numvalue === ''){
        setErrorFor(num,'number cannot be blank');//add error class
    }
    else if(numvalue.length<10 || numvalue.length>10){
        alert("Phone number should be in 10 digits !");
    }
    else{
        setSuccessFor(num);
        a++;//add success class
    }

    if(a==5){
        alert("Your form has been submitted !");
    }
}   

function setErrorFor(input,message){
    const inputBox = input.parentElement;
    const small= inputBox.querySelector('small');

    small.innerText = message;//add error message

    inputBox.className = 'input-box error'//add error class
}

function setSuccessFor(input){
    const inputBox = input.parentElement;
    inputBox.className = 'input-box success'
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
