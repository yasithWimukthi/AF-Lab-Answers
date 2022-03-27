// ------------------------------------------------------------------------------
//             ANSWERS FOR QUESTION 1
// ------------------------------------------------------------------------------

// 1. Promises/Asynchronous and callbacks
// • Create a function that returns a value after 1 second (return inside a setTimeout).
// • Pass a callback (function) to the function created in the previous step and execute that
// function inside the timeout by passing the value.
// • Now return a promise instead of accepting the callback.
// • Let’s try to chain these promises.

// Create a function that returns a value after 1 second (return inside a setTimeout)
const getValue = () => {
    let value = 0;
    setTimeout(() => {
        value = 1;
    }, 1000);
    return value;
};

console.log(getValue());

// • Pass a callback (function) to the function created in the previous step and execute that
const getValue2 = callback => {
    let value = 0;
    setTimeout(() => {
        value = 2;
        callback(value);
    }, 1000);
    return value;
};

getValue2(value => console.log(value));

// • Now return a promise instead of accepting the callback.

const getValue3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
};

getValue3().then(value => console.log(value));

// • Let’s try to chain these promises.

getValue3().then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 1000);
    });
}).then(value => console.log(value));


// ------------------------------------------------------------------------------
//             ANSWERS FOR QUESTION 4
// ------------------------------------------------------------------------------

// 4. Try exercise 1 with async/await.

const getValue4 = async () => {
    let value = 0;
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            value = 4;
            resolve();
        }, 1000);
    });
    return value;
};

getValue4().then(value => console.log(value));


// ------------------------------------------------------------------------------
//             ANSWERS FOR QUESTION 2
// ------------------------------------------------------------------------------


// 2. Classes in JavaScript
// Create a class named Vehicle using a function.
// Add a property named type to the class (this.type). Assign a value to that variable
// using a constructor argument.

function Vehicle(type) {
    this.type = type;
    Vehicle.VehicleCount++;
}

// Add a function to its prototype named drive (Vehicle.prototype.print...). Print
// ‘Vehicle is driving’ in the function body

Vehicle.prototype.drive = function () {
    console.log(`Vehicle is driving`);
};

// Add VehicleCount (Vehicle.VehicleCount) as a static variable
// Increase the number of VehicleCount (Vehicle.VehicleCount++) by one inside the
// constructor.
Vehicle.VehicleCount = 0;

// Create an object from Vehicle class (new Vehicle) and check static variable value, type
// property value and function work.
const vehicle = new Vehicle('car');
console.log(`Vehicle Count : ${Vehicle.VehicleCount}`);
console.log(`Vehicle type : ${vehicle.type}`);
vehicle.drive();

//Create a class named Car and extend the class Vehicle (Car.prototype = Object.create(Vehicle.prototype); Car.prototype.constructor = Car).

function Car(type) {
    Vehicle.call(this, type)
    this.balanceWheels = function () {
        console.log(`Wheels are balanced`);
    };
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Call balanceWheels and drive methods using a car object and verify the
// functionality.
const car = new Car('car');
car.balanceWheels();
car.drive();

// Check the static variable value and type variable value. Notice that they are not
// correct.
console.log(`Vehicle Count : ${Vehicle.VehicleCount}`);



// ------------------------------------------------------------------------------
//             ANSWERS FOR QUESTION 5
// ------------------------------------------------------------------------------

// Try exercise 2 class, extends, get, set, and super keywords.
// Create a class named Vehicle using a function.
// • Add a property named type to the class (this.type). Assign a value to that variable
// using a
// constructor argument.

class Vehicle2 {
    static VehicleCount = 0;

    constructor(type) {
        this.type = type;
        ++Vehicle2.VehicleCount;
    }

    // ‘Vehicle is driving’ in the function body
    drive() {
        console.log(`Vehicle2 is driving`);
    }

    // • Add VehicleCount (Vehicle.VehicleCount) as a static variable
    // • Increase the number of VehicleCount (Vehicle.VehicleCount++) by one inside the
    // constructor.
    static get VehicleCount() {
        return Vehicle.VehicleCount;
    }

    static set VehicleCount(value) {
        Vehicle.VehicleCount = value;
    }
}

// • Create an object from Vehicle class (new Vehicle) and check static variable value, type
// property value and function work
const vehicle2 = new Vehicle2('car');
vehicle2.drive();
console.log(`Vehicle Count : ${Vehicle2.VehicleCount}`);

// Create a class named Car and extend the class Vehicle
class Car2 extends Vehicle2 {
    constructor(type) {
        super(type);
    }

    // Add a new method called balanceWheels to Car and print ‘Wheels are balanced’ in
    // the
    // class body.
    balanceWheels() {
        console.log(`Wheels are balanced`);
    }
}

const car2 = new Car2('car');
car2.balanceWheels();
car2.drive();
console.log(`Vehicle Count : ${Vehicle2.VehicleCount}`);

