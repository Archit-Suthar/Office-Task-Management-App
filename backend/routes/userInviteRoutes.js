const express = require("express");
const { AuthenticateUser, AuthorizeRole } = require("../middleware/auth");
const { addUserToCompany } = require("../controllers/userInviteController");
const router = express.Router();

router.post(
  "",
  AuthenticateUser,
  AuthorizeRole("company_owner", "admin"),
  addUserToCompany
);

module.exports = router;
