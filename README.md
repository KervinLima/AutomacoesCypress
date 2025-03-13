# 🚀 Exemplos de Testes com Cypress

Este repositório contém exemplos de testes automatizados utilizando **Cypress**, abordando diferentes cenários e boas práticas para testes end-to-end (E2E).

## 📦 Instalação

Para rodar os testes localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/cypress-examples.git
   cd cypress-examples
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
cypress-examples/
│── cypress/
│   ├── e2e/                 # Testes de exemplo
│   │   ├── login.cy.js       # Teste de login
│   │   ├── cadastro.cy.js    # Teste de cadastro de usuário
│   │   ├── checkout.cy.js    # Teste de fluxo de compra
│   ├── fixtures/             # Dados mockados para os testes
│   ├── support/              # Comandos e funções auxiliares
│── cypress.config.js         # Configuração do Cypress
│── package.json              # Dependências do projeto
│── README.md                 # Documentação do repositório
```

---

## 🧪 Exemplos de Testes

### 🔹 **Teste de Login**
Arquivo: `cypress/e2e/login.cy.js`
```javascript
describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://exemplo.com/login');
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});
```

### 🔹 **Teste de Cadastro**
Arquivo: `cypress/e2e/cadastro.cy.js`
```javascript
describe('Teste de Cadastro', () => {
  it('Deve cadastrar um novo usuário', () => {
    cy.visit('https://exemplo.com/cadastro');
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao@exemplo.com');
    cy.get('#senha').type('senhaSegura');
    cy.get('#confirmarSenha').type('senhaSegura');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
});
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

---

Se precisar de mais alguma coisa, me avise! 🚀

