const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

coinFlip
    .then((data) => console.log(data, '1'))
    .catch((err) => console.log('Erro 1'))
    .then(() => { throw new Error('Erro 2')})
    .catch((err) => console.log(err.message))