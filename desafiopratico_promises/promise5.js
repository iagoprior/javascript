const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

coinFlip
    .then((data) => console.log('Yay 1'))
    .catch((err) => console.log('First catch'))
    .then(() => { throw new Error('')})
    .catch((err) => console.error('Error in first case, next then willnot execute'))
    .then(() => console.log('Ende 1'))