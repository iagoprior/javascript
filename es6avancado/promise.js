const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
}); 

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data));

doSomethingPromise
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise;
    })
    .then(data2 => console.log(data2.split('')))
    .catch;