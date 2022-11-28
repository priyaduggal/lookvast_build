(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area-three').addClass("is-sticky");
            } else {
                $('.navbar-area-three').removeClass("is-sticky");
            }
        });
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        $(function() {
            $('.default-btn').on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            }).on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            });
        });
        $(".burger-menu").on('click', function() {
            $('.sidebar-modal').toggleClass('active');
        });
        $(".sidebar-modal-close-btn").on('click', function() {
            $('.sidebar-modal').removeClass('active');
        });
        $('.close-btn').on('click', function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click', function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });
        $('.home-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            animateOut: "slideOutDown",
            animateIn: "slideInDown",
            items: 1,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"]
        });
        $(".home-slides").on("translate.owl.carousel", function() {
            $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content .banner-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content .banner-list").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function() {
            $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content .banner-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content .banner-list").addClass("animated fadeInUp").css("opacity", "1");
        });
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
        (function($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function(g) {
                var tab = $(this).closest('.tab'),
                    index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);
    

     
      
        $('select').niceSelect();
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find('.plus-btn'),
                btnDown = spinner.find('.minus-btn'),
                min = input.attr('min'),
                max = input.attr('max');
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
        $(function() {
        
           
        });
        jQuery(window).on('load', function() {
            $('.preloader').fadeOut();
        });
    });
}(jQuery));