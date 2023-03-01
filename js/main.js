$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    dots: false

});

$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    dots: false

});


$(window).scroll(function(event){
    if($(document).scrollTop() < 1){
    $('.header').removeClass('fixed');
    $('.header').removeClass('active')
    }else if($(document).scrollTop() >100){
      $('.header').removeClass('fixed');
      $('.header').addClass('active');
      $('.menu_img').style.padding="10px";
    }else{
      $('.header').addClass('fixed');
    }
});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        $('.header').addClass('active');
        // animated links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+ 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');

    });

}
navSlide();