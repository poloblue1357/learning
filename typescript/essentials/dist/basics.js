"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName1; // number, boolean
let userAge = 38; // can do it this way, but not necessary since it's inferred
// ...
userName1 = 'Max';
// userAge = 34
function add(a, b = 5) {
    return a + b;
}
console.log(add(2, 4));
add(10);
// add('10')
add(10, 6);
// add(10, '6')
//# sourceMappingURL=basics.js.map