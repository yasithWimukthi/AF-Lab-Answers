// Create a function as a variable (function expression) that prints ‘Hello World’ to console
// and another function that accepts a variable. The argument passed to the second
// the function should be executed as a function inside the body. Call the second function
// passing the first function as the argument. Check the output.

const funcOne = () => console.log('Hello World');

const funcTwo = callback => callback() ;

funcTwo(funcOne);

// Use curly brackets to create JSON like JavaScript object and add properties and
// functions to the object.
// example js object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    sayHello : () => console.log('Hello')
}

// Understand the ‘this’ keyword in JavaScript.
//     a. Declare a global variable named vehicleName in the window object.
//     b. Declare a method named printVehicleName to print out the vehicle name.
//     c. Declare an object named Vehicle(using object literal notation) which have a
// variable called vehicleName and declare a function named getVehicleName and
// assign it with the printVehicleName.
//     d. Execute the printVehicleName function and the getVehicleName functions to see
// the results.
//     e. Correct the getVehicleName to print out the global variable vehicleName using
// the this keyword

//     a. Declare a global variable named vehicleName in the window object.
var vehicleName = 'BMW';

//     b. Declare a method named printVehicleName to print out the vehicle name.
function printVehicleName(){
    console.log(this.vehicleName);
}

//c. Declare an object named Vehicle(using object literal notation) which have a
// variable called vehicleName and declare a function named getVehicleName and
// assign it with the printVehicleName.

const vehicle = {
    vehicleName : 'toyota',
    getVehicleName: printVehicleName
}

//     d. Execute the printVehicleName function and the getVehicleName functions to see
// the results.
 vehicle.getVehicleName()
 printVehicleName()

//     e. Correct the getVehicleName to print out the global variable vehicleName using
// the this keyword

const vehicle2 = {
    vehicleName : 'toyota',
    getVehicleName: ()=> console.log(this.vehicleName)
}

vehicle2.getVehicleName()
printVehicleName()

// Create a separate function using JavaScript closure which accepts the tax percentage
// and returns a function that accepts the amount and returns the amount after adding tax
// percentage. Try adding tax percentage to ‘this’ object and check if it works.
const taxCalculator = (taxPercentage) => amount =>  (amount * taxPercentage);

const calculateTax = taxCalculator(0.12);
console.log(calculateTax(2000));

// Write a function to call JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))