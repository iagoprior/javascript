const fs = require('fs')
const path = require('path')
const basePath = './assets/'

//callback//
function cb (err,data) {
    if (err) throw err
    console.log(data)
}

console.log('Begin')

fs.readdir(path.resolve(basePath), (err, files) => {
    if(err) throw err
    files
    .filter((file) => /[1-6].txt/gi.test(file))
    .forEach((sentenceFile) => {
        fs.readFile(path.resolve(basePath,sentenceFile), {encoding: 'utf-8'}, cb)
    })
})

console.log('End')