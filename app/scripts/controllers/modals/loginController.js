/*
 * Login Modal controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('LoginCtrl', [
    '$scope',
    '$modalInstance',
    'AuthenticationService',
    '$window',
    function(
      $scope,
      $modalInstance,
      $log,
      AuthenticationService,
      $window) {

      $scope.submit = function () {
        if ($scope.loginForm.$valid) {
          $modalInstance.close($scope.credentials);
        } else {
          console.log('userform is not in scope');
        }
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    }]);
})();
