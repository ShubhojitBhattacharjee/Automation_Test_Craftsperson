import BasePage from "./base.page.cy";
import CreateAccountPage from "./create.account.page.cy";

class HomePage extends BasePage {
    CreateAccntLink = '.panel.header li>a[href*=create]'
    SignInLink = '.panel.header li>a[href*=login]'

    constructor() {
        super();
        cy.visit('/');  // Launch URL is provided in config file
    }

    createNewCustomer() {
        cy.get(this.CreateAccntLink).click();
        return new CreateAccountPage();
    }
}
export default HomePage