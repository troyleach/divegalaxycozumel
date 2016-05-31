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
    gallery.picOfTheMonth = { src: "images/img15.jpg", title: "Picture of the Month", description: "Contrats to Judi", user: "Troy Leach" };

    gallery.images = [{
      thumb: "images/img1.jpg",
      img: "images/img1.jpg"
    }, {
      thumb: "images/img2.jpg",
      img: "images/img2.jpg"
    }, {
      thumb: "images/img3.jpg",
      img: "images/img3.jpg"
    }, {
      thumb: "images/img4.jpg",
      img: "images/img4.jpg"
    }, {
      thumb: "images/img8.jpg",
      img: "images/img8.jpg"
    }, {
      thumb: "images/img6.jpg",
      img: "images/img6.jpg"
    }, {
      thumb: "images/img9.jpg",
      img: "images/img9.jpg"
    }, {
      thumb: "images/img10.jpg",
      img: "images/img10.jpg"
    }, {
      thumb: "images/img11.jpg",
      img: "images/img11.jpg"
    }, {
      thumb: "images/img12.jpg",
      img: "images/img12.jpg"
    }, {
      thumb: "images/img13.jpg",
      img: "images/img13.jpg"
    }, {
      thumb: "images/img14.jpg",
      img: "images/img14.jpg"
    }];

  }]);
})();
