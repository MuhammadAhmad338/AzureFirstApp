const express = require("express");
const requireAuth = require("../Middleware/requireAuth");
const productRouter = express.Router();
const { allProductsAvailable, productsByCategory, searchLiveProducts, filterByCategory } = require("../Controller/productController");
// require auth for all workout routes
productRouter.use(requireAuth);
productRouter.get("/allProducts", allProductsAvailable);
productRouter.get("/productByCategory", productsByCategory);
productRouter.get("/search", searchLiveProducts);
productRouter.get("/category", filterByCategory);

module.exports = productRouter;