/*
 * Delete Pricing Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('deletePricingFactory', ['$http', '$q', function(http, $q) {
    return {
      deletePricing: function(data, action) {
        var deferred = $q.defer();
        var url = URL + action + "/" + data.id;

        http.delete(url, HEADERS)
          .success(function(response){
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
