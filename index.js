// access env variables
require("dotenv").config();
// include mongoose in our project
const mongoose = require('mongoose');

const app = async () => {

    // open a connection with mongo db
    await mongoose.connect(process.env.MONGO_URI)
    // note: you need to add the cluster name to the uri (eg. mongodb.net/movies?retryWrites) as well as your u.name and password

    // Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. => this is to enfore structure in our database
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

    // The next step is compiling our schema into a Model. A model is a class with which we construct documents. In this case, each document will be a movie and behaviors as declared in our schema.
    const Movie = mongoose.model("movie", movieSchema);

    // Let's create a movie document.
    const spiderman = new Movie({ title: 'spiderman', actor: 'Tobey Maguire'});
    console.log(spiderman.actor); // 'Tobey Maguire' :)

    // We still haven't saved anything to MongoDB. 
    // Each document can be saved to the database by calling its save (or create) method. 
    await Movie.create(spiderman)

    // We can access all of the movie documents through our Movie model.  We just logged all of the movies in our db to the console.
    const movies = await Movie.find();
    console.log(movies);

    // If we want to filter our movies by actor, Mongoose supports MongoDBs rich querying syntax.
    // This performs a search for all documents with an actor property that begins with "Tobey" and returns the result as an array of movies to the callback.
    const actor = await Movie.find({ actor: /^Tobey/ });
    console.log(actor);

    // Congratulations
    // That's the end of our quick start. We created a schema, saved and queried movies in MongoDB using Mongoose. Head over to the guide, or API docs for more.

    await mongoose.disconnect();
    // ps don't leave the terminal hanging.
}

app() 