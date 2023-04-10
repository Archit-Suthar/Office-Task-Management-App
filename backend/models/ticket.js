const mongoose = require("mongoose");
const validator = require("validator");

//user schema
const ticketSchema = new mongoose.Schema({
  ticket_title: {
    type: String,
    required: [true, "Please enter a valid name"],
    maxlength: [30, "Cannot exceed 30 characters"],
    minlength: [2, "Atleast  2 characters are required"],
  },
  ticket_desc: {
    type: String,
    required: true,
  },
  ticket_type: {
    type: String,
    required: true,
  },
  ticket_priority: {
    type: String,
    required: true,
    default: "Low",
  },
  ticket_status: {
    type: String,
    default: "Pending",
    // Possible status : Pending, In Progress, Completed, Rejected
  },
  ticket_ofCompany: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
  ticket_requester: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  ticket_assigned_to: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: null,
  },
  ticket_assign_date: {
    type: Date,
    default: null,
  },
  ticket_comments: [
    {
      text: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
  ticket_attachments: [
    {
      file_name: {
        type: String,
        required: true,
      },
      file_url: {
        type: String,
        required: true,
      },
      cloudinary_id: {
        type: String,
        required: true,
      },
    },
  ],
});

ticketSchema.set("timestamps", true);

module.exports = mongoose.model("Ticket", ticketSchema);
