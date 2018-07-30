/*
 * Weather Services DarkSky
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services', []);

  serviceModule.factory('getWeatherFactory', ['$http', '$q', function(http, $q) {
    return {
      getWeather: function() {
        var deferred = $q.defer();
          console.log('fucker face')
        $.getJSON(DARK_SKY_KEY, function(data) {
          console.log('fucker face', data)
          deferred.resolve(data);
        });
        //http.get(DARK_SKY_KEY).success(function(response){
          //console.log('fucker face', response)
          //deferred.resolve(response);
        //})
        //.error(function(error) {
          //console.log('shit face', error);
          //deferred.reject();
        //});
        return deferred.promise;
      }
      
      //getMarineWeather: function() {
        //var deferred = $q.defer();
        //http.get(WEATHER_MARINE_URL).success(function(response) {
          //deferred.resolve(response);
        //})
        //.error(function() {
          //deferred.reject();
        //});
        //return deferred.promise;
      //}
    };

  }]);

}).call(this);
