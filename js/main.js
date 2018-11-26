$(document).ready(function(){

    $('.hamburger').click(function () {
        $('header .main_menu').toggleClass('open');
        $('body').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('header .main_menu').removeClass('open');
            $('body').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest("header .main_menu.open").length) {
            $("header .main_menu.open").removeClass('open');
            $("body").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
        }else{
            $('#more').slideDown();
        }
    });



    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('.section_content').css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height+100) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();



    if($('.product_slider > div').length >1){
        $('.product_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            //fade: true,
            asNavFor: '.product_slider_nav'
        });
    }


    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });


});


