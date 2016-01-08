var Library = {
  movies: [], //list of movie
  addMovie: function (movie) {
    this.movies.push(movie);
  },
  getAllMovies: function () {
    return this.movies;
  },
  getMovieById: function (id) {
    return this.movies[id];
  }
}