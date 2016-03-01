/*
 * Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('HomeCtrl', ['$scope', 'getWeatherFactory', function($scope, getWeatherFactory) {
    this.pageIdentifier = "Home";
    this.panelTitle = 'Explore the Mystical Underwater World of Cozumel with Dive GalaxSea'; 
   
  }]);
})();
