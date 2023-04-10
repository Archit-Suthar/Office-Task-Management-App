const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user schema
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "Please enter a valid name"],
    maxlength: [30, "Cannot exceed 30 characters"],
    minlength: [2, "Atleast  2 characters are required"],
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  user_password: {
    type: String,
    required: true,
    minlength: [6, "Atleast 6 characters are required"],
    select: false,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
  role: {
    type: String,
    default: "user",
    // admin > company_owner > company_user
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.set("timestamps", true);

userSchema.pre("save", async function (next) {
  if (!this.isModified("user_password")) {
    return next();
  }

  this.user_password = await bcrypt.hash(this.user_password, 10);
  next();
});

//JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//password comparision
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.user_password);
};

//forgot password feature

module.exports = mongoose.model("User", userSchema);
