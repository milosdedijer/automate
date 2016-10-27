'use strict';

var SignUpPage = function() {};

SignUpPage.prototype = Object.create({}, {
    firstName: {
        get: function() {
            return element(by.css('[name="name"]'));
        }
    },
    firstNameInput: {
        value: function(input) {
            return this.firstName.sendKeys(input);
        }
    },
    lastName: {
        get: function() {
            return element(by.css('[name="last_name"]'));
        }
    },
    lastNameInput: {
        value: function(input) {
            return this.lastName.sendKeys(input);
        }
    },
    email: {
        get: function() {
            return element(by.css('[name="email"]'));
        }
    },
    emailInput: {
        value: function(input) {
            return this.email.sendKeys(input);
        }
    },
    pass: {
        get: function() {
            return element(by.css('[name="pwd"]'));
        }
    },
    passInput: {
        value: function(input) {
            return this.pass.sendKeys(input);
        }
    },
    signUpButton: {
        get: function() {
            return element(by.buttonText('Sign up'));
        }
    },
    signUpButtonClick: { // used in more than one form
        value: function() {
            this.signUpButton.click();
        }
    },
    fillSignUpForm: {
        value: function(user) {
            browser.waitForAngular();
            this.firstNameInput(user.name);
            this.lastNameInput(user.lastName);
            this.passInput(user.pass);
            this.signUpButtonClick();
        }
    }
});

module.exports = SignUpPage;
