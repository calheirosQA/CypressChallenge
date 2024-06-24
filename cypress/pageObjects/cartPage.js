class CartPage {
    elements = {
        valorPorCartao: () => cy.get('.product-information__value').contains('Valor por cartão:').next('span'),
        quantidadeCartoes: () => cy.get('.product-information__amount').contains('Quantidade cartões:').next('span'),
    };

    validarValores() {
        cy.get('@quantidadeCartoes').then(qtde => {
            cy.get('@valorCredito').then(valor => {
                const qtdeNormalized = parseInt(qtde, 10); // Converte para número, removendo zeros à esquerda

                this.elements.quantidadeCartoes().invoke('text').then(text => {
                    const cartoesTextNormalized = parseInt(text, 10);
                    expect(cartoesTextNormalized).to.eq(qtdeNormalized);
                });

                function normalizeValue(value) {
                    return value.replace('R$', '').replace(',', '.').trim();
                }

                this.elements.valorPorCartao().invoke('text').then(text => {
                    const actualValue = normalizeValue(text);
                    const expectedValue = normalizeValue(valor);
                    expect(actualValue).to.equal(expectedValue);
                });
            });
        });
    }
}

const cart = new CartPage();
export default cart;
