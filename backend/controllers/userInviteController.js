const nodemailer = require("nodemailer");
const User = require("../models/user");

exports.addUserToCompany = async (req, res, next) => {
  try {
    const { user_name, user_email, role } = req.body;

    // Check if user with email already exists
    const existingUser = await User.findOne({ user_email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User with this email already exists",
      });
    }

    // Generate a random password for the user
    const password = Math.random().toString(36).slice(-8);

    // Create a new user
    const newUser = await User.create({
      user_name,
      user_email,
      user_password: password,
      company: req.user.company,
      role: role || "company_user",
    });

    // Send invitation email to the user
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: user_email,
      subject: "Invitation to join our company",
      html: `
        <p>Hello ${user_name},</p>
        <p>You have been invited to join our company on our ticket management system. Your temporary password is:</p>
        <p><strong>${password}</strong></p>
        <p>Please click the button below to accept the invitation:</p>
        <div style="text-align: center;">
          <a href="${process.env.FRONTEND_URL}/user/login">
            <button style="background-color: blue; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Accept Invitation</button>
          </a>
        </div>
        <p>If you did not request this invitation, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      status: "success",
      message: "User added to company successfully. Invitation email sent.",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};
