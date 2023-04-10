const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicketById,
} = require("../controllers/ticketController");
const router = express.Router();
const { AuthenticateUser } = require("../middleware/auth");

//get your profile data
router.post("/create", AuthenticateUser, createTicket);

// get all tickets
router.get("/all", AuthenticateUser, getAllTickets);

// get ticket by id
router.get("/:id", AuthenticateUser, getTicketById);

module.exports = router;
