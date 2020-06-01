const fs = require('fs')
const path = require('path')
const basePath = './assets/'

//callback//
function cb (err,data) {
    if (err) throw err
    console.log(data)
}

console.log('Begin')

fs.readFile(path.resolve(basePath, '1.txt'), { encoding: 'utf-8'}, (err, data) =>{
    cb(err, data)

    fs.readFile(path.resolve(basePath, '2.txt'), { encoding: 'utf-8'}, (err, data) =>{
        cb(err, data)
        fs.readFile(path.resolve(basePath, '3.txt'), { encoding: 'utf-8'}, (err, data) =>{
            cb(err, data)
                fs.readFile(path.resolve(basePath, '5.txt'), { encoding: 'utf-8'}, (err, data) =>{
                    cb(err, data)
                    fs.readFile(path.resolve(basePath, '6.txt'), { encoding: 'utf-8'}, (err, data) =>{
                        cb(err, data)
                    })
                })
            })
        })
    })

console.log('End')