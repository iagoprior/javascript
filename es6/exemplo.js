function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Iago')
console.log(p)



function Cachorro() {}

Cachorro.prototype.latir = function() {}

const c = new Cachorro()

Cachorro.prototype.teste = function() {}
String.prototype.split