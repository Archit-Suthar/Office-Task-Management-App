const Ticket = require("../models/ticket");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const AsyncErrorHandler = require("../middleware/AsyncErrorHandler");
const sendToken = require("../utils/jwtToken");
// const cloudinary = require("cloudinary");
const Company = require("../models/company");

//create ticket - (working)
exports.createTicket = AsyncErrorHandler(async (req, res, next) => {
  try {
    const newTicket = new Ticket({
      ticket_title: req.body.ticket_title,
      ticket_desc: req.body.ticket_desc,
      ticket_type: req.body.ticket_type,
      ticket_priority: req.body.ticket_priority,
      ticket_status: "Pending",
      ticket_requester: req.user._id,
      ticket_ofCompany: req.user.company,
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

// - (working)
exports.getAllTickets = AsyncErrorHandler(async (req, res, next) => {
  const tickets = await Ticket.find({ ticket_ofCompany: req.user.company });
  res.status(200).json({
    status: "success",
    data: {
      tickets,
    },
  });
});

// get ticket by id
exports.getTicketById = AsyncErrorHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return next(new Error("Ticket not found"));
  }

  res.status(200).json({
    status: "success",
    data: {
      ticket,
    },
  });
});

// - (not checked )
exports.updateTicket = AsyncErrorHandler(async (req, res, next) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      ticket,
    },
  });
});

// - (not checked )
exports.deleteTicket = AsyncErrorHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return next(new Error("Ticket not found"));
  }
  if (
    req.user._id.toString() !== ticket.ticket_requester.toString() &&
    req.user.role !== "admin"
  ) {
    return next(new Error("You are not authorized to delete this ticket"));
  }
  await ticket.remove();
  res.status(204).json({
    status: "success",
    data: null,
  });
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
