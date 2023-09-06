const express = require("express");
const router = express.Router();
const { allUsers, register, signin } = require("../Controller/controller");

router.get("/account/allUsers", allUsers);
router.post("/account/register", register);
router.post("/account/login", signin);

module.exports = router;