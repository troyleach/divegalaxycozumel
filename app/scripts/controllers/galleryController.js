/*
 * Gallery 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', ['$scope', function($scope) {
    var gallery = this;
    gallery.pageIdentifier = "Gallery";
    gallery.panelTitle = 'Explore the Underwater Galaxy of Cozumel';       

    $scope.images = [{
      src: "scuba_diving_coral_reef_cozumel_slide3.jpg",
      title: "Pic 1"
    }, {
      src: "scuba_diving_coral_reef_cozumel_slide4.jpg",
      title: "Pic 2"
    }, {
      src: "scuba_diving_coral_reef_crab_cozumel_slide7.jpg",
      title: "Pic 3"
    }, {
      src: "scuba_diving_coral_reef_creature_cozumel_slide6.jpg",
      title: "Pic 4"
    }, {
      src: "scuba_diving_coral_reef_fish_cozumel_slide1.jpg",
      title: "Pic 5"
    }, {
      src: "scuba_diving_coral_reef_fish_cozumel_slide2.jpg",
      title: "Pic 6"
    }, {
      src: "scuba_diving_coral_reef_fish_cozumel_slide9.jpg",
      title: "Pic 7"
    }, {
      src: "scuba_diving_coral_reef_lion_fish_cozumel_slide5.jpg",
      title: "Pic 8"
    }, {
      src: "scuba_diving_coral_reef_sting_ray_cozumel_slide8.jpg",
      title: "Pic 9"
    }, {
      src: "scuba_diving_octupus_cozumel_slide10.jpg",
      title: "Pic 10"
    }, {
      src: "scuba_diving_sea_fish_cozumel_slide11.jpg",
      title: "Pic 11"
    }, {
      src: "scuba_diving_sea_turtle_cozumel_slide12.jpg",
      title: "Pic 12"
    },
    ];
    
  }]);
})();
