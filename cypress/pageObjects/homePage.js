class HomePage {
    elements = {
        compreOnlineBtn: () => cy.get('#buttonCompreOnline'),
    };

    visit() {
        cy.visit('/');
    }

    clickCompreOnline() {
        this.elements.compreOnlineBtn().click();
    }

    stubWindowOpen() {
        cy.window().then((win) => {
            cy.stub(win, "open")
                .callsFake((url) => {
                    return win.open.wrappedMethod.call(win, url, "_self");
                })
                .as("open");
        });
    }
}

const home = new HomePage();
export default home;
