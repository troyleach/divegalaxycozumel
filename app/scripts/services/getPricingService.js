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
        
        http.get(URL + "divings", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getTrainingPricing: function() {
        var deferred = $q.defer();

        http.get(URL + "trainings", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getRentalPricing: function() {
        var deferred = $q.defer();

        http.get(URL + "rentals", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

      getSpecialtiesPricing: function() {
        var deferred = $q.defer();

        http.get(URL + "specialties", HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

        getMiscellaneousPricing: function() {
            var deferred = $q.defer();

            http.get(URL + "miscellaneous_pricings", HEADERS).success(function(response){
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
