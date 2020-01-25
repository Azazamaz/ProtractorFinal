describe('Automation portal registration form test', () => {
    const fillForm = require('../fill_form');
    const signInBtn = element(by.className('login'));
    const createForm = element(by.id('create-account_form'));
    const emailAddressInput = element(by.id('email_create'));
    const createAccountBtn = element(by.id('SubmitCreate'));
    const registartionForm = element(by.id('account-creation_form'));
    const registerBtn = element(by.id('submitAccount'));
    const errorMessage = element(by.css('#center_column > div > p'));
    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('http://automationpractice.com');
    });

    it('should be error by bad data', () => {
        expect(signInBtn.isDisplayed()).toBe(true);

        signInBtn.click();
        expect(createForm.isDisplayed()).toBe(true);

        emailAddressInput.sendKeys("kismacska@gmail.com");
        createAccountBtn.click();
        browser.wait(EC.visibilityOf(registartionForm), 5000);
        expect(registartionForm.isDisplayed()).toBe(true);

        fillForm.fillRegistrationForm();
        registerBtn.click();

        browser.wait(EC.visibilityOf(errorMessage), 5000);
        browser.takeScreenshot().then((png) => {
            fillForm.takeScreenShot(png, 'errorMessage.png');
        });
        expect(errorMessage.isDisplayed()).toBe(true);
    });

});