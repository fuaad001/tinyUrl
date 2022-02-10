const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  url: { type: String, required: true }
})

UrlSchema.plugin(require('mongoose-nanoid'));
const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;