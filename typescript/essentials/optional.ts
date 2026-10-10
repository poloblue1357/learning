// adding ? tells TS that this parameter is optional
function generateError(msg?: string) {
    throw new Error(msg)
}

generateError()

type User1 = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'
}

// ?? = nullish coalescing = JS/TS

let input = '';
const didProvideInput = input ?? false
