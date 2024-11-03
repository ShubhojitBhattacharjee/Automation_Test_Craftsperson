# Improvised Page Object Model (POM)

I have implemented an improved version of the Page Object Model (POM) in Cypress, focusing on a service-oriented design. This aims to streamline test code, improve readability, and enhance maintainability.

## Key Features

### Service-Oriented Design

- **Method Representation**: Pages contains methods representing specific services, such as `createCustomerAccount` and `getErrorMessage`. This provides a clear understanding of what each page offers.
- **Generic Methods**: Methods are designed to be as generic as possible to promote reusability across different test scenarios.
- **Separation of Concerns**: Assertions are handled exclusively in the spec files, allowing for cleaner page classes focused solely on interactions.

## Method Chaining or Page Chaining

### Benefits

- **Clear Navigation Flow**:
    - Returning a new page object instance immediately after an action that transitions to a different page makes it clear that the user is now on a new page. This clarity aids in maintaining a logical and easy-to-follow test flow. For actions on page that does not load a new page, like `getErrorMessage` same instace of page is returned, simulating logical flow in the AUT

- **Improved Reusability**:
    - By returning the page object directly, tests can continue chaining actions on the new page without needing an additional step to instantiate that page object again.

- **Error Prevention**:
    - This structure minimizes the risk of invoking methods on the wrong page object, as each method call pertains to relevant page only.


## Getters for web elements in Cypress

### Get Accessors for web elements have been used for following reasons:

1. **Built-in Cypress Retry Logic**:
    - Cypress automatically retries commands like `cy.get()` until the element is found or the timeout is reached. When using a getter accessor, this retry logic is invoked every time the element is accessed, ensuring the element is available before any interaction.

2. **Readability and Consistency**:
    - Accessing elements via get accessors allows for clean and readable selectors. For instance, using `this.firstNameField.type('John')` in the test code enhances clarity regarding actions and interactions as there are no css/xpath or any other locators involved in this line. That is being taken care by Get Accessors

3. **Dynamic Evaluation**:
    - Get accessors re-evaluate each time they are called, which is beneficial in scenarios where elements might change or be re-rendered in the DOM.

4. **Recommended Practice**:
    - Using get accessors is generally recommended for Cypress page objects due to the built-in retry logic and ease of use.


