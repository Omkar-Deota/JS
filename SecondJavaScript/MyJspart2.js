// objects::key-value pairs storage

const human = {
  name: "Dell",
  age: 25,
  height: 175,
  salary: 10000,
  address: "Dubai"
} //default object creation
// human.age = "55"
// human.school = "DAV"
// console.log(human)
// console.log(Object.keys(human))
// const animal = {}; //object constructor
// animal.legs = 4;
// console.log(animal)
// const car = new Object();//new keyword
// car.tyres = 4;
// console.log(car)
// console.log(car["tyres"])

// function: 3types : function keyword
// 2:Arrow function
// 3:IIFE

// const defaultFunctionName = (parameter) => {
//   //function logic
//   //return
// }
// defaultFunctionName(parameter);

// function defaultFunctionName(param1, param2) {
//   // code logic
// }

// const vehicle = {
//   run: (place) => { console.log(`I am going for running near ${place}`) },
//   color: (type) => {
//     return console.log(`I am a color of ${type} `)
//   },
//   seat: (numberOfSeats) => { return numberOfSeats }
// }

// console.log(vehicle.run("Park"))
// console.log(vehicle.color("Red"))
// console.log(vehicle.seat(4))

//abstraction: object/class private properties ko user se hide karna
//encapsulation: data member + member function bind in one class
//Inheritance: parent class ke properties/members ko child class me use karna
//Polymorphism: Using same function having same name but executing different logic {compile time/ run time}

const animal = {
  breed: "Dog",
  color: "Brown",
  type: "Labrador",
  dog: {
    name: "tommy",
    color: "white",
    type: "Street"
  }
}
// delete animal.color
// const value = animal.dog.color
// console.log(value)

// for (let key in animal) {
//   console.log(animal[key]);
// }
// console.log(JSON.stringify(animal))

// 1.JSON: javaScript object notation
// { "keys": "value" }

let day = new Date().getDay()
// Sunday - 0
// monday - 1
// tuesday - 2
// ...
// ...
// saturday - 6
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Date range out of bound");
}