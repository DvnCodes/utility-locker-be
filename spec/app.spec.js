const mongoose = require("mongoose");
const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = require("chai");
chai.use(require("chai-sorted"));

const Products = require("../db/schema");

after((done) => {
  return mongoose.disconnect(done);
});

describe("/api/products", () => {
  it("GET 200: responds with an array of all products", () => {
    return request(app)
      .get("/api/products")
      .then((response) => {
        response.body.forEach((product) => {
          expect(product).to.have.keys(
            "_id",
            "department",
            "name",
            "description",
            "price",
            "type",
            "weight"
          );
        });
      });
  });
});

describe("/api/products?sortby=type", () => {
  it("GET 200: responds with an array of all products, sorted by type", () => {
    return request(app)
      .get("/api/products?sortby=type")
      .then((response) => {
        expect(response.body).to.be.sortedBy("type");
      });
  });
});

describe("/api/products?sortby=type", () => {
  it("GET 200: responds with an array of all products, sorted by type and descending by price in each group", () => {
    return request(app)
      .get("/api/products?sortby=type&price=desc")
      .then((response) => {
        expect(response.body).to.be.sortedBy("type", "price", {
          descending: true,
        });
      });
  });
});
