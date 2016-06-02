$(function() {

    smoothScrollingInit();
    chartInit();
    $('#form').on('submit', function(e) {
        e.preventDefault();
        sendMail();
    });

});



function smoothScrollingInit() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
};

function chartInit() {
    $('canvas').each(function(index, canvas) {
        drawChartForCanvas(canvas);
    });
};

function drawChartForCanvas(canvas) {
    var coverage = parseInt(canvas.dataset.coverage);
    var doughnutData = [{
        value: coverage,
        color: "#1abc9c"
    }, {
        value: 100 - coverage,
        color: "#ecf0f1"
    }];

    var myDoughnut = new Chart(canvas.getContext("2d")).Doughnut(doughnutData);
}

function sendMail() {
    document.getElementById('form').reset();
    $.ajax({
        url: "https://formspree.io/feignfroggie@gmail.com",
        method: "POST",
        data: {
            name: "Tirthankar",
            message: "hello!",
            _replyto: "tirthankar.bhattacharjee@gmail.com",
            _subject: "Message from website"
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}
