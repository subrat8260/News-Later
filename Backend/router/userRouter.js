const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.post("/login", userController.longinForm);
userRouter.post("/signup", userController.signupForm);
userRouter.post("/logout", userController.userLogout);
module.exports = userRouter;
