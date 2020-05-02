/* eslint-disable no-path-concat */
const argv = require('yargs').argv;

var environment = argv.env;
var env = environment;
switch (environment) {
case 'prod':
    env = 'prod';
    break;
case 'staging':
    env = 'staging';
    break;
case 'dev':
    env = 'dev';
    break;
default:
    env = 'qa';
    break;
}

var config;
var configFile = './' + 'config-' + env + '.js';

try {
    config = require(configFile);
} catch (err) {
    if (err.code && err.code === 'MODULE_NOT_FOUND') {
        console.error('No config file matching NODE_ENV=' + process.env.NODE_ENV +
            '. Requires "' + __dirname + '/' + process.env.NODE_ENV + '.js"');
        process.exit(1);
    } else {
        throw err;
    }
}
module.exports = config;