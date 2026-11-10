"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
const max = new User();
max.firstName = 'Max';
max.lastName = 'Schwarzmuller';
console.log(max.fullName);
//# sourceMappingURL=advanced.js.map