it('Registration', () => {
    cy.visit('https://automationteststore.com/');
  
    cy.get('#customer_menu_top')
    .click();

    cy.get('[title="Continue"]')
    .click();

    cy.get('#AccountFrm_firstname')
    .focus()
    .type('Myroslava')
    .should('contain.value', 'Myroslava');

    cy.get('#AccountFrm_lastname')
    .focus()
    .type('Yankovska')
    .should('contain.value', 'Yankovska');

    cy.get('#AccountFrm_email')
    .focus()
    .type('miroslava_yankovska@ukr.net')
    .should('contain.value', 'miroslava_yankovska@ukr.net'); 

    cy.get('#AccountFrm_telephone')
    .focus()
    .type('380976315241')
    .should('contain.value', '380976315241'); 

    cy.get('#AccountFrm_fax')
    .focus()
    .type('1234321')
    .should('contain.value', '1234321');  

    cy.get('#AccountFrm_company')
    .focus()
    .type('Leap Gaming')
    .should('contain.value', 'Leap Gaming'); 
    
    cy.get('#AccountFrm_address_1')
    .focus()
    .type('Nova, 1')
    .should('contain.value', 'Nova, 1'); 

    cy.get('#AccountFrm_address_2')
    .focus()
    .type('Nova, 2')
    .should('contain.value', 'Nova, 2'); 

    cy.get('#AccountFrm_city')
    .focus()
    .type('Kyiv')
    .should('contain.value', 'Kyiv'); 

    cy.get('#AccountFrm_country_id')
    .select('Ukraine')
    .should('have.value', '220'); 

    cy.get('#AccountFrm_zone_id')
    .select('3490')
    .should('have.value', '3490'); 

    cy.get('#AccountFrm_postcode')
    .focus()
    .type('0000')
    .should('contain.value', '0000'); 

    cy.get('#AccountFrm_loginname')
    .focus()
    .type('MiraYank')
    .should('contain.value', 'MiraYank'); 

    cy.get('#AccountFrm_password')
    .focus()
    .type('Admin0000')
    .should('contain.value', 'Admin0000');

    cy.get('#AccountFrm_confirm')
    .focus()
    .type('Admin0000')
    .should('contain.value', 'Admin0000');

    cy.get('#AccountFrm_newsletter1')
    .check({force: true});

    cy.get('#AccountFrm_agree')
    .check({force: true});

    cy.get('.btn.btn-orange.pull-right')
    .click()

   //Authorization

   cy.get('#customer_menu_top')
   .click();

   cy.get('#loginFrm_loginname')
   .focus()
   .type('MiraYank')
   .should('contain.value', 'MiraYank');

   cy.get('#loginFrm_password')
   .focus()
   .type('Admin0000')
   .should('contain.value', 'Admin0000');

   cy.get('[title="Login"]')
   .click();
     
})