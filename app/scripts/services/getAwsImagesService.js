/*
 * AWS Services (not completed yet)
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');

  serviceModule.factory('getAwsImagesFactory', [
    '$http',
    '$q',
    function(
      $http,
      $q) {
    return {
      getAWSGallery: function(albumName) {
        var deferred = $q.defer();
        var images = [];
        var albumBucketName = 'divegalaxsea';
        var albumPhotosKey = encodeURIComponent(albumName) + '/';
        AWS.config.update({
          "accessKeyId": AWS_ACCESS_KEY,
          "secretAccessKey": AWS_SECRET_ACCESS_KEY,
          "region": AWS_REGION
        });
        var s3 = new AWS.S3({
          apiVersion: '2006-03-01',
          params: {Bucket: albumBucketName}
        });

        s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
          if (err) {
            var errorMessage = 'There was an error viewing your album: ' + err.message;
            deferred.resolve(errorMessage);
          }
          // `this` references the AWS.Response instance that represents the response
          var href = this.request.httpRequest.endpoint.href;
          var bucketUrl = href + albumBucketName + '/';

          for (var i = 0; i < data.Contents.length; i++) { 
            var photoKey = data.Contents[i].Key;
            var photoUrl = bucketUrl + encodeURIComponent(photoKey);
            images.push(
              {thumb: photoUrl, img: photoUrl}
            );
          }
          deferred.resolve(images);
        });
        return deferred.promise;
      },

      postAWSGallery: function(path, file, results) {
        var deferred = $q.defer();
        if (file) {
          AWS.config.update({
            "accessKeyId": AWS_ACCESS_KEY,
            "secretAccessKey": AWS_SECRET_ACCESS_KEY,
            "region": AWS_REGION
          });
          var s3 = new AWS.S3();
          var params = {
            Bucket: 'divegalaxsea/' + path,
            Key: file.name,
            ContentType: file.type,
            Body: file,
            ACL: 'public-read'
          };
          s3.putObject(params, function (err, res) {
            if (err) {
              //TODO need to figure out how to deal with the erros. look into
              //$log
              console.log(err.message)
              deferred.resolve('Something went wrong' + err.message);
            } else {
              deferred.resolve('Successfully uploaded data');
            }
          });
        } else {
          deferred.resolve('Nothing has been uploaded.');
        }
        return deferred.promise;
      } // end of post funciton

    };
  }]);
}).call(this);
