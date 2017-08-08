(function($) {
    "use strict";
    
    // responsive menu
    // $("<select />").appendTo("#primary");
    
    // $("<option />", {
    //    "selected": "selected",
    //    "value"   : "",
    //    "text"    : "Navigation"
    // }).appendTo("#primary select");
    
    // populate dropdown
    // $("#mainnav a").each(function(){
    //  var el = $(this);
    //  $("<option />", {
    //      "value"   : el.attr("href"),
    //      "text"    : el.text(),
    //      "ng-click" : el.attr("ng-click"),
    //  }).appendTo("#primary select");
    // });
    
    var responsiveFix= `
    <div class="responsivefix">
    <div>
    <a href="about.html">About</a> | 
    <a href="blog.html">Journal</a>
    </div>
    <br>
    <div>
     <a href="#" ng-click="setFilterCriteria('bw')">Monochrome</a> |
     <a href="#" ng-click="setFilterCriteria('color')">Stories</a> |
     <a href="#" ng-click="setFilterCriteria('christmaspast')">Of Christmas Past</a> |
     <a href="#" ng-click="setFilterCriteria('dhunuchi')">Dhunuchi</a> |
     <a href="#" ng-click="setFilterCriteria('limcastudio')">Limca Studio</a> |
     <a href="#" ng-click="setFilterCriteria('nesha')">Indulgence</a> |
     <a href="#" ng-click="setFilterCriteria('outreach')">Outreach</a> |
     <a href="#" ng-click="setFilterCriteria('foodandtravel')">Food and Travel</a>
    </div>
    </div>`;

    $(responsiveFix).appendTo("#primary");

    $("#primary select").change(function(){
        window.location = $(this).find("option:selected").val();

    });

	// sidebar
    //$( ".open" ).pageslide({ direction: "left" });
    
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