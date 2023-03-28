const Ticket = require("../models/ticket");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const AsyncErrorHandler = require("../middleware/AsyncErrorHandler");
const sendToken = require("../utils/jwtToken");
// const cloudinary = require("cloudinary");
const Company = require("../models/company");

//login user
exports.createTicket = AsyncErrorHandler(async (req, res, next) => {
  try {
    const newTicket = new Ticket({
      ticket_title: req.body.ticket_title,
      ticket_desc: req.body.ticket_desc,
      ticket_type: req.body.ticket_type,
      ticket_priority: req.body.ticket_priority,
      ticket_status: "Pending",
      ticket_requester: req.user._id,
      ticket_attachments: req.body.ticket_attachments || [],
      ticket_comments: req.body.ticket_comments || [],
    });

    const savedTicket = await newTicket.save();

    res.status(201).json({
      status: "success",
      data: {
        ticket: savedTicket,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// const cloudinary = require('cloudinary').v2;

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// // Upload file to Cloudinary
// const result = await cloudinary.uploader.upload(req.file.path);

// // Save the public ID in the ticket's attachment
// const attachment = {
//   file_name: req.file.originalname,
//   file_url: result.secure_url,
//   cloudinary_id: result.public_id
// };
// ticket.attachments.push(attachment);
