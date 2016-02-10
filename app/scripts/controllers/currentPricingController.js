/*
 * Current Pricing controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('CurrentPricingCtrl', ['$scope', function($scope) {
    this.name_of_page = "Current Priging";
    this.message = 'Current pricing controller tested';       
  }]);
})();
