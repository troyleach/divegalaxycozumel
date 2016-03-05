/*
 * Sliding Picture Directive
 */
(function() {
    'use strict';
    var directiveModule = angular.module('myApp.directives', []);

    directiveModule.directive('slider', function($timeout) {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
              images: '='
            },
            link: function(scope, elm, attrs) {
              scope.currentIndex = 0;
              console.log(scope.currentIndex);
              scope.next = function() {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
              };
              

              scope.prev = function() {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length-1;
              };

              scope.$watch('currentIndex', function(){
                scope.images.forEach(function(image){
                  image.visible = false;
                });
                scope.images[scope.currentIndex].visible = true;
              });
                //console.log("called link");
            },

            templateUrl: 'partials/templates/galleryUrl.html'
        };
    });
})();
