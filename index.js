#! /usr/bin/env node

import inquirer from 'inquirer';
while (true) {
    const answers = await inquirer.prompt([
        {
            name: 'sentence',
            type: 'input',
            message: 'Please Entre your sentence to count the word?'
        }
    ]);
    const word = answers.sentence.trim().split(' ');
    console.log(word);
    console.log(`Your Total word is ${word.length}`);
}
