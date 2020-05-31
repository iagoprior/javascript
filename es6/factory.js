function Pessoa(name) {
    return {
        name,
        lastName: 'Prior'
    }
}

const p = Pessoa('Iago');
console.log(p);