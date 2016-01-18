movieLib.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies.movies;
})

movieLib.controller('ShowMovieController', function($scope, $routeParams, movies) {
    $scope.movie = movies.movies[$routeParams.id];

    // this is for full screen enlarge poster in detail view
    // $('.materialboxed').materialbox();
})

movieLib.controller('NewMovieController', function($scope, movies) {
    $scope.save = function() {
        movies.add($scope.newMovie);
    }
})
