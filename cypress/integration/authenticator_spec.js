describe('Authenticator:', function() {
    // Step 1: setup the application state
    beforeEach(function() {
        cy.visit('/');
    });

    describe('Sign In:', () => {
        it('allows a user to signin', () => {
            // Step 2: Take an action (Sign in)
                cy.get(selectors.usernameInput).type("DUMMY_USERNAME");
            cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
            cy.get(selectors.signInSignInButton).contains('Sign In').click();

            // Step 3: Make an assertion (Check for sign-out text)
            cy.contains('Create Todo');
        });
    });

});
export const selectors = {
    // Auth component classes
    usernameInput: 'amplify-auth-container.hydrated > .hydrated',
    signInPasswordInput: '#password',
    signInSignInButton: '.button',
    signOutButton: '[data-test=""]'
}
