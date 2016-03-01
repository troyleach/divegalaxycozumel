'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var Server = require('karma').Server;

require('require-dir')('./gulp');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('serveprod', function() {
  connect.server({
    root: '/app',
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

gulp.task('default', ['clean', 'tdd'], function() {
    gulp.start('build');
});
