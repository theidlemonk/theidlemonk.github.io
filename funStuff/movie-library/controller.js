movieLib.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies.movies;
})

movieLib.controller('ShowMovieController', function($scope, $routeParams, movies) {
    $scope.movie = movies.movies[$routeParams.id];

    // this is for full screen enlarge poster in detail view
    // $('.materialboxed').materialbox();
})

movieLib.controller('NewMovieController', function($scope, $location, $http,movies) {
    $scope.save = function() {
        movies.add($scope.newMovie);
        $location.path("/movie/" + (movies.movies.length - 1));
    }

    $scope.findMovies = function() {
        $http.get('http://www.omdbapi.com/?s=' + $scope.newMovie.name).then(function(response) {
            $scope.movies = response.data.Search;
            // console.log(response);
            $('#modal1').openModal();

        }, function (error) {
          console.log(error);
        });
        // console.log($scope.newMovie.name);

    }
})
