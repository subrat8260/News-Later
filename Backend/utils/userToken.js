const JWT = require("jsonwebtoken");
const SECRATE_KEY = process.env.SECRATE_KEY;
exports.userAccessToken = (userId) => {
  return JWT.sign({ userId }, SECRATE_KEY, { expiresIn: "15m" });
};
exports.userRefreshToken = (userId) => {
  return JWT.sign({ userId }, SECRATE_KEY, { expiresIn: "7d" });
};
