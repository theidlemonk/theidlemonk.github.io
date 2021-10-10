var Page = {
    mainContent: {
        replaceListWithMovieCards: function(list) {
            var content = "<div class='row'>";
            list.forEach(function(item, index) {
                content = content + "<div class='col m4'><div class='card medium hoverable'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='" 
                + item.poster + "'>" + "</div><div class='card-content'><span class='card-title activator grey-text text-darken-4 truncate'>" 
                + item.name + "</span>" + "<p><a href='" + index + "' >" 
                + "show details" + "</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4 truncate'>" 
                + item.name + "<i class='material-icons right'>close</i></span><p>" + item.plot + "</p></div></div></div>";
            });
            content = content + "</div>";
            $("#main-content").append(content);
        },
        populateMovieDetails: function (movie) {
         var content = "<div class='row'>";
         content = content + "<div class='card-panel z-depth-3'>"
            + "<div class='card-panel z-depth-3 orange'>"
                + "<h1><a class='btn-floating red' href='index.html' ><i class='material-icons left'>keyboard_arrow_left</i></a> <span class='center'>" + movie.name + "</span></h1>"
            + "</div>"
            + "<div class='row'>"
                + "<div class='col s12 m5'>"
                    + "<img class='materialboxed z-depth-3' src='" + movie.poster + "'>"
                + "</div>"
                + "<div class='col s12 m7'>"
                    + "<span><div class='card-panel z-depth-3 teal text-lighten-2' > <div class='card-panel z-depth-3'>Plot: " 
                    + movie.plot + "</div> <div class='card-panel z-depth-3'>Rating: " 
                    + movie.rating + "</div> <div class='card-panel z-depth-3'>Director: " 
                    + movie.director + "</div> <div class='card-panel z-depth-3'>Actors: " 
                    + movie.actors + "</div></div>"
          + "</span>"
                + "</div>"
            + "</div>"
        + "</div>";
            content = content + "</div>";
            $("#main-content").html(content);
        }
    }
}
