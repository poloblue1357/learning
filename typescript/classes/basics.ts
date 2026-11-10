// class User {
//     name: string; // this is TS specific
//     age: number;

//     constructor(n: string, a: number) {
//         // this.name = 'Max'
//         this.name = n;
//         this.age = a;
//     }
// }

// this is equivalent to the code above
class User {
    readonly hobbies: string[] = []

    constructor(public name: string, private age: number) {}

    greet() {
        console.log('My age: ' + this.age)
    }
}

const max = new User('Max', 36);
const fred = new User('Fred', 29)

console.log(max, fred)