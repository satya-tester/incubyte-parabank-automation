const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const HomePage = require("../pages/HomePage");
const RegisterPage = require("../pages/RegisterPage");
const AccountPage = require("../pages/AccountPage");
const testData = require("../utils/testData");

let browser, page;
let homePage, registerPage, accountPage;
Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);
});
Given("User opens ParaBank website", async () => {
    await homePage.openWebsite();
});
When("User clicks on Register link", async () => {
    await homePage.clickRegister();
});
When("User fills the registration form", async () => {
    await registerPage.fillRegistrationForm(testData);
});
When("User submits the registration details", async () => {
// Already handled in RegisterPage
});
When("User clicks on Accounts Overview", async () => {
    await accountPage.clickAccountsOverview();
});
Then("User should see the account balance", async () => {
    const amount = await accountPage.getBalance();
    console.log("Account Balance : " + amount);
    if(!amount){
        throw new Error("Balance not found");
    }
});
After(async () => {
    await browser.close();
});

