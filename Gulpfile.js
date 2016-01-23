'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

require('require-dir')('./gulp');

gulp.task('serveprod', function() {
  connect.server({
    root: '/app',
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
