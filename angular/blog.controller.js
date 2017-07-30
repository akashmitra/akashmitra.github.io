(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('BlogController', BlogController);

  // LandingController.$inject = ['dataservice'];

  function BlogController($scope) {
    var vm = $scope;
    vm.title = "Akash Mitra";
  }

}());