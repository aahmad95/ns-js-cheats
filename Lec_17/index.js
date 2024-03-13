// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);

// console.log("End");

// // million line of code similar simulation
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expires here");

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
