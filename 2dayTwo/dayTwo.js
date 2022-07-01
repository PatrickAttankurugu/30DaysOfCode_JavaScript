//LOOPS

//For Loops
// for (let i = 0; i < 5; i++) {
//   console.log("In Loop:", i);
// }
// console.log("Loop Finished");
// const names = ["Young", "Man", "John", "Paul"];
// for (let i = 0; i < names.length; i++) {
// console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// While Loop
// let i = 0;
// const names = ["Young", "Man", "John", "Paul"];
// while (i < names.length) {
//   console.log("I in Loop: ", names[i]);
//   i++;
// }

//DO WHILE
// let i = 1;
// do {
//   console.log("Val of I is: ", i);
//   i++;
// } while (i < 5);

//IF STATEMENTS
// const age = 20;
// if (age > 20) {
//   console.log("You are over twenty years old");
// } else {
//   console.log("You are not up to twenty years old");
// }

//LOGICAL OPERATORS OR || and AND &&
// const password = "p@sskkkkkkkkkkkk";
// if (password.length >= 12 && password.includes("@")) {
//   console.log("That password is mighty strong");
// } else if (password.length >= 8 || password.includes("@")) {
//   console.log("That password is long enough");
// } else {
//   console.log("That is a very weak password");
// }

//SWITCH STATEMENTS
//traditionally, you would use if statements for the problem below
// const grade = "D";
// if (grade == "A") {
// } else if (grade == "B") {
// } else if (grade == "C") {
// } else if (grade == "D") {
// } else if (grade == "E") {
// } else {
// }

//But this is the implementation in switch statements
const grade = "D";
switch (grade) {
  case "A":
    console.log("You got an A");
    break;
  case "B":
    console.log("You got a B");
    break;
  case "C":
    console.log("You got a C");
    break;
  case "D":
    console.log("You got a D");
    break;
  case "E":
    console.log("You got an E");
    break;
  default:
    console.log("Not a valid grade");
}
