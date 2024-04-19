#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function restart() {
    
    console.log(chalk.magenta.bold(`<---------------------- Welcome To My ${chalk.yellow.bold('Word Counter')} app! ----------------------->\n\n`));
const answer = await inquirer.prompt({
      name: "sentence",
      type: "input",
      message: chalk.greenBright("Enter your sentence to count the words: "),
});
    
let words: string[] = answer.sentence.trim().split(" ");
    
if(answer.sentence === ''){
    console.log('\n\n');
    
    console.log(chalk.redBright.bold('ERROR! U need to write Some thing to count'));
    console.log(chalk.greenBright('----------------------------------------------------'));
    restart()
    
    
}else{
console.log(`Total words in sntence: ${words.length}`);
let exit = await inquirer.prompt([
    {
      name: "Exit",
      type: "confirm",
      message: chalk.greenBright("do you want to use app again")
    }
    
  ])
  if(exit.Exit){
    console.log();
    restart()
  }else{
    console.log();
    
    console.log(chalk.magenta.bold(`<---------------------- Thanks For Usnig My ${chalk.yellow.bold('Word Counter')} app! ----------------------->\n`));
    console.log(chalk.green.bold(`<~~~~~~~~~~~~~~~~~~~~~~~~~~Credit: ${chalk.yellow.bold('Muhammad Ahmed Noorani')} ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>\n`));
      
  }
}
}
restart()

