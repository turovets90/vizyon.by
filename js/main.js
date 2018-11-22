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



    /*
    $('.js-example-basic-single').select2();

    $('.advanced_search_toggle').on('click', function(){
        if($('#advanced_search_collapse').is(':visible')){
            $('#advanced_search_collapse').slideUp();
        }else{
            $('#advanced_search_collapse').slideDown();
        }
    });


    $('#advanced_search_collapse_2_btn').on('click', function(){
        if($('#advanced_search_collapse-2').is(':visible')){
            $(this).removeClass('active');
            $('#advanced_search_collapse-2').slideUp();
        }else{
            $(this).addClass('active');
            $('#advanced_search_collapse-2').slideDown();
        }
    });


    $('#advanced_search_collapse-2 .collapse').on('click', function(){
        $('#advanced_search_collapse-2').slideUp();
        $(this).removeClass('active');
    });



    $('#advanced_search_collapse .advanced_search_btn_group .collapse').on('click', function(){
        $('#advanced_search_collapse').slideUp();
    });
    $('.mm_btn').on('click', function(){
        $('.mobile_menu').addClass('open');
    });
    $('.mm_close').on('click', function(){
        $('.mobile_menu').removeClass('open');
    });


    $('.mobile_menu .level1 > .mm_item').each(function(){
        var level1_arrow=$(this).find('.arrow');
        var level1_dropdown_menu=$(this).find('.level2');
        var back=$(this).find('.level2 > .mm_header .back');
        $(level1_arrow).on('click', function(){
            $(level1_dropdown_menu).addClass('show_dropdown_menu');
        });
        $(back).on('click', function(){
            $(level1_dropdown_menu).removeClass('show_dropdown_menu');
        });
    });

    $('.mobile_menu .level2 > .nav > .mm_item').each(function(){
        var level1_arrow2=$(this).find('.arrow');
        var level1_dropdown_menu2=$(this).find('.level3');
        var back2=$(this).find('.level3 > .mm_header .back');
        $(level1_arrow2).on('click', function(){
            $(level1_dropdown_menu2).addClass('show_dropdown_menu');
        });
        $(back2).on('click', function(){
            $(level1_dropdown_menu2).removeClass('show_dropdown_menu');
        });
    });


    if($('.main_slider > div').length > 1){
        $('.main_slider').slick({
            dots: true,
            arrows: true,
            // fade:true,
            slidesToShow:1,
            slidesToScroll: 1,
        });
    }


    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    if($('.clients_slider > div').length >8){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow:8,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow:6,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.clients_slider > div').length > 2){
        $('.clients_slider').slick({
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        });
    }


    $(window).resize(function(){
        var header_height = $('header').outerHeight();


        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
                $('.mobile_navbar').addClass('m_fixed');

                if($(window).innerWidth() > 1200){
                    $('header').next().css({'margin-top': header_height+'px'});
                }

            } else {
                $('header').removeClass('fixed');
                $('.mobile_navbar').removeClass('m_fixed');

                if($(window).innerWidth() > 1200){
                    $('header').next().css({'margin-top': '0'});
                }
            }
        });

    });
    $(window).resize();


    $('.search_by_parameters').on('click', function(){
        if($('.options').is(':visible')){
            $('.options').slideUp();
        }else{
            $('.options').slideDown();
        }
    });




    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows: false,
        vertical: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
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




    if($('.slick__slider > div').length >3){
        $('.slick__slider').slick({
            dots: true,
            arrows: true,
            slidesToShow:3,
            slidesToScroll: 3,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow:1,
                        arrows: false,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.slick__slider > div').length > 1){
        $('.slick__slider').slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }




    $('#file, #file_1').filestyle({
        text : ' <span>Прикрепить документ</span>  (.zip, .rar, .doc, .pdf) '
    });



    if($(window).innerWidth() < 1200){
        $('#m__slick_slider').slick({
            dots: false,
            arrows: true,
            fade:true,
            speed: 0,
            slidesToShow:1,
            slidesToScroll: 1,
            infinite: false,
        });
    }



    $('.order_item').each(function(){
        var show_order=$(this).find('.show_order');
        var content_hide=$(this).find('.content_hide');
        var this_order=$(this);
        $(show_order).on('click', function(){
            if($(content_hide).is(':visible')){
                $(this_order).removeClass('show');
                $(content_hide).slideUp();
            }else{
                $(this_order).addClass('show');
                $(content_hide).slideDown();
            }
        });
    });


*/


});


