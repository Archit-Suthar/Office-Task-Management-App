const express = require("express");
const { registerCompanyUser } = require("../controllers/companyControllers");
const router = express.Router();

//register user
router.post("/register", registerCompanyUser);

module.exports = router;
