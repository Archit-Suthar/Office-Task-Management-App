const express = require("express");
const { createTicket } = require("../controllers/ticketController");
const router = express.Router();
const { AuthenticateUser } = require("../middleware/auth");

//get your profile data
router.post("/create", AuthenticateUser, createTicket);

module.exports = router;
