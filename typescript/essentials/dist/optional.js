"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// adding ? tells TS that this parameter is optional
function generateError(msg) {
    throw new Error(msg);
}
generateError();
// ?? = nullish coalescing = JS/TS
let input = '';
const didProvideInput = input ?? false;
//# sourceMappingURL=optional.js.map