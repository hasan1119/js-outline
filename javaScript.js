/* 
variables:
var x = 10;
let y = 20;
const z = 30;

/* 
Operators:
    1. Arithmetic operators (+, - , * , / , -- , ++, % , ** )
    2. Assignment Operators ( = , += , -=, *=, /=,  )
    3. Logical operators ( && , || , !)
    4. Comparison operators ( == , === , < , > , <=, >=, !=, !==)


*/

// var x = 10;
// var z = 5;
// x += z;

// console.log(x);

/* 
Data Types:

1. Primitive data type.
    a. Number
    b. String // '' , "", ``
    c. Boolean // 
    d. undefined
    e. null
    f. NaN


2. Object
    a. Array
    b. Object
    c. Function

*/
/* 
var myArray = ["Hasan",100,true]


 */

// const person = {
//     name: 'Jone Doe',
//     age: 50,
//     isMarried: true,
//     hisWork: function () {
//         console.log('coding!');
//     }
// }

// console.log(person.hisWork());
/* 
console.log(Math.abs(-20));
var a = 10.23234;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));
console.log(Math.max(2, 3, 5, 1, 8));
console.log(Math.min(2, 3, 5, 1, 8, -67));
console.log(Math.pow(10, 2));
console.log(Math.sqrt(81));
console.log(Math.floor(Math.random() * 100) + 1); */

// const date = new Date()
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getTime())
// console.log(date.toLocaleDateString())




// function hello() {
//     // console.log('Function has been called');
//     return 'Greeting!'
// }

// // const hello = () => {
// //     console.log('Function has been called');
// // }

// console.log(hello());

// function calculator(a, b) {
//     return a + b;
// }


// var result = calculator(10, 20)

// console.log(result);


// function celsiusToFahrenheit(celsius = 0) {
//     const fahrenheitTemp = celsius * 9 / 5 + 32; //(0°C × 9/5) + 32 = 32°F
//     return fahrenheitTemp;

// }

// console.log(celsiusToFahrenheit(50));

// console.log(celsiusToFahrenheit(20));



// conditional

// 1. if condition 
// 2. else condition
// 3. else if condition

// 4. switch statement.

var a = 100;
var b = 20;

// if (a < b) {
//     console.log("A is smaller than B");
// } else {
//     console.log("B is smaller than A");
// }


// var num = 0;

// if (num === 0) {
//     console.log("This is zero");
// } else if (num % 2 === 0) {
//     console.log('This is even number');
// } else {
//     console.log('This is odd number');
// }

// console.log(10 === '10');
// console.log(100 + 'a');
// console.log(5 * '2');
// console.log(4 / "2");
// console.log(100 - "dfdf");

// var zero = 0;

// var month = 3;

// switch (month) {
//     case 0:
//         console.log("January")
//         break;
//     case 1:
//         console.log("Feb")
//         break;
//     case 2:
//     case 3:
//         console.log("April")
//         break;

//     default:
//         console.log("Invalid number");
// }


// var marks = 50


// 0-32 = F
// 33-39 = D
// 40-49 = C 
// 50-59 = B
// 60-69 = A-
// 70-79 = A
// 80 - 100 = A+




// function GradeCalculator(marks) {

//    if (marks < 0 || marks > 100) {

//         console.log("invalid input");
//     } else if (marks >= 80) {
//         console.log("you got A+");
//     } else if (marks >= 70) {
//         console.log("you got A");
//     } else if (marks >= 60) {
//         console.log("you got A-");
//     } else if (marks >= 50) {
//         console.log("you got B");
//     } else if (marks >= 40) {
//         console.log("you got C");
//     } else if (marks >= 33) {
//         console.log("you got D");
//     } else {
//         console.log("you got F");
//     }

// }

// GradeCalculator(59.55)

// loops

