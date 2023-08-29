# Projeto de CRUD em Node.js

Este é um projeto simples de CRUD (Create, Read, Update, Delete) em Node.js, demonstrando a criação, leitura, atualização e exclusão de dados em um banco de dados. O projeto utiliza o Node.js juntamente com o Express.js para a criação das rotas e manipulação das requisições.

## 📗 Funcionalidades

- **Criar**: Adicionar registros ao banco de dados.
- **Ler**: Recuperar informações existentes do banco de dados.
- **Atualizar**: Modificar dados existentes no banco de dados.
- **Excluir**: Remover registros do banco de dados.

## 📘 Tecnologias Utilizadas

- Node.js
- Express.js
- Banco de Dados: MongoDB

## 📕 Configuração

1. Certifique-se de ter o Node.js instalado. Você pode baixá-lo em https://nodejs.org/.
2. Clone este repositório: `git clone https://github.com/brx-kauan/Node.JS-CRUD.git`
3. Navegue até o diretório do projeto: `cd Node.JS-CRUD`
4. Instale as dependências: `npm install`
5. Configure o banco de dados de acordo com as instruções do arquivo `connect.js`.
6. Inicie o servidor: `npm start`
7. Acesse a aplicação em: `http://localhost:8080`

## 📙 Uso

Acesse as rotas através de um cliente HTTP (ex: Postman) ou utilize um front-end para interagir com as operações de CRUD.

Exemplos de Rotas:

- **GET /clients** Retorna todos os clientes cadastrados no banco de dados.
- **GET /clients/id** Retorna informações sobre um cliente em específico.
- **POST /clients** Adiciona um novo cliente ao banco de dados.
- **PATCH /clients/id** Atualiza as informações de um cliente.
- **DELETE /clients/id** Remove um item do banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
