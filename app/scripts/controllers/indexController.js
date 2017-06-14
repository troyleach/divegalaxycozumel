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
            index.tempScale = true;
            index.tripAdvisorReview = [
                "You looking for a great, custom experience rather than a cattle boat in CZM???? Call Kim. But do it before you get there... the word will get out and she'll fill up.",
                "Kim truly is a pro. I did my open water dives with her last week. She was prepared, knowledgable, reassuring, relaxed, professional, and funny. The time under and above water with her was great."
            ];
            index.daysOfTheWeek = [];
            index.weatherInCity = "Current Weather in Cozumel...";

            index.weatherDescMap = {
                395: '<i class="wi wi-snow"></i>',
                392: '<i class="wi wi-snow"></i>',
                389: '<i class="wi wi-thunderstorm"></i>',
                386: '<i class="wi wi-thunderstorm"></i>',
                377: '<i class="wi wi-showers"></i>',
                374: '<i class="wi wi-showers"></i>',
                371: '<i class="wi wi-snow"></i>',
                368: '<i class="wi wi-snow"></i>',
                365: '<i class="wi wi-sleet"></i>',
                362: '<i class="wi wi-sleet"></i>',
                359: '<i class="wi wi-thunderstorm"></i>',
                356: '<i class="wi wi-thunderstorm"></i>',
                353: '<i class="wi wi-showers"></i>',
                350: '<i class="wi wi-snow"></i>',
                338: '<i class="wi wi-snow"></i>',
                335: '<i class="wi wi-snow"></i>',
                332: '<i class="wi wi-snow"></i>',
                329: '<i class="wi wi-snow"></i>',
                326: '<i class="wi wi-snow"></i>',
                323: '<i class="wi wi-snow"></i>',
                320: '<i class="wi wi-sleet"></i>',
                317: '<i class="wi wi-sleet"></i>',
                314: '<i class="wi wi-day-showers"></i>',
                311: '<i class="wi wi-day-showers"></i>',
                308: '<i class="wi wi-storm-showers"></i>',
                305: '<i class="wi wi-day-showers"></i>',
                302: '<i class="wi wi-day-showers"></i>',
                299: '<i class="wi wi-day-showers"></i>',
                296: '<i class="wi wi-day-showers"></i>',
                293: '<i class="wi wi-day-showers"></i>',
                284: '<i class="wi wi-sleet"></i>',
                281: '<i class="wi wi-sleet"></i>',
                266: '<i class="wi wi-sleet"></i>',
                263: '<i class="wi wi-sleet"></i>',
                260: '<i class="wi wi-day-fog"></i>',
                248: '<i class="wi wi-fog"></i>',
                230: '<i class="wi wi-day-snow-wind"></i>',
                227: '<i class="wi wi-day-snow-wind"></i>',
                200: '<i class="wi wi-thunderstorm"></i>',
                185: '<i class="wi wi-day-sleet"></i>',
                182: '<i class="wi wi-day-sleet"></i>',
                179: '<i class="wi wi-snow"></i>',
                176: '<i class="wi wi-showers"></i>',
                143: '<i class="wi wi-day-sleet"></i>',
                122: '<i class="wi wi-cloudy"></i>',
                119: '<i class="wi wi-cloudy"></i>',
                116: '<i class="wi wi-day-cloudy"></i>',
                113: '<i class="wi wi-day-sunny"></i>'
            };

            if(window.sessionStorage.userInfo){
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }

            getImagesFactory.getGallery().then(function(response) {
                var i;
                var lgth = response.links.length;
                var imageUrls = [];
                for(i = 0; i < lgth; i++) {
                    if(response.links[i][".tag"] === "file") {
                        if(response.links[i].path_lower.search(/\bcarousel\b/) !== -1) {
                            var tempData = modifyUrl(response.links[i]);
                            if (tempData != null) {
                                imageUrls.push( tempData );
                            }
                            $scope.carousel = imageUrls;
                        }
                    }

                }
            });

            function modifyUrl(dbObject) {
                var tempUrl = dbObject.url;
                tempUrl = tempUrl.replace('dl=0', 'raw=1');
                return tempUrl;
            }

            index.toggleTemperature = function(temperature) {
                if(temperature === 'farenheit') {
                    index.tempScale = true; 
                } else {
                    index.tempScale = false; 
                }
            }; 

            getWeatherFactory.getWeather().then(function(response) {
                var fiveDayWeather = response.data.weather;

                for(var i = 0; i < fiveDayWeather.length; i++ ) {
                    index.daysOfTheWeek.push({
                        date: fiveDayWeather[i].date,
                        weekDay: getWeekDay(fiveDayWeather[i].date),
                        maxtempC: fiveDayWeather[i].maxtempC,
                        maxtempF: fiveDayWeather[i].maxtempF,
                        mintempC: fiveDayWeather[i].mintempC,
                        mintempF: fiveDayWeather[i].mintempF,
                        weatherCode: getWeatherIcon(fiveDayWeather[i].hourly[3].weatherCode) 
                    });
                }
                index.currentWeather = index.daysOfTheWeek.splice(0, 1);
                return index.daysOfTheWeek;
            });

            getWeatherFactory.getMarineWeather().then(function(response) {
                var marineData = response.data.weather[0].hourly[3];
                index.marineWeather = {
                    humidity: marineData.humidity,
                    waterTempC: marineData.waterTemp_C,
                    waterTempF: marineData.waterTemp_F,
                    weatherDesc: marineData.weatherDesc[0].value,
                    windDir: marineData.winddir16Point,
                    windSpeed: marineData.windspeedMiles
                };
                return index.marineWeather;
            });

            function getWeatherIcon(weatherDescNum) {
                var weatherIcon; 
                angular.forEach(index.weatherDescMap, function(value, key) {
                    if(key == weatherDescNum) {
                        weatherIcon = value; 
                    }
                });
                return weatherIcon;
            }

            function getWeekDay(dateString) {
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
                    console.log('there i am after sign in')
                    $location.path('/admin');
                    window.location.reload();
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            this.getAccountInfo = function() {
                $scope.myInformation = {};
                $http({
                    method: "POST",
                    url: "https://api.dropboxapi.com/2/users/get_current_account",
                    headers: {Authorization: "Bearer TfMIrZsh-ycAAAAAAAASyoPtJgui9gy9rD3hwe1RVDF8oZsebo912nIViHCPqE_0"}
                }).then(function mySuccess(response) {
                    $scope.myAccount = response.data;
                }, function myError(response) {
                    $scope.myAccount = response.statusText;
                });
            };

            // this.getAccountInfo();

            // function getPictureOfTheMonth(dbObject) {
            //   if(dbObject.path_lower.search(/\bpicture_of_month\b/) !== -1) {
            //     tempUrl = dbObject.url;
            //     tempUrl = tempUrl.replace('dl=0', 'raw=1');
            //     return tempUrl;
            //   }
            // }

            // function getHomeInfo(dbObject) {
            //   if(dbObject.path_lower.search(/\bhome_information\b/) !== -1) {
            //     tempUrl = dbObject.url;
            //     tempUrl = tempUrl.replace('dl=0', 'raw=1');
            //     return tempUrl;
            //   }
            // }

            // this.getPictureOfTheMonth = function(dbObject) {
            // };

            this.getSharedLink = function() {
                $http({
                    method: "POST",
                    url: "https://api.dropboxapi.com/2/sharing/list_shared_links",
                    headers: {Authorization: "Bearer TfMIrZsh-ycAAAAAAAASyoPtJgui9gy9rD3hwe1RVDF8oZsebo912nIViHCPqE_0",
                        'Content-Type': "application/json"}
                }).then(function mySuccess(response) {
                    $scope.imageUrls = {};
                    var i, tempUrl;
                    var picUrl = [];
                    var homeInfo = [];
                    var lgth = response.data.links.length;
                    for(i = 0; i < lgth; i++) {
                        if(response.data.links[i][".tag"] === "file") {
                            picUrl.push( getPictureOfTheMonth(response.data.links[i]) );
                            picUrl.push( getHomeInfo(response.data.links[i]) );
                            $scope.imageUrls = {
                                "pictureOfMonth": picUrl,
                                "homeInformation": homeInfo
                            };
                            // tempUrl = response.data.links[i].url;
                            // tempUrl = tempUrl.replace('dl=0', 'raw=1');
                            // $scope.imageUrls.push(tempUrl);
                        }
                    }
                    $scope.dbPayload = response.data;
                }, function myError(response) {
                    $scope.imagesArray = response.statusText;
                });
            };

            // this.getSharedLink();

            this.getSharedUrl = function() {
                $http({
                    method: "POST",

                    url: "https://api.dropboxapi.com/2/files/get_metadata",
                    headers: {Authorization: "Bearer TfMIrZsh-ycAAAAAAAASyoPtJgui9gy9rD3hwe1RVDF8oZsebo912nIViHCPqE_0",
                        'Content-Type': "application/json"},
                    data: {
                        "path": 'id:jAPePYKyT5AAAAAAAAAADw',
                        "include_media_info": true
                    }
                }).then(function mySuccess(response) {
                    $scope.dbPayloadMetadata = response.data;
                }, function myError(response) {
                    $scope.imagesArray = response.statusText;
                });
            };

            // this.getSharedUrl();

            this.userLogout = function() {
                window.sessionStorage.clear();
                $location.path('/home');
                window.location.reload();
            };


        }]);
})();
