const express = require("express");
const productRouter = express.Router();
const { allProductsAvailable, productsByCategory, searchProducts, filterByCategory } = require("../Controller/productController");

productRouter.get("/allProducts", allProductsAvailable);
productRouter.get("/productByCategory", productsByCategory);
productRouter.get("/search", searchProducts);
productRouter.get("/category", filterByCategory);

module.exports = productRouter;