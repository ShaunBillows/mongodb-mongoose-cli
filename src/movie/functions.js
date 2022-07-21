const Movie = require("./model")

exports.createMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    }
    catch (error) {
        console.log(error);
    }
}

exports.readMovies = async () => {
    try {
        const results = await Movie.find()
        console.log(results);
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (query, replacement) => {
    try {
        await Movie.replaceOne(query, replacement)
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (query) => {
    try {
        await Movie.deleteOne(query)
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteAllMovies = async () => {
    try {
        await Movie.deleteMany({})
    }
    catch (error) {
        console.log(error);
    }
}

exports.filteredSearch = async (key, keyword) => {
    try {
        if (key === 'title') {
            const result = await Movie.find({title: new RegExp(keyword)})
            console.log(result);
        }
        if (key === 'actor') {
            result = await Movie.find({actor: new RegExp(keyword)})
            console.log(result);
        }
    }
    catch (error) {
        console.log(error);
    }
}