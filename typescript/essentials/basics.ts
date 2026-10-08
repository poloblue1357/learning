let userName1: string; // number, boolean
let userAge: number = 38; // can do it this way, but not necessary since it's inferred

// ...

userName1 = 'Max';
// userAge = 34

function add(a: number, b = 5) {
    return a + b
}
console.log(add(2, 4))

add(10)
// add('10')
add(10, 6)
// add(10, '6')

