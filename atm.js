const prompt = require('prompt-sync')();

function getBalance(account){
    let balanceBuffer = account.balance;
    return balanceBuffer;
}

function withdraw(account, userInput){
    let balance = account.balance;
    let balanceBuffer = balance - userInput;
    return balanceBuffer;
}

function deposit(){
    let balance = account.balance;
    let balanceBuffer = balance + userInput;
    return balanceBuffer;
}

function validatePin(account){
    let pinBuffer = prompt("Please enter your PIN: ")();
    switch(account){
        case(pinBuffer == account.pin):
            let pinVerified = true;
            return pinVerified;
        default:
            console.log("Incorrect PIN, please try again");
            validatePin(account);
    }}

const account = require('account.js');

module.exports.getBalance = getBalance;
module.exports.validatePin = validatePin;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;