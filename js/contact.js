function validation() {
	var fname = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

	if(fname.length < 5) {
		text = "Please enter valid name";
		error_message.innerHTML=text;
		return false;
	}

	return false;
}
