const express = require("express");
const { index, result } = require("./views/pages");
const UrlDao = require("./data/UrlDao");
const ApiError = require("./model/ApiError");

const db = require("./data/db");
db.connect();

const app = express();
const port = process.env.PORT || 5050;

const urls = new UrlDao();

app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send(index());
});

app.post("/", async (req, res) => {
  const { url } = req.body;

  try {
    const data = await urls.create({url});
    res.send(result(`https://tiny-url-vxau.onrender.com/${data._id}`));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
  const url = await urls.read(id);
  console.log("Url: ", url);
  if (!url.url) {
    throw new ApiError(400, "Short url does not exist");
  }
  res.status(302).redirect(`/${url.url}`);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Express app listening at port: http://localhost:${port}/`);
});