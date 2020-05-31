const items = ['a', 'b', 'c', 'd']

;(async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemMappedPromisse = items.map(promiseFunction)
    const itemMapped = await Promise.all(itemMappedPromisse)
    console.log(await itemMapped)
})()