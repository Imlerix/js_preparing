'use strict'
// Hint for _proto_ and prototype
let a = {}
a.toString === a._proto_.toString === Object.prototype.toString

let a = 'a';
a.b = 1;
console.log(a.b) // undefined
let func = () => {};
func.a = 1;
console.log(func.a) // 1
let a = 'a';
String(a).b = 1; // readonly, объект-обертка удаляется после использования
console.log(a.b) // undefined

const o = {
    '0': 'zero',
    '1': 'one'
};
[].slice.call(o); // []
const oo = {
    '0': 'zero',
    '1': 'one',
    length: 5
};
[].slice.call(oo); // [ 'zero', 'one', <3 empty items> ];
