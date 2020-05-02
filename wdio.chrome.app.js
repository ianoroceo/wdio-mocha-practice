const baseConfig = require('./wdio.conf').config;
const chromeConfig = Object.assign(baseConfig, {
// ============
// Specs
// ============
    specs: [
        './specs/*.spec.js',
    ],

    exclude: [
        '',
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check:
    // https://chromedriver.chromium.org/capabilities
    capabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                localState: { 'protocol_handler.excluded_schemes.fasp': false },
                excludeSwitches: ['disable-component-update'],
                args: ['--incognito',
                    '--start-maximized',
                    '--disable-default-apps',
                    '--disable-web-security',
                    '--reduce-security-for-testing',
                    '--disable-popup-blocking',
                    '--allow-outdated-plugins',
                // '--enable-nacl',
                // '--ppapi'
                ]
            }
        },
    ],
});

exports.config = chromeConfig;
