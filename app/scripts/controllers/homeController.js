/*
 * Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

    controllerModule.controller('HomeCtrl', ['$scope', 'getWeatherFactory', '$window', '$uibModal', function($scope, $window, getWeatherFactory, $uibModal) {
    this.pageIdentifier = "Home";
    this.panelTitle = 'Explore the Mystical Underwater World of Cozumel with Dive GalaxSea';


    this.alertType = window.localStorage.alertType;
    this.alertMsg = window.localStorage.alerts;
    localStorage.clear();
  }]);
})();
