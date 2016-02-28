/*
 * Reef Map
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('ReefMapCtrl', ['$scope', function($scope) {
    this.name_of_page = "Reef Map";
    this.message = 'Reef Map controller tested';       
  }]);
})();
