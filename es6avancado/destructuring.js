var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3][0]

console.log(arr)
console.log(apple)
console.log(banana)
console.log(orange)
console.log(tomato)

//destructuring obj
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var name = obj.name;

var {name} = obj;
console.log(name);

var age = obj.props.age;
console.log(age)

var {
    props: { age: age2, favoriteColors: [color1, color2]}
} = obj;

console.log(color1)


var arr2 = [{name: 'Apple', type: 'fruit'}];
var fruit = arr2[0].name
console.log(fruit)

var [{name}] = arr2;
console.log(name);


function sum(arr3) {
    var a = arr3[0]
    var b = arr3[1]

    return a+b;
}

console.log(sum([5,5]));
