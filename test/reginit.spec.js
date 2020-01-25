describe('Automation Registration init test', () => {
    let signInBtn = element(by.className('login'));
    let createForm = element(by.id('create-account_form'));
    let emailAddressInput = element(by.id('email_create'));
    let createAccountBtn = element(by.id('SubmitCreate'));
    let registartionForm = element(by.id('account-creation_form'));
    let EC = protractor.ExpectedConditions;
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('http://automationpractice.com');
    });

    it('should get page title', () => {
        expect(browser.getTitle()).toEqual('My Store');
    });

    it('Registration form should be visible', () => {
        expect(signInBtn.isDisplayed()).toEqual(true);

        signInBtn.click();
        expect(createForm.isDisplayed()).toEqual(true);

        emailAddressInput.sendKeys('kismacska@gmail.com');
        createAccountBtn.click();
        browser.wait(EC.visibilityOf(registartionForm), 5000);
        expect(registartionForm.isDisplayed()).toEqual(true);
    });

})