function convertAge() {
	var age = document.getElementById("age").value;
	var ageInMonths = age * 12;
	var ageInDays = ageInMonths * 30.4375;
	if (age === "") {
		alert("Please enter your age!");
		return false;
	}
	var results=document.getElementById("results");
		results.classList.add("animated", "fadeInUpBig");
		results.innerHTML = "You are " + ageInMonths + " months or " + ageInDays + " days old!";
	document.getElementById()
	document.getElementById("age").value = "";
}