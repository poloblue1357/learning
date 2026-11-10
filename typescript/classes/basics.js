"use strict";
// class User {
//     name: string; // this is TS specific
//     age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(n: string, a: number) {
//         // this.name = 'Max'
//         this.name = n;
//         this.age = a;
//     }
// }
// this is equivalent to the code above
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('My age: ' + this.age);
    }
}
const max = new User('Max', 36);
const fred = new User('Fred', 29);
console.log(max, fred);
//# sourceMappingURL=basics.js.map