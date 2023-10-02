const express = require("express");
const commentRouter = express.Router();
const {
  getProductCommnets,
  postProductComments,
} = require("../Controller/commentsController");

commentRouter.get("/", getProductCommnets);
commentRouter.post("/addComment", postProductComments);

module.exports = commentRouter;
