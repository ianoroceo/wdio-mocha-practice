
const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter');
const log4j = require('log4js');

exports.config = {
    //
    // ====================
    // Runner and Framework Configuration
    // ====================
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        bail: false,
        timeout: 60000,
        // grep: argv.grep,
    },
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    //
    // Test runner services
    services: ['sauce', 'selenium-standalone'],
    // ====================
    // Babel hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },

    // ====================
    // HTML Reporter
    // ====================
    reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
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
            outputDir: './reports/html-reports/',
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

    afterTest: function (test) {
        const path = require('path');
        const moment = require('moment');

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        browser.saveScreenshot(filepath);
        process.emit('test:screenshot', filepath);
    },
};
