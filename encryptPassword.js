/**
 * Created by ian oroceo on 04/29/2019.
 */
var CryptoJS = require('crypto-js');
var words = CryptoJS.enc.Utf8.parse("");
var base64 = CryptoJS.enc.Base64.stringify(words);
console.log('#0 ' + base64);

var words_1 = CryptoJS.enc.Utf8.parse("");
var base64_1 = CryptoJS.enc.Base64.stringify(words_1);
console.log('#1 ' + base64_1);

