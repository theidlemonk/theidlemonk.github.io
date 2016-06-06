$(function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    smoothScrollingInit();
    typedHeaderInit();
    chartInit();
    form.initialize($("#form"));
    toastr.options.positionClass = "toast-top-center";
    toastr.options.showMethod = 'slideDown';

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

function typedHeaderInit() {
    $("#headername").typed({
        strings: ["Web Developer", "Ninjaneer", "Pizza Lover","I'm ^1000", "Tirthankar Bhattacharjee"],
        typeSpeed: 0,
        preStringTyped: function() {
            $('#headerwrap h3').hide();
            $('#headerwrap h2').hide();
        },
        callback: function() {
            $('#headerwrap h3').fadeIn("slow");
            $('#headerwrap h2').fadeIn("slow");
            $('.typed-cursor').remove();

        }
    });
}

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
