/*
 * Gallery 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', ['$scope', function($scope) {
    this.pageIdentifier = "Gallery";
    this.panelTitle = 'Explore the Underwater Galaxy of Cozumel';       
  }]);
})();
