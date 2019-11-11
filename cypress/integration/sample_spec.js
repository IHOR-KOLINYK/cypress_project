describe('Test suite', () => {

    beforeEach(() => {
        cy.visit("https://www.google.com.ua");
    });



    it('first test', () => {
        cy.xpath("//*[@class='gLFyf gsfi']").type("first test");
        cy.xpath("//*[@class='gNO89b']").click();
        expect(cy.xpath("//h3[text()='Test F.I.R.S.T - By - Hacker Noon']")).to.be.exist();
    });


    it('second test', () => {
        cy.xpath("//*[@class='gLFyf gsfi']").type("second test");
        cy.xpath("//*[@class='gNO89b']").click();
        expect(cy.xpath("//h3[text()='Test F.I.R.S.T - By - Hacker Noon']")).to.be.exist();
    });


    it('third test', () => {
        cy.xpath("//*[@class='gLFyf gsfi']").type("third test");
        cy.xpath("//*[@class='gNO89b']").click();
        expect(cy.xpath("//h3[text()='Test F.I.R.S.T - By - Hacker Noon']")).to.be.exist();
    });


});
