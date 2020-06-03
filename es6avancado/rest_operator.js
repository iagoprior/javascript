function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5,5,5,2,3))


const sum1 = (a,b, ...rest) => {
    console.log(a,b, rest)
}
console.log(sum1(5,5,5,2,3))

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum2 = (...rest) => {
    return multiply.apply(undefined, rest)
}
console.log(sum2(2,3,4,5,6))