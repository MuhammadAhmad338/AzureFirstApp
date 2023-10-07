const express = require("express");
const requireAuth = require("../Middleware/requireAuth");
const commentRouter = express.Router();
const { getProductCommnets, postProductComments } = require("../Controller/commentsController");
// require auth for all workout routes
commentRouter.use(requireAuth);
commentRouter.get("/", getProductCommnets);
commentRouter.post("/addComment", postProductComments);

module.exports = commentRouter;
