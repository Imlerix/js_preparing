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


//// вывести все простые числа до N
let a = 100

function getAllPrimes(n) {
    let arr = []
    for (let i = 2; i <= n; i++){ arr.push(i )}
    let set = new Set(arr);

    set.forEach(el => {
        let tmp = el
        let i = 2;
        while (tmp < n) {
            tmp = el * i
            set.delete(tmp)
            i++
        }
    })

    return set
}

console.log(getAllPrimes(a))

///////


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
function debounce(func, ms) {
    let canRun = true;
    return function() {
        if (canRun) {
            canRun = false;
            func.apply(this, arguments)
            setTimeout(() => {
                canRun = true;
            }, ms)
        }
    }
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100);  // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100);  // выполняется
setTimeout( () => f(5), 1500);  // проигнорирован

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

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "biba"];

function anagramClean(arr) {
    let obj = {}
    for (let el of arr){
        let sorted = el.toLowerCase().split("").sort().join("")
        if (!obj.hasOwnProperty(sorted)) {
            obj[sorted] = [el]
        } else {
            obj[sorted].push(el)
        }

    }
    return Object.values(obj)
}

console.log(anagramClean(arr))


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


/////////////////
function sumClosure(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        // console.log(currentSum)
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

let a = +sumClosure(2)(3) ;
console.log(a)
/////// односвязный список

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    list.next && printList(list.next)
    console.log(list.value)
}

function printListCycle(list) {
    let tmp = list
    while (tmp) {
        console.log(tmp.value)
        tmp = tmp.next
    }
}
printList(list)
printListCycle(list)

//////// двусвязный список

