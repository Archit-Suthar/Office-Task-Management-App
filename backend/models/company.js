const mongoose = require("mongoose");
const validator = require("validator");

//user schema
const companySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "Please enter a valid name"],
    maxlength: [50, "Cannot exceed 50 characters"],
    minlength: [2, "Atleast  2 characters are required"],
  },
  company_website: {
    type: String,
    required: true,
    validate: [validator.isURL, "Please Enter a valid URL"],
  },
  company_contact: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, "Please Enter a valid Contact"],
  },
  company_address: {
    type: String,
    required: true,
  },
  company_industry: {
    type: String,
    default: "Software",
  },
  company_owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  employees: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

companySchema.set("timestamps", true);

module.exports = mongoose.model("Company", companySchema);
