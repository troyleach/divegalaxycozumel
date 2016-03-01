/*
 * Current Pricing controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('CurrentPricingCtrl', ['$scope', function($scope) {
    this.pageIdentifier = "Current Pricing";
    this.panelTitle = 'Learn About our Scuba Dive Courses & Diving Rates';       
  }]);
})();
