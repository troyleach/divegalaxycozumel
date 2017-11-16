//TODO this is close to done. need to clean up
/*
 * Gallery
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('GalleryCtrl', [
    '$scope',
    '$document',
    '$http',
    'getAwsImagesFactory',
    function(
      $scope,
      $document,
      $http,
      getAwsImagesFactory) {

      var gallery = this;
      gallery.pageIdentifier = "Gallery";
      gallery.panelTitle = 'Explore the Underwater Galaxy of Cozumel';
      //gallery.picOfMonth;

      getAwsImagesFactory.getAWSGallery('pictureGallery')
        .then(function(response) {
          gallery.galleryImages = response;
        });

      getAwsImagesFactory.getAWSGallery('pictureOfMonth')
        .then(function(response) {
          var picOfMonth = response[0];
          var htmlTemplate = [
            '<h2>',
            'Picture of the Month',
            '</h2>',
            '<img style="width:400px;height:auto;" src="' + picOfMonth.img + '"/>'
          ];
          document.getElementById('picOfMonth').innerHTML = getHtml(htmlTemplate);
        });

      //gallery.galleryImages = [];

      // NOTES moved this to a factory
      //function getGallery(albumName) {
      //AWS.config.update({
        //"accessKeyId": AWS_ACCESS_KEY,
        //"secretAccessKey": AWS_SECRET_ACCESS_KEY,
        //"region": AWS_REGION
      //});

      //var albumBucketName = 'divegalaxsea';

      //var s3 = new AWS.S3({
        //apiVersion: '2006-03-01',
        //params: {Bucket: albumBucketName}
      //});

      //var albumPhotosKey = encodeURIComponent(albumName) + '/';
      //s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
        //if (err) {
          //return alert('There was an error viewing your album: ' + err.message);
        //}
        //// `this` references the AWS.Response instance that represents the response
        //var href = this.request.httpRequest.endpoint.href;
        //var bucketUrl = href + albumBucketName + '/';

        //for (var i = 0; i < data.Contents.length; i++) { 
          //var photoKey = data.Contents[i].Key;
          //var photoUrl = bucketUrl + encodeURIComponent(photoKey);
          //gallery.galleryImages.push(
            //{thumb: photoUrl, img: photoUrl}
          //);
        //}
        //$scope.$apply();
      //});

    //}

    //console.log(gallery.galleryImages);
    //getGallery('pictureGallery');

      //function viewAlbum(albumName) {
        //AWS.config.update({
        //region: bucketRegion,
        //credentials: new AWS.CognitoIdentityCredentials({
        //IdentityPoolId: IdentityPoolId
        //})
        //});

        //below is from my other controller that works
        //AWS.config.update({
          //"accessKeyId": AWS_ACCESS_KEY,
          //"secretAccessKey": AWS_SECRET_ACCESS_KEY,
          //"region": AWS_REGION
        //});

        //var albumBucketName = 'divegalaxsea';

        //var s3 = new AWS.S3({
          //apiVersion: '2006-03-01',
          //params: {Bucket: albumBucketName}
        //});

        //var albumPhotosKey = encodeURIComponent(albumName) + '/';
        //s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
          //if (err) {
            //return alert('There was an error viewing your album: ' + err.message);
          //}
          //// `this` references the AWS.Response instance that represents the response
          //var href = this.request.httpRequest.endpoint.href;
          //var bucketUrl = href + albumBucketName + '/';

          //var photos = data.Contents.map(function(photo) {
            //var photoKey = photo.Key;
            //var photoUrl = bucketUrl + encodeURIComponent(photoKey);
            //return getHtml([
              //'<span>',
              //'<div>',
              //'<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
              //'</div>',
              //'<div>',
              //'<span id="photoDelete" onclick="deletePhoto(\'' + albumName + "','" + photoKey + '\');">',
              //'X',
              //'</span>',
              //'<span>',
              //photoKey.replace(albumPhotosKey, ''),
              //'</span>',
              //'</div>',
              //'<span>',
            //]);
          //});
          //var message = photos.length ?
            //'<p>Click on the X to delete the photo</p>' :
            //'<p>You do not have any photos in this album. Please add photos.</p>';
          //var htmlTemplate = [
            //'<h2>',
            //'Album: ' + albumName,
            //'</h2>',
            //message,
            //'<div>',
            //getHtml(photos),
            //'</div>',
            //'<input id="photoupload" type="file" accept="image/*">',
            //'<button id="addphoto" onclick="addPhoto(\'' + albumName +'\')">',
            //'Add Photo',
            //'</button>',
            //'<button onclick="listAlbums()">',
            //'Back To Albums',
            //'</button>',      
          //];
          //document.getElementById('picOfMonth').innerHTML = getHtml(htmlTemplate);
        //});
      //}

      //viewAlbum('pictureOfMonth');


      function deletePhoto(albumName, photoKey) {
        AWS.config.update({
          "accessKeyId": AWS_ACCESS_KEY,
          "secretAccessKey": AWS_SECRET_ACCESS_KEY,
          "region": AWS_REGION
        });

        var albumBucketName = 'divegalaxsea';
        var s3 = new AWS.S3({
          apiVersion: '2006-03-01',
          params: {Bucket: albumBucketName}
        });

        s3.deleteObject({Key: photoKey}, function(err, data) {
          if (err) {
            return alert('There was an error deleting your photo: ', err.message);
          }
          location.reload();
          alert('Successfully deleted photo.');
        });
      }

      function deleteAlbum(albumName) {
        console.log('this is in the deleteAlbum did it run')
        AWS.config.update({
          "accessKeyId": AWS_ACCESS_KEY,
          "secretAccessKey": AWS_SECRET_ACCESS_KEY,
          "region": AWS_REGION
        });

        var albumBucketName = 'divegalaxsea';
        var s3 = new AWS.S3({
          apiVersion: '2006-03-01',
          params: {Bucket: albumBucketName}
        });

        var albumKey = encodeURIComponent(albumName) + '/';
        s3.listObjects({Prefix: albumKey}, function(err, data) {
          if (err) {
            return alert('There was an error deleting your album: ', err.message);
          }
          var objects = data.Contents.map(function(object) {
            return {Key: object.Key};
          });
          s3.deleteObjects({
            Delete: {Objects: objects, Quiet: true}
          }, function(err, data) {
            if (err) {
              return alert('There was an error deleting your album: ', err.message);
            }
            alert('Successfully deleted album.');
            listAlbums();
          });
        });
      }
      //deleteAlbum('pictureOfMonth')



    }]);
})();
