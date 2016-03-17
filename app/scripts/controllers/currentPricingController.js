/*
 * Current Pricing controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('CurrentPricingCtrl', ['$scope', 'getPricingFactory', function($scope, getPricingFactory) {
    var pricing = this;

    pricing.pageIdentifier = "Current Pricing";
    pricing.panelTitle = 'Learn About our Scuba Dive Courses & Diving Rates';
    pricing.diving = '/partials/pricing_partials/diving.html';
    pricing.rental = '/partials/pricing_partials/rental_gear.html';
    pricing.training = '/partials/pricing_partials/training.html';

    getPricingFactory.getPricing().then(function(response) {
      pricing.currentPricingDiving = response.data.pricing.diving;
      pricing.currentPricingRental = response.data.pricing.rental_gear;
      pricing.park_fee = response.data.pricing.park_fee;
    });

  }]);
})();
