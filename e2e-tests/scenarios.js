var Firebase = require('firebase');

describe('ionic-firebase-seed', function() {

    beforeEach(function() {
        browser.get('/');
    });

    describe('login / sign up view', function() {
        it('renders the login / sign up view when the app loads', function() {
            expect(element.all(by.css('#app-content')).first().getText()).toMatch(/Login Sign Up/);
        });
    });

    describe('login process', function() {

        it('logs a user in and displays the messages list to a logged in user', function(done) {
            // TODO: replace the email and password strings below
            // with a registered user in your application
            var emailField = element(by.model('user.email'));
            emailField.sendKeys('sara@firebase.com');
            var passwordField = element(by.model('user.pass'));
            passwordField.sendKeys('test1234');
            element(by.css('.login')).click();
            setTimeout(function() {
                expect(element(by.id('email-header')).getText()).toMatch(/sara@firebase.com/);
                expect(element(by.id('message-list')).isDisplayed()).toBe(true);
                done();
            }, 2000);
        });
    });


    describe('messages list', function() {
        it('adds an item to the Messages array', function(done) {
            var testMessagesRef = new Firebase("https://ionic-fb-seed.firebaseio.com/messages");
            testMessagesRef.once('value', function(beforeSnap) {
                var messageInput = element(by.model('message.text'));
                messageInput.sendKeys('testmessage');
                element(by.id('add-message')).click();
                setTimeout(function() {
                    testMessagesRef.once('value', function(afterSnap) {
                        expect(afterSnap.numChildren() - 1).toEqual(beforeSnap.numChildren());
                        done();
                    });
                }, 500);
            });
        });
    });
});