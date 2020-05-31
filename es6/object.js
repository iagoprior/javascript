const user = {
    name: 'Iago',
    lastName: 'Prior'
};
console.log(user);

user.name = 'Outro nome';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

Object.assign(user, {fullName: 'Iago Prior'});
console.log(user);
console.log(Object.assign({},user, {age: 26}));

const newObj = { foo: 'bar'};
Object.freeze(newObj);
newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';
console.log(newObj);



const person = { name: 'Ronaldo'};
Object.seal(person);
person.name = 'Ronaldo Nazario';
person.age = 25;
console.log(person);