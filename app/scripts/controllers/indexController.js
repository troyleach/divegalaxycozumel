/*
 * Index controller // I believe this is the parant controller
 */
(function() {
    'use strict';
    var controllerModule = angular.module('myApp.controller', []);

    controllerModule.controller('IndexCtrl', ['$scope', 'getWeatherFactory', '$uibModal', 'AuthenticationService', '$location', '$window', '$http', 'getImagesFactory',
        function($scope, getWeatherFactory, $uibModal, AuthenticationService, $location, $window, $http, getImagesFactory) {
            var index = this;
            var userInfo;
            index.date = new Date();
            index.tempScale = true;
            index.tripAdvisorReview = [
                "You looking for a great, custom experience rather than a cattle boat in CZM???? Call Kim. But do it before you get there... the word will get out and she'll fill up.",
                "Kim truly is a pro. I did my open water dives with her last week. She was prepared, knowledgable, reassuring, relaxed, professional, and funny. The time under and above water with her was great."
            ];

            index.daysOfTheWeek = [];
            index.weatherInCity = "Current Weather in Cozumel...";
            var days = [
              'Sun',
              'Mon',
              'Tues',
              'Wed',
              'Thurs',
              'Fri',
              'Sat'
            ];

            index.weatherDescMap = {
                "clear-day": '<i class="wi wi-day-sunny"></i>',
                "clear-night": '<i class="wi wi-night-clear"></i>',
                "snow": '<i class="wi wi-snow"></i>',
                "rain": '<i class="wi wi-thunderstorm"></i>',
                "fog": '<i class="wi wi-fog"></i>',
                "cloudy": '<i class="wi wi-cloudy"></i>',
                "wind": '<i class="wi wi-day-windy"></i>',
                "sleet": '<i class="wi wi-sleet"></i>',
                "partly-cloudy-night": '<i class="wi wi-night-partly-cloudy"></i>',
                "partly-cloudy-day": '<i class="wi wi-day-cloudy"></i>'
            };

            if(window.sessionStorage.userInfo){
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }

            index.toggleTemperature = function(temperature) {
                if(temperature === 'farenheit') {
                    index.tempScale = true; 
                } else {
                    index.tempScale = false; 
                }
            }; 

          // When in dev use this code until I can get this fixed. also
          // skycon will not work with a dev payload.
          //getWeatherFactory.devGetWeather().then(function(response) {
          getWeatherFactory.getWeather().then(function(response) {
            $scope.currentWeather = response;
            var icons = new Skycons({"color": "#999"});
            var fiveDayWeather = response.daily.data;
            var i = 1;

            for(i; i < fiveDayWeather.length; i++ ) {
              var date = new Date(fiveDayWeather[i].time * 1000)
              index.daysOfTheWeek.push({
                date: days[date.getDay()],
                weekDay: getWeekDay(fiveDayWeather[i].date),
                maxtempC: fiveDayWeather[i].maxtempC,
                maxtempF: fiveDayWeather[i].temperatureHigh,
                mintempC: fiveDayWeather[i].mintempC,
                mintempF: fiveDayWeather[i].temperatureLow,
                icon: fiveDayWeather[i].icon 
              });
            }
            icons.set("weatherIcon", $scope.currentWeather.currently.icon);
            icons.play();
          });


            function getWeekDay(dateString) {
              //TODO I can use the days array above on line 21
                var dateObject = new Date(dateString);
                var weekday = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thur",
                    "Fri",
                    "Sat"
                ];

                var day = weekday[dateObject.getUTCDay()];
                return day;
            }

            this.userLogin = function () {
                $scope.message = "Show Form Button Clicked ONE this happens when user clicks admin login";
                console.log($scope.message);

                var modalInstance = $uibModal.open({
                    templateUrl: '/partials/modal/login.html',
                    controller: 'LoginCtrl',
                    scope: $scope
                });

                modalInstance.result.then(function (usersCredentials) {
                    var usersInfo = AuthenticationService.login(usersCredentials.useremail, usersCredentials.password);
                    $location.path('/admin');
                    window.location.reload();
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            this.userLogout = function() {
                window.sessionStorage.clear();
                $location.path('/home');
                window.location.reload();
            };

        }]);
})();
