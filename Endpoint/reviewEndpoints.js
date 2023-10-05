const express = require("express");
const reviewRouter = express.Router();
const {
  getProductReviews,
  addProductReviews,
} = require("../Controller/reviewController");

reviewRouter.get("/", getProductReviews);
reviewRouter.get("/addReviews", addProductReviews);

module.exports = reviewRouter;
