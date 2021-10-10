$(document).ready(function() {
  // findMeMovies();
  // findMovieDetails('tt0295297');
  $('form').on('submit', function(e) {
    e.preventDefault();
    findMeMovies();
  });

  $('table').hide();
  $('#details').hide();

  $('body').on('click', 'a', function(e) {
    e.preventDefault();
    var imdbId = $(this).attr('href');
    findMovieDetails(imdbId);
  });

});


function getSearchTitle() {
  return $('form > input[type="text"]:nth-child(1)')[0].value;
};

function populateMovieList(response) {
  $('table').html('<tr><th>Movie</th><th>Type</th><th>Year</th></tr>');
  response.Search.forEach(function(movie) {
    $('table').append('<tr><td> <a href="' + movie.imdbID + '">' + movie.Title +
      '</a> </td><td>' + movie.Type + '</td><td>' + movie.Year + '</td></tr>');
  });
  $('table').show();
  $('#details').hide();
};

function populateMovieDetails(response) {
  $('#details').html("");
  $('#details').append('<h3> <span> ' + response.Title + '</span> <span>' +
    response.Released + '</span></h3> <h4>Rated:' +
    response.Rated + '</h4><p>Plot:' + response.Plot +
    '</p><img class="poster" src="' +
    response.Poster + '"><div class="movie-stuff" ><p>Rating: ' +
    response.imdbRating + '</p><p>Cast: ' +
    response.Actors + '</p><p>Genre: ' +
    response.Genre + '</p></div>');
  $('#details').show();
  $("html, body").animate({
    scrollTop: $('#details').offset().top
  }, 1000);

}

function findMeMovies() {
  var apiCall = "http://www.omdbapi.com/?s=" + getSearchTitle() + "&r=json";

  $.ajax({
    url: apiCall,
    method: 'GET'
  }).done(function(response) {
    populateMovieList(response);
  }).fail(function() {
    alert('Sorry! No donut for you!');
  });
};

function findMovieDetails(id) {
  var apiCall = "http://www.omdbapi.com/?i=" + id + "&plot=full&r=json";

  $.ajax({
    url: apiCall,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    populateMovieDetails(response);
  }).fail(function() {
    alert('Sorry! No donut for you!');
  });
};
