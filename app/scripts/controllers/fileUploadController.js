/*
 *File Upload Controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('myApp.controller');

  controllerModule.controller('fileUploadCtrl', ['$scope',
    'getAwsImagesFactory',
    function(
      $scope,
      getAwsImagesFactory) {

    $scope.picOfMonth = 'partials/uploadPicOfMonth.html';
    $scope.gallery = 'partials/uploadGallery.html';
    $scope.carousel = 'partials/uploadCarousel.html';

    document.getElementById('buttons').addEventListener('click', function(evt) {
      var target = evt.target;
      if (target.id === 'upload-button-month') {
        var fileChooser = document.getElementById('file-chooser-month');
        var file = fileChooser.files[0];
        var results = document.getElementById('results-month');
        getAwsImagesFactory
          .postAWSGallery('pictureOfMonth', file, results)
          .then(function(response) {
             results.innerHTML = response;
          // Need to finish this the above does work;
        });
      } else if (target.id === 'upload-button-gallery') {
        var fileChooser = document.getElementById('file-chooser-gallery');
        //files is an array of images
        var file = fileChooser.files;
        var results = document.getElementById('results-gallery');
        getAwsImagesFactory
          .postAWSGallery('pictureGallery', file, results)
          .then(function(response) {
             results.innerHTML = response;
          // this does give me all the files;
        });
        //uploadImages('pictureGallery', file, results);
      }  else if (target.id === 'upload-button-carousel') {
        var fileChooser = document.getElementById('file-chooser-carousel');
        var file = fileChooser.files[0];
        var results = document.getElementById('results-carousel');
        uploadImages('pictureCarousel', file, results);
      } 
    }, false);
    
      //TODO this was moved to the AWS Serivce
    //function uploadImages(path, file, results) {
      //if (file) {            
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
        //s3.putObject(params, function (err, res) {
          //if (err) {
            //results.innerHTML = ("Error uploading data: ", err);
          //} else {
            //results.innerHTML = ("Successfully uploaded data");
          //}
        //});
      //} else {
        //results.innerHTML = 'Nothing has been uploaded.';
      //}
    //}

    //End of file
  }]);
})();
