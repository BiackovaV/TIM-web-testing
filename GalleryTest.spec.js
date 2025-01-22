describe('Img And Text Test', () => {
  it('Pictures and Text', () => {
    cy.visit('http://localhost:3000/gallery')

//Picture 1
    cy.get('[style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 20px; margin-top: 50px;"] > :nth-child(1) > img')
    .should('exist')
    .should('be.visible')

    //Picture 2
    cy.get(':nth-child(2) > img')
    .should('exist')
    .should('be.visible')

//Picture 3
    cy.get(':nth-child(3) > img')
    .should('exist')
    .should('be.visible')

//Picture 4
    cy.get(':nth-child(4) > img')
    .should('exist')
    .should('be.visible')

    //Picture 5
    cy.get(':nth-child(5) > img')
    .should('exist')
    .should('be.visible')

    //Button num.1
    cy.get('[style="background-color: rgb(255, 95, 127); color: white; border: none; margin: 0px 5px; padding: 5px 10px; border-radius: 50%; cursor: pointer;"]')
    .should('exist')
    .should('be.visible')
    .should('contain','1')
    .click()

    //Button num.2
    cy.get('[style="display: flex; justify-content: center; margin-top: 10px;"] > :nth-child(2)')
    .should('exist')
    .should('be.visible')
    .should('contain','2')
    .click()

    //Picture 6
    cy.get('[style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 20px; margin-top: 50px;"] > :nth-child(1) > img')
    .should('exist')
    .should('be.visible')

   //Picture 7
    cy.get(':nth-child(2) > img')
    .should('exist')
    .should('be.visible')

    //Picture 8
    cy.get(':nth-child(3) > img')
    .should('exist')
    .should('be.visible')

    //Picture 9
    cy.get(':nth-child(4) > img')
    .should('exist')
    .should('be.visible')

    //Picture 10
    cy.get(':nth-child(5) > img')
    .should('exist')
    .should('be.visible')

    //Button num.3
    cy.get('[style="display: flex; justify-content: center; margin-top: 10px;"] > :nth-child(3)')
    .should('exist')
    .should('be.visible')
    .should('contain','3')
    .click()

    //Picture 11
    cy.get('[style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 20px; margin-top: 50px;"] > :nth-child(1) > img')
     .should('exist')
    .should('be.visible')

    //Picture 12
    cy.get(':nth-child(2) > img')
    .should('exist')
    .should('be.visible')

    //Picture 13
    cy.get(':nth-child(3) > img')
    .should('exist')
    .should('be.visible')

    //Picture 14
    cy.get(':nth-child(4) > img')
    .should('exist')
    .should('be.visible')

    //Picture 15
    cy.get(':nth-child(5) > img')
    .should('exist')
    .should('be.visible')

   //Text Galéria
   cy.get('h1')
   .should('exist')
    .should('be.visible')
    .should('contain','Galéria')




  })

  




})