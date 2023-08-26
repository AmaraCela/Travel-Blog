$(document).ready(function () {
    $('#myCarousel').carousel();

    function goToNextSlide() {
        $('#myCarousel').carousel('next');
    }

    let intervalId = setInterval(goToNextSlide, 10000);

    $('.carousel-control-prev, .carousel-control-next').click(function () {
        clearInterval(intervalId);
        intervalId = setInterval(goToNextSlide, 10000);
    });
});