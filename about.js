console.log("hello world");
let form = document.querySelector('form#contact');
let batmanPicture = document.getElementById('batman')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted! ')
}

function batmanAlert(event) {
	alert("You Are awesome!")
}

batmanPicture.addEventListener('mouseover', batmanAlert);

form.addEventListener('submit', handleSubmit);