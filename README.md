# 🚀 Exemplos de Testes com Cypress

Este repositório contém exemplos de testes automatizados utilizando **Cypress**, ele foi criado com o intuito de mostrar um pouco dos meus estudos com o framework, onde pretendo atualizá-lo
cada vez mais

## 📦 Instalação

Para rodar os testes localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/KervinLima/AutomacoesCypress
   cd AutomacoesCypress-main
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Abra o Cypress**:
   ```bash
   npx cypress open
   ```

4. **Executar os testes em modo headless**:
   ```bash
   npx cypress run
   ```

---

## 📁 Estrutura do Projeto

```
AutomacoesCypress-main
│── cypress/
│   ├── e2e/                  # Testes de exemplo
│   │   ├── cadastro.cy.js    # Teste de cadastro de usuário
│   │   ├── comprar.cy.js     # Teste de fluxo de compra
│   │   ├── login.cy.js       # Teste de login
│   ├── e2e/api               # Testes de exemplo
│   ├── fixtures/             # Dados mockados para os testes
│   ├── support/              # Comandos e funções auxiliares
│── cypress.config.js         # Configuração do Cypress
│── package.json              # Dependências do projeto
│── README.md                 # Documentação do repositório
```
---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Mocha](https://mochajs.org/) - Estrutura de testes integrada ao Cypress
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções usada pelo Cypress

---

## 📄 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

