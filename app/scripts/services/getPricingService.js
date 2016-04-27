/*
 * Pricing Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('getPricingFactory', ['$http', '$q', function(http, $q) {
    return {
      getDivingPricing: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/pricing.json';
        var url = "http://localhost:3000/divings";
        
        http.get(url, headers).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getTrainingPricing: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/pricing.json';
        var url = "http://localhost:3000/trainings";

        http.get(url, headers).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getRentalPricing: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/pricing.json';
        var url = "http://localhost:3000/rentals";

        http.get(url, headers).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getSpecialtiesPricing: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/pricing.json';
        var url = "http://localhost:3000/specialties";

        http.get(url, headers).success(function(response){
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
