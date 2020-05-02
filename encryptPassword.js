/**
 * Created by ian oroceo on 04/29/2019.
 */
const CryptoJS = require('crypto-js');
const words = CryptoJS.enc.Utf8.parse('');
const base64 = CryptoJS.enc.Base64.stringify(words);
console.log('#0 ' + base64);

const words1 = CryptoJS.enc.Utf8.parse('');
const base641 = CryptoJS.enc.Base64.stringify(words1);
console.log('#1 ' + base641);
