/*
 * Admin Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

    controllerModule.controller('AdminCtrl', ['$scope', 'getWeatherFactory', '$window', 'getPricingFactory', function($scope, $window, getWeatherFactory, getPricingFactory) {
    var admin = this;
    this.pageIdentifier = "Admin Dashboard";
    this.panelTitle = 'Adminstration Things';
        this.panelTitle = 'Single Day Rates';
        admin.singleDay = 'partials/edit_pricing_partials/single_day.html';
        admin.rentalGear = 'partials/edit_pricing_partials/rental_gear.html';
        admin.training = 'partials/edit_pricing_partials/training.html';
        admin.specialties = 'partials/edit_pricing_partials/specialties.html';

        $scope.model = {
            name: 'tabs'
        };
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

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
            var currentPricingMiscellaneous = response;
            admin.parkFee = currentPricingMiscellaneous[0].price;
        });
  }]);
})();
