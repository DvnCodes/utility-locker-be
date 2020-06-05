const apiRouter = require("express").Router();
const productsRouter = require("./products.router");

apiRouter.use("/products", productsRouter);

module.exports = apiRouter;
