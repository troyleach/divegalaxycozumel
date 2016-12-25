/*
 * login Modal controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

    controllerModule.controller('DivingsCtrl', ['$scope', '$modalInstance', 'userForm', function($scope, $modalInstance, $log, userForm) {
        $scope.pricing = $scope.pricing_object;

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
