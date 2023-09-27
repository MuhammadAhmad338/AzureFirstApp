const express = require("express");
const productRouter = express.Router();
const { allProductsAvailable, productsByCategory, searchLiveProducts, filterByCategory } = require("../Controller/productController");

productRouter.get("/allProducts", allProductsAvailable);
productRouter.get("/productByCategory", productsByCategory);
productRouter.get("/search", searchLiveProducts);
productRouter.get("/category", filterByCategory);

module.exports = productRouter;