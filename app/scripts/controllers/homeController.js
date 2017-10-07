/*
 * Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('HomeCtrl', ['$scope', 'getWeatherFactory', '$window', '$uibModal', 'getImagesFactory', function($scope, $window, getWeatherFactory, $uibModal, getImagesFactory) {
    this.pageIdentifier = "Home";
    this.panelTitle = 'Explore the Mystical Underwater World of Cozumel with Dive GalaxSea';
    $scope.caseData = false;


      getImagesFactory.getGallery().then(function(response) {
        var i;
        var lgth = response.links.length;
        var imageUrls = [];
        for(i = 0; i < lgth; i++) {
          if(response.links[i][".tag"] === "file") {
            if(response.links[i].path_lower.search(/\bcarousel\b/) !== -1) {
              var tempData = modifyUrl(response.links[i]);
              if (tempData !== null) {
                imageUrls.push( tempData );
              }
              $scope.carousel = imageUrls;
            }
          }

        }
        $scope.caseData = true;
      });

      function modifyUrl(dbObject) {
        var tempUrl = dbObject.url;
        tempUrl = tempUrl.replace('dl=0', 'raw=1');
        return tempUrl;
      }

    $scope.fakeFunction = function () {
      $scope.fake = 'this does not do anything';
    };

    this.alertType = window.localStorage.alertType;
    this.alertMsg = window.localStorage.alerts;
    localStorage.clear();
  }]);
})();
