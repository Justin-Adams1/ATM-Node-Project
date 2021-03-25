const prompt = require('prompt-sync')();
const account = require('./node account.js');
const atm = require('./node atm.js');
const wallet = require('./node wallet.js');

let pinCheck = atm.validatePin(account);

while(pinCheck = true){
let balanceBuffer = account.balance;

console.log(account.balance);

let userInput = prompt("Please enter what you would like to do: \n1. Withdraw\n2. Deposit\n3. Exit")

do{
    switch(userInput){
        case "1":
            console.log(account.balance);
            userInput = prompt("Please enter in how much you want to withdraw: ")();
            balanceBuffer = atm.withdraw(accountBuffer, userInput);
            accountBuffer.balance = balanceBuffer;
            console.log(accountBuffer.balance);

        case "2":
            console.log(account.balance);
            userInput = prompt("Please enter in how much you want to deposit: ")();
            balanceBuffer = atm.deposit(accountBuffer, userInput);
            accountBuffer.balance = balanceBuffer;
            console.log(accountBuffer.balance);
    
        case "3":
            pinCheck = false;
            break;
    }
}while(userInput != 1 || userInput!= 2 || userInput != 3);

module.exports.accountBuffer.balance = accountBuffer.balance;

break;
}