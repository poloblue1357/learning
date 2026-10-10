function add1(a: number, b: number): number { // return value type - can omit usually
    return a + b
}

function log(message: string): void { // void = this function returns nothing
    // void is used for functions that don't return anything
    console.log(message)
}

// utility function 
function logAndThrow(errorMessage: string): never {
    // never = this function will not return anything, because it will never return
    // the function will not finish
    console.log(errorMessage)
    throw new Error(errorMessage)
}

function performJob(cb: (m: string) => void) {
    // ...
    cb('Job done!')
}
performJob(log)

type User = {
    name: string;
    age: number;
    greet: () => string;
}
let user: User = {
    name: 'Max', 
    age: 39,
    greet() {
        console.log('Hello there!')
        return this.name
    }
}
// can call user.greet down below to call the function
user.greet()