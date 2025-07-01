// function myFunction(){
//   console.log("Print")
// }
// myFunction();

// function myFunction() {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   return c;
// }
// let a = myFunction();
// console.log(a);
// console.log(myFunction());

// function myFunction(a, b) {
//   let c = Number(a) + Number(b);
//   return c + funcTwo(10);
// }

// function funcTwo(c) {
//   return c
// }

// let a = myFunction(10, "20");
// console.log(a);
// console.log(myFunction());

// const UserGivenfunctionName = (parameter1, parameter2) => {
//   //logic of your function
//   //return 
// }
// UserGivenfunctionName(parameter1,parameter2);

// Arrow Function
// const addNumbers = (firstNumber, secondNumber) => {
//   return firstNumber + secondNumber;
// }
// console.log(addNumbers(10,20))

// const User = {}
// User.name = "May"
// User.Address = "USA"

// const fetchName = () => {
//   console.log(User)
// }
// fetchName();

// const Person = {
//   name: "John",

//   age: 45,

//   drawing: (picture) => { console.log(`I can draw a picture of ${picture}`) },

//   accountancy: (monthlySales, totalCost, percentageOfExpenditure) => {
//     let expenditure = monthlySales * percentageOfExpenditure;
//     let profit = totalCost - expenditure;
//     // console.log(`Your shop's profit is ${profit} rupees.`)
//     return profit;
//   }
// }

// // Person.drawing("Mango");
// let value = Person.accountancy(1000, 10000, 7)
// console.log(`Your shop's profit is ${value} rupees.`)
// console.log(Person['name']);

// const myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat"
//   }
// }
// console.log(myObj.myCars.car1)

// const Person = {
//   firstName: "John",

//   lastName: "Marry",

//   age: 45,

//   drawing: (picture) => { console.log(`I can draw a picture of ${picture}`) },

//   accountancy: (monthlySales, totalCost, percentageOfExpenditure) => {
//     let expenditure = monthlySales * percentageOfExpenditure;
//     let profit = totalCost - expenditure;
//     // console.log(`Your shop's profit is ${profit} rupees.`)
//     return profit;
//   },

//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old.")
//   }
// }

// Person.fullName();

// IIFE: Immediately Invoked function expression

// (function drawConnection(){
//   console.log("Connection established with DB");
// }())

let str = "this is my demo string";
// console.log(str.at(6))
// console.log(str[6])
// console.log(str.indexOf('s'))
// console.log(str.includes('ng'));
// console.log(str.endsWith('ok'))
// console.log(str.length)

// for -in - key/index
// for-of - value/element
// for-each 

let arr = [22, "hii", "ok", true, { name: "okk", age: 25 }, null, 45, 99, 20, 1, 2, 7]

let newArr = arr.filter(element => element > 10);

let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     result.push(arr[i]);
//   }
// }

// for (let element of arr){
//   if(element > 10){
//     result.push(element);
//   }
// }

// for (let ele in arr) {
//   console.log(ele)
// }

// console.log(result, "result")

// console.log(newArr)

//JSON: JavaScript object Notation
// const Users = [
//   {
//     name: "John",
//     age: 25
//   },
//   {
//     name: "May",
//     age: 24
//   },
//   {
//     name: "Doe",
//     age: 26
//   }
// ]
// Users.forEach(item => console.log(`User name is ${item.name} and age is ${item.age}`));

// Users.map(item => console.log(`User name is ${item.name} and age is ${item.age}`))

