(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('LandingController', LandingController);

  function LandingController($scope, $sce, $window, dataservice) {
    var vm = $scope;
    vm.title = "Akash Mitra";
    vm.filterCriteria = "star"; // default show the best ones
    vm.showdesc = false;
    vm.descontent = null;

    /** Function that filters imageList and show/hides desc content */
    vm.setFilterCriteria = function (preferance) {
      vm.filterCriteria = preferance;
      vm.showdesc = true;
      storydesc.forEach(function (story) {
        if (preferance === story.type) {
          vm.descontent = $sce.trustAsHtml(story.desc);
        }
      }, this);
      $window.scrollTo(0, 0);
    };

    /** Data Service that fetches imageList from the data Source */
    dataservice.getImageDetails().then(function (response) {
      vm.imageList = response.data;
    }).catch(function (error) {
      console.log('Error :: ', error);
    });

  }


  var storydesc = [
    {
      "type": "bw",
      "desc": `<h5>Monochrome</h5> 
              <p>Kolkata </p>`
    }, {
      "type": "color",
      "desc": `<h5>Color</h5> 
              <p>Digital and Film
              <br>Kolkata</br></p>`
    }, {
      "type": "christmaspast",
      "desc": `<h5>Christmas</h5> 
              <p>When beautifully wrapped presents make their way under a tree decked with mistletoe, 
              roast turkey and duck are the pride of dinner tables and warm mulled wine is sipped each 
              evening. Kolkata decks herself her for one most prettiest festival of the year. </p>
              <p>St. Johns is one of the oldest churches of India. Made entirely out of stones, giving it a name of "Pathure Girja"
              It houses the mausoleum of Job Charnock, the founder of Kolkata and few famous personalities of the Imperial Rule.  
              <br>Kolkata 2013</br></p>`
    },
    {
      "type": "dhunuchi",
      "desc": `<h5>Dhunuchi Nach</h5> 
              <p>This is a customary dance on the last day of Durga Pujo by men and women, with earthenware lit by placing burning 
              coal at the bottom, which ignites a layer of slow-burning coconut husk, on which incense (usually resin) is 
              sprinkled.</p>
              <p>This dance is accompanied by Dhak, and frequently leads to a competition.
              <br>Kolkata 2014</br></p>`
    }, {
      "type": "limcastudio",
      "desc": `<h5>Limca Studio</h5> 
              <p>Limca Studio is a "parar function" held during Durga Pujo every year. The local youth performs music ranging
              from Jazz to Rabindrasangeet. These functions are often followed by jamming in the pandel leading to a more natural musical evening.</p>
              <p>The name comes from mock imitation of Coke Studio.
              <br>Kolkata 2015</br></p>`
    },
    {
      "type": "nesha",
      "desc": `<h5>Indulgence</h5> 
              <p>This fire smoldering between us burns so very intense that all my inhibitions just seem to melt away. <br>
                I can't stop myself from becoming drunk off the intoxication of your existence <br>
                I indulge in waves of temptations... Our soul interwined, and our heart beating fast. </p>
              <p>A fragment of life.</p>`
    },
    {
      "type": "outreach",
      "desc": `<h5>Outreach</h5> 
              <p>Reaching out to underpriviledged children near and around Kolkata.</p>
              <p>Corporate Social Responsibility
              <br>Kolkata 2012</br></p>`
    },
    {
      "type": "foodandtravel",
      "desc": `<h5>Food and Travel</h5> 
              <p>To travel is to eat. And to eat is to travel.</p>
              <p>Kolkata 2015</p>`
    },{
      "type": "singles",
      "desc": `<h5>Singles</h5> 
              <p>Kolkata</p>`
    }
  ];


}());