const Movie = require("../movie/model");
const TvShow = require("./model")

exports.createTvShow = async (tvShowObj) => {
    try {
        await TvShow.create(tvShowObj)
    }
    catch (error) {
        console.log(error);
    }
}

exports.readTvShows = async () => {
    try {
        const results = await TvShow.find()
        console.log(results);
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateTvShow = async (query, replacement) => {
    try {
        await TvShow.replaceOne(query, replacement)
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteTvShow = async (query) => {
    try {
        await TvShow.deleteOne(query)
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteAllTvShows = async () => {
    try {
        await TvShow.deleteMany({})
    }
    catch (error) {
        console.log(error);
    }
}

exports.filteredSearch = async (key, keyword) => {
    try {

        const result = await TvShow.find({[key]: new RegExp(keyword)})
        console.log(result);
     }
    catch (error) {
        console.log(error);
    }
}