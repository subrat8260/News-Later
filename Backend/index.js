require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const newsRouter = require("./router/newsRouter");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(userRouter);
app.use(newsRouter);
//"mongodb+srv://Subrat123:Subrat123@cluster0.2dctr64.mongodb.net/?appName=Cluster0";
const uri =
  "mongodb+srv://Subrat123:Subrat123@cluster0.ifggiov.mongodb.net/?appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`server is listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  });
