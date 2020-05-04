const utilities = require("./support/utils/Utilities");
const chai = require('chai');
const allure = require('@wdio/allure-reporter').default;
const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter');
const log4j = require('log4js');

// Max time for single test case execution
let timeout = process.env.DEBUG ? 99999999 : 120000;
let elementTimeout = 10000;


exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        'path/to/excluded/files'
    ],
   
    maxInstances: 10,
   
    capabilities: [{

        maxInstances: 3,
        //
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-infobars', '--window-size=1920,1440', '--incognito'],
        }

    }],

    logLevel: 'debug',

    deprecationWarnings: true,

    bail: 0,
 
    baseUrl: 'https://magento.nublue.co.uk',

    waitforTimeout: elementTimeout,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['chromedriver',
        // ['selenium-standalone', {
        //     logPath: 'logs',
        //     installArgs: {
        //         drivers: {
        //             chrome: { version: '79.0.3945.88' },
        //             firefox: { version: '0.26.0' }
        //         }
        //     },
        //     args: {
        //         drivers: {
        //             chrome: { version: '79.0.3945.88' },
        //             firefox: { version: '0.26.0' }
        //         }
        //     },
        // }]
    ],
    port: 8080,
    

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: timeout,
        require: ['@babel/register']
    },

    // ====================
    // HTML Reporter
    // ====================
    reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './report/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',

            // to show the report in a browser when done
            showInBrowser: false,

            // to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,

            // to use the template override option, can point to your own file in the test project:
            // templateFilename: path.resolve(__dirname, '../src/wdio-html-reporter-alt-template.hbs'),

            // to add custom template functions for your custom template:
            // templateFuncs: {
            //     addOne: (v) => {
            //         return v+1;
            //     },
            // },

            // to initialize the logger
            LOG: log4j.getLogger('default')
        }
        ]
    ],
 
    onPrepare: function (config, capabilities) {
        const reportAggregator = new ReportAggregator({
            outputDir: './report/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            showInBrowser: true,

            // to use the template override option, can point to your own file in the test project:
            // templateFilename: path.resolve(__dirname, '../src/wdio-html-reporter-alt-template.hbs')
        });
        reportAggregator.clean();

        global.reportAggregator = reportAggregator;
    },

    onComplete: function (exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport({
                config: config,
                capabilities: capabilities,
                results: results
            });
        })();
    },
    
    before: function (capabilities, specs) {
        //global.allure = allure;
        global.chai = chai;
        global.utilities = utilities;
    },

    // beforeSuite: function (suite) {
    //     allure.addFeature(suite.name);
    // },

    // beforeTest: function (test, context) {
    //     allure.addEnvironment("BROWSER", browser.capabilities.browserName);
    //     allure.addEnvironment("BROWSER_VERSION", browser.capabilities.version);
    //     allure.addEnvironment("PLATFORM", browser.capabilities.platform);

    // },

    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    //     if (error !== undefined) {
    //         try {
    //             //TODO: Fix allure reporting on failure
    //             utilities.takeScreenshot(test.title, true)
    //         } catch {
    //             console.log('>> Capture Screenshot Failed!');
    //         }
    //     }
    // },

    afterTest: function (test) {
        const path = require('path');
        const moment = require('moment');

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        const filepath = path.join('report/html-reports/screenshots/', timestamp + '.png');
        browser.saveScreenshot(filepath);
        process.emit('test:screenshot', filepath);
    },
};