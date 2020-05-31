const users = ['Iago', 'Pedro', 'Bruno'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name:'Iago',
        age: 27,
        gender: gender.MAN
    },
    {
        name:'Jennifer',
        age: 37,
        gender: gender.WOMAN   
    }
]

console.log(persons.length);
console.log(Array.isArray(persons));

persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});


const mens = persons.filter(person => person.gender === gender.MAN);
console.log(mens);

const personsWithCourse = persons.map(person => {
    person.course = 'Introd. ao js';
    return person;
});
console.log(personsWithCourse);


const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log(totalAge);