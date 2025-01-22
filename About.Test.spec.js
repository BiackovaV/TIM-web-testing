describe('About Page Test', () => {
  it('Text And Picture', () => {
    cy.visit('http://localhost:3000/about')

//O nas: 
    cy.get('[style="padding: 32px 350px 0px;"] > h1')
    .should('exist')
    .should('be.visible')
    cy.contains('O nás:')

    //Pod O nas: text
    cy.get('[style="padding: 32px 350px 0px;"] > :nth-child(2)')
    .should('exist')
    .should('be.visible')

    //Img 
    cy.get('[style="padding: 32px 350px 0px;"] > img')
    .should('exist')
    .should('be.visible')

    //First Text Under Img
    cy.get('[style="padding: 32px 350px 0px;"] > :nth-child(4)')
    .should('exist')
    .should('be.visible')

    //Second Text Under Img
    cy.get('[style="padding: 32px 350px 0px;"] > :nth-child(5)')
    .should('exist')
    .should('be.visible')

    //Third Text Under Img
    cy.get('[style="padding: 32px 350px 0px;"] > :nth-child(6)')
    .should('exist')
    .should('be.visible')

   //Fourth Text Under Img
   cy.get('[style="padding: 32px 350px 0px;"] > :nth-child(7)')
   .should('exist')
    .should('be.visible')













  })
})