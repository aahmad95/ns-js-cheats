// const arr = [5, 1, 3, 2, 6];

// Double - [10,2,6,4,12]

// Triple - [15,3,9,6,18]

// Binary - ["101", "1", "11", "10", "110"]

// function double(x) {
//   return x * 2;
// }
// function triple(x) {
//   return x * 3;
// }
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);

// const output = arr.map((x) => x.toString(3));

// console.log(output);

// filter odd values

// function isOdd(x) {
//   return x % 2;
// }
// function isEven(x) {
//   return x % 2 == 0;
// }
// function greaterThan4(x) {
//   return x > 4;
// }
// const output = arr.filter(greaterThan4);

// console.log(output);

// reduce sum or max

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(output);

const users = [
  { firstName: "akshay", lastName: "saini", age: 28 },
  { firstName: "aahmad", lastName: "saleem", age: 28 },
  { firstName: "bilal", lastName: "iftikhar", age: 26 },
  { firstName: "syed", lastName: "muneeb", age: 25 },
];

// list of full names
// ["akshay saini", "aahmad saleem", ...]

// const output = users.map((x) => `${x.firstName} ${x.lastName}`);

// console.log(output);

// { 28: 2, 26: 1, 25:1}

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

// ["akshay", "aahmad"]

// const output = users.filter((x) => x.age >= 28).map((x) => x.firstName);
const output = users.reduce(function (acc, curr) {
  if (curr.age >= 28) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
