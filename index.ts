#!/usr/bin/env node

// This line is called a shebang, it tells the OSto run it with nodejs

// Import the 'inquirer' module, which is a command line interface for node .js

import  inquirer from "inquirer"

// declare a constant 'answer' Nd assign it to the result of inquirer.prompt function

const answers:{
    sentence : string
}= await inquirer.prompt([
        {
        name :"sentence",
        type: "input",
        message:"Enter your sentence to count the word:"    
    
}
    ])
    
const words = answers.sentence.trim().split(" ")

//const words = answers.sentence.split(" ")

//const words = answers.sentence.trim()



//print the array of words to the console

console.log(words)

// print the word count of the sentence to the console

console.log (`your sentence word count is ${words.length}`);