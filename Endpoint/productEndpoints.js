const express = require("express");
const productRouter = express.Router();
const { allProductsAvailable, productsByCategory, searchProducts } = require("../Controller/productController");

productRouter.get("/allProducts", allProductsAvailable);
productRouter.get("/productByCategory", productsByCategory);
productRouter.get("/search", searchProducts);

module.exports = productRouter;