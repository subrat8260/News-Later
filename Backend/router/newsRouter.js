const express = require("express");
const newsRouter = express.Router();
const newsController = require("../controller/newsController");

newsRouter.get("/", (req, res) => {
  return res.send("Hey this is Home Page!");
});
newsRouter.get("/api/news", newsController.getNews);

module.exports = newsRouter;
