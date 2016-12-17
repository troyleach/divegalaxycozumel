/*
 * Update Pricing Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('updatePricingFactory', ['$http', '$q', function(http, $q) {
    return {
        updateDivingsPricing: function(data) {
            var deferred = $q.defer();

            http.patch(URL + "divings/" + data.id, data, HEADERS).success(function(response){
                deferred.resolve(response);
            })
                .error(function() {
                    deferred.reject();
                });
            return deferred.promise;
        },

        updateRentalsPricing: function(data) {
            var deferred = $q.defer();

            http.patch(URL + "rentals/" + data.id, data, HEADERS).success(function(response){
                deferred.resolve(response);
            })
                .error(function() {
                    deferred.reject();
                });
            return deferred.promise;
        },

        updateTrainingsPricing: function(data) {
            var deferred = $q.defer();

            http.patch(URL + "trainings/" + data.id, data, HEADERS).success(function(response){
                deferred.resolve(response);
            })
                .error(function() {
                    deferred.reject();
                });
            return deferred.promise;
        },

      updateSpecialtiesPricing: function(data) {
        var deferred = $q.defer();
          // TODO I hit the api however I got a preflight request error, are the headers right? I have now got it running on dev - I still get the bad token shit.
          http.patch(URL + "specialties/" + data.id, data, HEADERS).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },

        updateMiscellaneousPricing: function() {
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
