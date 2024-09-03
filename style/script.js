document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.review-text');
    let currentIndex = 0;

    function showNextText() {
        texts[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add('active');
    }

    // Initialize the first text
    texts[currentIndex].classList.add('active');

    // Change text every 5 seconds
    setInterval(showNextText, 10000);
});

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
});
