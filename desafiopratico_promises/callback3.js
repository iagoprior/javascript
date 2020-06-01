const fs = require('fs')
const path = require('path')
const basePath = './assets/'

//callback//
function cb (err,data, index, max) {
    if (err) throw err
    console.log(data)
    return start(index + 1, max)
}

console.log('Begin')

start(1, 6)



function start (index, max) {
    if (index > max) return console.log('End')
    fs.readFile(
    path.resolve(basePath, `${index}.txt`),
    {encoding: 'utf-8'},
    (err, data) => cb(err, data, index, max)
    )
}