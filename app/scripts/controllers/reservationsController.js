/*
 * Reservations 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('ReservationsCtrl', ['$scope', '$http', '$route', '$location', '$window', 'getPricingFactory', function($scope, $http, $route, $location, $window, getPricingFactory) {
    var reservation = this;

    reservation.pageIdentifier = "Reservations";
    reservation.panelTitle = 'Book your diving, kim@divegalaxsea.com | 52-987-112-9630';       
    reservation.checkboxModel = false; 
    reservation.user = {
      "firstName": undefined,
      "lastName": undefined,
      "email": undefined,
      "selectedDiving": [],
      "selectedTraining": [],
      "selectedDates": []
    };

    reservation.checkFirst = function() {
      console.log('checkFirst ran');
      reservation.user.selectedDiving.splice(0, reservation.user.selectedDiving.length); 
      reservation.user.selectedDiving.push('guest');
    };
    
    getPricingFactory.getDivingPricing().then(function(response) {
      reservation.diving = response;
    });

    getPricingFactory.getTrainingPricing().then(function(response) {
      reservation.training = response;
    });

    getPricingFactory.getRentalPricing().then(function(response) {
      reservation.rentals = response;
    });

    getPricingFactory.getSpecialtiesPricing().then(function(response) {
      reservation.specialties = response;
    });
    
    reservation.twoTank = false;
    
    reservation.reset = function() {
      reservation.user = {};
    };

    reservation.saveData = function() {
      var data = { "user": {
          "first_name": reservation.user.firstName,
          "last_name": reservation.user.lastName,
          "email": reservation.user.email,
          "phone": reservation.user.phone,
          "comments": reservation.user.message,
          "vacations_attributes": [
                                    { "dates_array": reservation.user.selectedDates,
                                      "diving_objects": reservation.user.selectedDiving,
                                      "training_objects": reservation.user.selectedTraining,
                                      "number_of_divers": reservation.user.numberOfDivers,
                                      "resort": reservation.user.resort
                                    }
                                  ]
        }
      };
      // TODO move this into a service I have created the service I just need to hook it up :-)
      //var url = "http://localhost:3000/users";
      //install $log = $log.log('send users information to api for creation')
      $http.post(URL + 'users', data).success(function(data, status) {
        $window.location.href = '/';
      }).error(function(data, status){
        //errors go here
        console.log(status);
      });
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
      reservation.user.selectedDates.splice(reservation.user.selectedDates.indexOf(dt), 1);

    };

    $scope.roles = [
    'guest', 
    'user', 
    'customer', 
    'admin'
  ];
  $scope.user = {
    roles: ['user']
  };
  $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push('guest');
  };

  }]);
})();
