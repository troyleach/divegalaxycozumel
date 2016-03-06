/*
 * Gallery 
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', ['$scope', function($scope, $document) {
    var gallery = this;
    gallery.pageIdentifier = "Gallery";
    gallery.panelTitle = 'Explore the Underwater Galaxy of Cozumel';       
    gallery.picOfTheMonth = { src: "images/gallery/picOfTheMonth.jpg", title: "Picture of the Month", description: "The sun set from my deck", user: "Troy Leach" };

    gallery.images = [{
      thumb: "images/gallery/scuba_diving_coral_reef_cozumel_slide3.jpg",
      img: "images/gallery/scuba_diving_coral_reef_cozumel_slide3.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_cozumel_slide4.jpg",
      img: "images/gallery/scuba_diving_coral_reef_cozumel_slide4.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_crab_cozumel_slide7.jpg",
      img: "images/gallery/scuba_diving_coral_reef_crab_cozumel_slide7.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_creature_cozumel_slide6.jpg",
      img: "images/gallery/scuba_diving_coral_reef_creature_cozumel_slide6.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide1.jpg",
      img: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide1.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide2.jpg",
      img: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide2.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide9.jpg",
      img: "images/gallery/scuba_diving_coral_reef_fish_cozumel_slide9.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_lion_fish_cozumel_slide5.jpg",
      img: "images/gallery/scuba_diving_coral_reef_lion_fish_cozumel_slide5.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_coral_reef_sting_ray_cozumel_slide8.jpg",
      img: "images/gallery/scuba_diving_coral_reef_sting_ray_cozumel_slide8.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_octupus_cozumel_slide10.jpg",
      img: "images/gallery/scuba_diving_coral_reef_sting_ray_cozumel_slide8.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_sea_fish_cozumel_slide11.jpg",
      img: "images/gallery/scuba_diving_sea_fish_cozumel_slide11.jpg"
    }, {
      thumb: "images/gallery/scuba_diving_sea_turtle_cozumel_slide12.jpg",
      img: "images/gallery/scuba_diving_sea_turtle_cozumel_slide12.jpg"
    }];

  }]);
})();
