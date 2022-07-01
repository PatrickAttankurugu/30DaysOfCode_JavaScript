//FUNCTION DECLARATION

// function greet() {
//   console.log("Hello World!");
// }

//FUNCTION EXPRESSION
// when you have a variable and you set it equal to some value, the wholething is called an expression. So if we have a function and we set the function equal to some variable, then the whole thing becomes a function expresssion

// const speak = function (name, time) {
//   console.log(`Good ${time} ${name}`);
// };

// speak("Morning", "Patrick");

// const calcArea = function (radius) {
//   return 3.142 * radius ** 2;
// };

// const a = calcArea(5);
// console.log(a);

//WE CAN ALSO USE ARROW FUNCTIONS WHICH IS A MUCH BETTER OPTION
// const calcArea = (radius) => {
//   return 3.142 * radius ** 2;
// };
// const area = calcArea(7);
// console.log(area);

// const greet = (nam) => console.log(`Good morning ${nam}`);
// greet("Patrick");

// ...........................................

// const nam = "Patrick";
// const greet = () => `Hey ${nam}`;
// let resultOne = greet(nam);
// console.log(resultOne);

//CALLBACK FUNCTIONS
const myFunc = (callBackFunc) => {
  //do something
  let value = 50;
  callBackFunc(value);
};

let people = ["Peter", "Kojo", "Dwomo"];
