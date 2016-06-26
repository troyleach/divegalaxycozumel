'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var saveLicense = require('uglify-save-license');
var gulp = require('gulp');
var clean = require('gulp-clean');

var config = {
    bowerDir: 'app/bower_components',
    weatherDir: 'app/font'
}

gulp.task('styles', function () {
  return gulp.src(['app/styles/*.scss','app/styles/*.css'])
    .pipe($.plumber())
    .pipe($.rubySass({style: 'expanded'}))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src('app/partials/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(gulp.dest("diveGalaxseaProd/partials"))
    .pipe($.size());
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('diveGalaxseaProd/fonts'));
});

gulp.task('weatherIcons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('diveGalaxseaProd/fonts'));
});

gulp.task('html', ['styles', 'scripts', 'partials'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe($.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngmin())
    .pipe($.uglify({preserveComments: saveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap','fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest('diveGalaxseaProd'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('diveGalaxseaProd/images'))
    .pipe($.size());
});

// gulp.task('fonts', function () {
//   return $.bowerFiles()
//     .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
//     .pipe($.flatten())
//     .pipe(gulp.dest('diveGalaxseaProd/fonts'))
//     .pipe($.size());
// });

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'diveGalaxseaProd'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'partials', 'images', 'icons', 'weatherIcons']);
