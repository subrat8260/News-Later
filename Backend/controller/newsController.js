const { default: axios } = require("axios");

const key = process.env.GNEWS_API_KEY;

exports.getNews = async (req, res) => {
  try {
    const { category } = req.query; // read the news catagory
    const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        country: "in",
        lang: "en",
        category: category || "general", // general for the default catagory
        max: 10,
        apikey: key,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
