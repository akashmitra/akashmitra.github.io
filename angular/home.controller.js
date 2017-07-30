(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .controller('HomeController', HomeController);

  // HomeController.$inject = ['dataservice'];

  function HomeController($scope) {
    var vm = $scope;
  }

}());