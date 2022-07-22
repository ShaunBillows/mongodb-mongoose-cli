const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
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

  const Movie = mongoose.model("movie", movieSchema);

  module.exports = Movie

// A model is a class with which we construct documents.
// In this case, each document will be a movie and behaves as declared in our schema.