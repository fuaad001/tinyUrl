const Url = require("../model/Url");
const ApiError = require("../model/ApiError");

class UrlDao {
  async create({ url }) {
    if (url === undefined || url === "") {
      throw new ApiError(400, "Long Url must be provided!");
    }

    const data = await Url.create({ url });
    return data;
  }

  async read(id) {
    const url = await Url.findById(id)
    return url ? url : [];
  }
}

module.exports = UrlDao;