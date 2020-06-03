const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})

(async function() {
    console.log('Begin')

    const resultado = await promise 
    console.log(text)

    console.log(await promise)

    try {
        const res = await promise
        setTimeout(() => console.log(res), 5000)
    } catch (rej) {
        console.error(rej)
    }
})()

