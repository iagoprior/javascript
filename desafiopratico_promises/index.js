const fs = require('fs')
const path = require('path')
const basePath = './assets/'

//callback//
function cb (err,data) {
    if (err) throw err
    console.log(data)
}

console.log('Begin')

//const content = fs.readFileSync(path.resolve(basePath, 'burrinho.txt'))

const files = fs.readdirSync(path.resolve(basePath))

const sentences = files.filter((file) => /[1-6].txt/gi.test(file))

for (const file of sentences) {
    fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8'}, cb)
}

//for (const sentence of sentences) {
//    const text = fs.readFileSync(path.resolve(basePath,sentence)).toString()
//    console.log(text)
//} 

//console.log(content.toString())

//fs.readFile(path.resolve(basePath,'burrinho.txt'), {encoding: 'utf-8'}, cb)



console.log('End')