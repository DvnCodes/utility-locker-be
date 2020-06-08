const { fetchProducts } = require("../models/products.model");

exports.getProducts = (req, res, next) => {
  const queries = req.query;
  fetchProducts(queries)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => next(err));
};
