"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(a, b) {
    return a + b;
}
function log(message) {
    // void is used for functions that don't return anything
    console.log(message);
}
// utility function 
function logAndThrow(errorMessage) {
    // never = this function will not return anything, because it will never return
    // the function will not finish
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(cb) {
    // ...
    cb('Job done!');
}
performJob(log);
let user = {
    name: 'Max',
    age: 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
};
// can call user.greet down below to call the function
user.greet();
//# sourceMappingURL=functions.js.map