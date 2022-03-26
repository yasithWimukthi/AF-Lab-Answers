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