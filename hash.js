const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545');

const message = "<message>";
const messageHash = web3.utils.sha3(message);

const privateKey = "<private key>";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const signatureObject = account.sign(messageHash);

// Get the last 32 bytes of the signature (r, s)
const signatureBytes32 = '0x' + signatureObject.signature.slice(-64);
console.log(signatureBytes32);
