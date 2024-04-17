#! /usr/bin/env node\

import inquirer from 'inquirer';

while (true) {
    

const answers:{
    sentence :string
} = await inquirer.prompt([
    {
        name : 'sentence',
        type : 'input', 
        message : 'Please Entre your sentence to count the word?'
    }
])

const word = answers.sentence.trim().split(' ');
console.log(word);
console.log(`Your Total sentence word is ${word.length}`);

}