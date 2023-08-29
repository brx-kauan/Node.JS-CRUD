const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    statics: {
      findByFullName(name, surname) {
        return this.find({
          name: new RegExp(name, "i"),
          surname: new RegExp(surname, "i"),
        });
      },
    },
  }
);
const ClientModel = mongoose.model("client", clientSchema);
module.exports = ClientModel;
