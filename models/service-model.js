const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    service: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // Change type to Number
    provider: { type: String, required: true },
  },
  { collection: "Services" }
); // Specify existing collection name

const Service = model("Service", serviceSchema);

module.exports = Service;
