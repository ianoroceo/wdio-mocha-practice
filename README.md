# Mocha and Chai WebdriverIO Web Testing Project
Repo for studying purposes using WebdriverIO with Mocha and Chai.
Web Automation Testing with Mocha and Chai, WebdriverIO V6 using Page Object Model

> Note: You might find some items that are not optimized. Feel free to create a PR if you want to make some optimization.


## Features
- WebdriverIO V6
- Page Object Model
- ESLint
- HTML Reporter
- Allure Report (by default is deactivated so it wont conflict with HTML Reporter)

## Quick start
Choose one of the following options:

1. (Optional)Install nvm in your machine
    - [Install nvm on Windows](https://codeburst.io/nvm-for-windows-how-to-install-and-use-13b7a4209791)
    - [Install nvm on Mac](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

2. Install nodeJs using nvm. You can also install nodeJS without using nvm. Here are some references if you are installing not using nvm
    - [Install nodeJs on Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
    - [Install nodeJs on Mac](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)

3. Install your favorite IDE. I used [VS Code](https://code.visualstudio.com/download) for this

4. Clone the git repo — `https://github.com/ianoroceo/wdio-mocha-practice`

3. On your terminal (mac) / cmd (windows), go to your project directory and install the Node Packages using `npm install`

4. Run your test. `npm run test`
    - (Note: before running your test, if you made changes please execute ESLint first ```npm run lint-fx```)


5. Once all tests are executed, an aggregated report will be generated and will show on your browser.

> Note: The AUT is https://magento.nublue.co.uk/. Please change the AUT in the wdio.conf.js for your own AUT and change the page objects. I don't own Magento. I just found this site when I was doing my POC of http://curiositysoftware.ie/

## References
- [webdriverio-mocha-uiautomation-boiler](https://github.com/serhatbolsu/webdriverio-mocha-uiautomation-boiler)
- [appium-boilerplate](https://github.com/webdriverio/appium-boilerplate/)
- [WebdriverIO API's](https://webdriver.io/docs/api.html)
- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [CSS Selectors Cheat Sheet](https://www.adtrak.co.uk/blog/the-ultimate-css-selectors-cheatsheet)
- [XPATH Cheat Sheet](https://devhints.io/xpath)
