const express = require("express");
const requireAuth = require("../Middleware/requireAuth");
const reviewRouter = express.Router();
const {
  getProductReviews,
  addProductReviews,
} = require("../Controller/reviewController");

// require auth for all workout routes
reviewRouter.use(requireAuth);
reviewRouter.get("/", getProductReviews);
reviewRouter.post("/addReviews", addProductReviews);

module.exports = reviewRouter;
