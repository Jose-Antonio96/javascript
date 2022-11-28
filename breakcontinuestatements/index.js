// break = breaks out of a loop entirely
// continue = skip an interation of a loop
const valuesToIgnore = [13]
let acceptSome = (rawContent) => {
    for (let i of rawContent) {
        if (valuesToIgnore.includes(i)) {
        // These are the values you want to ignore
            console.log('Ignoring', i)
        } else {
        // These are the values you do not want to ignore
            console.log('Not Ignoring', i)
        }
    }
}

acceptSome([1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20])