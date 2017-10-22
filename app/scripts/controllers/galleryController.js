/*
 * Gallery
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', ['$scope',
    '$document',
    '$http',
    'getImagesFactory',
    'getAwsImagesFactory',
    function(
      $scope,
      $document,
      $http,
      getImagesFactory,
      getAwsImagesFactory) {

    var gallery = this;
    gallery.pageIdentifier = "Gallery";
    gallery.panelTitle = 'Explore the Underwater Galaxy of Cozumel';
// TODO need to pull the below from the api
      gallery.picOfTheMonth = {
        src: "images/img15.jpg",
        title: "Picture of the Month",
        description: "Contrats to Judi",
        user: "Troy Leach" 
      };

      getImagesFactory.getGallery().then(function(response) {
        var i;
        var lgth = response.links.length;
        var imageUrls = [];
        for(i = 0; i < lgth; i++) {
          if(response.links[i][".tag"] === "file") {
            if(response.links[i].path_lower.search(/\bgallery\b/) !== -1) {
              var tempData = getGallery(response.links[i]);
              if (tempData !== null) {
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

      //function getImages() {
        //var path = 'pictureOfMonth'
            //AWS.config.update({
                //"accessKeyId": AWS_ACCESS_KEY,
                //"secretAccessKey": AWS_SECRET_ACCESS_KEY,
                //"region": AWS_REGION
            //});
            //var s3 = new AWS.S3();
            //var params = {
                //Bucket: 'divegalaxsea/' + path,
                //Key: file.name,
                //ContentType: file.type,
                //Body: file,
                //ACL: 'public-read'
            //};        
            //s3.getObject(params, function (err, res) {
                //if (err) {
                    //results.innerHTML = ("Error uploading data: ", err);
                //} else {
                    //results.innerHTML = ("Successfully uploaded data");
                //}
            //});
      //}
      //pictureOfMonth
      function viewAlbum(albumName) {
        //AWS.config.update({
          //region: bucketRegion,
          //credentials: new AWS.CognitoIdentityCredentials({
            //IdentityPoolId: IdentityPoolId
          //})
        //});

        //below is from my other controller that works
        AWS.config.update({
            "accessKeyId": AWS_ACCESS_KEY,
            "secretAccessKey": AWS_SECRET_ACCESS_KEY,
            "region": AWS_REGION
        });
        var s3 = new AWS.S3();
        //var params = {
            //Bucket: 'divegalaxsea/' + path,
            //Key: file.name,
            //ContentType: file.type,
            //Body: file,
            //ACL: 'public-read'
        //};        
        var albumBucketName = 'divegalaxsea';
        var bucketRegion = 'AWS_REGION';
        //var IdentityPoolId = 'IDENTITY_POOL_ID';

        var s3 = new AWS.S3({
          apiVersion: '2006-03-01',
          params: {Bucket: albumBucketName}
        });

        var albumPhotosKey = encodeURIComponent(albumName) + '/';
        s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
          if (err) {
            return alert('There was an error viewing your album: ' + err.message);
          }
          // `this` references the AWS.Response instance that represents the response
          var href = this.request.httpRequest.endpoint.href;
          var bucketUrl = href + albumBucketName + '/';

          var photos = data.Contents.map(function(photo) {
            var photoKey = photo.Key;
            var photoUrl = bucketUrl + encodeURIComponent(photoKey);
            return getHtml([
              '<span>',
              '<div>',
              '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
              '</div>',
              '<div>',
              '<span onclick="deletePhoto(\'' + albumName + "','" + photoKey + '\')">',
              'X',
              '</span>',
              '<span>',
              photoKey.replace(albumPhotosKey, ''),
              '</span>',
              '</div>',
              '<span>',
            ]);
          });
          var message = photos.length ?
            '<p>Click on the X to delete the photo</p>' :
            '<p>You do not have any photos in this album. Please add photos.</p>';
          var htmlTemplate = [
            '<h2>',
            'Album: ' + albumName,
            '</h2>',
            message,
            '<div>',
            getHtml(photos),
            '</div>',
            '<input id="photoupload" type="file" accept="image/*">',
            '<button id="addphoto" onclick="addPhoto(\'' + albumName +'\')">',
            'Add Photo',
            '</button>',
            '<button onclick="listAlbums()">',
            'Back To Albums',
            '</button>',      
          ]
          document.getElementById('picOfMonth').innerHTML = getHtml(htmlTemplate);
        });
      }

      viewAlbum('pictureCarousel');

//TODO below is old
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
