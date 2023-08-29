const mongose = require("mongoose");

const connectDb = async () => {
  console.log("Conectando com a database..");
  await mongose
    // Insira a url do banco de dados dentro das aspas do .connect("")
    // ex: .connect("mongodb+srv://user:password@restfulapi.ohpp2lb.mongodb.net/?retryWrites=true&w=majority")
    .connect("")
    .then(console.log("Conexão com a database efetuada com sucesso!"))
    .catch((error) => {
      console.log("Erro ao conectar com a database: ", error);
    });
};

module.exports = connectDb;
