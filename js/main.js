function convertAge() {
	var age = document.getElementById("age").value;
	var ageInMonths = age * 12;
	var ageInDays = ageInMonths * 30.4375;
	if (age === "") {
		alert("Please enter your age!");
		return false;
	}
	document.getElementById("results").innerHTML = "You are " + ageInMonths + " months or " + ageInDays + " days old!";
	age.value = "";
}