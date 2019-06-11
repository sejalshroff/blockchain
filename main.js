const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('47779213e24a2ac0e47a0dd78306ca705ec22ae1d53ec22470f3139ff190d6b5');
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

// console.log("Mining block 1...");
// coin.addBlock(new Block(1, "10/07/2017", { amount: 4 }));

// console.log("Mining block 2...");
// coin.addBlock(new Block(2, "12/07/2017", { amount: 10 }));

// console.log("Is blockchain valid? " , coin.isChainValid());

// coin.chain[1].data = { amount: 100 };
// coin.chain[1].hash = coin.chain[1].calculateHash();

// console.log("Is blockchain valid? " , coin.isChainValid());

// //console.log(JSON.stringify(coin, null, 4));

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

// coin.createTransaction(new Transaction('address1', 'address2', 100));
// coin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
coin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', coin.getBalanceOfAddress(myWalletAddress));

// console.log('\n Starting the miner again...');
// coin.minePendingTransactions('xaviers-address');

// console.log('\nBalance of xavier is', coin.getBalanceOfAddress('xaviers-address'));

coin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', coin.isChainValid());

