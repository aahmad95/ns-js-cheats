// a();
// // undefined due to hoisting
// b();

// Function Statement aka Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
// var b = function xyz() {
//   console.log("b called");
// };
var b = function (params1, params2) {
  console.log("b called");
};

a();
b(1, 2);
// xyz();

//Anonymous Function
// function (){

// }

// Named Function Expression

// Difference between Parameters & Arguments ?

// First Class Functions

// Arrow Functions
