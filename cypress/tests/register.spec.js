/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Register', () => {

    it('Access the Sing In page', ()=> {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.url().should('contain', 'my-account')
    });
    it('When the data is informed, then the register must be done', () => {

        cy.get('input#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click()
        cy.url().should('contain', 'account-creation')

        cy.get('input#id_gender2').check()
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type(chance.string())
        cy.get('select#days').select(chance.integer({ min: 1, max: 31 }))
        cy.get('select#months').select(chance.month())
        cy.get('select#years').select(chance.year({min: 1900, max: 2022}))
        
        //input#firstname
        //input#lastname

        cy.get('input#company').type(chance.company())
        cy.get('input#address1').type(chance.address())
        //input#address2
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select(chance.state({ full: true }))
        cy.get('input#postcode').type(chance.zip())
        cy.get('input#phone_mobile').type(chance.phone())
        
        cy.get('button#submitAccount').click()

        cy.url().should('contain', 'my-account')
        
    });
});