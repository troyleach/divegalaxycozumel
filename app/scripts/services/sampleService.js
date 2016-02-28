/*
 * Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services', []);

  serviceModule.factory('getWeatherFactory', ['$http', '$q', function(http, $q) {
    return {
      getWeather: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/weather.json';
        var url = "http://api.worldweatheronline.com/free/v2/weather.ashx?q=20.511138%2C-86.949234&format=json&num_of_days=5&key=91e6dc741ca2f99fa18e1408ee471";
        http.get(urlOffLine).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },
      
      getMarineWeather: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/marine.json';
        var url = 'http://api.worldweatheronline.com/free/v2/marine.ashx?q=20.511138%2C-86.949234&format=json&key=91e6dc741ca2f99fa18e1408ee471';
        http.get(urlOffLine).success(function(response) {
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

// "http://api.worldweatheronline.com/free/v2/weather.ashx?q=20.511138%2C-86.949234&format=json&num_of_days=5&key=91e6dc741ca2f99fa18e1408ee471";
  
