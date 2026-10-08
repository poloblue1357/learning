let hobbies: string[] = ['Sports', 'Cooking']; // string[] not necessary - inferred

// hobbies.push(10);

// let users: (string | number)[]; // users = type array, with strings or numbers
let users: Array<string | number>;

users = [5, 1]
users = ['Max', 'Anna']
console.log(users)