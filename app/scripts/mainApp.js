(function() {
  'use strict';
    var myApp = angular.module('myApp', ['ngRoute', // Route service
        'myApp.utilityService', 'myApp.constants', // MISC
        'myApp.directives', 'myApp.filters', // MISC
        'myApp.services', // Services
        'myApp.controller' // controller
        ]);

    myApp.config(['$routeProvider', function($routeProvider) {
      // Login
      $routeProvider.when('/page1', {
        templateUrl: 'partials/page1.html',
        controller: 'sampleCtrl'
      });
      
      // Current Pricing for diving 
      $routeProvider.when('/current_pricing', {
        templateUrl: 'partials/current_pricing.html',
        controller: 'CurrentPricingCtrl'
      });
      
      // Default
      $routeProvider.otherwise({
        redirectTo: '/page1'
      });
    }]);
})();
