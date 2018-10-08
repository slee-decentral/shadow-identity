
function privateKeyToBinaryString(privateKey) {
    var binString = new String();
    for (var i = 0; i < privateKey.length; i++) {
        const byte = privateKey.slice(i, i+1)[0];
        for (var j = 0; j < 8; j++) {
            const strIndex = i * 8 + j;
            if (byte & (1 << j)) {
                // process.stdout.write("1");
                binString = binString + "1";
            }
            else {
                // process.stdout.write("0");
                binString = binString + "0";
            }
        }
    }
    return binString;
}

var keythereum = require("keythereum");
var ethereum_util = require("ethereumjs-util");

var dk = keythereum.create();
console.log("original private key: ", dk.privateKey);

var new_priv_key = ethereum_util.sha256(dk.privateKey);
console.log("new private key: ", new_priv_key);
console.log("is a valid private key: ", ethereum_util.isValidPrivate(new_priv_key));

var new_pub_key = ethereum_util.privateToPublic(new_priv_key);
console.log("new public key: ", new_pub_key);

const privateKeyString = privateKeyToBinaryString(dk.privateKey);
console.log("original private key in string form length", privateKeyString.length)
console.log(privateKeyString)

