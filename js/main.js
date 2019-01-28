function convertAge(){
	var age=document.getElementById("age");
	var ageInMonths=age.value*12;
	var ageInDays=ageInMonths*30.436806;
	document.getElementById("results").innerHTML="You are "+ ageInMonths+ " months or "+ageInDays+ " days old!";
	age.value="";
}