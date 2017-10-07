/*
 * Create Pricing Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('createPricingFactory', ['$http', '$q', function(http, $q) {
    return {
      createPricing: function(data, action) {
        var deferred = $q.defer();

        http.post(URL + action + "/", data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },

      createDivingsPricing: function(data) {
        var deferred = $q.defer();

        http.post(URL + "divings/", data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },

      createRentalsPricing: function(data) {
        var deferred = $q.defer();

        http.post(URL + "rentals/", data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },

      createTrainingsPricing: function(data) {
        var deferred = $q.defer();

        http.post(URL + "trainings/", data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },

      createSpecialtiesPricing: function(data) {
        var deferred = $q.defer();
        http.post(URL + "specialties/", data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },

      createMiscellaneousPricing: function(data) {
        var deferred = $q.defer();
        http.post(URL + "miscellaneous_pricings/", data, HEADERS).success(function(response){
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
