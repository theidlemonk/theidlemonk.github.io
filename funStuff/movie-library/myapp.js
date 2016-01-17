var movieLib = angular.module('movieLib', ['ngRoute'])


.config(function($routeProvider) {
    var resolveMovies = {
        movies: function(Movies) {
            return Movies.fetch();
        }
    };
    $routeProvider
        .when('/', {
            controller: 'MovieListController as movieList',
            templateUrl: 'templates/list.html',
            resolve: resolveMovies
        })
        .when('/movie/:id', {
            controller: 'ShowMovieController as showMovie',
            templateUrl: 'detail.html',
            resolve: resolveMovies
        })
        .when('/new', {
            controller: 'NewMovieController as editMovie',
            templateUrl: 'detail.html'
                // resolve: resolveMovies
        })
        .otherwise({
            redirectTo: '/'
        });
})



.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies;

    // function Movie(name, year, poster, imdbId, plot, rated, director, actors) {
    //     this.name = name;
    //     this.year = year;
    //     this.poster = poster;
    //     this.imdbId = imdbId;
    //     this.plot = plot;
    //     this.rated = rated;
    //     this.director = director;
    //     this.actors = actors;
    // };
    // var movie = new Movie("Rambo", "2008", "http://ia.media-imdb.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
    //     "tt0462499", "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
    //     "R", "Sylvester Stallone", "Sylvester Stallone, Julie Benz, Matthew Marsden, Graham McTavish");
    // $scope.movies.push(movie);
    // movie = new Movie("Rambo: First Blood Part II", "1985", "http://ia.media-imdb.com/images/M/MV5BMTc5NTAxNjE4Nl5BMl5BanBnXkFtZTcwOTg2MDcyMQ@@._V1_SX300.jpg",
    //     "tt0089880", "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
    //     "R", "George P. Cosmatos", "Sylvester Stallone, Richard Crenna, Charles Napier, Steven Berkoff");
    // $scope.movies.push(movie);

})

.controller('ShowMovieController', function($scope, movies) {
    $scope.movies = movies;
});
