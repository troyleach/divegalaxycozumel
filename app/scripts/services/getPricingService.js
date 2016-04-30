/*
 * Pricing Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('getPricingFactory', ['$http', '$q', function(http, $q) {
    var url = "http://localhost:3000/";
    return {
      getDivingPricing: function() {
        var deferred = $q.defer();
        
        http.get(url + "divings", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getTrainingPricing: function() {
        var deferred = $q.defer();

        http.get(url + "trainings", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getRentalPricing: function() {
        var deferred = $q.defer();

        http.get(url + "rentals", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getSpecialtiesPricing: function() {
        var deferred = $q.defer();

        http.get(url + "specialties", HEADERS).success(function(response){
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
