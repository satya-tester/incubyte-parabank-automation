class RegisterPage {
    constructor(page){
        this.page =page;
    }
    async fillRegistrationForm(data) {
        await this.page.fill('[name="customer.firstName"]',data.firstName);
        await this.page.fill('[name="customer.lastName"]',data.lastName);
        await this.page.fill('[name="customer.address.street"]',data.address);
        await this.page.fill('[name="customer.address.city"]',data.city);
        await this.page.fill('[name="customer.address.state"]',data.state);
        await this.page.fill('input[name="customer.address.zipCode"]', data.zipCode);
        await this.page.fill('input[name="customer.phoneNumber"]', data.phone);
        await this.page.fill('input[name="customer.ssn"]', data.ssn);
        await this.page.fill('input[name="customer.username"]', data.username);
        await this.page.fill('input[name="customer.password"]', data.password);
        await this.page.fill('#repeatedPassword', data.password);
        await this.page.click('input[value="Register"]');

    }
}
module.exports = RegisterPage;
