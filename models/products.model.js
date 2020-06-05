const Product = require("../db/schema");

exports.fetchProducts = ({ sortby, price }) => {
  return Product.find({})
    .sort([
      [sortby, "asc"],
      ["price", price],
    ])
    .then((products) => {
      if (!products) {
        return Promise.reject({ status: 404, msg: "no products found" });
      }
      return products;
    });
};
