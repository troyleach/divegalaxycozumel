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
      "email": undefined
    };

    reservation.reset = function() {
        reservation.user = {};
    };

    reservation.saveData = function(information) {
      console.log(information);
    };
    // below is from stack
  
  
    
      $scope.today = function() {
        $scope.startDate = new Date();
        $scope.endDate = new Date();
      };
      $scope.today();

      $scope.clear = function() {
        $scope.startDate = null;
        $scope.endDate = null;
      };

      // $scope.inlineOptions = {
      //   customClass: getDayClass,
      //   minDate: new Date(),
      //   showWeeks: true
      // };

      // $scope.dateOptions = {
      //   dateDisabled: disabled,
      //   formatYear: 'yy',
      //   maxDate: new Date(2020, 5, 22),
      //   minDate: new Date(),
      //   startingDay: 1
      // };

      // Disable weekend selection
      // function disabled(data) {
      //   var date = data.date,
      //     mode = data.mode;
      //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      // }

      // $scope.toggleMin = function() {
      //   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      //   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      // };

      // $scope.toggleMin();

      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };

      $scope.open2 = function() {
        $scope.popup2.opened = true;
      };

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      // $scope.format = $scope.formats[0];
      // $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
        opened: false
      };

      $scope.popup2 = {
        opened: false
      };

      // var tomorrow = new Date();
      // tomorrow.setDate(tomorrow.getDate() + 1);
      // var afterTomorrow = new Date();
      // afterTomorrow.setDate(tomorrow.getDate() + 1);
      // $scope.events = [
      //   {
      //     date: tomorrow,
      //     status: 'full'
      //   },
      //   {
      //     date: afterTomorrow,
      //     status: 'partially'
      //   }
      // ];

      // function getDayClass(data) {
      //   var date = data.date,
      //     mode = data.mode;
      //   if (mode === 'day') {
      //     var dayToCheck = new Date(date).setHours(0,0,0,0);

      //     for (var i = 0; i < $scope.events.length; i++) {
      //       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

      //       if (dayToCheck === currentDay) {
      //         return $scope.events[i].status;
      //       }
      //     }
      //   }

      //   return '';
      // } 

  }]);
})();
