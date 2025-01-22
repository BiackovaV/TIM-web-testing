describe('Contact us and Map Testing', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/contact'); 
  });

  it('should fill out the form and submit', () => {

    //Vase meno box 
 cy.get('input[placeholder= "Vaše meno"]')
 .type('Daniel Dzvoník')
 .should('have.value','Daniel Dzvoník')

 //Vas email
 cy.get('input[placeholder= "Váš email"]')
 .type('testing.tester@test.com')
 .should('have.value','testing.tester@test.com')

 //Vasa sprava
 cy.get('textarea[placeholder="Vaša správa"]')
 .type('Testing message from Daniel')
 .should('have.value','Testing message from Daniel')

 //Odoslat button
 cy.get('[style="justify-content: flex-end; width: 100%; display: flex;"] > .MuiButtonBase-root')
 .should('exist')
 .should('be.visible')
 cy.contains('Odoslať').click()

 //cy.on('window:alert', (text) => {
  //expect(text).to.contains('Formulár bol úspešne odoslaný'); // Prispôsobiť podľa aplikácie

  it('should display the map correctly', () => {
    // Map loading test
    cy.get('.mapboxgl-canvas')
      .should('be.visible')

    // Verify if pointer is placed on the map
    cy.get('.mapboxgl-marker') 
      .should('exist')
      .should('be.visible')


      cy.get('.mapboxgl-popup-content')
      .click()
      should('contain.text','Random locatioň')
  });








})})