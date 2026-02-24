const JWT = require("jsonwebtoken");
const User = require("../models/userSchema");
const SECRATE_KEY = process.env.SECRATE_KEY;
exports.Auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No Token Provided" });
    }
    const token = authHeader.split(" ")[1];
    const decode = JWT.verify(token, SECRATE_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or Expire Token !" });
  }
};
