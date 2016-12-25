(function() {
  'use strict';
    var myApp = angular.module('myApp', ['ngRoute', // Route service
        'myApp.utilityService', 'myApp.constants', // MISC
        'myApp.directives', 'myApp.filters', // MISC
        'myApp.services', // Services
        'myApp.controller', // controller
        'ngSanitize', 
        'jkuri.gallery',
        'ngAnimate',
        'ui.bootstrap',
        'gm.datepickerMultiSelect',
        'ui.mask',
        "checklist-model",
        "angularSpinner",
        "ngIntlTelInput"
        ]);

    myApp.config(function (ngIntlTelInputProvider) {
        ngIntlTelInputProvider.set({defaultCountry: 'us'});
    });

    myApp.config(['$routeProvider', function($routeProvider) {
      // Admin page
      $routeProvider.when('/admin', {
          templateUrl: 'partials/admin.html',
          controller: 'AdminCtrl',
          controllerAs: 'admin',
          resolve: {
              auth: ["$q", "AuthenticationService", "$location", function($q, AuthenticationService, $location) {
                  var userInfo = AuthenticationService.getUserInfo();
                  if (userInfo) {
                      return $q.when(userInfo);
                  } else {
                      window.localStorage.alerts = "Not a Authorized Diver";
                      window.localStorage.alertType = 'alert-danger';
                      $location.path('/home');
                      return $q.reject({ authenticated: false });
                  }
              }]
          }
      });

      // Home Page
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
        controllerAs: 'pricing'
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

    myApp.run(["$rootScope", "$location", function ($rootScope, $location) {

        $rootScope.$on("$routeChangeSuccess", function (userInfo) {
            console.log(userInfo);
        });

        $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
            if (eventObj.authenticated === false) {
                $location.path("/login");
            }
        });
    }]);

})();
