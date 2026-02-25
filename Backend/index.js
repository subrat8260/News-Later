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
    origin: ["http://localhost:5173", "https://news-later-eta.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(userRouter);
app.use(newsRouter);
const uri = `${process.env.MONGO_URI}`;

mongoose
  .connect(uri)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server is listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  });
