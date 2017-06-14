/*
 * Gallery
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', ['$scope', '$document', '$http', 'getImagesFactory', function($scope, $document, $http, getImagesFactory) {
    var gallery = this;
    gallery.pageIdentifier = "Gallery";
    gallery.panelTitle = 'Explore the Underwater Galaxy of Cozumel';
// TODO need to pull the below from the api
    gallery.picOfTheMonth = { src: "images/img15.jpg", title: "Picture of the Month", description: "Contrats to Judi", user: "Troy Leach" };

      getImagesFactory.getGallery().then(function(response) {
        var i;
        var lgth = response.links.length;
        var imageUrls = [];
        for(i = 0; i < lgth; i++) {
          if(response.links[i][".tag"] === "file") {
            if(response.links[i].path_lower.search(/\bgallery\b/) !== -1) {
              var tempData = getGallery(response.links[i]);
              if (tempData != null) {
                imageUrls.push( tempData );
              }
              $scope.images = imageUrls;
            } else if(response.links[i].path_lower.search(/\bpicture_of_month\b/) !== -1) {
              var tempUrl = response.links[i].url;
              tempUrl = tempUrl.replace('dl=0', 'raw=1');
              gallery.picOfTheMonth.src = tempUrl;
            }

          }
        }
      });


    function getGallery(dbObject) {
      var urlObject = {};
      var tempUrl = dbObject.url;
      tempUrl = tempUrl.replace('dl=0', 'raw=1');
      urlObject.thumb = tempUrl;
      urlObject.img = tempUrl;
      return urlObject;
    }

    // gallery.images = [{
    //   thumb: "images/img1.jpg",
    //   img: "images/img1.jpg"
    // }, {
    //   thumb: "images/img2.jpg",
    //   img: "images/img2.jpg"
    // }, {
    //   thumb: "images/img3.jpg",
    //   img: "images/img3.jpg"
    // }, {
    //   thumb: "images/img4.jpg",
    //   img: "images/img4.jpg"
    // }, {
    //   thumb: "images/img8.jpg",
    //   img: "images/img8.jpg"
    // }, {
    //   thumb: "images/img6.jpg",
    //   img: "images/img6.jpg"
    // }, {
    //   thumb: "images/img9.jpg",
    //   img: "images/img9.jpg"
    // }, {
    //   thumb: "images/img10.jpg",
    //   img: "images/img10.jpg"
    // }, {
    //   thumb: "images/img11.jpg",
    //   img: "images/img11.jpg"
    // }, {
    //   thumb: "images/img12.jpg",
    //   img: "images/img12.jpg"
    // }, {
    //   thumb: "images/img13.jpg",
    //   img: "images/img13.jpg"
    // }, {
    //   thumb: "images/img14.jpg",
    //   img: "images/img14.jpg"
    // }];

  //   this.getSharedLink = function() {
  //     $http({
        // method: "POST",
        // url: "https://api.dropboxapi.com/2/sharing/list_shared_links",
        // headers: {Authorization: "Bearer TfMIrZsh-ycAAAAAAAASyoPtJgui9gy9rD3hwe1RVDF8oZsebo912nIViHCPqE_0",
        //           'Content-Type': "application/json"}
  //     }).then(function mySuccess(response) {
  //       var i, tempUrl;
  //       var imageUrls = [];
  //       var picUrl = [];
  //       var homeInfo = [];
  //       var gallery = [];
        // var lgth = response.data.links.length;
        // for(i = 0; i < lgth; i++) {
        //   if(response.data.links[i][".tag"] === "file") {
        //     // picUrl.push( getPictureOfTheMonth(response.data.links[i]) );
        //     // homeInfo.push( getHomeInfo(response.data.links[i]) );

        //     var tempData = getGallery(response.data.links[i]);
        //       if (tempData != null) {
        //         imageUrls.push( tempData );
        //       };
        //       $scope.images = imageUrls;
        //   }
        // }
  //       $scope.dbPayload = response.data;
  //     }, function myError(response) {
  //       $scope.imagesArray = response.statusText;
  //     });
  //   };
  // this.getSharedLink();

  }]);
})();
