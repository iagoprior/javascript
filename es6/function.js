function fn() {
    return 'Code Here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    return 'Code Here';
}

fn.prop = 'Posso criar propr';

console.log(fn());
console.log(fn.prop);

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());
logFnResult(fn);


const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();


this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());