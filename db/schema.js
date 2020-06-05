const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: { type: String, required: true, max: 30 },
  name: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  price: { type: Object, required: true },
  type: { type: String, required: true, max: 100 },
  department: { type: String, required: true, max: 100 },
  weight: { type: String, required: true, max: 30 },
});

//Export model
module.exports = mongoose.model("Product", ProductSchema);
