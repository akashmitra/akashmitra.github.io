//Code to rotate the home page image

//Global Variables
var i = 1;

$(document).ready(function() {

    setInterval(function() {
        changeCover();
    }, 5000);


    function changeCover() {
        
        urlGen = "url(./images/intro-bg" + i + ".jpg)";
        console.log('urlGen :: ' + urlGen+':: Value of i ::'+i);

        $("#intropic").fadeOut('slow', function() {
          
            $(".intro").css({'background':urlGen,
              'background-repeat':'round',
              'background-position-horizontal':'bottom',
              'background-position-vertical':'center',
              'background-attachment':'scroll',
              '-webkit-animation': 'fadein 2s', 
                 '-moz-animation': 'fadein 2s', 
                  '-ms-animation': 'fadein 2s', 
                   '-o-animation': 'fadein 2s',
                      'animation': 'fadein 2s'
            });

            $("#intropic").fadeIn('slow'); 

        });
        
          
        //reset counter after one round"background-repeat", "no-repeat",bottom center scroll;");
        if(i==4){i=0;}
        else{i++;}
    }


});