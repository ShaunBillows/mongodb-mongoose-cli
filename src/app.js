require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovies, deleteAllMovies, updateMovie, deleteMovie, filteredSearch } = require("./movie/functions");

const app = async (yargsObj) => {

    if (yargsObj.create) {
        await createMovie({title: yargsObj.title, actor: yargsObj.actor})

    } else if (yargsObj.read) {
        await readMovies()

    } else if (yargsObj.update) {
        await updateMovie({title: yargsObj.oldTitle, actor: yargsObj.oldActor}, {title: yargsObj.newTitle, actor: yargsObj.newActor})

    } else if (yargsObj.delete) {
        await deleteMovie({title: yargsObj.title, actor: yargsObj.actor})

    } else if (yargsObj.deleteAll) {
        await deleteAllMovies()
    
    } else if (yargsObj.search) {
        await filteredSearch(yargsObj.key, yargsObj.keyword)
    }
    
    await mongoose.disconnect();
}

app(yargs.argv);