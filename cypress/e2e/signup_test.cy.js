import HomePage from "../pages/home.page.cy";
import { faker } from '@faker-js/faker';

describe('User Account Flow', () => {
    it('Should successfully create a new user account', () => {
        const testData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(10, true)
        };

        const homePage = new HomePage();
        const createAccountPage = homePage.createNewCustomer();
        const userAccountPage = createAccountPage.createCustomerAccount(testData);

        // Verify User Logged In
        userAccountPage.getLoggedInUserName().should('contain', testData.firstName + ' ' + testData.lastName);
        cy.contains('Thank you for registering').should('be.visible');
    });
});

