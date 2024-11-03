import BasePage from "./base.page.cy";

class UserAccountPage extends BasePage {

    get loggedInUser() {
        cy.url().should('include', '/customer/account', { timeout: this.explicitWait });
        return cy.contains('span.logged-in', 'Welcome,', { timeout: this.explicitWait });
    }

    getLoggedInUserName() {
        return this.loggedInUser
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const userName = text.trim();
                cy.log(userName);
                return cy.wrap(userName);
            });
    }

}
export default UserAccountPage;