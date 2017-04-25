jQuery(function ($) {

    'use strict';

    // ----------------------------------------------
    // Table index
    // ----------------------------------------------

    /*-----------------------------------------------
    # Preloader
    # Parallax Scrolling
    # Navigation Scroll
    # Mobile Menu
    # navigation Background Change
    # Search
    # Slider Height
    # Active mixitup
    # smoothScroll
    # Pretty Photo
    # Single Portfolio
    # Close Single Portfolio
    # Shop Item Load More
    # Timer
    # Google Map Customization
    -------------------------------------------------*/

    // ----------------------------------------------
    // # script title here
    // ----------------------------------------------
    

    (function () {

        // content here...

    }());


    // ----------------------------------------------
    // # Preloader
    // ----------------------------------------------
    
    jQuery(window).load(function(){
    jQuery("#preloader").delay(500).fadeOut(1000);
        jQuery(".preload-logo").addClass('fadeOutLeft');
		jQuery(".back-logo").addClass('fadeOutRight');
		jQuery(".preload-gif").addClass('fadeOutUp');
    
});


    // ----------------------------------------------
    // # Parallax Scrolling
    // ----------------------------------------------
    
    (function () {

        function parallaxInit() {       
            $("#parallax-one").parallax("50%", 0.3);
            $("#happy-clients").parallax("50%", 0.3);
        }   
        parallaxInit();

    }());


    // ----------------------------------------------
    // # Navigation Scroll
    // ----------------------------------------------
    

    (function () {
   
        var lastId,
            topMenu = $("#main-menu"),
            topMenuHeight = topMenu.outerHeight()+15,           
            menuItems = topMenu.find("a"),            
            scrollItems = menuItems.map(function(){
              var item = $($(this).attr("href"));
              if (item.length) { return item; }
            });
        
       
        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          $('html, body').animate({scrollTop: $(this.hash).offset().top -1}, 1000);
          e.preventDefault();
        });
            
        $(window).scroll(function(){      
           var fromTop = $(this).scrollTop()+topMenuHeight;
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           
           if (lastId !== id) {
               lastId = id;       
               menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
           }                   
        }); 

    }());


    // ----------------------------------------------
    // # On Click Hide Mobile Menu  
    // ----------------------------------------------

    (function () {
  
        $(".navbar-nav li a").on('click', function(event) {
            $(".navbar-collapse").collapse('hide');
        });

    }());


    // ----------------------------------------------
    // # Navigation Background Change  
    // ----------------------------------------------
    
    (function () {

        $(window).scroll (function () {
            var sT = $(this).scrollTop();
            if (sT >= 600) {
                $('.main-nav').addClass('black-nav')
            }else {
                $('.main-nav').removeClass('black-nav')
            }
        })

    }());


    // ----------------------------------------------
    // # Search
    // ----------------------------------------------

    (function () {

        $('.fa-search').on('click', function() {
            $('.search').fadeIn(500, function() {
              $(this).toggleClass('search-toggle');
            });     
        });

        $('.search-close').on('click', function() {
            $('.search').fadeOut(500, function() {
                $(this).removeClass('search-toggle');
            }); 
        });

    }());


    // ----------------------------------------------
    // # Slider Height
    // ----------------------------------------------
    
    (function () {

        var slideHeight = $(window).height();
        $('#main-carousel .item').css('height',slideHeight);

        $(window).resize(function(){'use strict',
            $('#main-carousel .item').css('height',slideHeight);
        });

    }());



    // ----------------------------------------------
    // # smoothScroll
    // ----------------------------------------------

    (function () {

        smoothScroll.init();

    }());


    // ----------------------------------------------
    // # Pretty Photo
    // ----------------------------------------------

    (function () {

        $("a[data-gallery^='prettyPhoto']").prettyPhoto({
        	social_tools: false
        });

    }());


    // ----------------------------------------------
    // # Single Portfolio
    // ----------------------------------------------

    (function () {

        $('#portfolio_filter').on('click','.overlay a',function(event){
            event.preventDefault();

            var link = $(this).data('single_url');
            var full_url = '#portfolio-details',
                parts = full_url.split("#"),
                trgt = parts[1],
                target_top = $("#"+trgt).offset().top;

            $('html, body').animate({scrollTop:target_top}, 1000);
            $('#single-portfolio').slideUp(1000, function(){
                $(this).load(link,function(){
                    $(this).slideDown(1000);
                });
            });
        });

    }());


    // ----------------------------------------------
    // # Close Single Portfolio
    // ----------------------------------------------

    (function () {

        $('#portfolio-details').on('click','.item-close',function(){
            var full_url = '#portfolio_filter',
                parts = full_url.split("#"),
                trgt = parts[1],
                target_offset = $("#"+trgt).offset(),
                target_top = target_offset.top;
            $("#single-portfolio").slideUp(1000);
        });

    }());


    // ----------------------------------------------
    // # Timer
    // ----------------------------------------------

    (function () {

        $('#happy-clients').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

    }());


    // ----------------------------------------------
    // # Shop Item Load More
    // ----------------------------------------------

    (function () {

        var size_li = $("#product-list li").size();
        var x=4;
        $('#product-list li:lt('+x+')').show();
        $('#loadMore span').on('click', function() {
            x= (x+4 <= size_li) ? x+4 : size_li;
            $('#product-list li:lt('+x+')').show(500);
            if(x == size_li){
                $('#loadMore span').hide();
            }
        });

    }());

}); // script end
