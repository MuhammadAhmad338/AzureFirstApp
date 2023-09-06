const express = require("express");
const productRouter = express.Router();
const { allProductsAvailable, productsByCategory } = require("../Controller/productController");

productRouter.get("/allProducts", allProductsAvailable);
productRouter.get("/productByCategory", productsByCategory);

module.exports = productRouter