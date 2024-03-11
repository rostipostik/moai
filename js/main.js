$(document).ready(function () {
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img class='prev slick-btn' src='./img/arrow-right.svg'>",
        nextArrow:"<img class='next slick-btn' src='./img/arrow-left.svg'>"
    });
    $('.slider-avatars').slick();
});