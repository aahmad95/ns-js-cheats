// "use strict";
// this in global space (global scope)
// console.log(this); // globalObject - window(in browser), global(in node)

// this inside a function
function x() {
  // the value depends on strict/non-strict mode
  console.log(this);
}

// this inside strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this will be replaced with global object
// only in non strict mode

// this keyword value depends on how the function is called (window)
// x(); //if a function is called without any reference of the object witl be undefinec
// window.x(); //if a function is called with a reference of the object then this will not be undefined

// this inside a object's method
// if you create a function inside an object then its called a method
// const obj = {
//   a: 10,
//   // now x is a method
//   x: function () {
//     console.log(this, this.a);
//     // this now referes to the object whose method is called.
//   },
// };
// obj.x();

// call apply bind methods (sharing methods)
const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Deepika",
};
// student.printName.call(student2); // value of this=student2
// student.printName.apply(student2);
let printName2 = student.printName.bind(student2);
printName2();
// this inside arrow function

const obj = {
  a: 10,
  // (enclosing lexical context) lexical content is global space that's why this refers to window object in this case
  x: () => {
    console.log(this);
  },
};
obj.x();

// this inside nested arrow function

const obj2 = {
  a: 20,
  // (enclosing lexical context) lexical content is global space that's why this refers to window object in this case
  x: function () {
    // enclosing lexical context of the arrow function below
    console.log(this);
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();

// this inside DOM element = reference to HTMLelement
