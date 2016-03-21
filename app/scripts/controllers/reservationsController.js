/*
 * Reservations 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('ReservationsCtrl', ['$scope', function($scope) {
    var reservation = this;
    reservation.pageIdentifier = "Reservations";
    reservation.panelTitle = 'Book your diving, kim@divegalaxsea.com | 52-987-112-9630';       
    reservation.user = {
      "firstName": undefined,
      "lastName": undefined,
      "email": undefined,
      "groupSize": undefined,
      "selectedDiving": [],
      "selectedTraining": [],
      "selectedDates": []
    };

    reservation.reset = function() {
      reservation.user = {};
    };

    reservation.saveData = function() {

      console.log(reservation.userInformation);
    };

    reservation.addDiving = function(diving) {
      reservation.user.selectedDiving.push(diving); 
    };


    reservation.activeDate = null;
    // reservation.activeDate2 = null;
    reservation.selectedDates = [new Date().setHours(0, 0, 0, 0)];
    // reservation.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
    reservation.type = 'individual';
    
    reservation.removeFromSelected = function(dt) {
      reservation.selectedDates.splice(reservation.selectedDates.indexOf(dt), 1);
    };

  }]);
})();
