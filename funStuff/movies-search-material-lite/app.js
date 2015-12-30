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

  $('body').on('click', '.back-to-top', function(e) {
    scrollTo('#banner');
  });

  $('#reset').on('click', function(e) {
    resetPage();
  });

});


function getSearchTitle() {
  return $('#movie-search').val();
};

function populateMovieList(response) {
  if (response.Search != undefined) {
    $('table').html('<tr><th class="mdl-data-table__cell--non-numeric">Movie</th><th class="mdl-data-table__cell--non-numeric">Type</th><th>Year</th></tr>');
    var tableData = "";
    response.Search.forEach(function(movie) {
      if (movie.Type == 'movie') {
        tableData = tableData + '<tr><td class="mdl-data-table__cell--non-numeric"> <a href="' + movie.imdbID + '">' + movie.Title +
          '</a> </td><td class="mdl-data-table__cell--non-numeric">' + movie.Type + '</td><td>' + movie.Year + '</td></tr>';
      }
    });
    if (tableData.length > 0) {
      $('table').append(tableData);
    } else {
      noMoviesFound();
    }
  } else {
    noMoviesFound();
  }
  $('table').show();
  $('#details').hide();
};

function populateMovieDetails(response) {
  $('#details').html('<div class="mdl-grid"><div class="mdl-cell mdl-cell--6-col" id="poster"></div><div id="info" class="mdl-cell mdl-cell--6-col"></div></div>');
  $('#info').append('<h3> <span> ' + response.Title + '</span> <span>' +
    response.Released + '</span></h3> <h4>Rated:' +
    response.Rated + '</h4><p>Plot:' + response.Plot +
    '</p><div class="movie-stuff" ><p>Rating: ' +
    response.imdbRating + '</p><p>Cast: ' +
    response.Actors + '</p><div class="mdl-grid"><div class="mdl-cell mdl-cell--8-col"><p>Genre: ' +
    response.Genre + '</div></p><div class="mdl-cell mdl-cell--4-col"><button class="back-to-top mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">&#xE5CE;</i></button><div></div>');
  $('#poster').append('<div class="poster-card-image mdl-card mdl-shadow--2dp"><img class="poster" src="' +
    response.Poster + '"></div>');

  $('#details').show();
  scrollTo('#details');

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
    populateMovieDetails(response);
  }).fail(function() {
    noMoviesFound()
  });
};

function scrollTo(element) {
  $("html, body").animate({
    scrollTop: $(element).offset().top
  }, 1000);
};

function resetPage() {
  document.location.reload();
  $('#movie-search').val('');
};


function noMoviesFound() {
  $('table').html('<tr><th class="mdl-data-table__cell--non-numeric">Sorry! No donut for you! Please search again.</th></tr>');
}
