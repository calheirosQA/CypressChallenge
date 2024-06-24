# Cypress VR Cartões

Este projeto utiliza o framework de testes Cypress para automatizar o processo de adicionar cartões VR ao carrinho de compras no site da VR.

## Estrutura do Projeto

### Diretórios e Arquivos

- **pageObjects/**: Contém os arquivos de definição das páginas, encapsulando os elementos e ações realizadas em cada página.
    - `homePage.js`: Definição e ações da página inicial.
    - `lojaPage.js`: Definição e ações da página da loja.
    - `cartPage.js`: Definição e ações da página do carrinho.

- **tests/**: Contém os arquivos de testes.
    - `addCartoesVR.spec.js`: Especificação do teste que cobre o cenário de adicionar cartões VR ao carrinho.

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/cypress-vr.git
