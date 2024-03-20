/*
What is async?
What is await?
How async await works behind the scenes?
Examples of using async/await
Error Handling
Interviews
Async await vs Promise.then/.catch
*/

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved value.");
// });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value.");
//   }, 10000);
// });

//async function will always return a promise
// if we don`t return a promise instead return a value it will wrap that value inside a promise and return it.
// async and await are used to handle promises

// async function getData() {
//   return "Hello World!";
// }
// async function getData() {
//   return p;
// }

// // const data = getData();
// // console.log(data);
// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// function getData() {
//     // JS Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("NS JS");
// }

// getData();
// await can only be used inside your async function
// function execution itself is suspended
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value.");
//   }, 10000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value.");
//   }, 20000);
// });
// async function handlePromise() {
//   console.log("Hello World!");
//   const val = await p1;
//   console.log("NS JS");
//   console.log(val);
//   const val2 = await p2;
//   console.log("NS JS 2");
//   console.log(val2);
// }
// handlePromise();
const api_url = "https://api.github.com/users/akshay_march7";
async function handlePromise() {
  // try {
  //   const data = await fetch(api_url);
  //   const jsonVal = await data.json();
  //   console.log(jsonVal);
  // } catch (error) {
  //   console.log(error);
  // }
  const data = await fetch(api_url);
  const jsonVal = await data.json();
  console.log(jsonVal);
}

handlePromise().catch((err) => console.log(err));
// async await is just a synthetical sugar over promise native methods
