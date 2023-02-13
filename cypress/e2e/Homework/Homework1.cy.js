describe('Choose Toast', () => {

    beforeEach(()=> { 
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title*="Modal & Overlays"]').click();
      cy.get('[title*="Toastr"]').click();
      cy.get('.mat-ripple.sidebar-toggle ').click();
    })
  
    const data = [
      {
        testData: {
          position: 'top-left',
          title: 'Happy Birthday, Mila!',
          content: 'Be happy and health.',
          time: '1000',
          type: 'primary'
        }, expectedResult: {
          icon: 'email',
          title: 'Happy Birthday, Mila!',
          content: 'Be happy and health.',
          color: 'rgb(233, 29, 99)',
          position: 'top-left'
        }
      },
      {
        testData: {
          position: 'top-right',
          title: 'Happy Birthday, Ira!',
          content: 'Be happy and health.',
          time: '2000',
          type: 'success'
        }, expectedResult: {
          icon: 'email',
          title: 'Happy Birthday, Ira!',
          content: 'Be happy and health.',
          color: 'rgb(40, 167, 69)',
          position: 'top-right'
        }
      },
      {
        testData: {
          position: 'bottom-left',
          title: 'Happy Birthday, Kira!',
          content: 'Be happy and health.',
          time: '3000',
          type: 'info'
        }, expectedResult: {
          icon: 'email',
          title: 'Happy Birthday, Kira!',
          content: 'Be happy and health.',
          color: 'rgb(23, 162, 184)',
          position: 'bottom-left'
        }
      },
      {
        testData: {
          position: 'bottom-right',
          title: 'Happy Birthday, Nina!',
          content: 'Be happy and health.',
          time: '4000',
          type: 'danger'
        }, expectedResult: {
          icon: 'email',
          title: 'Happy Birthday, Nina!',
          content: 'Be happy and health.',
          color: 'rgb(220, 53, 69)',
          position: 'bottom-right'
        }
      }]
  
  
      data.forEach(({ testData, expectedResult }) => {
  
        it(`search data ${testData}`, () => {
  
          
          cy.get('.mat-ripple.position-select.appearance-outline')
           .click()
          cy.get('.option-list')
           .should('contain', `${expectedResult.position}`)
          cy.get(`[ng-reflect-value="${testData.position}"]`)
           .click()
         
          cy.get('[ng-reflect-name="title"]').clear()
            .type(`${testData.title}`)
            .should('contain.value', `${expectedResult.title}`);
  
          cy.get('[ng-reflect-name="content"]').clear()
            .type(`${testData.content}`)
            .should('contain.value', `${expectedResult.content}`);
  
          cy.get('[ng-reflect-name="timeout"]').clear()
            .type(`${testData.time}`)
            .should('contain.value', `${testData.time}`);
  
          cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button')
          .click()
          cy.get('.option-list')
          .should('contain', `${testData.type}`)
          cy.get(`[ng-reflect-value="${testData.type}"]`)
          .click();
  
          cy.get('nb-card-footer > .status-basic').click();
  
          cy.get('#cdk-overlay-2')
          .should('have.css', 'background-color')
         // .and('eq', `${expectedResult.color}`);
  
          cy.wait(500)
        
          
        })
      })
  })