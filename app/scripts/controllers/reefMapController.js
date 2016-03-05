/*
 * Reef Map
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('ReefMapCtrl', ['$scope', function($scope) {
    this.pageIdentifier = "Reef Map";
    this.panelTitle = "Don't Imagine Paradise, Visit Cozumel!";     
  }]);
})();
