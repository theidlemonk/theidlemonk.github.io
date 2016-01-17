movieLib.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies;
})

movieLib.controller('ShowMovieController', function($scope, $routeParams, movies) {
  console.log(movies);
    $scope.movie = movies[$routeParams.id];

    // this is for full screen enlarge poster in detail view
    $('.materialboxed').materialbox();
})

movieLib.controller('NewMovieController', function($scope, movies) {
    var editProject = this;
    $scope.movies = movies;
})


