(function($) {
    "use strict";
    
    // responsive menu
    $("<select />").appendTo("#primary");
    
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Navigation"
    }).appendTo("#primary select");
    
    // populate dropdown
    $("#mainnav a").each(function(){
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo("#primary select");
    });
    
    $("#primary select").change(function(){
        window.location = $(this).find("option:selected").val();
    });

	// sidebar
    $( ".open" ).pageslide({ direction: "left" });
    
    // seperate nested menus
    $(".navigation li:has(ul)").css("margin-top", "25px");

    
    // portfolio masonry
    // var $container = $('.masonry');
    // $container.imagesLoaded( function(){
    //     $container.isotope({
    //         layoutMode: 'packery',
    //         packery: {
    //           columnWidth: '.masonry-item, .product'
    //         },
    //         itemSelector: '.masonry-item, .product'
    //     });
    // });

})(jQuery);