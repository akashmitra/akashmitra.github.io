//Code to rotate the home page image

//Global Variables
var i = 1;

var linkforCoverimage = ["https://farm4.staticflickr.com/3714/9017437718_24d9760401_h.jpg",
"https://farm3.staticflickr.com/2917/14089224754_48f8e30774_h.jpg",
"https://farm8.staticflickr.com/7345/8841569270_6d9f731ea0_h.jpg",
"https://farm6.staticflickr.com/5506/11064054416_e3c2ce2d54_h.jpg",
"https://farm8.staticflickr.com/7318/9114860940_e62790b0cd_h.jpg"];

$(document).ready(function() {

    setInterval(function() {
        changeCover();
    }, 5000);


    function changeCover() {
        
        urlGen = "url("+linkforCoverimage[i]+")";
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