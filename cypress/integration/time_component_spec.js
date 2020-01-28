
describe("Time component", function () {
  it("Populates time zone chooser", function () {
    // arrange

    cy.visit("/time");
    
   // act - Select a time zone
   cy.get("select").select("Africa/Cairo").should("have.value","4")

    // assert - text should contain date information
   cy.get('.svelte-1uhnsl8').should("contain", "2020");  // Test will fail next year
  })
});