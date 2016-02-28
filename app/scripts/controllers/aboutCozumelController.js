/*
 * About Cozumel controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('AboutCozumelCtrl', ['$scope', function($scope) {
    this.pageIdentifier = 'About Cozumel';
    this.panelTitle = 'Go Diving in Cozumel and Explore the Mesmerizing Coral Reefs!';
  }]);
})();
