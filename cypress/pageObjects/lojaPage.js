class LojaPage {
    elements = {
        cartoesVrBtn: () => cy.get('#btn-selecionar-modalidade-avulso'),
        productSelector: () => cy.contains('Auto'),
        quantityInputSelector: () => cy.get('#produto-auto-quantidade'),
        valueInputSelector: () => cy.get('#produto-auto-valor'),
        addToCartBtn: () => cy.get('#btn-adicionar-carrinho-auto'),
        closeBtn: () => cy.get('[class="close-button"] button'),
        redirectToCartBtn: () => cy.get('#btn-seguir-carrinho-auto'),
    };

    checkAndCloseModal() {
        cy.wait(5000).then(() => {
            cy.get('body').then($body => {
                if ($body.find('.modal-box__container').length > 0) {
                    cy.get('.modal-box__container').within(() => {
                        cy.get('.close-button').click();
                    });
                } else {
                    cy.log('Modal não encontrado.');
                }
            });
        });
    }

    clickCartoesVr() {
        cy.get('#sc_terms-consent').click();
        this.elements.cartoesVrBtn().scrollIntoView().click();
    }

    addRandomProductToCart() {
        this.elements.productSelector().scrollIntoView();
        this.elements.productSelector().then($product => {
            const randomQuantity = Math.floor(Math.random() * 10) + 1;
            const randomValue = (Math.random() * 1000).toFixed(2);

            this.elements.quantityInputSelector().clear().type(randomQuantity.toString());
            cy.wrap(randomQuantity).as('quantidadeCartoes');

            this.elements.valueInputSelector().clear().type(randomValue);
            cy.wrap(randomValue).as('valorCredito');

            this.elements.addToCartBtn().click();
        });
    }

    redirectToCart() {
        this.elements.redirectToCartBtn().scrollIntoView().click();

        cy.get('input[name="empresaRh.cnpjRh"]').type("41.752.527/0001-50");
        cy.get('input[name="empresaRh.contato.nomeContato"]').type("Thiago Calheiros");
        cy.get('input[name="empresaRh.contato.emailContato"]').type("strikethiago@hotmail.com");
        cy.get('input[name="empresaRh.contato.telefoneContato"]').type("(11) 94873-0870");
        cy.get('#btn-modal-ver-resultado').scrollIntoView().click();
    }
}

const loja = new LojaPage();
export default loja;
