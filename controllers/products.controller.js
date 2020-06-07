const { fetchProducts } = require("../models/products.model");

exports.getProducts = (req, res, next) => {
  const queries = req.query;
  fetchProducts(queries)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => next(err));
};

// exports.postProduct("/api/products", (req, res) => {
//   const product = new Product({
//     _id: req.body._id,
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     type: req.body.type,
//     department: req.body.department,
//     weight: req.body.weight,
//   });
//   product
//     .save(product)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the product.",
//       });
//     });
// });
