(function () {
  'use strict';

  angular
    .module('akashmitrapp')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http'];

  function dataservice($http) {
    return {
      getImageDetails: getImageDetails
    };

    function getImageDetails() {
      return $http.get('data.json')
        .then(getImageDetailsComplete)
        .catch(getImageDetailsFailed);

      function getImageDetailsComplete(response) {
        return response.data;
      }

      function getImageDetailsFailed(error) {
        console.log('XHR Failed for Image Details.', error.data);
      }
    }
  }


}());