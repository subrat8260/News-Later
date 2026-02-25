const User = require("../models/userSchema");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Utils = require("../utils/userToken");
exports.longinForm = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .send("Unauthorized Access ! Please check the Email Address.");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).send("Wrong Password !");
  }
  // Create the ACCESS & REFRESH Token
  const AccessToken = Utils.userAccessToken(user._id);
  const RefreshToken = Utils.userRefreshToken(user._id);
  console.log({ AccessToken, RefreshToken });
  //save the token in the cookies
  res.cookie("AccessToken", AccessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 1000 * 60 * 15,
  });
  res.cookie("RefreshToken", RefreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  console.log("User Login successfuly !");
  res.json({ message: "User Login successfully !" });
};
exports.signupForm = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res
      .status(401)
      .send(
        "UnAuthorized Credential ! Please Enter correct password & confirm password",
      );
  }
  const passwordHashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: passwordHashed });
  await user.save();

  console.log("User Singup Successfully");
  res.json("User Signup Successfully !");
};
exports.userLogout = async (req, res) => {
  res.clearCookie("AccessToken");
  res.clearCookie("RefreshToken");
  return res.json({ message: "Logout successfully !" });
};
