//Strings
let email = "patricka.azuma@gmail.com";

//String Concatenation
let firstName = "Patrick";
let lastName = "Attankurugu";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Getting Characters
console.log(fullName[0]);

//String Length
console.log(fullName.toUpperCase());
let index = email.indexOf("@");
console.log(index);

//String equality comparison
//loose comparison uses two equal operators and does type conversion
//before comparison. in that case string 25 is equal to int 25
let age = 25;

console.log(age == 25);
console.log(age == "25");

//strict comparison

console.log(age === 25);
console.log(age === "25");
//most of the time you should be using strict comparison
//because it results in more predictable results
console.log("seperator");
//Methods can return booleans
results = email.includes("@");
console.log(results);

//TEMPLATE STRINGS
const title = "Best reads of 2020";
const author = "Patrick Attankurugu";
const likes = 30;

//concatenation way
let result =
  "The blog called " + title + " by " + author + " has " + likes + "  likes";
console.log(result);

//template string way
//you can see this is a very simple way. Let's do this
product = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(product);
