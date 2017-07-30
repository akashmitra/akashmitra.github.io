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

    // set default search text
    $('#searchform input[type="text"]').attr('placeholder', 'Type to search...');

    // portfolio masonry
    var $container = $('.masonry');
    $container.imagesLoaded( function(){
        $container.isotope({
            layoutMode: 'packery',
            packery: {
              columnWidth: '.masonry-item, .product'
            },
            itemSelector: '.masonry-item, .product'
        });
    });

	// contact validation
	$('#contact_form').validate({
        rules: {
            firstname    : 'required',
            lastname     : 'required',
            email : {
                required : true,
                email    : true
            },
            phone : {
                required : true,
                digits   : true
            },
            message      : 'required'
        },
        messages : {
            firstname    : 'Looks like you forget to give us your first name.',
            lastname     : 'Looks like you forget to give us your last name.',
            email : {
                required : 'Looks like you forget to give us your email address.',
                email    : 'Looks like you may have made a typo. Email format is hello@example.com'
            },
            phone : {
                required : 'Looks like you forget to give us your phone number.',
                digits   : 'Numbers only, no spaces please.'
            },
            message      : 'Looks like you forget to say something.'
        }
    });
    
})(jQuery);