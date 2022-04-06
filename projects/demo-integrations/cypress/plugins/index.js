const {viewportWidth, viewportHeight} = require('./../../cypress.json');

module.exports = on => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${viewportWidth},${viewportHeight}`);
            launchOptions.args.push('--force-device-scale-factor=2');
            launchOptions.args.push('--high-dpi-support=1');
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--incognito');
        }

        if (browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
        }

        return launchOptions;
    });
};
