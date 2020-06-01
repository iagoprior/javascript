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

const totalWeight = pets.reduce((total, pet) => {
    console.log(total)
    console.log(`Total: ${total}`)
    console.log(`Pet: ${pet.name}`)

    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0 , totalWeight: 0 })

console.log(totalWeight)


//EXEMPLO usando reduce e filter//
const totalWeightFilter = pets.reduce((total, pet) => {
    
    if (pet.type !== 'dog') return total

    return total + pet.weight
    
    },0)

console.log(totalWeightFilter)

//ENCADEAMENTO//

const totalWeightDogs = pets.filter((pet) =>  {
    return pet.type === 'dog'
}) .reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)