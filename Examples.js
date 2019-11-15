function IsPrime(num) {

    let root = Math.round(Math.sqrt(num))

    for (let i = 2; i <= root; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
// const isPrime = n =>
//     ![...Array(n).keys()]
//         .slice(2)
//         .map(i => !(n%i))
//         .includes(true)
//     &&
//     ![0,1].includes(n)
////


function Factorial(n) {
    let cache = {}
    return (n) => {
        if (cache[n]){
            console.log('Fetching from cache');
            return cache[n]
        }
        else {
            console.log('Calculating result');
            let result = !!n && 1;
            if (result){
                for (let i = 1; i <= n; i++){
                    result *= i;
                    cache[i] = result;
                }
                cache[n] = result;
            }
            return n > 0 && result;
        }
    }
}
let memFact = Factorial();
console.log( memFact(0) ) // calc
console.log( memFact(4) ) // fetch
// console.log( memFact(0) ) // false
// console.log( memFact() ) // false
// console.log( memFact(1) ) //1


let memFib = ((n) => {
    let cache = {}
    cache[0] = 0;
    cache[1] = 1;
    return (n) => {
        if (cache[n]){
            console.log('Fetching from cache');
            return cache[n]
        }
        else {
            console.log('Calculating result');
            let result = 0;
            if (n >= 0){
                for (let i = 2; i <= n; i++){
                    result = cache[i-2] + cache[i-1]
                    cache[i] = result;
                }
                cache[n] = result;
            }
            return n >= 0 && result;
        }
    }
})()
// let memFib = fib();
console.log( memFib() ) // false
console.log( memFib(0) ) // 0
console.log( memFib(-1) ) // false
///////

function isSorted(arr) {
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > arr[i+1]) return false
        }
    }
    return true;
}
///////
function customFilter(arr, callback){
    let result = []
    for (let i = 0; i < arr.length; i++ ){
        if (callback(arr[i], i, arr)) result.push(arr[i])
    }
    return result
}
Array.prototype.filter =  function (fun) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
        if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
};
////////


function duplicateCount(text){
    text = text.toLowerCase();
    let map = new Map();
    let count = 0;

    text.split("").forEach(el => {
        if (!map.has(el)) map.set(el, 1)
        else map.set(el, map.get(el) + 1)
    })
    for (let value of map.values()) {
        if (value > 1) count++;
    }
    return count;
}


///////////

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// демонстрация результатов преобразований:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

///////////////
//DEBOUNCING
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var myEfficientFn = debounce(function() {
    // All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);
//////////////////////


let arr = [2, -1, 2, 3, -9]

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // для каждого элемента массива
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }

    return maxSum;
}
//////////////////

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function anagramClean(arr) {
    let obj = {}
    for (let el of arr){
        let sorted = el.toLowerCase().split("").sort().join("")
        obj[sorted] = el
    }
    return Object
}


///////////////// Генерация скобочных последовательностей
let k = 6
let init = []
let cnt = 0
let ind = 0

function f(cnt, ind, k, init) {
    console.warn(cnt, ind, k, init)
    if (cnt <= k - ind - 2) {
        init[ind] = '('
        f(cnt + 1, ind + 1, k, init)
    }
    if (cnt > 0){
        init[ind] = ')'
        f(cnt - 1, ind + 1, k, init)
    }
    if (ind === k && cnt == 0) console.log(init)
}


f(cnt, ind, k, init)
