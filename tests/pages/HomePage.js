class HomePage {
    constructor(page){
        this.page = page;
    }
    async openWebsite(){
        await this.page.goto (" https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
    }
    async clickRegister(){
        await this.page.click("text=Register");
    }
}
module.exports = HomePage;
