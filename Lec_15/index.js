// function a() {
//   console.log("a");
// }
// a();
// console.log("End");

// console.log("Start");
// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);
// console.log("End");

// console.log("Start");
// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("Callback");
// });
// console.log("End");

console.log("Start");
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);
fetch("https://api.netflix.com")
  .then(function cbF() {
    console.log("CB Netflix");
  })
  .catch((error) => {
    console.log("CB Netflix");
  });
console.log("End");
// promises and mutation Observer goes inside the microtask queue
// macro task queue or callback queue or task queue
// starvation of functions in callback queue
