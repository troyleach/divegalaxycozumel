/*
 * Weather Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('getPricingFactory', ['$http', '$q', function(http, $q) {
    return {
      getPricing: function() {
        var deferred = $q.defer();
        var urlOffLine =  'scripts/data/pricing.json';
        var url = "";
        
        http.get(urlOffLine).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },
    };

  }]);

}).call(this);
