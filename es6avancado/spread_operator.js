const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

function logArgs1() {
    console.log(arguments);
}
logArgs1(...arr);

const arr2 = [...arr,5,6,7];
console.log(arr2);


const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);