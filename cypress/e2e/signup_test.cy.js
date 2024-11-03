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

    it('Should show error messages when mandatory fields are missing', () => {
        const homePage = new HomePage();
        const createAccountPage = homePage.createNewCustomer();

        // Scenario 1: Missing first name
        createAccountPage.createCustomerAccount({
            lastName: 'Smith',
            email: faker.internet.email(),
            password: 'Password123!'
        });
        createAccountPage.getErrorMessage('firstName', 'This is a required field.');

        // Scenario 2: Missing last name
        createAccountPage.createCustomerAccount({
            firstName: 'John',
            email: faker.internet.email(),
            password: 'Password123'
        });
        createAccountPage.getErrorMessage('lastName', 'This is a required field.');

        // Scenario 3: Missing email
        createAccountPage.createCustomerAccount({
            firstName: 'John',
            lastName: 'Doe',
            password: 'Password123'
        });
        createAccountPage.getErrorMessage('email', 'This is a required field.');

        // Scenario 4: Missing password
        createAccountPage.createCustomerAccount({
            firstName: 'John',
            lastName: 'Doe',
            email: faker.internet.email()
        });
        createAccountPage.getErrorMessage('password', 'This is a required field.');
    });
});

