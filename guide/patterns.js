const X = require("./hello");
console.log(X().stuff());

console.log("Looping and Recursion")
console.log("-----------------------")

for (let i = 1; i <=5; i+=1)
    console.log(i)

// Recursion
console.log("Recursion")
console.log("-----------------------")
function sum(n) {
    if (n === 0) return 0;
    return n + sum(n-1)
}
console.log(sum(5))

console.log("Traversing Array    with Recursion")
console.log("-----------------------")
function foreach(arr, fn) {
    if (arr[0] === undefined) return
    fn(arr[0])
    foreach(arr.slice(1), fn)
}
foreach([1,2,3,4,5,6], x => console.log(x))

// Functions and lambdas
console.log("Functions and Lambdas")
console.log("-----------------------")

function plusOne(x) { return x + 1 }
const plusOneLambda = x => x + 1

console.log(plusOne(2))
console.log(plusOneLambda(2))

// Arrays
console.log("Arrays and FP")
console.log("-----------------------")
console.log([1,2,3,4,5,6,7,8].map(x => x*2))
console.log([1,2,3,4,5,6,7,8].filter(x => x%2===0))
console.log([1,2,3,4,5].reduce((acc, cur) => cur + acc));
[1,2,3,4,5].forEach(x => console.log(x));

// Objects
console.log("Maps")
console.log("-----------------------")
const highscore = {a: 1, b: 2}
console.log(Object.keys(highscore))
console.log(Object.values(highscore))
console.log(Object.entries(highscore))

console.log("Spread operator")
console.log("-----------------------")

function x(name, age) {
    console.log(`${name}: ${age}`)
}

x(...["Name", "Age"])

const records = [{name: "A", age: 23}, {name: "B", age: 24}]
const obj = {...records}
const arr = [...records]
console.log(obj)
console.log(arr)


console.log("Modification without mutation")
console.log("------------------------------")

const attributes = {
    "Duski": {
        nickname: "Grope Guru",
        age: 1
    },
    "Jess": {
        nickname: "Munted Bandit",
        age: 69
    }
}

for (var k in attributes) {
    attributes[k].age = attributes[k].age + 100
}
const z = Object.entries(attributes).map(([name, {nickname, age}]) => ([name, {nickname, age: age + 100}]))
    .reduce((full, [name, entryValue]) => ({...full, [name]: entryValue}), {})

console.log(z)

// Scratchpad
console.log("abcdefghij".slice(-3))
const t = function() {}

function reduce(arr, fn, initial) {
    return myReduce(arr, fn, initial)
}
function myReduce(arr, fn, currentAccumulator) {
    if (arr[0] === undefined) return currentAccumulator
    return myReduce(arr.slice(1), fn, fn(currentAccumulator, arr[0]))
}

console.log(reduce([1, 2, 3, 4, 7, 8], (acc, current) => acc + current, 0))
