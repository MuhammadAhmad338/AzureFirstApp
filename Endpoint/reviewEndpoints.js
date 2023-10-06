const express = require("express");
const reviewRouter = express.Router();
const {
  getProductReviews,
  addProductReviews,
} = require("../Controller/reviewController");

reviewRouter.get("/", getProductReviews);
reviewRouter.post("/addReviews", addProductReviews);

module.exports = reviewRouter;
