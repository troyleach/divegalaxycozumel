(function() {
  'use strict';
    var myApp = angular.module('myApp', ['ngRoute', // Route service
        'myApp.utilityService', 'myApp.constants', // MISC
        'myApp.directives', 'myApp.filters', // MISC
        'myApp.services', // Services
        'myApp.controller', // controller
        'ngSanitize',
        'ngAnimate'
        ]);

    myApp.config(['$routeProvider', function($routeProvider) {
      // Login
      $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
      
      // Reef Map
      $routeProvider.when('/reef_map', {
        templateUrl: 'partials/reef_map.html',
        controller: 'ReefMapCtrl',
        controllerAs: 'reefMap'
      });

      // Current Pricing for diving 
      $routeProvider.when('/current_pricing', {
        templateUrl: 'partials/current_pricing.html',
        controller: 'CurrentPricingCtrl',
        controllerAs: 'currentPricing'
      });
      
      // About Cozumel
      $routeProvider.when('/about_cozumel', {
        templateUrl: 'partials/about_cozumel.html',
        controller: 'AboutCozumelCtrl',
        controllerAs: 'aboutCozumel'
      });
      
      // Gallery 
      $routeProvider.when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      });
      
      // Reservation 
      $routeProvider.when('/reservations', {
        templateUrl: 'partials/reservations.html',
        controller: 'ReservationsCtrl',
        controllerAs: 'reservation'
      });
      
      // Default
      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }]);
})();
