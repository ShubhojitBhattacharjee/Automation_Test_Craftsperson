import BasePage from "./base.page.cy";
import UserAccountPage from "./user.account.page.cy";

class CreateAccountPage extends BasePage {
    // Get accessors for web elements
    get firstNameField() {
        return cy.get('#firstname');
    }

    get lastNameField() {
        return cy.get('#lastname');
    }

    get emailField() {
        return cy.get('#email_address');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get passwordConfirmationField() {
        return cy.get('#password-confirmation');
    }

    get createAccountButton() {
        return cy.get('button[title="Create an Account"]');
    }

    createCustomerAccount({ firstName = '', lastName = '', email = '', password = '' }) {
        this.firstNameField.clear();
        this.lastNameField.clear();
        this.emailField.clear();
        this.passwordField.clear();
        this.passwordConfirmationField.clear();

        if (firstName) this.firstNameField.type(firstName);
        if (lastName) this.lastNameField.type(lastName);

        if (email) this.emailField.type(email);
        if (password) {
            this.passwordField.type(password);
            this.passwordConfirmationField.type(password);
        }
        this.createAccountButton.click();
        return new UserAccountPage();
    }

}
export default CreateAccountPage;