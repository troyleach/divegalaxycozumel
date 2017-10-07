/*
 * Specialties Modal controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('RentalsCtrl', [
    '$scope',
    '$modalInstance',
    'userForm',
    function(
      $scope,
      $modalInstance,
      $log,
      userForm) {
      $scope.pricing = $scope.pricing_object;

      // TODO move all the patch logic to here
      // TODO so this works not sure how, selectedItem is infact a new payload
      // with the updated stuff. need to figure out if I should make my update
      // rquest from here or in the modals controller

      $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
          console.log('user form is in scope');
          $modalInstance.close($scope.pricing);
        } else {
          console.log('userform is not in scope');
        }
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    }]);
})();
