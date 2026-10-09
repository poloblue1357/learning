let hobbies: string[] = ['Sports', 'Cooking']; // string[] not necessary - inferred

// hobbies.push(10);

// let users: (string | number)[]; // users = type array, with strings or numbers
let users: Array<string | number>;

users = [1, 'Max']
users = [5, 1]
users = ['Max', 'Anna']
console.log(users)

let possibleResults: [number, number] // [1, -1] 
// tuple - array of fixed length with clearly defined types
// can be 2 numbers at most - can't be other types

possibleResults = [1, -1]
// possibleResults = [5, 10, 12]

let user: { // object type definition
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max', 
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 5
    }
}

// object types
let val: {} = {}; // can be object, string, number etc.
// empty object = any value that's not undefined or null

const someObj = {
    name: 'Max',
    0: 'Max', 
}
let data: Record<string, number | string>  
// some value must be an object, but it's a flexible type or flexible object - it's generic
// if u need a flexible object, you can use a Record type
// first value - key type
// second value - number or string for value

data = {
    entry1: 1,
    entry2: 'some string',
};