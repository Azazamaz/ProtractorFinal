describe('Automation practice portal Login test', () => {
    const signInBtn = element(by.className('login'));
    const loginForm = element(by.id('login_form'));
    const loginEmail = element(by.id('email'));
    const loginPassword = element(by.id('passwd'));
    const loginBtn = element(by.id('SubmitLogin'));
    const welcomeMessage = element(by.className('info-account'));
    const logoutBtn = element(by.className('logout'));
    const EC = protractor.ExpectedConditions;
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('http://automationpractice.com');
    });

    it('should be successfull login', () => {
        signInBtn.click();
        browser.wait(EC.visibilityOf(loginForm), 4000);
        expect(loginForm.isDisplayed()).toBe(true);

        loginEmail.sendKeys("valami@email.com");
        loginPassword.sendKeys("12345");
        loginBtn.click();

        expect(welcomeMessage.getText()).toContain('Welcome to your account.');
        logoutBtn.click();
    });
});