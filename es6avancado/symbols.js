const uniqueId = Symbol('Hello');
console.log(uniqueId);

const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj);

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj2 = {
    [Symbol.iterator]() {

    }
}

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

while (true) {
    let {value,done} = it.next()
    console.log(value);
    if (done) {
        break;
    }
}

const arr2 = [2,4,6,8];
for(let value of arr2) {
    console.log(value)
}

const obj3 = {
    values: [8,16,24,32],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length 
                }
            }
        }
    }
}

const it2 = obj3[Symbol.iterator]()

console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())