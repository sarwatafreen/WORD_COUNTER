#!/usr/bin/env node
"use strict";
// This line is called a shebang, it tells the OSto run it with nodejs
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'inquirer' module, which is a command line interface for node .js
var inquirer_1 = require("inquirer");
// declare a constant 'answer' Nd assign it to the result of inquirer.prompt function
var answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
var words = answers.sentence.trim().split(" ");
//const words = answers.sentence.split(" ")
//const words = answers.sentence.trim()
//print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log("your sentence word count is ".concat(words.length));
