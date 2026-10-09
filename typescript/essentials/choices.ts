// enum Role {
//     Admin = 1, // 0
//     Editor, // 1
//     Guest, // 2
// }
// alternative to enums - popular alt = union
// enum = type that only allows certain options
// enums are used to define a list of allowed values
// enums can be useful if there's a set number of choices you want to use

// let userRole: Role = Role.Admin // 0 => Admin, 1 => Guest etc
// let userRole: Role = 0

// type alias or 'custom type'
type Role = 'admin' | 'editor' | 'guest' | 'reader'
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[]
}

let userRole: Role = 'admin'
// unions - more popular than enum

// ...

userRole = 'guest'


// literaly types combined with union types
let possibleResults1: [1 | -1, 1 | -1] // [1, -1] 

possibleResults1 = [1, -1]

function access(role: Role) {
    // ...
}

