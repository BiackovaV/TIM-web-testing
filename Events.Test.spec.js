describe('Events Page Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/events')


    //Udalosti Text test
    cy.get('[style="padding: 32px 350px 0px; color: rgb(194, 14, 77);"] > h1').should('contain','Udalosti')
    .should('exist')
    .should('be.visible')

    //First Bar With Text Test
    cy.get(':nth-child(2) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'MIA FESTIVAL').should('exist').should('be.visible');

    cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', 'Tanečná súťaž KOŠICE 18.4.2025').should('exist').should('be.visible');


    //Second Bar With Text Test
    cy.get(':nth-child(3) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible');

    cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'BREAK-IN WORKSHOP').should('exist').should('be.visible');

    cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', 'KOŠICE 14.5.2025 Lektor: Ľubomír Pelko 17:00 Kultúrne Stredisko Nad Jazerom').should('exist').should('be.visible');



    //Third Bar With Text Test
    cy.get(':nth-child(4) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'EUROPEAN DANCE CUP').should('exist').should('be.visible');
    cy.contains('.MuiCardContent-root', 'Európska súťaž o pohár a postup KANIJŽA SERBIA 20.5.2025').should('exist').should('be.visible');



    //Fourth Bar With Text Test
    cy.get(':nth-child(5) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'CONTEMPORARY WORKSHOP').should('exist').should('be.visible');

    cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', 'KOŠICE 12.6.2025 Lektor: Jana Rozhoňová 18:00 Kultúrne Stredisko Nad Jazerom').should('exist').should('be.visible');



    //Fifth Bar With Text Test
    cy.get(':nth-child(6) > .MuiCardContent-root')
    .should('exist')
    .should('be.visible')

    cy.get(':nth-child(6) > .MuiCardContent-root > .MuiTypography-h6')
    cy.contains('.MuiCardContent-root', 'DANCE CAMP').should('exist').should('be.visible');

    cy.get(':nth-child(6) > .MuiCardContent-root > .MuiTypography-body2')
    cy.contains('.MuiCardContent-root', 'Tanečný tábor plný tréningov a nových znalostí 5.7-13.7.2025 Remetské Hámre').should('exist').should('be.visible');

  })
})