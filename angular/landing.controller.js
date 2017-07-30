(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('LandingController', LandingController);

  // LandingController.$inject = ['dataservice'];

  function LandingController($scope, dataservice) {
    var vm = $scope;
    vm.title = "Akash Mitra";

    dataservice.getImageDetails().then(function (response) {
      console.log('Response :: ', response);
    }).catch(function (error) {
      console.log('Error :: ', error);
    });

  }

}());