function Node(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;

    this.addAtFront = function (val) {
        if (this.head === null) {  //If first node
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            var temp = new Node(val);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
    };

    this.addAtEnd = function (val) {
        if (this.tail === null) {  //If first node
            this.tail = new Node(val);
            this.head = this.tail;
        } else {
            var temp = new Node(val);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
    };

    this.removeAtHead = function () {
        var toReturn = null;

        if (this.head !== null) {
            toReturn = this.head.data;

            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        return toReturn;
    };

    this.removeAtTail = function () {
        var toReturn = null;

        if (this.tail !== null) {
            toReturn = this.tail.data;

            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }

        return toReturn;
    };

    this.each = function (f) {
        var curr = this.head;
        while (curr !== null) {
            f(curr);
            curr = curr.next;
        }
    };

    this.printList = function () {
        this.each(function (item) {
            console.log(item.data);
        });
    };
}


var testList = new LinkedList();

var runTests = function () {
    testList.addAtFront("Second");
    testList.addAtFront("First");
    testList.addAtEnd("Third");
    testList.addAtEnd("Fourth");

    testList.printList();

    testList.removeAtHead();
    testList.removeAtTail();

    testList.printList();

    testList.removeAtHead();
    testList.removeAtHead();

    testList.printList();

};

runTests()

////////// Delay decorator
function f(x) {
    console.log(x);
}

function delay(func, timeout) {
    return function (...args) {
        setTimeout(() => func.apply(this, args), timeout)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", 'huy'); // показывает "test" после 1000 мс
f1500("test2"); // показывает "test" после 1500 мс



/////////// THROTTLING return last execute
function f(a) {
    console.log(a)
}

function throttle(func, ms) {
    let canRun = true;
    let lastArgs;
    let lastThis;
    let timer;

    return function() {
        if (canRun) {
            func.apply(this, arguments);
            canRun = false;
        } else {
            clearTimeout(timer);
            lastArgs = arguments
            lastThis = this
        }
        timer = setTimeout(() => {
            canRun = true;
            lastArgs && func.apply(lastThis, lastArgs);

            lastArgs = null
            lastThis = null
        }, ms)
    }
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
f1000(4); // (ограничение, 1000 мс ещё нет)
f1000(5); // (ограничение, 1000 мс ещё нет)
f1000(6); // (ограничение, 1000 мс ещё нет)
f1000(7); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано



///////////  THROTTLING returns all execs with delay
function f(a) {
    console.log(a)
}

function throttle(func, ms) {
    let canRun = true;
    let argsArray = [];
    let timer;

    return function() {
        if (canRun) {
            func.apply(this, arguments);
            canRun = false;
        } else {
            clearTimeout(timer);
            argsArray.push({
                arguments,
                currThis: this
            })
        }

        let next = () => {
            timer = setTimeout(() => {
                canRun = true;
                let el = argsArray[0]
                argsArray.shift()

                if ( el) {
                    func.apply(el.currThis, el.arguments);
                    next()
                }
            }, ms)
        }
        next()
    }
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
f1000(4); // (ограничение, 1000 мс ещё нет)
f1000(5); // (ограничение, 1000 мс ещё нет)
f1000(6); // (ограничение, 1000 мс ещё нет)
f1000(7); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
////////////

function checkBrackets(stroke) {
    let array = [...stroke]
    let isCheckable = true;
    let position = null;
    let position1 = null;
    let position2 = null;

    while(isCheckable) {
        position = stroke.indexOf('()')
        position1 = stroke.indexOf('[]')
        position2 = stroke.indexOf('{}')

        function findAndCut(position) {
            array.splice(position, 2)
            stroke = array.join("")
            isCheckable = true
        }

        if (~position) {
            findAndCut(position)
            continue;
        } else {
            isCheckable = false
        }

        if (~position1) {
            findAndCut(position1)
            continue;
        } else {
            isCheckable = false
        }

        if (~position2) {
            findAndCut(position2)
        } else {
            isCheckable = false
        }
    }
    console.log(array.join(""))
    return array.length === 0
}

console.log(checkBrackets('[{(([]))}([])]'))
////
function validParentheses(parens){
    let n = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') n++;
        if (parens[i] === ')') n--;
        if (n < 0) return false;
    }

    return n === 0;
}
//////////////
function compressArray(array) {
    let arrayLcl = array.sort((a, b) => a - b)

    if (arrayLcl.length < 2) return arrayLcl.join();

    let result = "";
    let startDia = arrayLcl[0];
    result += startDia;
    for (let i = 1; i < arrayLcl.length; ++i) {
        if(arrayLcl[i] - arrayLcl[i - 1] > 1) {
            if (arrayLcl[i - 1] !== startDia) result += `-${arrayLcl[i-1]}`

            result += `,${arrayLcl[i]}`
            startDia = arrayLcl[i]
        }
        if (i === arrayLcl.length && arrayLcl[i] !== startDia) result += `-${arrayLcl[i]}`
    }
    return result
}
let arr = [3, 2, 1, 5, 6, -1, 10]
console.log(compressArray(arr))
///////////////
// Rfhhbhjdfybt
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
////////////////
Function.prototype.defer = function (ms) {
    let self = this
    return function(){
        setTimeout(() => self.apply(this, arguments), ms)
    }
}

console.log('defer0')
function f(asd) {
    console.log('defer1 ' + asd)
}
f.defer(1000)('хуй')
////////////////

/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получении данных можно использовать $.get или fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */
function get(url, count = 6) {
    count--;
    return fetch(url)
    // .then((res) => res)
        .catch((err) => {
            if (count === 0) {
                throw new Error('Заданный URL недоступен')
            } else {
                return get(url, count)
            }
        })

}

get(url)
    .then(res => console.log(res))
    .catch(err => console.error(err))

fetch()
    .catch(err => count === 0 ? throw 'asd' : get(url, count--));
/////////
function func () {
    const promise = new Promise(resolve => {
        resolve({
            toA: 2,
            toB: 1,
        });
    });

    return {
        a: promise.then(res => res.toA),
        b: promise.then(res => res.toB)
    }
}
//////////////
// Дана строка (возможно, пустая), состоящая из букв A-Z:
// // AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// // Нужно написать функцию RLE, которая на выходе даст строку вида:
// //     A4B3C2XYZD4E3F3A6B28
// // И сгенерирует ошибку, если на вход пришла невалидная строка.
// //     Пояснения:
// // Если символ встречается 1 раз, он остается без изменений;
// // Если символ повторяется более 1 раза, к нему добавляется количество повторений.

function RLE(str) {
    if (typeof str !== "string") return new Error('invalid')

    let result = '';
    let count = 1;
    let char;
    let i = 0;

    for(i; i < str.length; i++) {
        count = 1

        while(str[i] === char) {
            count++;
            i++;
        }
        char = str[i]

        result += `${count !== 1 ? count : ''}${i !== str.length ? char : ''}`
    }

    return result
}

console.log(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB') === 'A4B3C2XYZD4E3F3A6B28')

///// СВОЙ Promise.all !!!!!!!!!!! ура
function parallel(funcArray, doneAll) {
    let results = []
    const outerPromise = (funcInPromise) => {
        return new Promise(resolve => {
            funcInPromise(done(resolve))
        })
    }
    const done = (resolve) => {
        return (data) => {
            results.push(data)
            resolve()
        }
    }
    const promise = funcArray.reduce((prevPromise, func) => {
        return prevPromise.then(() => outerPromise(func))
    }, Promise.resolve() );

    promise.then(() => doneAll(results))
}

var a = function(done) {
    setTimeout(function() {
        done('result a');
    }, 300);
};

var b = function(done) {
    setTimeout(function() {
        done('result b');
    }, 200);
};

parallel([a,b], function(results) {
    console.log(results); // ['result a', 'result b']
});
//////////////////
// палиндром
function palindrom(str) {
    let regexp = /\w/gi;
    const regexped = str.match(regexp).join("").toLocaleLowerCase();

    for (let i = 0; i < regexped.length; i++){
        const last = regexped[regexped.length - 1 - i]
        if(i === last) return true;
        if (regexped[i] !== last) return false;
    }
    return true
}
/////////////
/*
  Реализовать функцию memoize, которая принимает в качестве аргумента функцию
  и возвращает мемоизированную функцию-обертку. Эта функция-обертка внутри вызывает
  переданную в memoize функцию, но при этом кэширует результат и при последующих вызовах
  с теми же аргументами возвращает результат из кэша.
  Вторым необязательным аргументом функция memoize принимает таймаут в миллисекундах,
  в течение которого данные хранятся в кэше.
/

// Пример:
// функция, которая реализует какие-то сложные вычисления
const calculateSometh = () => { / ...some calculations... */ }
// таймаут - одна секунда
const cacheTimeout = 1000;

const memoizedCalcualteSometh = memoize(calculateSometh, cacheTimeout);

memoizedCalcualteSometh(1); // вызывает внутри calculateSometh(1) и возвращает результат
memoizedCalcualteSometh(1); // не вызывает calculateSometh, а возвращает сохраненное значение из кэша
memoizedCalcualteSometh(2); // вызывает внутри calculateSometh(2), т.к. аргумент изменился
memoizedCalcualteSometh(1); // не вызывает calculateSometh, по-прежнему из кэша от первого вызова
// опять вызывает calculateSometh(1), т.к. с момента предыдущего вызова прошло больше одной секунды
setTimeout(() => memoizedCalcualteSometh(1), 2000)

function memoize(func, ms){
    let cache = {};

    return function (...args) {
        const argsStr = args.toString()
        if (cache[argsStr]) return cache[argsStr]

        cache[argsStr] = func.apply(this, args)
        if (ms){
            setTimeout(() => {
                delete cache[argsStr]
            }, ms)
        }

    }
}
///////////////
var moveZeros = function (arr) {
    let lastPuttedZero = arr.length - 1;
    if(lastPuttedZero < 0) return arr;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0 && lastPuttedZero > i){
            arr.splice(i, 1)
            arr.push(0)
            lastPuttedZero--;
            i--;
        }
    }

    return arr;
}

moveZeros(["a",0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])
//////////////
