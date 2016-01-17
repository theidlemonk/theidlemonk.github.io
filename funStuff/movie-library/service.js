movieLib.service('Movies', function() {
    var self = this;
    this.movies = [];
    var movie = new Movie("Rambo", "2008", "http://ia.media-imdb.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
        "tt0462499", "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
        "R", "Sylvester Stallone", "Sylvester Stallone, Julie Benz, Matthew Marsden, Graham McTavish");
    this.movies.push(movie);
    movie = new Movie("Rambo: First Blood Part II", "1985", "http://ia.media-imdb.com/images/M/MV5BMTc5NTAxNjE4Nl5BMl5BanBnXkFtZTcwOTg2MDcyMQ@@._V1_SX300.jpg",
        "tt0089880", "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
        "R", "George P. Cosmatos", "Sylvester Stallone, Richard Crenna, Charles Napier, Steven Berkoff");
    this.movies.push(movie);
    // this.movies = [movie1,movie2];
    this.fetch = function() {
        return self.movies;
    };

    function Movie(name, year, poster, imdbId, plot, rated, director, actors) {
        this.name = name;
        this.year = year;
        this.poster = poster;
        this.imdbId = imdbId;
        this.plot = plot;
        this.rated = rated;
        this.director = director;
        this.actors = actors;
    };

    
})
