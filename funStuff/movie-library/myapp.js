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
            templateUrl: 'templates/detail.html',
            resolve: resolveMovies
        })
        .when('/new', {
            controller: 'NewMovieController as newMovie',
            templateUrl: 'templates/newform.html',
                resolve: resolveMovies
        })
        .otherwise({
            redirectTo: '/'
        });
})

