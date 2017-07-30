(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('LandingController', LandingController);

  // LandingController.$inject = ['dataservice'];

  function LandingController($scope, dataservice) {
    var vm = $scope;
    vm.title = "Akash Mitra";
    vm.filterCriteria = "star";

    vm.setFilterCriteria = function (preferance) {
      vm.filterCriteria = preferance;
    };

    dataservice.getImageDetails().then(function (response) {
      console.log('Response :: ', response);
      vm.imageList = response.data;

    }).catch(function (error) {
      console.log('Error :: ', error);
    });

  }

}());