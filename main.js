var prompt  = require('prompt-sync')();
const age = prompt("Please enter your age: ");

if (age < 18) {
        console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
        console.log("You are an adult.");
} else {
        console.log("You are a senior.");
}   