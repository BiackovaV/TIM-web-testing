describe('Events Page Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/events')


    //Udalosti Text test
    cy.get('[style="padding: 32px 350px 0px;"] > h1').should('contain','Udalosti')
    .should('exist')
    .should('be.visible')

    //First Bar With Text Test
    cy.get(':nth-child(2) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'HVK TRÉNING').should('exist').should('be.visible');

    cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', '16:30 - 18:30').should('exist').should('be.visible');


    //Second Bar With Text Test
    cy.get(':nth-child(3) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible');

    cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'JVK TRÉNING').should('exist').should('be.visible');

    cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', '16:50 - 17:50').should('exist').should('be.visible');



    //Third Bar With Text Test
    cy.get(':nth-child(4) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'HVK TRÉNING').should('exist').should('be.visible');
    cy.contains('.MuiCardContent-root', '16:50 - 17:50').should('exist').should('be.visible');



    //Fourth Bar With Text Test
    cy.get(':nth-child(5) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'DVK TRÉNING').should('exist').should('be.visible');

    cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', '17:00 - 18:00').should('exist').should('be.visible');



    //Fifth Bar With Text Test
    cy.get(':nth-child(6) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(6) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'DVK TRÉNING').should('exist').should('be.visible');

    cy.get(':nth-child(6) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', '18:00 - 19:00').should('exist').should('be.visible');

  })
})