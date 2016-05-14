/*
 * Create Services 
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('postToUsers', ['$http', '$q', function(http, $q) {
    return {
      createNewUser: function(data) {
        var deferred = $q.defer();

        $http.post(URL + 'users', data).success(function(response) {
              console.log(response);
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