/* 
1. for 
2. for of 
3. for in
4. while
5. do while
*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }


// var i = 0;
// do {
//     console.log(i);
//     i++
// } while (i == 10)


/* 
0
12
123
1234 */




// var arr = [1, 2, 3, 4, 5, 4]

// for (let element of arr) {

//     console.log(element);
// }


// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum);


// for (var i = 1; i < 10; i++) {

//     var line = '0'
//     for (var n = 1; n < i; n++) {
//         line += n;
//     }
//     console.log(line);
// }


// 01234
// 01234
// 01234
// 01234



// var line = 10;

// for (var i = 0; i < line; i++) {

//     var lineData = ''
//     for (var j = 0; j < line; j++) {
//         lineData += ' ' + j

//     }
//     console.log(lineData);

// }


// var str = "this is a string"
// var str1 = 'this is a string'
// var str3 = `this is a      string`
// var str4 = String("This is a string")

// console.log(str4);
// var title = "Md. "
// var fName = "Abrar "
// var lName = "Husam"

// var fullName = fName + ' ' + lName;
// var fullName = `${fName} ${5 + 5}`;
// var fullName = `${fName} ${5 + 5}`;
// var fullName = fName.concat(lName)
// var fullName = title.concat(fName).concat(lName)
// console.log(fullName);



// str[1] = "b"; // can't be changed
// console.log(str[1]);

// console.log(str.charAt(6));
// console.log(str.charCodeAt(0))
// console.log(str.length);

// var modifiedStr = str.toLowerCase()
// var modifiedStr = str.toUpperCase()
// var strs = new String("dfdf")
// console.log(modifiedStr)
// console.log();



// var str = new String('Hello world!');
// console.log(str.toLocaleLowerCase());
// console.log(str);
// console.log(str.toString())
// var num = 10;
// console.log(num.toString(2));
// console.log(String(num))



// console.log(str.slice(2, -3));
// str = 'good'
// console.log(str.slice(2));
// console.log(str.substr(2, 5));
// console.log(str.substring(2, 5));
// console.log(str.endsWith("ld!"));
// console.log(str.endsWith("lo", 5));
// console.log(str.startsWith("wo", 6));
// console.log(str.includes("world"));
// console.log(str.includes("world", 5));
// var str = "error Lorem ipsum dolor sit amet ipconsectetur adipisicing elit. ip In aliquid exercitationem illo laboriosam quis animi natus enim incidunt vel eligendi! Magni error, libero dicta ErRor fuga recusandae error ipsum itaque fugiat quos nam?"

// console.log(str.indexOf('ip'));
// console.log(str.indexOf('ip', 28));
// console.log(str.lastIndexOf("ipsum"));
// console.log(str.lastIndexOf("ipsum", 30));
// console.log(str.match(reg));

// var reg = /error/gi;
// console.log(str.matchAll(reg));

// var str = 'hello world! . hello world'

// for (let i of str) {
//     console.log(i);
// }

// console.log(str.split('hello'));
// console.log(str.search(/Wo/ig));



// var str = '            abc@gmail.com                   '

// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// console.log(str.padStart(8, '*'));
// console.log(str.padEnd(8, '*'));

// console.log(str.repeat(3, str));
// console.log(str);

// console.log(str);

// console.log(str.replace("world", "Bangladesh"));
// // console.log(str.replace(/World/i, "Bangladesh"));
// console.log(str.replace(/world/g, "Bangladesh"));
// console.log(str.replace(/World/ig, "Bangladesh"));
// console.log(str);





// Number

// var num = "10.834351";
// var num = "10.834351";
// var num1 = new Number('100')
// console.log(num1.toString());
// console.log(num1);
// console.log(num.toExponential());
// console.log(num.toFixed(2));

// console.log(Number.parseInt(num));
// console.log(Number.parseInt(num));

// var num = 2 / 0;
// var num = 50 / 'wer';
// console.log(Number.isInteger(num));
// console.log(Number.isNaN(num));

