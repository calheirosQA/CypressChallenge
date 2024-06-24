import home from "../pageObjects/homePage";
import loja from "../pageObjects/lojaPage";
import cart from "../pageObjects/cartPage";

describe('Cenário: Adicionar cartões VR no carrinho', () => {
    before(() => {
        cy.setup();
        home.visit();
    });

    it('Deve acessar a loja e adicionar uma quantidade aleatória de cartões do produto "Auto" no carrinho e validar de a quantidade e o valor está correto', () => {
        home.stubWindowOpen();
        home.clickCompreOnline();

        loja.checkAndCloseModal();
        loja.clickCartoesVr();
        loja.addRandomProductToCart();

        loja.redirectToCart();
        cart.validarValores();
    });
});
