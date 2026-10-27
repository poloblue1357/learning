"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is overwriting the inferred type from TS
const inputEl = document.getElementById('user-name');
// if(!inputEl) {
//     throw new Error('Element not found!');
// }
// ! or ? tell JS/TS that it may be null
// in-line check whether inputEl is null
// if it's not null, it will try to access that property
console.log(inputEl?.value);
//# sourceMappingURL=form.js.map