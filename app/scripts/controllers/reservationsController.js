/*
 * Reservations 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('ReservationsCtrl', ['$scope', function($scope) {
    this.pageIdentifier = "Reservations";
    this.panelTitle = 'Book your diving, kim@divegalaxsea.com | 52-987-112-9630';       
  }]);
})();
