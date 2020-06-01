const pets = [

    {
        name: 'rex',
        type: 'dog',
        age:10,
        weight: 30
    },
    {
        name: 'miau',
        type: 'cat',
        age:2,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age:1,
        weight: 2
    },
    {
        name: 'bolinha',
        type: 'dog',
        age:4,
        weight: 5
    },
    {
        name: 'mingau',
        type: 'cat',
        age:6,
        weight: 3
    }
]

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(pets)
console.log(petNames)