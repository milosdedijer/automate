/* eslint-disable angular/timeout-service */
'use strict';

var SignInPage = require('./pos/SignInPO.js');
var Helper = require ('./Helper.js');
var data = require ('./TestData.json');

describe('- Request certificate answer test-', function() {

    var page;
    var embrokerEnv = data.application.url;
    var embrokerLink = embrokerEnv + '/app';
    var email, pass;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    afterAll(function() {
        browser.driver.manage().deleteAllCookies();
    });

    beforeAll(function() {
        email = data.api_user_signup.email;
        pass =  data.api_user_signup.pwd;
    });

    it('Given I am signed in to Embroker', function(done) {
        page = new SignInPage(embrokerLink);
        page.emailInput(email);
        page.passInput(pass);
        page.signInButtonClick();
        expect(browser.getTitle()).toEqual('Embroker');
        done();
    });

    it('When: I verify I have one new notification', function(done) {
        expect(browser.getCurrentUrl()).toEqual(embrokerEnv + '/app/dashboard/how-i-compare');
        done();
    });
});
