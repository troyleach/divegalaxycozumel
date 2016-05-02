/*
 * Weather Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services', []);

  serviceModule.factory('getWeatherFactory', ['$http', '$q', function(http, $q) {
    return {
      getWeather: function() {
        var deferred = $q.defer();
        http.get(WEATHER_URL).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },
      
      getMarineWeather: function() {
        var deferred = $q.defer();
        http.get(WEATHER_MARINE_URL).success(function(response) {
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      }
    };

  }]);

}).call(this);
