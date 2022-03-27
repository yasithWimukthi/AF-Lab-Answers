// Create a class name ‘User’

class User{

    #password; // private property

    constructor(email, type, password ){
        this.email = email;
        this.type = type;
        this.#password = password;
    }
}

// Create an object from the User class named user1. Get the data from HTML input fields.
const loginForm = document.querySelector('#loginForm');
let email;
let password;
let type;

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    email = document.querySelector('#email').value;
    password = document.querySelector('#password').value;
    type = document.querySelector('#type').value;

    const user1 = new User(email, type, password);
    console.log(user1.email);
})

// Create a class named ‘AdminUser’ and extend the user class.
class Admin extends User{
    constructor(email, type, password){
        super(email, type, password);
    }

    deleteUser(user){
        console.log(`User ${user.email} has been deleted`);
    }

    updateUser(user){
        console.log(`User ${user.email} has been updated`);
    }
}