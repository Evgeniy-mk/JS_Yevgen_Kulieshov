const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '.tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://opencart.qatestlab.net/index.php',
      show: true,
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      windowSize: '1290x900',
    }
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/base.js",
    accountPage: "./pages/account.js",
  },
  name: 'JS_Yevgen_Kulieshov'
}