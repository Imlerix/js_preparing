// 1
// Напишите код, который сделает из массива объект
var arr = [
    {name: 'width', value: 10}, 
    {name: 'height', value: 20}
]
// На выходе объект
// -> {width: 10, height: 20}
function getObj(array) {
// ???
}
console.log(getObj(arr))

// Ответ
// function getObj(arr) {
//     var obj = {};
    
//     arr.forEach(function(item){
//         obj[item.name] = item.value;
//     });
    
//     return obj;
// }

// 2
// Что выведется в результате?

for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// Исправить чтобы выводилось что надо

// Ответ
// [10, 10, ...]
// Исправление
for (var i = 0; i < 10; i++) { // замыкание
	(function (i) {
		setTimeout(function () {
			console.log(i);
		}, 100);
	})(i)
}
for (var i = 0; i < 10; i++) { // bind
	setTimeout(function (i) {
		console.log(i);
	}.bind(this, i), 100);
}
for (var i = 0; i < 10; i++) { // setTimeout 3 param
	setTimeout(function (i) {
		console.log(i);
	}, 100, i);
}
for (let i = 0; i < 10; i++) { // let
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// 3
// Что выведется в результате?

var a = 5;
var b = '3';
console.log(a - b); // ?
console.log(a + b); // ?
console.log(a * b); // ?

b = 1;
console.log(a + b); // ?

var objA = {z: '123'};
var objB = objA;
console.log(objA); // ?

objB.z = 'abc';
console.log(objA); // ?
console.log(typeof objA); // ?

var emptyA = null;
console.log(emptyA + 5); // ?
console.log(typeof emptyA); // ?

var arrayA = [1, 2, 3];
arrayA.forEach(element => element * 2);
console.log(arrayA); // ?
console.log(typeof arrayA); // ?

var arrayB = arrayA;
arrayB.splice(0, 2);
console.log(arrayA); // ?

var c = 'qwe';
c.valueA = 101;
var funcA = () => {};
funcA.valueB = 202;
console.log(c.value) // ?
console.log(funcA.valueB) // ?
console.log(typeof funcA) // ?

// Ответ:
// 2
// 53
// 15
// 6
// { z: '123' }
// { z: 'abc' }
// object
// 5
// object
// [ 1, 2, 3 ]
// object
// [ 3 ]
// undefined
// 202
// function

// 4
// Что будет выведено в консоль?

console.log("1");
 
new Promise((resolve, reject) => {
    console.log('2')
    reject(8);
}).catch(error => console.log(error));
 
const promise1 = Promise.resolve().then(() => {
    console.log("3");
    const timer2 = setTimeout(() => {
        console.log("4");
    }, 0);
});
 
const timer1 = setTimeout(() => {
    console.log("5");
    const promise2 = Promise.resolve().then(() => {
        console.log("6");
    });
}, 0);
 
console.log("7");
 
// Ответ
// 1 2 7 8 3 5 6 4

