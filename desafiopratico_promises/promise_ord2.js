const fs = require('fs')
const path = require('path')
const basePath = './assets/'
const { promisify} = require('util')
const readFileAsync = promisify(fs.readFile)


console.log('Begin')
function read (index) {
    return readFileAsync(path.resolve(basePath, `${index}.txt`), {encoding: 'utf-8'})
}

function start (index, max) {
    if (index > max) return console.log('End')
    read(index).then((data) => {
        console.log(data, '\n')
        start(index + 1, max)
    })
}

start(1,6)
