'use strict';

var RegistrationFormPage = function() {
    var fs = require('fs');

    const firstName = element(by.id('customer_firstname'));
    const lastName = element(by.id('customer_lastname'));
    const password = element(by.id('passwd'));
    const address = element(by.id('address1'));
    const city = element(by.id('city'));
    const state = element(by.id('id_state'));
    //let postCode = element(by.id('postcode'));
    //let postCode = element(by.name('postcode'));
    const country = element(by.id('id_country'));
    const mobilePhone = element(by.id('phone_mobile'));
    
    const state_locator = 'id_state';
    const country_locator = 'id_country';
    
    function getSelectElement(locator, value) {
        const valueSelected = element(by.css(`[id="${locator}"] option[value="${value}"]`));
        element(by.id(locator)).click();
        element(valueSelected).click();
    }

    this.fillRegistrationForm = function() { //TODO Screenshot !!!
        firstName.sendKeys('Aladar');
        lastName.sendKeys('Nag3y');
        password.sendKeys('12345');
        address.sendKeys('Pursit Avenue 32');
        city.sendKeys('St. Louis');
        getSelectElement(state_locator, 1);
        //postCode.sendKeys('32012');
        getSelectElement(country_locator, 21);
        mobilePhone.sendKeys('0680880880');
    };

    this.takeScreenShot = function(data, filename) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    };
    
};

module.exports = new RegistrationFormPage();