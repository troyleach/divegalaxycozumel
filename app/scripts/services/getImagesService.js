/*
 * Dropbox Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('getImagesFactory', ['$http', '$q', function($http, $q) {

    return {
      getGallery: function() {
        var deferred = $q.defer();
        $http({
          url: "https://api.dropboxapi.com/2/sharing/list_shared_links",
          method: "POST",
          data: "{}",
          headers: {Authorization: "Bearer TfMIrZsh-ycAAAAAAAASyoPtJgui9gy9rD3hwe1RVDF8oZsebo912nIViHCPqE_0",
                    'Content-Type': "application/json"}
        }).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data, status, headers, config) {
          console.log(data);
          deferred.reject();
        });
        return deferred.promise;
      }
    };

  }]);
}).call(this);
