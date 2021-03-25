const prompt = require('prompt-sync')();
const wallet = require('/node wallet.js')();

let mainAccount = {balance:1000, pin:2222};

module.exports.mainAccount = mainAccount;