// var bol = false;
// var bol1 = Boolean(0.124) // false, 0, '' , undefined , null, NaN 

// console.log(bol1);



// Array


// var arr2 = new Array(5)
// console.log(arr2.length);
// console.log(arr[1]);

// console.log(arr2[2]);
// arr[2] = "hello"
// console.log(arr[2]);
// console.log(arr);


// const arr = [1, 3, 6, "three", 6, "Lst"]

// arr.push("push", "a", "b")
// arr.unshift("unshift")
// arr.pop()
// arr.shift()

// arr.splice(4)
// arr.splice(3, 2)
// arr.splice(3, 1, "new element", "new2")
// arr.splice(2, 0, "new element", "new2")
// var returnedArray = arr.slice(1, 3)

// console.log(returnedArray);


// console.log(returnedArray);
// console.log()

// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);

// console.log(typeof );

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// const cars = ["Saab", "Volvo", "BMW"];
// const num1 = [1, 2, 3, 4, 5]

// console.log(cars.toString());
// console.log(cars.join("*"));

// var newArray = fruits.concat(cars, num1, "Extra", "extra extra", 1)
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Apple", 2));
// console.log(fruits.indexOf("Apple", -2));


// const arr = [1, 3, 5, 4, 6, 2]

// let arr = [{
//         name: "Mehedi Hasan",
//         age: 25
//     },
//     {
//         name: "Hasan",
//         age: 21
//     },
//     {
//         name: "Roni",
//         age: 26
//     },
//     {
//         name: "Kafi",
//         age: 30
//     },
// ]

// console.log(arr.findIndex(function (e) {
//     return e > 5
// }));

// console.log(arr.findIndex((e, i, arr)));


// console.log(arr.findIndex(function (e) {
//     return e.age == 30
// }));

// console.log(arr.find(function (e) {
//     return e.age == 30
// }));



// console.log(arr1.find(condition));


// function condition(e) {
//     return e > 5;
// }

// console.log(parseFloat("123.343"));


// const arr1 = [1, 3, 5, 4, 6, 2, 8, 9, 6, 8]

// arr1.forEach((e, i, arr) => {
//     console.log(e, i, arr);
// })


// var newArray = arr1.map((e) => {
//     return arr
// })


// console.log(newArray);



// console.log(abc());


// const arr1 = [1, 3, 5, 2, 9, ]

// var result = arr1.some((e, i, arr) => {
//     return e % 2 === 0
// })

// var result = arr1.every((e) => {
//     return e % 2 === 0
// })

// console.log(result);



// function abc(p) {
//     return a + b;
// }


// abc(1, 0 , [])

// console.log(arr2);
// arr2.copyWithin(2, 0, 2)

// console.log(arr2);

// var arr2 = ["adfdf", "zfdf", 1, 'qdfdf', "Z", "b", "c", -2344, 23434, 'd', 'e']
// 0-9
// a-z
// arr2.sort()
// arr2.reverse()

// console.log(arr2);arr2.sort()
// arr2.reverse()

// console.log(arr2);

// console.log("badfdfdf".charCodeAt(0));
// console.log("Aadfdfdf".charCodeAt(0));

// var arr4 = [100, 20, 1453, 45];

// arr4.sort((a, b) => a - b)

// console.log(arr4);


// var arr6 = [2, 3, 5, 6]

// var shipping = 0;
// var result = arr6.reduce(add, shipping)

// function add(total, current) {
//     return total + current;
// }

// console.log(result);


// var arr6 = [2, 5];
// var shipping = 100;
// var result = arr6.reduce((a, b, i, arr) => {


// }, shipping);

// console.log(result);


// var arr677 = [1, 2]

// arr677[3] = "20"

// console.log(arr677);


// var myArr = Array(5)
// myArr.fill("a", 2, 3)
// myArr.fill("a")

// console.log(m.entries(myArr));




