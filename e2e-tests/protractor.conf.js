exports.config = {
          capabilities: {
                  // You can use other browsers
                  // like firefox, phantoms, safari, IE (-_-)
                  'browserName': 'chrome'
          },
          framework: 'jasmine2',
          specs: [
                   // We are going to make this file in a minute
                'scenarios.js'
          ],
          files: [
            '../www/lib/angular/angular.js',
            '../www/lib/firebase/firebase.js',
            '../www/lib/ionic/js/ionic.bundle.js',
            '../www/lib/angular-mocks/angular-mocks.js',
            '../www/lib/angularfire/dist/angularfire.js',
            '../www/js/*.js',
            'e2e-tests/*.js'
          ],
          baseUrl: 'http://localhost:8100',
          onPrepare: function() {
            // browser.drive.manage().window().maximize();
            browser.driver.get('https://localhost:8100');
          }
        //   jasmineNodeOpts: {
        //           showColors: true,
        //          defaultTimeoutInterval: 30000,
        //         isVerbose: true,
        //   },
        // allScriptsTimeout: 20000,
        //   onPrepare: function(){
        //         browser.driver.get('http://localhost:3000');
        // }
};