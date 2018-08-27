/*
 * Weather Services DarkSky
 */

(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services', []);

  serviceModule.factory('getWeatherFactory', ['$http', '$q', function($http, $q) {
    var weather = {};
    var dev_payload = {};
    return {
      devGetWeather: function() {
        var deferred = $q.defer();
        $http.get('./scripts/services/fakePayload.json').then(function(data) {
          deferred.resolve(data.data);
        });
        return deferred.promise;
      },
      getWeather: function() {
        var latitude = 20.4230;
        var longitude = -86.9223;
        var url = DARK_SKY_KEY + DARK_SKY_API_KEY + '/' + latitude + ',' + longitude
        var deferred = $q.defer();

        $http.get(url).success(function(response){
          weather.currently = response.currently;
          weather.daily = response.daily;
          deferred.resolve(weather);
        })
          .error(function(error) {
            console.log('Could not make this request', error);
            deferred.reject();
          });
        return deferred.promise;
      }
    };
  }]);

}).call(this);
