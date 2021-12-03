import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders login react', () => {
    mount(<App />);
    cy.get(selectors.usernameInput).type("DUMMY_USERNAME");
});

export const selectors = {
    // Auth component classes
    usernameInput: 'amplify-auth-container.hydrated > .hydrated',
    signInPasswordInput: '#password',
    signInSignInButton: '.button',
    signOutButton: '[data-test=""]'
}
