require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const movie = require("./movie/functions");
const tv = require("./to-show/functions");

const app = async (yargsObj) => {

    if (yargsObj.movies) {

        if (yargsObj.create) {
            await movie.createMovie({title: yargsObj.title, actor: yargsObj.actor})
    
        } else if (yargsObj.read) {
            await movie.readMovies()
    
        } else if (yargsObj.update) {
            await movie.updateMovie({title: yargsObj.oldTitle, actor: yargsObj.oldActor}, {title: yargsObj.newTitle, actor: yargsObj.newActor})
    
        } else if (yargsObj.delete) {
            await movie.deleteMovie({title: yargsObj.title, actor: yargsObj.actor})
    
        } else if (yargsObj.deleteAll) {
            await movie.deleteAllMovies()
        
        } else if (yargsObj.search) {
            await movie.filteredSearch(yargsObj.select, yargsObj.keyword)
        }

    } else if (yargsObj.tvShows)

        if (yargsObj.create) {
            await tv.createTvShow({title: yargsObj.title, actor: yargsObj.actor})

        } else if (yargsObj.read) {
            await tv.readTvShows()

        } else if (yargsObj.update) {
            await tv.updateTvShow({title: yargsObj.oldTitle, actor: yargsObj.oldActor}, {title: yargsObj.newTitle, actor: yargsObj.newActor})

        } else if (yargsObj.delete) {
            await tv.deleteTvShow({title: yargsObj.title, actor: yargsObj.actor})

        } else if (yargsObj.deleteAll) {
            await tv.deleteAllTvShows()
        
        } else if (yargsObj.search) {
            await tv.filteredSearch(yargsObj.select, yargsObj.keyword)
        }

    await mongoose.disconnect();
}

app(yargs.argv);