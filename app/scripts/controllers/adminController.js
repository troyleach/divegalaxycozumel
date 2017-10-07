/*
 * Admin Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('AdminCtrl', [
    '$scope',
    'getWeatherFactory',
    '$window',
    'getPricingFactory',
    'updatePricingFactory',
    'createPricingFactory',
    'deletePricingFactory',
    '$uibModal',
    '$log',
    function(
      $scope,
      $window,
      getWeatherFactory,
      getPricingFactory,
      updatePricingFactory,
      createPricingFactory,
      deletePricingFactory,
      $uibModal,
      $log) {

    var admin = this;
    this.pageIdentifier = "Admin Dashboard";
    this.panelTitle = 'Single Day Rates';
    admin.singleDay = 'partials/edit_pricing_partials/single_day.html';
    admin.rentalGear = 'partials/edit_pricing_partials/rental_gear.html';
    admin.training = 'partials/edit_pricing_partials/training.html';
    admin.specialties = 'partials/edit_pricing_partials/specialties.html';
    admin.miscellaneous = 'partials/edit_pricing_partials/miscellaneous_pricings.html';

      // TODO category is the thing binging passed in like specialties, need to make a generic Ctrl
      // - line 35 the templateURL needs to changed the file name edit_rates.html

        $scope.editPrice = function (obj, category) {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            $scope.pricing_object = obj;
            $scope.category = category + 'Ctrl';

            var modalInstance = $uibModal.open({
              //TODO nasty name change this to edit_rates.html
                templateUrl: '/partials/modal/edit_single_day_rates.html',
                controller: $scope.category,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                var data = {};
                var controllers = {SpecialtiesCtrl: 'specialty',
                                   TrainingsCtrl: 'training',
                                   DivingsCtrl: 'diving',
                                   Miscellaneous_pricingsCtrl: 'miscellaneous_pricing',
                                   RentalsCtrl: 'rental'};
                var requiredParams = controllers[$scope.category];
                data.id = selectedItem.id;
                data[requiredParams] = {title: selectedItem.title,
                                        price: selectedItem.price,
                                        description: selectedItem.description};

              // TODO I would really like to make this dynamic UPDATE these posts
              // requests should happen in the modal controller and only exit the
              // modal when the resonse is success.
              // TODO move the below actions into the modal controllers only
              // close if respnose is success
                if($scope.category == 'SpecialtiesCtrl') {
                    updatePricingFactory.updateSpecialtiesPricing(data);
                } else if($scope.category == 'TrainingsCtrl') {
                    updatePricingFactory.updateTrainingsPricing(data);
                } else if($scope.category == 'RentalsCtrl') {
                    updatePricingFactory.updateRentalsPricing(data);
                } else if($scope.category == 'DivingsCtrl') {
                    updatePricingFactory.updateDivingsPricing(data);
                } else if($scope.category == 'MiscellaneousCtrl') {
                    updatePricingFactory.updateMiscellaneousPricing(data);
                }
              // TODO not sure the above is the right place to do this, but It
              // did make it over to the service updatePricing Service, see notes
              // there - this works accept the callback doesn't work
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

      $scope.deletePrice = function (obj, action) {
        deletePricingFactory.deletePricing(obj, action);
        $scope.getData();
      };

        $scope.newPrice = function (obj, category) {
            $scope.message = "Upon a new action";
            console.log($scope.message);
            $scope.pricing_object = obj;
            $scope.action = category.toLowerCase();
            $scope.category = category + 'Ctrl';

            var modalInstance = $uibModal.open({
                templateUrl: '/partials/modal/edit_single_day_rates.html',
                controller: $scope.category,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                var data = {};
                var controllers = {SpecialtiesCtrl: 'specialty',
                                   TrainingsCtrl: 'training',
                                   DivingsCtrl: 'diving',
                                   Miscellaneous_pricingsCtrl: 'miscellaneous_pricing',
                                   RentalsCtrl: 'rental'};
                var requiredParams = controllers[$scope.category];
                data.id = selectedItem.id;
                data[requiredParams] = {title: selectedItem.title,
                                        price: selectedItem.price,
                                        description: selectedItem.description};

              createPricingFactory.createPricing(data, $scope.action);

            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

      //TODO need to refactor this so that it is just one call change the api

      $scope.getData = function () {
        getPricingFactory.getDivingPricing().then(function(response) {
            admin.currentPricingDiving = response;
        });
        getPricingFactory.getTrainingPricing().then(function(response) {
            admin.currentPricingTraining = response;
        });

        getPricingFactory.getRentalPricing().then(function(response) {
            admin.currentPricingRentals = response;
        });

        getPricingFactory.getSpecialtiesPricing().then(function(response) {
            admin.currentPricingSpecialties = response;
        });

        getPricingFactory.getMiscellaneousPricing().then(function(response) {
            admin.currentPricingMiscellaneous = response;
            // admin.parkFee = currentPricingMiscellaneous[0].price;
        });
      };
      $scope.getData();
  }]);
})();
