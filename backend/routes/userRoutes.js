const express = require("express");
const {
  loginUser,
  logoutUser,
  getUserDetails,
  updateProfile,
  updatePassword,
  getAllUsersOfCompany,
} = require("../controllers/usersController");
const router = express.Router();
const { AuthenticateUser } = require("../middleware/auth");

// get list of users
router.get("/all", AuthenticateUser, getAllUsersOfCompany);

//login user
router.post("/login", loginUser);

//logout user
router.get("/logout", logoutUser);

//get your profile data
router.get("/myprofile", AuthenticateUser, getUserDetails);

//update profile
router.put("/myprofile/update", AuthenticateUser, updateProfile);

router.put("/change/password", AuthenticateUser, updatePassword);

module.exports = router;
