const mongoose = require('mongoose');

const tvSchema = new mongoose.Schema({
    title: {
      type: String,
      unique: true,
      required: true,
    },
    actor: {
      type: String,
      default: "Not specified",
    },
  });

  const TvShow = mongoose.model("tv-show", tvSchema);

  module.exports = TvShow