/*
 * Current Pricing controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('CurrentPricingCtrl', ['$scope', 'getPricingFactory', "usSpinnerService", function($scope, getPricingFactory, usSpinnerService) {
    var pricing = this;
    pricing.showSpinner = false;    

//TODO before push to prod. make sure I delete the /dist/
    pricing.pageIdentifier = "Current Pricing";
    pricing.panelTitle = 'Learn About our Scuba Dive Courses & Diving Rates';
    pricing.diving = 'partials/pricing_partials/diving.html';
    pricing.rental = 'partials/pricing_partials/rental_gear.html';
    pricing.training = 'partials/pricing_partials/training.html';
    pricing.policies = 'partials/pricing_partials/policies.html';

//TODO the jason that is getting returned is not to spec.. FIX
    getPricingFactory.getDivingPricing().then(function(response) {
      pricing.showSpinner = true; 
      pricing.currentPricingDiving = response;
    });

    getPricingFactory.getTrainingPricing().then(function(response) {
      pricing.currentPricingTraining = response;
    });

    getPricingFactory.getRentalPricing().then(function(response) {
      pricing.currentPricingRentals = response;
    });

    getPricingFactory.getSpecialtiesPricing().then(function(response) {
      pricing.showSpinner = false;    
      pricing.currentPricingSpecialties = response;
    });


  }]);
})();
