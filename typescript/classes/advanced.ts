class User {


    protected _firstName: string = '' // protected gives extending classes access
    private _lastName: string = ''

    set firstName(name: string) {
        if(name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._firstName = name;
    }
    set lastName(name: string) {
        if(name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName
    }

    static eid = 'USER'

    static greet() {
        console.group("Hello!")
    }
}

console.log(User.eid)
User.greet()

const max = new User()
max.firstName = 'Max'
max.lastName = ''
console.log(max.fullName)

class Employee extends User {

    constructor(public jobTitle: string) {
        super()
        // super.firstName = 'Max'
    }

    work() {
        // ...
        this._firstName //  can access now bc of 'protected'
        // super._firstName
    }
}