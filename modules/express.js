//dependences:
const mongoose = require("mongoose");
const ClientModel = require("../src/models/client.model");
const express = require("express");

//config:
const app = express();
app.use(express.json());
const port = 8080;

//routes
app.post("/clients", async (req, res) => {
  try {
    const verify = await ClientModel.findByFullName(
      req.body.name,
      req.body.surname
    );
    if (verify.length !== 0) {
      res.status(500).send("Já existe um cliente com esse nome cadastrado");
    } else {
      const newClient = await ClientModel.create(req.body);
      res.status(201).send(`Cliente cadastrado com sucesso!
        Dados do novo cliente:
        ID:${newClient._id}
        Nome:${newClient.name}
        Sobrenome:${newClient.surname}
        `);
    }
  } catch (error) {
    res.status(500).send(`Erro: ${error.message}`);
  }
});

app.get("/clients", async (req, res) => {
  try {
    const getAllClients = await ClientModel.find({});
    res.status(200).json(getAllClients);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/clients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const verify = await ClientModel.findById(id);
    if (verify != null) {
      const getClientById = await ClientModel.findById(id);
      res.status(200).json(getClientById);
    } else {
      res.status(500).send("Cadastro não encontrado!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/clients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const verify = await ClientModel.findById(id);
    if (verify != null) {
      const updateById = await ClientModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).send("Cadastro atualizado!");
    } else {
      res.status(500).send("Cadastro não encontrado!");
    }
  } catch (error) {
    res.stauts(500).send(error.message);
  }
});

app.delete("/clients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const verify = await ClientModel.findById(id);
    if (verify != null) {
      const deleteById = await ClientModel.findByIdAndRemove(id);
      res.status(200).send("Cadastro Excluido!");
    } else {
      res.status(500).send("Cadastro não encontrado!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, (error) => {
  try {
    console.log("Iniciando servidor HTTP...");
    console.log(
      `Servidor HTTP iniciado com sucesso! Ouvindo na porta: ${port}`
    );
  } catch (error) {
    console.log("Erro ao iniciar servidor: ", error);
  }
});
