describe('Schedule Testing', () => {
  it('Text,Boxes,Buttons,Contact,Checkbox', () => {
    cy.visit('http://localhost:3000/schedule')

    //Rozvrh hodín Text test
    cy.get('[style="font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > h1')
    .should('exist')
    .should('be.visible')
    .should('contain','Rozvrh hodín')

    //Second Text Test
    cy.get('#root > :nth-child(2) > :nth-child(2)')
    .should('exist')
    .should('be.visible')
    .should('contain','Vitajte na stránke ponuky kurzov. Prezrite si jednotlivé kurzy a zaregistrujte Vaše dieťa hneď !')

    //Invisible Box Test
    cy.get('#root > :nth-child(2) > :nth-child(3)')
    .should('exist')

    //First Box Test
    cy.get('#root > :nth-child(2) > :nth-child(3)')
    .should('exist')
    .should('be.visible')
    .should('contain','DVK - Detská veková kategória','od 3-6 rokov. --> Každý štvrtok 17:00-18:00','15€ Mesačne')

    //Second Box Test
    cy.get('#root > :nth-child(2) > :nth-child(3) > :nth-child(2)')
    .should('exist')
    .should('be.visible')
    .should('contain','JVK - Juniorská veková kategória','od 6-11 rokov. --> Každý utorok 16:50-17:50 a štvrtok 18:00-19:0','25€ Mesačne')

    //Third Box Test
    cy.get('#root > :nth-child(2) > :nth-child(3) > :nth-child(3)')
    .should('exist')
    .should('be.visible')
    .should('contain','HVK - Hlavná veková kategória','od 12 + rokov. --> Každý pondelok a stredu 16:30-18:30','35€ Mesačne')   
    
    //Button num.1
    cy.get(':nth-child(2) > :nth-child(4) > div > :nth-child(1)').click()
    .should('exist')
    .should('be.visible')
    
    //Button num.2
    cy.get(':nth-child(4) > div > :nth-child(2)').click()
    .should('exist')
    .should('be.visible')

    //Button num.3
    cy.get(':nth-child(4) > div > :nth-child(3)').click
    //.should('exist')
    //.should('be.visible')


    //Contact Text Test 
    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > h1')
    .should('exist')
    .should('be.visible')
    .should('contain','Vaše kontaktné údaje')


    //Text box tests
    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > :nth-child(3)')
    .should('exist')
    .should('be.visible') 
    .should('contain','Meno dieťaťa')

    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > :nth-child(5)')
    .should('exist')
    .should('be.visible')
    .should('contain','Váš e-mail')

    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > :nth-child(7)')
    .should('exist')
    .should('be.visible')
    .should('contain','Vaše telefónne číslo')


    //Testing of text fields
    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > [type="text"]')
    .type('Testing name');

    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > :nth-child(6)')
    .type('testing@email.com');
    
    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > :nth-child(8)')
    .type('0915549985');
     
    //Checkbox test
    cy.get('.MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
    .check()
    .should('be.checked');

    //Submit button test
    cy.get('[style="height: 70svh; margin-top: -80px; font-size: 2rem; font-family: Helvetica, sans-serif; text-align: center; color: rgb(194, 14, 77);"] > .MuiButton-root')
    .should('exist')
    .should('be.visible')
    .should('contain','Odoslať').click()

    
    
    
  







  })
})