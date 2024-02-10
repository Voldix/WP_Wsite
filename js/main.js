$(document).ready(function() {

    /* smooth scrolling */

    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu_mobile .menu').toggle(500);
        $('.menu_burger').toggleClass('close');
        return false;
    });

    /* mobile menu */

    $('.menu_burger').click(function() {
        $('.menu_mobile .menu').toggle(500);
        $(this).toggleClass('close');
    });
});