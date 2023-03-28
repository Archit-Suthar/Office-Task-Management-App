const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const AsyncErrorHandler = require("../middleware/AsyncErrorHandler");
const sendToken = require("../utils/jwtToken");
const Company = require("../models/company");
const validator = require("validator");

//register company-user
exports.registerCompanyUser = AsyncErrorHandler(async (req, res) => {
  const {
    company_name,
    company_website,
    company_contact,
    company_address,
    company_industry,
    user_name,
    user_email,
    user_password,
  } = req.body;

  // Validate company details
  const companyErrors = {};
  if (!validator.isLength(company_name, { min: 2, max: 50 })) {
    companyErrors.company_name =
      "Company name must be between 2 and 50 characters";
  }
  if (!validator.isURL(company_website)) {
    companyErrors.company_website = "Please enter a valid URL";
  }
  if (!validator.isMobilePhone(company_contact)) {
    companyErrors.company_contact = "Please enter a valid phone number";
  }
  if (!validator.isLength(company_address, { min: 5 })) {
    companyErrors.company_address =
      "Company address must be at least 5 characters long";
  }
  if (Object.keys(companyErrors).length > 0) {
    return res.status(400).json({ errors: companyErrors });
  }

  // Validate user details
  const userErrors = {};
  if (!validator.isEmail(user_email)) {
    userErrors.user_email = "Please enter a valid email address";
  }
  if (!validator.isLength(user_password, { min: 6 })) {
    userErrors.user_password = "Password must be at least 6 characters long";
  }
  if (Object.keys(userErrors).length > 0) {
    return res.status(400).json({ errors: userErrors });
  }

  // Create user document and save to database
  const user = await User.create({
    user_name,
    user_email,
    user_password,
    role: "company_owner",
  });

  // Create company document and save to database
  const company = await Company.create({
    company_name,
    company_website,
    company_contact,
    company_address,
    company_industry,
    company_owner: user._id,
    employees: [user._id],
  });

  sendToken(user, 201, res);
});
