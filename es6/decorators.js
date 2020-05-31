let loggedin = false;

function callIfAuthenticated(fn) {
    return !!loggedin && fn();
}

function soma(a,b) {
    return a + b;
}

console.log(callIfAuthenticated(() => soma(2,3)));
loggedin = true;
console.log(callIfAuthenticated(() => soma(2,3)));
