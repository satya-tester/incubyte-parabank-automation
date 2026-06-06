const { test } = require('@playwright/test');
const HomePage = require('./pages/HomePage');
const RegisterPage = require('./pages/RegisterPage');
const AccountPage = require('./pages/AccountPage');
const testData = require('./utils/testData');

test('Sign up and Print Amount', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const accountPage = new AccountPage(page);
    // Open website
    await homePage.openWebsite();
    // Click Register
    await homePage.clickRegister();
    // Register new user
    await registerPage.fillRegistrationForm(testData);
    await accountPage.clickAccountsOverview();
    //Account Balance of the user 
    const amount = await accountPage.getBalance();
    console.log("Amount displayed after login: " + amount);

});