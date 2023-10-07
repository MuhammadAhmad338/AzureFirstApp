const express = require("express");
const router = express.Router();
const { allUsers, register, signin } = require("../Controller/controller");
const { searchProducts } = require("../Controller/productController");

router.get("allUsers", allUsers);
router.get("/search", searchProducts);
router.post("/register", register);
router.post("/login", signin);

module.exports = router;