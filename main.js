

let as;
function f() {
    return new Promise(resolve => {
        resolve('await')
    })
}

async function f1() {
    setTimeout(() => {
        console.log('timeout')
    });

    as = await f()

    console.log(as)
}

f1()

console.log('end')
