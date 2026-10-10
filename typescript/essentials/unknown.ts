// any type has no restrictions
// unknown type forces extra 'if' checks
function process(val: unknown) {
    // this if statement is standard JS
    // this avoids a runtime error
    // we are narrowing val to be an object with a log method
    if(
        typeof val === 'object' && 
        !!val && 
        'log' in val &&  // checks for log property
        typeof val.log === 'function'
    ) {
        val.log()
    }
}