/**
 * Created by ian oroceo on 04/29/2019.
 */
var CryptoJS = require('crypto-js');
var words = CryptoJS.enc.Utf8.parse('');
var base64 = CryptoJS.enc.Base64.stringify(words);
console.log('#0 ' + base64);

var words1 = CryptoJS.enc.Utf8.parse('');
var base641 = CryptoJS.enc.Base64.stringify(words1);
console.log('#1 ' + base641);
