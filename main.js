var keythereum = require("keythereum");
var ethereum_util = require("ethereumjs-util");

var dk = keythereum.create();
console.log("original private key: ", dk.privateKey);

var new_priv_key = ethereum_util.sha256(dk.privateKey);
console.log("new private key: ", new_priv_key);

console.log("is a valid private key: ", ethereum_util.isValidPrivate(new_priv_key));

var new_pub_key = ethereum_util.privateToPublic(new_priv_key);
console.log("new public key: ", new_pub_key);