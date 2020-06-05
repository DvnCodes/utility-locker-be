const productsRouter = require("express").Router();
const { getProducts } = require("../controllers/products.controller");

productsRouter.route("/").get(getProducts);

module.exports = productsRouter;
