// first we declare the variables
// we use the prompt function to get the value of the variables

// this asks for a name
var userName= prompt("What is your name?");
// asks for a last name
var userLastName=prompt("What is your last name?");
// ask your age
var userAge=prompt("What is your age?");
// converting the user's age into months
var userAgeMonths=userAge*12;
// converting the user's age into days
var userAgeDays=userAgeMonths*30.436806;


// now we use an alert function to call the variables userName and userLastName
alert("Hi " +userName+ " " + userLastName + "!");
// we write the userAge
document.write("<h1> You are "+userAge+" years old </h1>"); 
// we write the age in months
document.write("Or "+userAgeMonths+" months <br>");
// we write the user age in days
document.write("or " +userAgeDays+ " days!");