movieLib.controller('MovieListController', function($scope, movies) {
    $scope.movies = movies;
})

movieLib.controller('ShowMovieController', function($scope, $routeParams, movies) {
  console.log(movies);
    $scope.movie = movies[$routeParams.id];
    $('.materialboxed').materialbox();
})
