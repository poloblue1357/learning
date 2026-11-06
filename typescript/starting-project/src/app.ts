// const userName = "Max";
// // userName= "dan"

// let age = 30;

// age = 29

// function add(a: number, b: number) {
//     let result;
//     result = a + b
//     return result
// }

// if( age > 20) {
//     let isOld = true
// }

// console.log(isOld)

// default arguments have to be last
// const add = (a: number, b: number = 1) => a + b; 

// // console.log(add(2, 5))

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector("button")

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)

const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies

const { name, age } = person