// var myArr = ["banana", "mango", "kdfjk"]

// [0,1,2,3,]
// var keyss = myArr.keys()

// for (let a of keyss) {
//     console.log(a);
// }


// var myArr2 = myArr;
// var myArr2 = Array.from(myArr)

// myArr2[0] = "changed"

// console.log(myArr);
// console.log(myArr2);





// var newArray = myArr.entries() // [[0,"banana"], [1, "mango"]]

// console.log(Array.from(myArr));


// for (let e of newArray) {
//     console.log(e);
// }


// var obj = {
//     name : 'JavaScript',

// }

// var person = {
//     name: 'Hero Alom',
//     age: 28,
//     isMarried: true,
//     activities: {
//         banglaGan: 4,
//         EnglishGan: 5
//     },
//     movies: ["ami neta hobo", "mar chokka", "sahoshi alom"],
//     sing: function () {
//         console.log("Alom is singing!");
//     }
// }

// person.totalMovies = 10;
// person.age = 30;

// delete person.isMarried;




// console.log(person);




// var obj1 = new Object()
// console.log(obj1);
// console.log(person?.activitie?.EnglishGan);
// person.sing()


// var obj = {
//     person: {
//         name: name,
//     }
// }


// var name = "Mehedi";

// var person = {
//     name: "hasan",
//     print: function () {
//         console.log(this.name);
//     }
// }

// var props = "name"
// console.log(person.props);
// console.log(person[props]);
// console.log(props in person);



// var obj = {
//     a: 10,
//     b: 40,
// }

// var obj1 = Object.assign({}, obj);

// obj1.a = "ten";

// console.log(obj);
// console.log(obj1);



// console.log(JSON.stringify(obj) === JSON.stringify(obj1));
// console.log(obj);



// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));




// for (let prop in obj) {
//     console.log(prop);
//     console.log(obj[prop]);
// }

// function myFunc() {
//     console.log("Function has been called");
// }

// myFunc()


// function fullName(fName, lName) {
//     console.log(fName + " " + lName);
// }

// fullName("Joy", "Sorkar")
// fullName("Mehedi", "Hasan")

// function add(a, b) {
//     // console.log(a + b);
//     var arr = arguments
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);

// }

// add(2, 4, 4, 5, 3, 5, 6, 7, 5, 6, 6)


// function add(a, b) {
//     var result = a + b;
//     return result;

// }

// var r = add(2, 3)
// console.log(r);
// var x = 10;

// function add(a, b) {
//     var sum = a + b;

//     function sqr() {
//         var result = sum * sum;
//         return result;

//     }
//     return sqr();

// }

// sqr()
// console.log(add(2, 5));

// function CBImplementation(a, b, cb) {
//     var c = a - b;
//     var d = a + b;

//     var result = cb(c, d);
//     return result;

// }

// console.log(CBImplementation(5, 2, function (c, d) {
//     return c + d;
// }));

// console.log(CBImplementation(5, 2, function (c, d) {
//     return c - d;
// }));
// console.log(CBImplementation(5, 2, function (c, d) {
//     return c * d;
// }));



// arr.forEach(function (val, i, arr) {
//     console.log(val);
// })

// function ourForEach(arr, cb) {

//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }

// }
// var sum = 0;
// ourForEach(arr, function (val, i, arr) {
//     sum += val;
// })
// console.log(sum);

// function MyFind(arr, cb) {
//     for (var e of arr) {
//         var condition = cb(e);
//         if (condition) {
//             return e;
//         }
//     }
// }


// console.log(MyFind(arr, function (e) {
//     return e > 4
// }));

// var arr = [1, 2, 3, 4, 5]

// function myFilter(arr, cb) {
//     var newArray = []
//     for (let i = 0; i < arr.length; i++) {

//         if (cb(arr[i], i, arr)) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }




// console.log(myFilter(arr, function (val) {
//     return val % 2 === 0
// }));