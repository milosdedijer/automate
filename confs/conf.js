exports.config = {
    framework: "jasmine2",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [
	// "tests/SignUpTest.js",
	// "tests/LoginTest.js",
	"tests/PolicyUploadTest.js"
	],

    // specs: ["tests/PolicyUploadTest.js"],

    // -----------------------------------------------------------------
    // Browser and Capabilities: PhantomJS
    // -----------------------------------------------------------------

    // Blocking issues prevent most uses of PhantomJS and Protractor as of
    // Q4 2013. See, for example:
    //
    // https://github.com/angular/protractor/issues/85
    //
    // It is also hard to pass through needed command line parameters.


    /* capabilities: {
     browserName: 'phantomjs',
     version: '',
     platform: 'ANY'
     }*/


    // -----------------------------------------------------------------
    // Browser and Capabilities: Chrome
    // -----------------------------------------------------------------

    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY',
		// chromeOptions: { 'args': ['--login-user=embroker', '--login-password=wally']},
		// chromeOptions: { 'args': ['incognito']},

        // for headless driving > comment up, uncomment down

        // 'browserName': 'phantomjs',
        // 'phantomjs.binary.path': 'C:/Users/Darko/Documents/phantomjs-2.0.0-windows/phantomjs-2.0.0-windows/bin/phantomjs.exe',
        // 'phantomjs.binary.path': 'C:/Users/Darko/Documents/phantomjs-1.9.7-windows/phantomjs.exe',
        // 'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }

    // -----------------------------------------------------------------
    // Browser and Capabilities: Firefox
    // -----------------------------------------------------------------

    /*
    capabilities: {
      browserName: 'firefox',
      version: '',
      platform: 'ANY'
    },
    */

};
