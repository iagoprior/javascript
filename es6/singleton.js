function Pessoa() {
     if (!Pessoa.instance) {
         Pessoa.instance = this;
        }
        return Pessoa.instance;
    }

const p = Pessoa.call({name: 'Iago' , lastName: 'Prior'});
console.log(p);