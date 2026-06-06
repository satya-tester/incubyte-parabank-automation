class AccountPage {
    constructor(page) {
        this.page = page;
    }
    async clickAccountsOverview(){
        await this.page.click("text=Accounts Overview");
    }
    async getBalance() {
        return await this.page.locator("#accountTable tbody tr:first-child td:nth-child(2)").textContent();
    }
}
module.exports = AccountPage;