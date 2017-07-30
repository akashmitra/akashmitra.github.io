(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('AboutController', AboutController);

  // LandingController.$inject = ['dataservice'];

  function AboutController($scope) {
    var vm = $scope;
    vm.title = "Akash Mitra";
  }

}());