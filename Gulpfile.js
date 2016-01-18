'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
