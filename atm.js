const prompt = require('prompt-sync')();

const account = require('./account');

function getBalance(){
    return account.balance;
}

function withdraw(userInput){
    account.mainAccount.balance = account.mainAccount.balance - userInput;
}

function deposit(userInput){
    account.mainAccount.balance = account.mainAccount.balance + userInput;
}

function validatePin(){
    let pinBuffer = parseInt(prompt("Please enter your PIN: "));
    switch(pinBuffer){
        case(account.mainAccount.pin === pinBuffer):
            let pinVerified = true;
            return pinVerified;
        
        case(account.mainAccount.pin != pinBuffer):
            console.log("Incorrect PIN, please try again");
            validatePin(account);
    }}


module.exports.getBalance = getBalance;
module.exports.validatePin = validatePin;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;