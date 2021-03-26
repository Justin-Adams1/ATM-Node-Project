"use strict";

const prompt = require('prompt-sync')();
const account = require('./account');
const atm = require('./atm');

let pinCheck = atm.validatePin(account.mainAccount);
main(account.mainAccount);

function main(){
    while(pinCheck = true){

    console.log("Balance: " + account.mainAccount.balance);

    let userInput = parseInt(prompt("Please enter what you would like to do: 1. Withdraw 2. Deposit 3. Exit   "));

    do{
        switch(userInput){
            case 1:
                userInput = parseInt(prompt("Please enter in how much you want to withdraw: "))
                atm.withdraw(userInput);
                main(account.mainAccount);
                break;

            case 2:
                userInput = parseInt(prompt("Please enter in how much you want to deposit: "))
                atm.deposit(userInput);
                main(account.mainAccount);
                break;
        
            case 3:
                pinCheck = false;
                break;
        }
    }while(userInput != 1 || userInput!= 2 || userInput != 3);

    break;
    }
}
