const arr = [1,2,3,4,5];
arr.map(value => value*2);
console.log(arr);

const arr2 = [1,2,[3,4]];
console.log(arr2.flat());

const arr3 = [1,2,3,4];
console.log(arr3.flatMap(value3 => [value3 * 2]));


const arr4 = [1,2,3,4];
const arrIterator = arr4.keys();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

const arr5 = [1,2,3,4];
const arrIterator2 = arr4.entries();

console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());

const arr6 = [1,2,3,4];
const firstGreaterThanTwo = arr6.find(value4 => value4 > 2);
console.log(firstGreaterThanTwo);

const arr7 = [1,2,3,4];
const firstGreaterThanTwo2 = arr7.findIndex(value5 => value5 > 2);
console.log(firstGreaterThanTwo2);

const arr8 = [1,2,3,4];
const allValuesGreaterThanTwo = arr8.filter(value6 => value6 > 2);
console.log(allValuesGreaterThanTwo);

const arr9 = [1,3,3,4];
const firstIndexOfItem = arr9.indexOf(3);
console.log(firstIndexOfItem);

const arr10 = [1,3,3,4,3];
const lastIndexOfItem = arr10.lastIndexOf(3);
console.log(lastIndexOfItem);

const arr11 = [1,3,3,4,3];
const hasItemOne = arr11.includes(1);
console.log(hasItemOne);
const hasItemTwo = arr11.includes(2);
console.log(hasItemTwo);

const arr12 = [1,3,3,4,3];
const hasSomeEvenNumber = arr12.some(value7 => value7 %2 === 0);
console.log(hasSomeEvenNumber);

const arr13 = [1,3,3,5,3];
const hasSomeEvenNumber2 = arr13.some(value8 => value8 %2 === 0);
console.log(hasSomeEvenNumber2);

String('Hello') === 'Hello';


