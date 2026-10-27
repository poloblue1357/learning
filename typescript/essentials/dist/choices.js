"use strict";
// enum Role {
//     Admin = 1, // 0
//     Editor, // 1
//     Guest, // 2
// }
// alternative to enums - popular alt = union
// enum = type that only allows certain options
// enums are used to define a list of allowed values
// enums can be useful if there's a set number of choices you want to use
Object.defineProperty(exports, "__esModule", { value: true });
let userRole = 'admin';
// unions - more popular than enum
// ...
userRole = 'guest';
// literaly types combined with union types
let possibleResults1; // [1, -1] 
possibleResults1 = [1, -1];
function access(role) {
    // ...
}
//# sourceMappingURL=choices.js.map