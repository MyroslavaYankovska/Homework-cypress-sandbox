
it('Implicit assertions', () => {

cy.visit('http://localhost:8080/commands/assertions');
  
cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.class', 'success')

  
//cy.get('.table.table-bordered.assertion-table tr')
   /// .eq(3)
   // .should('have.attr', 'class');
  

// елемент містить якийсь текст
cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) // команда що обирає рядок по порядку (поч з 0)
    .should('have.text', 'Column content');


cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) 
    .should('contain', 'Column content');

cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) 
    .should('have.html', 'Column content');

cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) 
    .should('include.text', 'content');

// елемент не містить текст

cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) 
    .should('not.contain', 'content');  
    
// Перевірити число як текст
cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) 
    .should('contain', '3');   

//Перевірити текст

cy.get('.table.table-bordered.assertion-table tr')
.eq(5) 
.invoke('text')
.then(parseFloat) 
.should('be.greaterThan', 2);


// not working
cy.visit('http://localhost:8080/commands/querying');
cy.get('#inputName')
.type('Hello')
.should('have.value', 'Hello')

cy.get('#quere-btn')
.should('be.enabled');

cy.get('.traversal-disabled .btn.btn-default')
.should('be.disabled');

//Перевірка стилів
cy.visit('http://localhost:8080/commands/assertions');
  
cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.css', 'background-colour')
    .and('eq', 'rgb(223, 240, 216)')

//Посилання на лінку
cy.get('navbar-brand')
    .should('have.class', 'navbar-brand')
    .and('be.visible')
    .and('have.attr','href')
    .and('include', '/')

cy.get('[data-toggle="dropdown"]')
.click();

cy.get('.dropdown-menu li')
    .should('have.length', 17)
   
})