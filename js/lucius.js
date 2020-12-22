$(document).ready(function(){
    /*slick slide*/
    $(".main-slide").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(".prod-slide").slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".insta-slide").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    autoplay: true,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    $(".recom-slide").slick({
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    autoplay: true,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    /*modal*/
   $(".btn-modal-open").click(function(){
        var id_check = $(this).attr("data-name");
        $('#'+id_check).addClass('modal-active')
        $('body').append('<div class="modal-overlay"></div>');

        var marginLeft= $('#'+id_check).outerWidth() / -2;
        var marginTop =$('#'+id_check).outerHeight() / -2;
        $('#'+id_check).css( {'margin-top':marginTop, 'margin-left':marginLeft });
        $('body').css('overflow','hidden');
    });
    $('.modal-close').click(function(){
        $(this).parents(".modal").removeClass('modal-active');
        $('body').css('overflow','auto');
        $('.modal-overlay').remove();
    });

    /*mobile aside*/
    $(".btn-mobile-menu").click(function(){
        $(".mobile-aside").addClass('active');
    });
    $(".btn-aside-close").click(function(){
        $(".mobile-aside").removeClass('active');
        $("body").css('overflow','auto');
    });

    /*scroll header fixed event*/
    $(window).scroll(function(){
        $('.header').addClass('fixed');
        $('.product-detail .prod-bottom').addClass('fixed');
        var scrollValue = $(document).scrollTop();
        if(scrollValue===0) {
            $('.header').removeClass('fixed');
            $('.product-detail .prod-bottom').removeClass('fixed');
        }
        var aaa = $('.header').outerHeight();
        if($('.header').hasClass('fixed')){
            $('.header + div').css('marginTop',aaa);
        } else {
            $('.header + div').css('marginTop','0');
        }
    });

    /*search box*/
    $('.search-area').click(function(){
        $('.search-box').addClass('open');
    });
    $('.search-area').mouseleave(function(){
        $('.search-box').removeClass('open');
    });
    $('.search-list li').click(function(){
        var searchText = $(this).text();
        $('.search-input').val(searchText);
    });
    $('.btn-search-delete').click(function(){
       $(this).siblings('.search-list').remove();
    });
    $('.search-area .ico-search').click(function(){
        $('.mobile-search').addClass('open');
    });
    $('.mobile-search .ico-delete-lg').click(function(){
        $('.mobile-search').removeClass('open');
    });

    /*parents remove*/
    $('.ico-delete-sm').click(function(){
        $(this).parents('li').remove();
    });

    /*search rolling*/
    $(function(){
        var height =  $(".search-word-list").height();
        var num = $(".roling-list").length;
        var max = height * num;
        var move = 0;
        function noticeRolling(){
            move += height;
            $(".rolling").animate({"top":-move},600,function(){
                if( move >= max ){
                    $(this).css("top",0);
                    move = 0;
                };
            });
        };
        searchRollingOff = setInterval(noticeRolling,3000);
        $(".rolling").append($(".roling-list").first().clone());
        $(".roling-list").hover(function(){
            clearInterval(searchRollingOff);
        });
        $(".roling-list").mouseleave(function(){
            searchRollingOff = setInterval(noticeRolling,3000);
        });
    });

    /*tab*/
    $('.tab-box li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var tabButton = $(this).attr('data-name');
        $("#"+tabButton).addClass('open').siblings().removeClass('open');
    });

    /*category*/
    $('.product-category li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*accordion*/
    $('.accordion .aaa').click(function(){
       $(this).closest(".accordion").toggleClass('open').siblings().removeClass('open');
    });
});


/*slick slide*/
$(window).on('load resize orientationchange', function() {
    $('.new-slider').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 1024) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }
                    ]
                });
            }
        }
    });
});


$(document).ready(function(){
    $('.aaa .open').click(function(){
        $(this).next('dd').slideToggle();
    });
});