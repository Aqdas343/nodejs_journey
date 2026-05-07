// console.log("server.js is running...");

// function add(a, b) {
//     return a + b;
// }

// var add = function(a, b) {
//     return a + b;
// }

// var add = (a, b) => {
//     return a + b;
// }   

// var add = (a, b) => a + b;

// var result = add(5, 20);
// console.log("The result of adding 5 and 20 is: " + result);

// (function() {
//    console.log("asad")
// })();

// function callback() {
//     console.log("This is a callback function.");
// }   

// const add = function(a, b ,callback) {
//     const result = a + b;
//     console.log("result: " + result);
//     callback();
// };

// add(5, 10, callback);


// const add = function(a, b ,callback) {
//     const result = a + b;
//     console.log("result: " + result);
//     callback();
// };


// add(5, 10, function() {
//     console.log("Add complete.");
// });

// add(20, 30, () => {
//     console.log("Add complete with arrow function.");
// });

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', "Hello" + user.username + '!\n',  () =>{
//     console.log("File is created");
// });

const notes = require('./notes.js');
var _ = require('lodash');
var age = notes.age;
var result = notes.addnumber(age+10 , 5);
console.log("Age: " + age , result);


var data = ["person", "person", 1,2,2,1,"name","age","25"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString("person"));
