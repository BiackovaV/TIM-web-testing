describe('Main Page Buttons Test', () => {
  it('TopBar Buttons', () => {
    cy.visit('http://localhost:3000')


   //Home button test
   cy.get('[href="/"]').should('exist')
   .should('be.visible')
   cy.get('[id="\:r1\:"]')
   .contains('Home').click()

   //About button test 
   cy.get('[href="/about"]').should('exist')
   .should('be.visible')
   cy.get('[id="\:r2\:"]')
   .contains('About').click()

   //Contact button test
   cy.get('[href="/contact"]').should('exist')
   .should('be.visible')
   cy.get('[id="\:r3\:"]')
   .contains('Contact').click()

   //Events button test
   cy.get('[href="/events"]').should('exist')
   .should('be.visible')
   cy.get('[id="\:r4\:"]')
   .contains('Events').click()

   //Gallery button test
   cy.get('[href="/gallery"]').should('exist')
   .should('be.visible')
   cy.get('[id="\:r5\:"]')
   .contains('Gallery').click()

   //Switch button test
   cy.get('.MuiSwitch-root').click().should('exist')
   .should('be.visible')

  //Rozvrh hodin button test
   //cy.get('[href="/schedule"][":rc:"]').should('exist')
   //.should('be.visible')
   //cy.get('[id="\:r8\:"]')
  //.contains('Rozvrh hodín').click()

   cy.get('[id="\:r6\:"]').should('exist')
   .should('be.visible')
   .contains('Prihlásiť sa').click()

   //Zistiť viac button test
   //cy.get('[id="\:r9\:"]').should('exist')
   //.should('be.visible')
   //.contains('Zistiť viac').click()

   //Viac informacii button test 
   //cy.get('[id="\:ra\:"]').should('exist')
   //.should('be.visible')
   //.click()
  
   })

   it ('Website First Page Text Test', () => {
    cy.visit('http://localhost:3000')

    cy.get('h1 > span').should('exist')
    .should('be.visible')

    cy.get('h1').should('exist')
    .should('be.visible')

    cy.get('#root > :nth-child(2) > :nth-child(1) > div > p').should('exist')
    .should('be.visible')

    cy.get('.MuiTypography-h2').should('exist')
    .should('be.visible')

    cy.get('[style="flex: 1 1 0%; text-align: left; color: rgb(255, 255, 255);"] > .MuiTypography-body1').should('exist')
    .should('be.visible')

   //Nasi treneri text test
    cy.get('.MuiTypography-h3').should('exist')
    .should('be.visible')

   //Text pod nasi treneri test
    cy.get('.css-1hrqswa > .MuiTypography-body1').should('exist')
    .should('be.visible')

  //Jana R. TextBox test
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiPaper-root').should('exist').should('be.visible')
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').should('exist').should('be.visible')
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h6').should('exist').should('be.visible')
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').should('exist').should('be.visible')

    //Lubomir P. TextBox test
    cy.get(':nth-child(2) > .MuiPaper-root').should('exist').should('be.visible')
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardMedia-root').should('exist').should('be.visible')
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h6').should('exist').should('be.visible')
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').should('exist').should('be.visible')

    //Dominika M. TextBox test
    cy.get('.MuiGrid-container > :nth-child(3) > .MuiPaper-root').should('exist').should('be.visible')
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardMedia-root').should('exist').should('be.visible')
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h6').should('exist').should('be.visible')
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').should('exist').should('be.visible')


  

    })
    


  })

