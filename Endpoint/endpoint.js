const express = require("express");
const router = express.Router();
const { allUsers, register, signin } = require("../Controller/controller");
const { searchProducts } = require("../Controller/productController");

router.get("/account/allUsers", allUsers);
router.get("/search", searchProducts);
router.post("/account/register", register);
router.post("/account/login", signin);

module.exports = router;