movieLib.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies.movies;
})

movieLib.controller('ShowMovieController', function($scope, $routeParams, movies) {
    $scope.movie = movies.movies[$routeParams.id];
})

movieLib.controller('NewMovieController', function($scope, $location, $http, movies) {
    $scope.selectedMovie = "";
    $scope.save = function() {
        movies.add($scope.newMovie);
        $location.path("/movie/" + (movies.movies.length - 1));
    }

    $scope.findMovies = function() {
        $http.get('http://www.omdbapi.com/?s=' + $scope.newMovie.name + '&type=movie&r=json').then(function(response) {
            $scope.movies = response.data.Search;
            $('#modal1').openModal();
        }, function(error) {
            console.log(error);
        });

        $scope.findMovieById = function() {
            var id = this.movie.imdbID;
            // alert($scope.movies[id].imdbID);
            $http.get('http://www.omdbapi.com/?i=' + id + '&plot=short&r=json').then(function(response) {
                console.log(response);
                $scope.newMovie.name = response.data.Title;
                $scope.newMovie.year = response.data.Year;
                $scope.newMovie.poster = response.data.Poster;
                $scope.newMovie.imdbId = response.data.imdbID;
                $scope.newMovie.plot = response.data.Plot;
                $scope.newMovie.rated = response.data.Rated;
                $scope.newMovie.director = response.data.Director;
                $scope.newMovie.actors = response.data.Actors;

                $('#modal1').closeModal();
            }, function(error) {
                $('#modal1').closeModal();
                console.log(error);
            });
        }
    }
})
